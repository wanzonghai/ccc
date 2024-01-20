const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const WebSocket = require('ws'); // 引入 ws 模块

const cors = require('cors');
const app = express();
const port = 4120;
const server = http.createServer(app); // 使用 Express 创建 HTTP 服务器
const wss = new WebSocket.Server({ server }); // 创建 WebSocket 服务器

// 使用 body-parser 中间件解析请求体
app.use(bodyParser.json());
app.use(cors());

// 模拟用户数据
let users = [
    { id: 1, name: 'Huang Zong', email: 'HZ@example.com' },
    { id: 2, name: 'Zong Zi', email: 'ZZ@example.com' },
];

// 获取所有用户信息
app.get('/users', (req, res) => {
    res.json(users);
});

// 获取特定用户信息
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// 修改用户信息
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;

    users = users.map((u) => (u.id === userId ? { ...u, ...updatedUser } : u));

    res.json({ success: true });
});

// WebSocket 处理
wss.on('connection', (ws) => {
    console.log('WebSocket connected');
    // 发送用户数据给连接的客户端
    ws.send(JSON.stringify(users));
    // 监听 WebSocket 消息
    ws.on('message', (message) => {
        
        console.log('Received raw message:', message); // 打印原始消息
        console.log(`Received: ${message}`);

        // 在这里处理收到的 WebSocket 消息

        // 可以向其他连接的客户端广播消息等操作
        // 在这里处理收到的 WebSocket 消息
        try {
            const parsedMessage = JSON.parse(message);
            console.log('Parsed Message:', parsedMessage); // 添加这行日志
            // 根据消息内容进行不同的处理
            if (parsedMessage.action === 'sendUserData') {
                // 在这里处理客户端请求发送用户数据的逻辑
                ws.send(JSON.stringify(users));
            } else {
                // 其他逻辑...
            }
        } catch (error) {
            console.error('Error parsing WebSocket message:', error);
        }
        // 广播相同的消息给所有客户端
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                // 发送消息到所有连接的客户端
                client.send(`Broadcast: ${message}`);
            }
        });
    });

    // 在关闭连接时触发
    ws.on('close', () => {
        console.log('WebSocket disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
