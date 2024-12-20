import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import Header from "./Header";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accept, setAccept] = useState(false);
    const [emailError, setEmailError] = useState("");
    async function submit(e) {
        let flag = true;
        e.preventDefault();
        setAccept(true);
        if (password.length < 8) {
            flag = false;
        } else flag = true;
        try {
            if (flag) {
                //send data
                let res = await axios.post("http://127.0.0.1:8000/api/login", {
                    email: email,
                    password: password,
                });
                if (res.status === 200) {
                    window.localStorage.setItem("email", email);
                    window.location.pathname = "/";
                }
            }
        } catch (error) {
            console.log(error.response.status);

            setEmailError(error.response.status);
        }
    }
    return (
        <div>
            <Header/>
        <div className="container2">
            <div className="screen">
                <div className="screen__content">
                    <form onSubmit={submit} className="login">
                        <div className="login__field">
                            <i className=" login__icon fa-solid fa-envelope"></i>
                            <input
                                type="email"
                                className="login__input"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input
                                type="password"
                                className="login__input"
                                placeholder="Password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {password.length < 8 && accept && (
                                <p className="error">password most be more than 8</p>
                            )}
                        </div>
                        <button type="submit" className="button login__submit">
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
                    <div className="social-login">
                        <h6>log in via</h6>
                        <div className="social-icons">
                            {/* <a href="#" className="social-login__icon fab fa-instagram"></a>
                            <a href="#" className="social-login__icon fab fa-facebook"></a>
                            <a href="#" className="social-login__icon fab fa-twitter"></a> */}
                        </div>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;
