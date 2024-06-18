import React, { useState } from "react";
import "./Form.css";

import axios from "axios";

const Form = () => {
  const initialValues = {
    fullName: "",
    profilePhoto: undefined,
  };

  const [formData, setFormData] = useState(initialValues);

  const [sending, setSending] = useState(false);

  const { fullName, profilePhoto } = formData;

  const handleChange = (e) => {
    if (e.target.name === "profilePhoto") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    setSending(true);
    e.preventDefault();

    const data = new FormData();
    data.append("fullName", fullName);
    data.append("profilePhoto", profilePhoto);

    axios
      .post("https://node-mongodb-image.onrender.com/form", data)
      .then((res) => {
        setFormData(initialValues);
        setSending(false);
        alert("Your form has been submitted successfully");
      })
      .catch((err) => {
        setSending(false);
        alert("Something went wrong");
      });
  };

  return (
    <div className="form-parent">
      <h1>Form</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          FullName
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label>
          Photo
          <input
            type="file"
            name="profilePhoto"
            onChange={handleChange}
            accept="image/x-png,image/gif,image/jpeg"
          />
        </label>

        <br />
        <button type="submit" disabled={sending}>
          {sending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
