import { topic, groupId } from './constant.js'
import { kafka } from './client.js'


const consumer = kafka.consumer({ groupId })
const { HEARTBEAT } = consumer.events
consumer.on(HEARTBEAT, e => console.log(`heartbeat at ${e.timestamp}`))
const connectConsumer = async () => {
    try {
        console.log("Connecting :: Consumer")
        await consumer.connect()
        console.log('Connected :: Consumer')
        await consumer.subscribe({ topics: [topic], fromBeginning: true })
        console.log(`Reading Messages from the topic: ${topic}`)
        await consumer.run({
            eachMessage: async ({ topic, message, heartbeat, pause }) => {
                console.log(`Key : ${message.key.toString()} -> value: ${message.value.toString()}`)
            }
        })
        console.log(`Messages Read successfully from the topic: ${topic}`)
    } catch (error) {
        console.error(error.message)
    }
}

connectConsumer()