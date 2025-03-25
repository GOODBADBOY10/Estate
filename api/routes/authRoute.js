import express from 'express'

const router = express.Router();


router.get('/test', (req, res) => {
    console.log('router works')
})

router.get('/register', (req, res) => {})
router.get('/login', (req, res) => {})
router.get('/logout', (req, res) => {})


export default router
