import "dotenv/config";
import express from 'express';
import cors from 'cors';
import rootRouter from "./routes/index.js";
import { errorMiddleware } from "./middleware/error.js";

const app = express();
const PORT = process.env.PORT || 3000;



//cors allow
app.use(cors({
    origin: 'http://localhost:3001', // Replace with your frontend URL or use '*' to allow all origins
    methods: ['GET', 'POST'], // Specify the methods you want to allow
    credentials: true // If you're using cookies or other credentials
}));


// Middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define routes
app.use('/api', rootRouter);

// Error handling middleware should be added after all routes and other middleware
app.use(errorMiddleware);

// Global error handling for uncaught exceptions and unhandled rejections
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1); // Exit process after handling uncaught exception
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    process.exit(1); // Exit process after handling unhandled rejection
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
