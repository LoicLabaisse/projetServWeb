import React, { useState } from "react";
import "./register.css";
import { sha256 } from "js-sha256";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [register, setRegister] = useState({
    first_name: null,
    last_name: null,
    email: null,
    password: null,
  });

  const handleRegister = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setRegister({ ...register, [name]: sha256(value) });
    } else {
      setRegister({ ...register, [name]: value });
    }
  };

  console.log(register);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `${process.env.REACT_APP_API_MOVIE}/register/${register.first_name}/${register.last_name}/${register.email}/${register.password}`
      )
      .then((res) => {
       console.log(res.status)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="register">
      <h1 className="register_title">Inscription</h1>
      <div className="register_content">
        <form className="register_form">
          <label className="register_label">Nom:</label>
          <input
            onChange={handleRegister}
            name="first_name"
            type="text"
            className="register_input"
          />
          <label className="register_label">Prénom:</label>
          <input
            onChange={handleRegister}
            name="last_name"
            type="text"
            className="register_input"
          />
          <label className="register_label">Email:</label>
          <input
            onChange={handleRegister}
            name="email"
            type="email"
            className="register_input"
          />
          <label className="register_label">Mot de passe :</label>
          <input
            onChange={handleRegister}
            name="password"
            type="password"
            className="register_input"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="register_button"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;