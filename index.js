const express = require("express");
const path = require("path");
const mysql = require("mysql2");

const app = express();
const port = 3000;

// ---------- Middleware ----------
app.use(express.static("Public")); // Serve static files (CSS, images, JS)
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.json()); // Parse JSON (for API requests)

// ---------- MySQL Connection ----------
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // your MySQL username
  password: "Danfeli0220", // your MySQL password
  database: "shinobi_strength", // your database name
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL Database");
});

// ---------- Routes ----------

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Public", "Pages", "home.html"));
});

// Handle form submission (e.g., from your signup form)
app.post("/signup", (req, res) => {
  const { full_name, email, password } = req.body;

  const sql = "INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [full_name, email, password], (err, result) => {
    if (err) {
      console.error("❌ Error inserting data:", err);
      return res.status(500).send("Error saving user");
    }
    console.log("✅ New user added:", result);
    res.send("Signup successful!");
  });
});

// ---------- Start Server ----------
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
