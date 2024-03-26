import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dbconn from './dbconn.js';
import indexRouter from './routes/index.js';
import usersRouter from './routes/getUsers.js';
import createRouter from './routes/createUser.js';

const port = process.env.PORT || 4000;
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signup', createRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  // conn().catch(console.dir);
  dbconn();
});
