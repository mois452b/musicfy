import musicRouter from "./music/musicRoutes"
import userRouter from "./user/userRoutes"
import authRouter from "./auth/authRoutes"
import express from 'express';
import dotenv from 'dotenv';
import cors from "cors"

dotenv.config();

const app = express();
app.use(express.json());
app.use( cors() )

app.use('/api/auths', authRouter)
app.use('/api/users', userRouter)
app.use('/api/musics', musicRouter)

export default app