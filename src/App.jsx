import React, { useState } from "react";
import "./App.css";

import axios from "axios";

//Components
import Form from "./components/Form";
import UserData from "./components/UserData";

const App = () => {
  const [userData, setUserData] = useState(null);

  const fetchFormData = async () => {
    await axios
      .get("https://node-mongodb-image.onrender.com/form")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log("Something Went Wrong"));
  };

  return (
    <div>
      <Form fetchFormData={fetchFormData} />
      <br />
      <hr />
      <br />
      <UserData
        fetchFormData={fetchFormData}
        userData={userData}
        setUserData={setUserData}
      />
    </div>
  );
};

export default App;
