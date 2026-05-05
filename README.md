# KafkaJS Example Project

This project demonstrates a simple Apache Kafka implementation using Node.js and the [`kafkajs`](https://kafka.js.org/) library. It includes a Docker Compose setup to run a local Kafka broker and a web-based Kafka UI.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)

## Project Structure

- `compose.yaml`: Docker Compose configuration to run Kafka and Kafka UI.
- `client.js`: Initializes the Kafka client connection.
- `constant.js`: Contains shared constants like the topic name and consumer group ID.
- `admin.js`: Script to manage Kafka (e.g., list topics, create topics).
- `producer.js`: Script to produce/send messages to a Kafka topic.
- `consumer.js`: Script to consume/read messages from a Kafka topic.

## Getting Started

### 1. Install Dependencies

Install the required Node.js packages:

```bash
npm install
```

### 2. Start the Kafka Cluster

Use Docker Compose to start the Kafka broker and the Kafka UI:

```bash
docker-compose up -d
```

- **Kafka Broker** will be available at `localhost:9092`.
- **Kafka UI** will be accessible in your browser at [http://localhost:8080](http://localhost:8080).

### 3. Run the Example

The example components can be run individually.

**Admin** (List topics / Create topic):
```bash
node admin.js
```

**Producer** (Send messages):
```bash
node producer.js
```

**Consumer** (Read messages):
Open a new terminal window to run the consumer so you can see it receive messages:
```bash
node consumer.js
```

## Useful Links

- [KafkaJS Documentation](https://kafka.js.org/docs/getting-started)
