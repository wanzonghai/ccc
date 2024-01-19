const protobuf = require("protobufjs");
const fs = require("fs");
const { MyMessage } = require("./message"); // 导入你的 Protobuf 消息定义

class ProtobufManager {
  constructor() {
    this.protoRoot = protobuf.Root.fromJSON(JSON.parse(fs.readFileSync("message.json"))); // 从编译后的 JSON 文件加载 Protobuf 定义
  }

  serializeMessage(data) {
    const MyMessage = this.protoRoot.lookupType("MyMessage");
    const message = MyMessage.create(data);
    return MyMessage.encode(message).finish();
  }

  deserializeMessage(buffer) {
    const MyMessage = this.protoRoot.lookupType("MyMessage");
    const message = MyMessage.decode(buffer);
    return MyMessage.toObject(message);
  }
}

// 示例用法
const manager = new ProtobufManager();

// 创建并序列化消息
const data = { name: "John", age: 30 };
const serializedData = manager.serializeMessage(data);
console.log("Serialized Data:", serializedData);

// 反序列化消息
const deserializedData = manager.deserializeMessage(serializedData);
console.log("Deserialized Data:", deserializedData);
