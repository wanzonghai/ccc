// 引入内置的http模块
const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8888;

// 使用body-parser中间件解析请求体
app.use(bodyParser.json());

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

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// // 创建一个简单的HTTP服务器
// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello, Node.js!');
// });

// // 监听3000端口
// server.listen(3000, 'localhost', () => {
//   console.log('Server is running at http://localhost:3000/');
// });
