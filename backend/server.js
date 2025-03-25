require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB Connection Error:", err));


const paymentSchema = new mongoose.Schema({
  amount: Number,
  date: { type: Date, default: Date.now }
});
const Payment = mongoose.model("Payment", paymentSchema);

const ratingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  review: String,
  date: { type: Date, default: Date.now }
});
const Rating = mongoose.model("Rating", ratingSchema);


app.post("/payment", async (req, res) => {
  try {
    const { amount } = req.body;
    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }
    
    const newPayment = new Payment({ amount });
    await newPayment.save();
    
    res.status(201).json({ message: "Payment received successfully" });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ error: "Failed to save payment details" });
  }
});

app.post("/rating", async (req, res) => {
  try {
    const { name, phone, review } = req.body;
    if (!name || !phone || !review) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newRating = new Rating({ name, phone, review });
    await newRating.save();

    res.status(201).json({ message: "Review submitted successfully" });
  } catch (error) {
    console.error("Error submitting review:", error);
    res.status(500).json({ error: "Failed to save review" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

