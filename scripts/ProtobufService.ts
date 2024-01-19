// npm install protobufjs
import * as protobuf from 'protobufjs';
import * as fs from 'fs';
// npx pbjs -t static-module -w commonjs -o message.js message.proto

// 导入你的 Protobuf 消息定义
import { MyMessage } from './ProtobufRes/message';

class ProtobufManager {
    private protoRoot: protobuf.Root;

    constructor() {
        // 从编译后的 JSON 文件加载 Protobuf 定义
        this.protoRoot = protobuf.Root.fromJSON(JSON.parse(fs.readFileSync('message.json').toString()));
    }

    serializeMessage(data: Record<string, any>): Uint8Array {
        const MyMessageType = this.protoRoot.lookupType('MyMessage');
        const message = MyMessageType.create(data);
        return MyMessageType.encode(message).finish();
    }

    deserializeMessage(buffer: Uint8Array): Record<string, any> {
        const MyMessageType = this.protoRoot.lookupType('MyMessage');
        const message = MyMessageType.decode(buffer);
        return MyMessageType.toObject(message);
    }
}

// 示例用法
const manager = new ProtobufManager();

// 创建并序列化消息
const data: Record<string, any> = { name: 'John', age: 30 };
const serializedData: Uint8Array = manager.serializeMessage(data);
console.log('Serialized Data:', serializedData);

// 反序列化消息
const deserializedData: Record<string, any> = manager.deserializeMessage(serializedData);
console.log('Deserialized Data:', deserializedData);
