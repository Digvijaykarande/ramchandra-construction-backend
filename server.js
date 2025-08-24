const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors"); // ✅ changed to require

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use(cors({
  origin: ['http://localhost:5173', 'https://ramchadraconstruction.netlify.app'], 
  credentials: true
}));

// Routes
app.get('/', (req, res) => { res.send("heyyyy") });
app.use("/api/products", require("./routes/productRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
