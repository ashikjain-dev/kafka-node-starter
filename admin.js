import { kafka } from "./client.js";
import { topic } from "./constant.js";
let admin = null
const connectAdmin = async () => {
    try {
        console.log('Connecting :: Admin')
        admin = kafka.admin()
        await admin.connect();
        console.log('Connected :: Admin')
        // await createTopic()
        console.log(await admin.listTopics())
    } catch (error) {
        console.error(error.message);
    }
    finally {
        if (admin !== null) {
            console.log("Disconnecting :: Admin ")
            await admin.disconnect()
            console.log("Disconnected :: Admin ")
        }

    }
}
const createTopic = async () => {
    try {
        if (admin != null) {
            await admin.createTopics({
                topics: [{ topic, numPartitions: 2 }],

            })
        }
    } catch (error) {
        console.log('Error :: Topic creation')
        console.error(error.message);
        throw error;
    }
}
connectAdmin()