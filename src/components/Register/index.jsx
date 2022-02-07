import React,{useEffect} from "react";
import { useLocation,Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../../images/green.png";
import cardRegister from '../../images/illustration_register.png';
import Validation from "./Validation";


function Register() {
    const location = useLocation();

    useEffect(() => {
      if (location.pathname === "/register") {
        const main = document.querySelector(".main-content");
    
        main.style.display = "none";
      }
    },[location.pathname])

  return (
    <div>
      <section id="register">
        <div class="conatiner-fluid">
          <div class="row">
            <div class="col l-4 m-4 c-0">
              <div class="card bor-shaw">
                <img src={logo} alt="logo" width="100" />
                <h3 class="card-title">
                  Manage the job more effectively with TunTun
                </h3>
                <img
                  src={cardRegister}
                  alt="image"
                  width="450"
                />
              </div>
            </div>
            <div class="col l-8 m-8 c-12">
              <div class="text-end">
                <span>Already have an account?</span>
                <Link to="/login"> Login</Link>
              </div>

              <div class="sign-in">
                <h4 class="sigin-title">Get started absolutely free.</h4>
                <span>Free forever. No credit card needed.</span>
                <div class="socials">
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
                <div class="divider"></div>
                    <Validation />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
