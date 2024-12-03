import express from 'express';
const router = express.Router();

//**** GET Route ****//
router.get('/', (req, res) => {
  return res.send('web route is working!');
});

//**** GET Route with ID ****//
router.get('/:id', (req, res) => {
  const { id } = req.params;
  return res.send(`web route with ID: ${id} is working!`);
});

//**** POST Route ****//
router.post('/store', (req, res) => {
  const body = req.body;
  return res.json({ message: 'web route is working!', data: body });
});

//**** PUT Route ****//
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  return res.json({ message: 'web route updated successfully!', id, data: body });
});

//**** DELETE Route ****//
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  return res.json({ message: 'web route deleted successfully!', id });
});

export default router;