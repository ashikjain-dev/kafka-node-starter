import { CompressionTypes } from 'kafkajs';
import { kafka } from "./client.js";
import { topic } from "./constant.js";

const producer = kafka.producer({
    allowAutoTopicCreation: false,
    transactionTimeout: 30000
})
const msg = {
    name: "User-2",
    id: 2,
    location: 'NORTH'
}
const keyLocation = 'location-update'
const keyCustomer = 'customer-update'
const msgCustomer = {
    userName: "customer-2",
    isDelivered: false

}
const connectProducer = async () => {
    try {
        console.log("Connecting :: Producer")
        await producer.connect()
        console.log('Connected :: Producer')
        await sendMessages(topic, keyLocation, msg)
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