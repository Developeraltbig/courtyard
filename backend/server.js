const express = require('express');
const cors = require('cors');
const path = require('path'); // Import the 'path' module
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// --- API Routes ---
// All your API routes will be prefixed with /api
app.use('/api/menu', require('./routes/menuRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

// --- Static File Serving ---
// This tells Express to serve any static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// --- Catch-all Route ---
// For any request that doesn't match an API route, send back the React app's index.html file.
// This is the key for single-page applications (SPAs) to work with client-side routing.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const PORT = process.env.PORT || 8080; // Cloud Run provides the PORT env variable
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));