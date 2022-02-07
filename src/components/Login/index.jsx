import React,{useEffect} from "react";
import { useLocation,Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../../images/green.png";
import card from "../../images/illustration_login.png";
import Validation from "./Validation";

function Login() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login") {
      const main = document.querySelector(".main-content");
  
      main.style.display = "none";
    }
  },[location.pathname])

  return (
    <div>
      <section id="login">
        <div className="conatiner-fluid">
          <div className="row">
            <div className="col l-4 m-4 c-0">
              <div className="card bor-shaw">
                
                <img src={logo} alt="logo" width="100" />
                <h3 className="card-title">Hi, Welcome Back</h3>
                <img src={card} alt="image" width="450" />
              </div>
            </div>
            <div className="col l-8 m-8 c-12">
              <div className="text-end">
                <span>Don’t have an account?</span>
                <Link to="/register"> Get started</Link>
              </div>

              <div className="sign-in">
                <h4 className="sigin-title">Sign in</h4>
                <span>Enter your details below.</span>
                <div className="socials">
                  <button>
                    <FcGoogle />
                  </button>
                  <button>
                    <FaFacebookF />
                  </button>
                  <button>
                    <FaTwitter />
                  </button>
                </div>
                <div className="divider"></div>
                    <Validation />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
