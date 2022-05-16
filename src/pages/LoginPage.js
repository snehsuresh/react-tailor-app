import React, { useState } from "react";
import Submenu from "../components/Submenu";
import Socialmenu from "../components/Socialmenu";
import Subcart from "../components/Subcart";

function LoginPage() {
  const [flag, setFlag] = useState("login");

  return (
    <>
      <Submenu />
      <Socialmenu />
      <Subcart />
      <div className="login-page">
        <div className="login-form">
          {flag === "signup" ? (
            <form className="register-form">
              <input type="text" placeholder="name" />
              <input type="password" placeholder="password" />
              <input type="text" placeholder="email address" />
              <button>create</button>
              <p className="message">
                Already registered?{" "}
                <a
                  href="#"
                  onClick={() => {
                    setFlag("signin");
                  }}
                >
                  Sign In
                </a>
              </p>
            </form>
          ) : (
            <form className="signin-form">
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button>login</button>
              <p className="message">
                Not registered?
                <a
                  href="#"
                  onClick={() => {
                    setFlag("signup");
                  }}
                >
                  Create an account
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default LoginPage;
