import express from 'express';
const router = express.Router();

router.get('/users', (req, res) => {
  res.send('get users router!');
});

export default router;
