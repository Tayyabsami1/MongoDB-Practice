import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import itemRoutes from './Routes/itemRoutes.js';

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', itemRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('MongoDB Operations API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;