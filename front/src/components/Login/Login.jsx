import React, { useState } from "react";
import "./login.css";
import { sha256 } from "js-sha256";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [message,setMessage] = useState(false)
  const [login, setLogin] = useState({
    email: null,
    password: null,
  });

  const handleLogin = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setLogin({ ...login, [name]: sha256(value) });
    } else {
      setLogin({ ...login, [name]: value });
    }
  };

  console.log(login);

  const handleSubmit = () => {
      axios.post(`${process.env.REACT_APP_API_MOVIE}/login`, login).then(res => {
          if( res.status ===200 || res.status === 202){
              navigate("/home")
          }
      }).catch(err=>{
        console.log(err)
        setMessage(true)
      })
      console.log('ok')
  }

  return (
    <div className="Login">
      <h1 className="login_title">NetFilm33</h1>
      <div className="login_content">
        <form className="login_form">
          <label className="login_label">Email:</label>
          <input
            onChange={handleLogin}
            name="email"
            type="email"
            className="login_input"
          />
          <label className="login_label">Mot de passe :</label>
          <input
            onChange={handleLogin}
            name="password"
            type="password"
            className="login_input"
          />
          {
              message &&(
                  <p>Vos informations sont incorrects</p>
              )
          }
        </form>
        <button onClick={handleSubmit} className="login_button">Connexion</button>
      </div>
    </div>
  );
};

export default Login;
