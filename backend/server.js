const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
// const PORT = 5000;
const PORT = 5500;
const DATA_FILE = path.join(__dirname, "posts.json");

// 🔍 Read and log posts.json when the server starts
try {
  const postsData = fs.readFileSync(DATA_FILE, "utf8");
  const posts = JSON.parse(postsData);
  console.log("📄 Loaded posts.json content:");
  console.log(posts); // Logs entire posts array
} catch (err) {
  console.error("❌ Failed to read or parse posts.json:", err);
}

// Middleware
app.use(cors()); // Allow requests from frontend
app.use(express.json()); // Parse JSON bodies

// GET: Fetch top 150 posts
app.get("/api/posts", (req, res) => {
  try {
    const posts = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    res.json(posts.slice(0, 150));
  } catch (err) {
    console.error("Error reading posts:", err);
    res.status(500).json({ error: "Failed to read posts." });
  }
});

// POST: Add new post
app.post("/api/posts", (req, res) => {
  try {
    const newPost = req.body;
    const posts = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    posts.unshift(newPost); // Add to top
    fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2));
    res.status(201).json({ message: "Post added." });
  } catch (err) {
    console.error("Error writing post:", err);
    res.status(500).json({ error: "Failed to save post." });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("✅ Twitter backend is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🟢 Server running at http://localhost:${PORT}`);
});
