import React, { useState, useEffect } from "react";
import axios from "axios";

const UserData = ({ fetchFormData, userData, setUserData }) => {
  useEffect(() => {
    fetchFormData();
  }, []);

  const deleteHandler = async (id) => {
    await axios
      .delete(`https://node-mongodb-image.onrender.com/form/${id}`)
      .then(async (res) => {
        await fetchFormData();
        alert("Image Deleted Successfully");
      })
      .catch((err) => alert("Something Went Wrong"));
  };

  if (userData == null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="form-parent">
      {userData?.map((data) => (
        <div
          key={data?._id}
          style={{ border: "1px solid grey", margin: "10px" }}
        >
          <img
            src={data?.profilePhoto}
            width="500px"
            height="300px"
            style={{ objectFit: "contain" }}
          />
          <br />
          <br />

          <hr />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px",
            }}
          >
            <h4>{data?.fullName}</h4>
            <button
              style={{ width: "50px" }}
              onClick={() => deleteHandler(data?._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserData;
