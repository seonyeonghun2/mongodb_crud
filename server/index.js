import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// import indexRouter from './routes/index.js';
// import userRouter from './routes/user.js';
import dotenv from 'dotenv';
const port = process.env.PORT || 4000;
const app = express();
const router = express.Router();
dotenv.config();
import User from './models/User.js';
import { MongoClient, ServerApiVersion } from 'mongodb';
const MONGO_ID = process.env.MONGODB_ID;
const MONGO_PW = process.env.MONGODB_PW;
const uri = `mongodb+srv://${MONGO_ID}:${MONGO_PW}@cluster0.3emrbgk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// MongoDB Driver
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!',
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// app.use('/', indexRouter);
app.get('/', (req, res) => {
  res.send('welcome home!');
});
// app.use('/users', userRouter);

// 회원가입 구현
app.post('/signup', async (req, res) => {
  // 회원 가입시 필요한 정보를 client에서 받아서
  // MongoDB에 저장한다 ==> 회원가입
  const user = new User(req.body);
  console.log(user);
  user
    .save()
    .then((userInfo) => res.status(200).json({ success: true }))
    .catch((err) => res.json({ success: false, err }));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
