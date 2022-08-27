import React from "react";
import "../App.css";
import pngLogo from "../assets/Frame.png";

export default function Login() {
  return (
    <div className="container-fluid mainHeader">
      <div class="row">
        <div class="col first d-flex justify-content-center">
            <div class="firstMain d-flex flex-column">
                <span class="mainText text-center">Welcome to App Name</span>
                <span class="secText text-center">Get ahead of the curve. Join the next generation of health heroes.</span>
                <img src={pngLogo} class="mainImage"/>
            </div>
        </div>
        <div class="col second">
        <div class="firstMain d-flex flex-column align-items-center justify-content-center">
               <div class="inputContainer d-flex flex-column">
                <span class="signinText">Sign-in to your account</span>
                <input type="text" class="username" placeholder="Username" />
                <input type="text" class="password" placeholder="Password" />
                <select class="slect">
                    <option value="">Select Unit Name</option>
                    <option value="login">Login</option>
                </select>
                <button class="btnClick">Sign In</button>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
}
