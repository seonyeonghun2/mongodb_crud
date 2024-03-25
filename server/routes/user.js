import express from 'express';
const router = express.Router();

router.get('/users', (req, res) => {
  userModel.find().then(users => res.json(users)).catch(err => res.json(err));
});

export default router;