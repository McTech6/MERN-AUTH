import express from 'express';
import authRoute from './routes/auth.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config(); // This should be called before using environment variables

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // To parse JSON request bodies

app.use('/api/user', authRoute);

mongoose.connect(process.env.MONGODB_URI )
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
