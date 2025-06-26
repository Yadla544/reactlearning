import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/connectdb.js';
import userRoutes from './routers/userRoutes.js';
dotenv.config();
const app=express();
app.use(express.json());
app.use('/api/users', userRoutes);

connectDB();
app.get('/', (req, res) => {
    res.send('API is running...');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});