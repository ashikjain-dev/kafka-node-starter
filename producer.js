import { CompressionTypes } from 'kafkajs';
import { kafka } from "./client.js";
import { topic } from "./constant.js";

const producer = kafka.producer({
    allowAutoTopicCreation: false,
    transactionTimeout: 30000
})
const directions = ['NORTH', 'SOUTH', 'EAST', 'WEST'];
const buildMessage = (id) => ({
    name: `User-${id}`,
    id,
    location: directions[Math.floor(Math.random() * directions.length)]
});
const connectProducer = async () => {
    try {
        console.log("Connecting :: Producer")
        await producer.connect()
        console.log('Connected :: Producer')
        for (let i = 1; i <= 5; i++) {
            const msg = buildMessage(i);
            await sendMessages(topic, String(msg.id), msg);
            await new Promise((r) => setTimeout(r, 1000));
        }
    } catch (error) {
        console.error(error.message)
    }
    finally {
        console.log("Disconnecting :: Producer")
        await producer.disconnect()
        console.log("Disconnected :: Producer")
    }

}

const sendMessages = async (topic, key, msg) => {
    try {
        if (producer != null) {
            console.log("Sending :: messages")
            const result = await producer.send({
                topic,
                messages: [{ key, value: JSON.stringify(msg) }],
                compression: CompressionTypes.GZIP
            })
            console.log("Sent :: messages", result)
        }

    } catch (error) {
        console.error(error.message)
    }
}

connectProducer()