const express = require('express');
const cors = require('cors');
const path = require('path');
const userRoutes = require('./routes/users');
const donateRoutes = require('./routes/donate');
const locationRoutes = require('./routes/locations'); // ✅ NEW

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/donate', donateRoutes);
app.use('/api/locations', locationRoutes); // ✅ NEW

// Serve frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
