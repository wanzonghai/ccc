export interface ApiServiceConfig {
    baseUrl: string;
    baseUrlType?: string;
    projectId?: string;
    projectName?: string;
    defaultTimeout?: number;
    defaultHeaders?: Record<string, string>;
}
export default class ApiService {
    private baseUrl: string = '';
    private baseUrlType: string = '';
    private projectId: string = '';
    private projectName: string = '';
    private defaultTimeout: number = 5000;
    private defaultHeaders: Record<string, string> = { 'Content-Type': 'application/x-www-form-urlencoded' };

    constructor(config: ApiServiceConfig) {
        this.baseUrl = config.baseUrl;
        this.baseUrlType = config.baseUrlType || '';
        this.projectId = config.projectId || '';
        this.projectName = config.projectName || '';
        this.defaultTimeout = config.defaultTimeout || 5000;
        this.defaultHeaders = { ...this.defaultHeaders, ...config.defaultHeaders };
        console.log('ApiService init');
    }

    private async commonRequest(url: string, method: string = 'GET', data?: Record<string, string>, useWebSocket: boolean = false, timeout?: number): Promise<any> {
        try {
            const requestOptions: RequestInit = {
                method,
                headers: { ...this.defaultHeaders },
            };

            if (method === 'POST' && data) {
                requestOptions.body = new URLSearchParams(data).toString();
            }

            if (useWebSocket) {
                return await this.requestWebSocketWithTimeout(url, method, timeout || this.defaultTimeout, data);
            } else {
                const response = await fetch(`${this.baseUrl}${url}`, requestOptions);
                const responseData = await response.json();
                return responseData;
            }
        } catch (error) {
            console.error('网络请求错误', error);
            throw error;
        }
    }

    private async requestWebSocket(url: string, method: string = 'GET', data?: Record<string, string>): Promise<any> {
        try {
            // 替换为适用于 WebSocket 的实现
            const socket = new WebSocket(`${this.baseUrl.replace(/^http/, 'ws')}${url}`);

            // 等待 WebSocket 连接成功
            await new Promise((resolve, reject) => {
                socket.onopen = resolve;
                socket.onerror = reject;
            });

            // 发送数据
            const requestData = { method, data };
            socket.send(JSON.stringify(requestData));

            return new Promise((resolve, reject) => {
                socket.onmessage = (event) => {
                    const responseData = JSON.parse(event.data);
                    resolve(responseData);
                    socket.close(); // 关闭 WebSocket 连接
                };
                socket.onerror = (error) => {
                    reject(error);
                    socket.close();
                };
            });
        } catch (error) {
            console.error('网络请求错误', error);
            throw error;
        }
    }

    private async requestWebSocketWithTimeout(url: string, method: string = 'GET', timeout: number = 5000, data?: Record<string, string>): Promise<any> {
        try {
            const socket = new WebSocket(`${this.baseUrl.replace(/^http/, 'ws')}${url}`);
            const openPromise = new Promise<void>((resolve, reject) => {
                socket.onopen = () => resolve();
                socket.onerror = (event) => reject(event);
            });
            const messagePromise = new Promise<void>((resolve, reject) => {
                socket.onmessage = (event) => {
                    const responseData = JSON.parse(event.data);
                    resolve(responseData);
                    socket.close(); // 关闭 WebSocket 连接
                };
                socket.onerror = (error) => {
                    reject(error);
                    socket.close();
                };
            });

            // 使用 Promise.all 等待连接成功和接收消息
            await Promise.all([openPromise, messagePromise]);

            // 发送数据
            const requestData = { method, data };
            socket.send(JSON.stringify(requestData));

            return await Promise.race([
                new Promise<void>((_, reject) => {
                    setTimeout(() => {
                        reject(new Error('WebSocket 请求超时'));
                        socket.close();
                    }, timeout);
                }),
            ]);
        } catch (error) {
            console.error('网络请求错误', error);
            throw error;
        }
    }

    /** get*/
    public async getApiData(apiPath: string, useWebSocket: boolean = false): Promise<any> {
        const urlParts = [this.baseUrlType && `/${this.baseUrlType}`, this.projectId && `/${this.projectId}`, this.projectName && `/${this.projectName}`, `/${apiPath}`];

        // 判断 this.baseUrlType 是否为空，如果不为空则加入到 url 中
        const urlWithoutSlash = urlParts.filter((part) => part).join('');
        const url = urlWithoutSlash.replace(/\/{2,}/g, '/'); // 移除多余的斜杠
        // 注意替换上面的路径为你的 Easy Mock 项目路径和接口地址

        return await this.commonRequest(url, 'GET', undefined, useWebSocket);
    }

    /** get*/
    public async getApiDataWithTimeout(apiPath: string, useWebSocket: boolean = false, timeout: number = 5000): Promise<any> {
        const urlParts = [this.baseUrlType, this.projectId, this.projectName, apiPath]
            .filter(Boolean)
            .join('/')
            .replace(/\/{2,}/g, '/');

        try {
            return await this.commonRequest(urlParts, 'GET', undefined, useWebSocket, timeout);
        } catch (error) {
            console.error('API 请求失败', error);
            throw error;
        }
    }

    /** post */
    public async postApiData(apiPath: string, data: Record<string, string>, useWebSocket: boolean = false): Promise<any> {
        const urlParts = [this.baseUrlType, this.projectId, this.projectName, apiPath]
            .filter(Boolean)
            .join('/')
            .replace(/\/{2,}/g, '/');

        return await this.commonRequest(urlParts, 'POST', data, useWebSocket);
    }

    /** post */
    public async postApiDataWithTimeout(apiPath: string, data: Record<string, string>, useWebSocket: boolean = false, timeout?: number): Promise<any> {
        const urlParts = [this.baseUrlType, this.projectId, this.projectName, apiPath]
            .filter(Boolean)
            .join('/')
            .replace(/\/{2,}/g, '/');

        try {
            return await this.commonRequest(urlParts, 'POST', data, useWebSocket, timeout);
        } catch (error) {
            console.error('API 请求失败', error);
            throw error;
        }
    }
}
