import React, { useState } from "react";
import './assets/css/App.css';
import { Login } from "./assets/components/Login.jsx";
import { Register } from "./assets/components/Register.jsx";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
    {
      currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    }
    </div>
  );
}

export default App;