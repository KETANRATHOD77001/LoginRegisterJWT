import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import authRoutes from './route/authRoute.js';

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

try {
    await connectDB();
    console.log('Connected to the database');
} catch (error) {
    console.error('Error connecting to the database:', error);
}

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
