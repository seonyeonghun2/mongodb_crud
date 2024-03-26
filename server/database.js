import dotenv from 'dotenv';
dotenv.config();
import { MongoClient, ServerApiVersion } from 'mongodb';
const MONGO_ID = process.env.MONGODB_ID;
const MONGO_PW = process.env.MONGODB_PW;
const uri = `mongodb+srv://${MONGO_ID}:${MONGO_PW}@cluster0.3emrbgk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// MongoDB Driver
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
    bufferMaxEntries: 0,
    bufferCommands: false,
  },
});

async function conn() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log('MongoDB Connected~!');
  } catch (err) {
    console.error(err);
    throw error;
  }
}

// finally {
//   // Ensures that the client will close when you finish/error
//   await client.close();
// }

export default conn;
