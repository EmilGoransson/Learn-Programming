import React, { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://Learn-programming/Backend/server.js/api/login",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        alert("Log in successful");
      } else {
        alert("Log in failed");
      }
    } catch (error) {
      // Handle network error
      //Här hamnar man bara om man får nätverksfel typ. Det behöver vi nog inte ändra på. FInns inte så mycket vi behöver göra då.
      alert("Network error:", error);
    }
  };
  return (
    <div class="container">
      <div class="form-container bg-lightBlueGray rounded-2xl">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <img src="https://i.imgur.com/csg65HH.png" className="hej" />
        </div>
        <h2 style={{ alignSelf: "flex-start" }}>Log in</h2>
        <br></br>
        <form onSubmit={handleSubmit}>
          <label>
            <span>E-mail:</span>
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="ruta"
            />
          </label>
          <label>
            <span>Password:</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="ruta"
            />
          </label>
          <button type="submit" className="loginbutton">
            Log in
          </button>
          <p>
            Don’t have an account? Click <a href="/createaccount">here</a> to
            get one.
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
