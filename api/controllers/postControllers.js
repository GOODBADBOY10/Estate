import prisma from "../lib/prisma.js"

export const getPosts = async () => {
    try {
        const posts = await prisma.post.findMany();

        res.status(200).json(posts);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to get all posts" })
    }
}


export const getPost = async () => {
    const id = req.params.id
    try {
        const post = await prisma.post.findUnique({
            where: {
                id
            }
        });

        res.status(200).json(post);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to get post" })
    }
}



export const addPost = async () => {
    const body = req.body
    const tokenUserId = req.userId
    try {
        const newPost = await prisma.post.create({
            data: {
                ...body,
                userId: tokenUserId
            }
        })
        res.status(200).json(newPost);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to get all posts" })
    }
}



export const updatePost = async () => {
    // const body = req.body
    // const tokenUserId = req.userId
    res.status(200).json();
    try {

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to get all posts" })
    }
}



export const deletePost = async () => {
    const id = req.params.id
    const tokenUserId = req.userId
    try {
        const post = await prisma.post.findUnique({
            where: {
                id
            }
        })

        if ( post.userId !== tokenUserId ) {
            return res.status(403).json({ message: "Not Authorized" })
        }

        await prisma.post.delete({
            where: {
                id
            }
        });
        res.status(200).json({ message: "post deleted" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to get all posts" })
    }
}