import React from "react";
import "./App.css";

//Components
import Form from "./components/Form";
import UserData from "./components/UserData";

const App = () => {
  return (
    <div>
      <Form />
      <br />
      <hr />
      <br />
      <UserData />
    </div>
  );
};

export default App;
