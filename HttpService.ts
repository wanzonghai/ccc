export class HttpRequest {
    private static _instance: HttpRequest = null;
    private _auth: any;
    private _timeoutTime: number = 5000;
    private _xhr: XMLHttpRequest;
    private _serverHost: string;
    private _currentUrl: string; // 新增保存当前请求 URL 的变量
    public static get instance(): HttpRequest {
        if (!this._instance) {
            this._instance = new HttpRequest();
        }
        return this._instance;
    }

    public setAuth(auth: any) {
        this._auth = auth;
    }

    public setHost(url: string) {
        this._serverHost = url;
    }

    public setTimeoutTime(time: number) {
        this._timeoutTime = time;
    }

    public get(url: string, data?: Record<string, string>, onComplete?: (data: any) => void, onError?: () => void, onTimeOut?: () => void) {
        url = `${this._serverHost}${url}`;
        if (data) {
            const params = new URLSearchParams(data);
            url = `${url}?${params.toString()}`;
        }

        this._currentUrl = url; // 保存当前请求 URL

        this._xhr = new XMLHttpRequest();
        this._xhr.open('GET', url);
        this._xhr.timeout = this._timeoutTime;

        this._xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        if (this._auth) {
            for (const key in this._auth) {
                this._xhr.setRequestHeader(key, this._auth[key]);
            }
        }

        this._xhr.send();

        this.handleErrors(this._xhr, onComplete, onError, onTimeOut);

        // this._xhr['url'] = data ? `${url}?${data}` : url;
        // this._xhr.timeout = this._timeoutTime;
        // this._xhr.open('GET', url);
        // this._xhr.send();
        // this._xhr.onload = this.onComplete.bind(this);
        // this._xhr.onerror = this.onError.bind(this);
        // this._xhr.ontimeout = this.onTimeout.bind(this);
        // this._xhr['onComplete'] = onComplete;
        // this._xhr['onError'] = onError;
        // this._xhr['onTimeout'] = onTimeOut;
    }

    public post(url: string, data: Record<string, string>, onComplete?: (data: any) => void, onError?: () => void, onTimeOut?: () => void) {
        url = `${this._serverHost}${url}`;

         this._currentUrl = url; // 保存当前请求 URL

        this._xhr = new XMLHttpRequest();
        this._xhr.open('POST', url);
        this._xhr.timeout = this._timeoutTime;

        this._xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        if (this._auth) {
            for (const key in this._auth) {
                this._xhr.setRequestHeader(key, this._auth[key]);
            }
        }

        const dataStr = new URLSearchParams(data).toString();

        this._xhr.send(dataStr);

        this.handleErrors(this._xhr, onComplete, onError, onTimeOut);
    }
    /** 错误处理*/
    private handleErrors(xhr: XMLHttpRequest, callback: (data: any) => void, errorCallback?: () => void, timeoutCallback?: () => void): void {
        xhr.onload = () => {
            xhr.onload = null;
            xhr.onerror = null;
            xhr.ontimeout = null;

            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    const rsp = JSON.parse(xhr.response);
                    callback(rsp);
                } catch (error) {
                    console.error('JSON 解析错误', error);
                    errorCallback && errorCallback();
                }
            } else {
                console.error(`${this._currentUrl} 请求失败! 状态码: ${xhr.status}`);
                errorCallback && errorCallback();
            }
        };

        xhr.onerror = () => {
            console.warn('网络错误');
            errorCallback && errorCallback();
        };

        xhr.ontimeout = () => {
            console.warn('网络超时');
            timeoutCallback && timeoutCallback();
        };
    }

    private onComplete(evt: ProgressEvent) {
        let xhr = evt.currentTarget as XMLHttpRequest;
        xhr.onload = null;
        xhr.onerror = null;
        xhr.ontimeout = null;
        let strRsp = xhr.response;
        let rsp = JSON.parse(strRsp);

        //具体状态码业务层自己判断
        if (xhr['onComplete']) {
            xhr['onComplete'](rsp);
        }
    }

    private onError(evt: ProgressEvent) {
        let xhr = evt.currentTarget as XMLHttpRequest;
        xhr.onload = null;
        xhr.onerror = null;
        xhr.ontimeout = null;
        if (xhr['onError']) {
            xhr['onError']();
        } else {
            console.warn('网络错误');
        }

        console.error(`${xhr['url']} 请求失败!`);
    }

    private onTimeout(evt: ProgressEvent) {
        let xhr = evt.currentTarget as XMLHttpRequest;
        if (xhr['onTimeout']) {
            xhr['onTimeout']();
        } else {
            console.warn('网络错误');
        }
        xhr.onload = null;
        xhr.onerror = null;
        xhr.ontimeout = null;
    }

    public abort() {
        this._xhr.abort();
    }
}
