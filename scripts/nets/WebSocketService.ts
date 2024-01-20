// WebSocketService.ts
class HeartChecker {
    /** 用于存储实例化后websocket */
    private websocket: WebSocket | null = null;
    private webSocketService: WebSocketService = null;
    /** 定时发送socket*/
    /** 发送socket延迟函数*/
    private timeoutSend: number = 0;
    /** 延迟关闭连接*/
    private serverTimeoutNumber: number = 0;

    constructor(parent: WebSocketService) {}
    /** 心跳检测重启*/
    public reset(): void {
        clearTimeout(this.timeoutSend);
        this.start();
    }
    /** 心跳检测开始*/
    private start(): void {
        const timeout = 25000;
        this.timeoutSend = window.setTimeout(() => {
            if (this.websocket) {
                this.websocket.send(JSON.stringify({ action: 'ping', type: 'ping' }));
                this.serverTimeoutNumber = window.setTimeout(() => {
                    if (this.websocket) {
                        this.websocket.close();
                    }
                }, timeout);
            }
        }, timeout);
    }
    /** 心跳检测关闭*/
    public clear(): void {
        clearTimeout(this.timeoutSend);
        clearTimeout(this.serverTimeoutNumber);
    }
}
export default class WebSocketService {
    /** 用于存储实例化后websocket */
    private websocket: WebSocket | null = null;
    /** webcoketUrl */
    private wsUrl: string = '';
    /** 连接成功过后需要设置发送间隔 */
    private needReconnect: boolean = false;
    /** 保存重连延迟函数*/
    private websocketTimeout: number = 0;
    private reconnectTimeOut: number = 0;

    private heartChecker: HeartChecker;

    constructor(wsUrl: string) {
        this.wsUrl = wsUrl;
        this.heartChecker = new HeartChecker(this);
    }

    public async connect(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            //const connectURL = `${this.wsUrl}?token=${'tokenid'}`;
            const connectURL = this.wsUrl;
            this.websocket = null;
            this.needReconnect = true;
            this.watchSocket(connectURL, resolve, reject);
        });
    }
    /** 关闭连接*/
    public close(): void {
        if (this.websocket) {
            this.websocket.close();
        } else {
            console.error('WebSocket is not connected.');
        }
    }

    /** 监听websocket*/
    private watchSocket(url: string, resolve: () => void, reject: () => void): void {
        const client = this.getWebSocket(url);

        // 省略其他代码...

        // 连接已准备好
        client.onopen = () => {
            this.heartCheck();
            console.log('-onopen-连接已准备好--');

            if (this.websocketTimeout) {
                console.log('--websocketTimeout--', this.websocketTimeout);
                clearTimeout(this.websocketTimeout);
            }

            // 在这里将 client 赋值给 this.websocket
            this.websocket = client;

            resolve();
        };

        client.onmessage = (data: any) => {
            this.reconnectTimeOut = 0;
            this.heartCheck();
            let JsonData;
            try {
                // 处理消息
                JsonData = JSON.parse(data.data);
                console.log('-onmessage-收到的消息为--', JsonData);
                if (JsonData.type == 'message') {
                }
                if (JsonData.type == 'close') {
                    client.onclose(data);
                }
            } catch (error) {
                // 解析失败，将消息视为普通文本消息
                console.error('Error parsing JSON:', error);
                // 处理非 JSON 格式的消息
                console.log('-onmessage-收到的消息为--', data.data);
            }

            // ...
        };

        client.onclose = (data: any) => {
            console.log('-onclose-关闭连接--', data);
            //TODO 重连三次
            console.log('重连' + this.reconnectTimeOut + '次');

            if (this.reconnectTimeOut >= 3) return;
            //TODO 根据需求重连
            this.reconnect();
        };

        // 错误处理
        client.onerror = (data: any) => {
            console.log('-onerror-错误处理--', data);
            reject();
        };
    }
    /** 获取websocket*/
    private getWebSocket(url: string): WebSocket {
        // 省略其他代码...
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
            let cacert = cc.url.raw('resources/Files/cacert.pem');
            if (cc.loader.md5Pipe) {
                cacert = cc.loader.md5Pipe.transformURL(cacert);
            }
            //@ts-ignore
            return new WebSocket(url, null, cacert);
        }

        return new WebSocket(url);
    }

    /** 重新连接*/
    private reconnect(): void {
        if (this.needReconnect) {
            let time: number = 3000;
            switch (this.reconnectTimeOut) {
                case 0:
                    time = 1000;
                    break;
                case 1:
                    time = 2000;
                    break;
                case 2:
                    time = 3000;
                    break;
                default:
                    break;
            }
            this.websocketTimeout = window.setTimeout(() => {
                console.log('重新连接');
                this.reconnectTimeOut++;
                this.connect();
            }, time);
        }
    }

    /** 心跳检测*/
    private heartCheck(): void {
        this.heartChecker.reset();
    }

    /**
     * 处理收到的数据
     * @param data
     * @returns
     *  action: 'ping', type: 'ping',
     */
    public sendMessage(data: any): void {
        if (this.websocket) {
            this.websocket.send(JSON.stringify({ action: 'sendUserData', type: 'user_data', data }));
        } else {
            console.error('WebSocket is not connected.');
        }
    }

    public receiveMessage(): void {
        // 处理内容
    }

    public closeConn(): void {
        if (this.websocket) {
            this.websocket.onclose = (data: any) => {
                this.reconnectTimeOut = 0;
                console.log('-onclose-关闭连接--', data);
            };
        }
    }

    public closeClient(): void {
        if (this.websocket) {
            this.websocket.close();
        }
        // openSocket();
    }
}

// // 调用方式
// const wsService = new WebSocketService('StaticManager.wsUrl');

// async function initializeWebSocket(): Promise<void> {
//     try {
//         await wsService.connect();
//         // WebSocket 连接成功，可以进行后续操作
//     } catch (error) {
//         // 处理连接错误
//     }
// }

// function closeWebSocket(): void {
//     wsService.close();
// }
