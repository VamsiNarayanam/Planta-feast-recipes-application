import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Rating = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState(""); 
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = async () => {
    if (!name || !phone || !review) {
      alert("Please fill in all details before submitting.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/rating", {
        name,
        phone,
        review
      });

      setSubmittedName(name); 
      setSubmitted(true);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Review Submission Error:", error);
      alert("Failed to submit review. Try again!");
    }
  };

  return (
    <div className="container rating-container">
      <h2>REVIEW YOUR EXPERIENCE</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <textarea
        className="rating-textarea"
        placeholder="Write your experience..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
      />
      <button className="btn submit-btn" onClick={handleSubmit}>
        Submit & Return Home
      </button>

      <br />
      {submitted && (
        <div className="success-message">
          ✅ Thank you, {submittedName}! Redirecting to homePage...
        </div>
      )}
    </div>
  );
};

export default Rating;
