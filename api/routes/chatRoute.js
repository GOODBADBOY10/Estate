import express from 'express'
import { getChats, getChat, addChat, readChat  } from '../controllers/chatControllers.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();


router.get('/test', (req, res) => {
    console.log('router works')
})

router.get('/', getChats);
router.get('/:id', verifyToken, getChat);
router.post('/', verifyToken, addChat);
router.put('/read/:id', verifyToken, readChat);


export default router;