const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// app.use(cors({
//   origin: "",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type"]
// }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/job-board');

// Routes
const jobRoutes = require('./routes/jobRoutes');
app.use('/api/jobs', jobRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// {
//   id: 1,
//   company: "Photosnap",
//   logo: "./images/photosnap.svg",
//   new: true,
//   featured: true,
//   position: "Senior Frontend Developer",
//   role: "Frontend",
//   level: "Senior",
//   postedAt: "1d ago",
//   contract: "Full Time",
//   location: "USA Only",
//   languages: ["HTML", "CSS", "JavaScript"],
//   tools: []
// }