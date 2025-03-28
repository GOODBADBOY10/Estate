import express from 'express'
import { getPosts, getPost, addPost, updatePost, deletePost } from '../controllers/postControllers.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();


router.get('/test', (req, res) => {
    console.log('router works')
})

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', verifyToken, addPost);
router.put('/:id', verifyToken, updatePost);
router.delete('/:id', verifyToken, deletePost);


export default router;
