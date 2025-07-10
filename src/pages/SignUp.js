import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../index.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    full_name: "",
    age: "",
    gender: "",
    phone: "",
    height: "",
    weight: "",
    location: "",
    experience: "",
    portfolio: ""
  });
  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });
      if (photo) formData.append("photo", photo);

      const res = await axios.post("http://localhost:5000/api/apply", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      if (res.data.success) navigate("/success");
    } catch (err) {
      console.error(err);
      alert("Submission failed");
    }
  };

  return (
    <div className="container">
      <h2>Model Registration</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="full_name"
          value={form.full_name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
        >
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <input
          type="number"
          name="height"
          value={form.height}
          onChange={handleChange}
          placeholder="Height (cm)"
        />
        <input
          type="number"
          name="weight"
          value={form.weight}
          onChange={handleChange}
          placeholder="Weight (kg)"
        />
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
        />
        <input
          type="url"
          name="portfolio"
          value={form.portfolio}
          onChange={handleChange}
          placeholder="Portfolio Link"
        />
        <div style={{ gridColumn: "span 2" }}>
          <label className="file-label">Upload Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="file-input"
            required
          />
        </div>
        <textarea
          name="experience"
          value={form.experience}
          onChange={handleChange}
          placeholder="Describe your experience..."
          rows="3"
          style={{ gridColumn: "span 2" }}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
