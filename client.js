import { Kafka, logLevel } from "kafkajs";

const kafka = new Kafka({
    clientId: "testApp",
    brokers: ["localhost:9092"],
    connectionTimeout: 3000,
    logLevel: logLevel.ERROR,
});
export { kafka }

