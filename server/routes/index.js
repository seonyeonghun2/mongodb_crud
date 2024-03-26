import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('index router!');
});

export default router;
