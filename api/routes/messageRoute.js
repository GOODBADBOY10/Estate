import express from 'express'
import { addMessage } from '../controllers/messageControllers.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();


router.get('/test', (req, res) => {
    console.log('router works')
})

router.post('/:chatId', verifyToken, addMessage);


export default router;