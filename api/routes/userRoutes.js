import express from 'express'
import { getUsers, getUser, updateUser, deleteUser, savePost, profilePosts, getNotificatonNumber } from '../controllers/userControllers.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();


router.get('/test', (req, res) => {
    console.log('router works')
})

router.get('/', getUsers);
// router.get('/:id', verifyToken, getUser);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);
router.post('/save', verifyToken, savePost);
router.get('/profilePosts', verifyToken, profilePosts);
router.get('/notification', verifyToken, getNotificatonNumber);


export default router;