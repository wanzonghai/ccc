export default class ApiService {
    private baseUrl: string = '';
    private baseUrlType: string = '';
    private projectId: string = '';
    private projectName: string = '';

    constructor(baseUrl: string, baseUrlType: string, projectId: string, projectName: string) {
        this.baseUrl = baseUrl;
        this.baseUrlType = baseUrlType || '';
        this.projectId = projectId || '';
        this.projectName = projectName || '';
        console.log('ApiService init');
    }

    private async request(url: string, method: string = 'GET'): Promise<any> {
        try {
            const response = await fetch(`${this.baseUrl}${url}`, { method });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('网络请求错误', error);
            throw error;
        }
    }

    private async requestWebSocket(url: string, method: string = 'GET'): Promise<any> {
        try {
            // 替换为适用于 WebSocket 的实现
            // const socket = new WebSocket(`${this.baseUrl}${url}`);
            const socket = new WebSocket(`${this.baseUrl.replace(/^http/, 'ws')}${url}`);

            // 等待 WebSocket 连接成功
            await new Promise((resolve, reject) => {
                socket.onopen = resolve;
                socket.onerror = reject;
            });

            // 发送数据，等待响应
            socket.send(JSON.stringify({ method }));

            return new Promise((resolve, reject) => {
                socket.onmessage = (event) => {
                    const data = JSON.parse(event.data);
                    resolve(data);
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

    public async getApiData(apiPath: string, useWebSocket: boolean = false): Promise<any> {
        const urlParts = [this.baseUrlType && `/${this.baseUrlType}`, this.projectId && `/${this.projectId}`, this.projectName && `/${this.projectName}`, `/${apiPath}`];

        //判断 this.baseUrlType 是否为空，如果不为空则加入到 url 中
        const urlWithoutSlash = urlParts.filter((part) => part).join('');
        const url = urlWithoutSlash.replace(/\/{2,}/g, '/'); // 移除多余的斜杠
        // 注意替换上面的路径为你的 Easy Mock 项目路径和接口地址

        if (useWebSocket) {
            return await this.requestWebSocket(url);
        } else {
            return await this.request(url);
        }
    }
}
