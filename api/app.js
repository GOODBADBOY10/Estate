import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from './routes/authRoute.js'
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoute.js'
import chatRoutes from './routes/chatRoute.js'
import messageRoutes from './routes/messageRoute.js'
import testRoute from './routes/testRoute.js'

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});



app.use('/api/auth', authRoute);
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/test', testRoute);

app.listen(8800, () => {
  console.log("Server is running!");
});
