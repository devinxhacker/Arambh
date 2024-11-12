import React from 'react';

function Login() {
    return (
        <div className="Login">
            <div className="main" style={{ marginTop: "8vh" }}>
                <h1>Login</h1>
                <center>
                    <div className="outerlog">
                        <form action="" method="post">
                            <div className="loginfo">
                                <label htmlFor="email">
                                    Email<br />
                                    <input type="email" id="email" placeholder="Email" className="login" required />
                                </label>
                                <br />
                                <label htmlFor="pass">
                                    Password <br />
                                    <input type="password" id="pass" placeholder="Password" className="login" required />
                                </label>
                            </div>
                            <small className="forgotp">Forgotten Password ?</small>
                            <div className="logbtn">
                                <button type="submit" className="login_button">Login</button>
                            </div>
                        </form>
                    </div>
                    <h2>Login with</h2>
                    <button onClick={() => {}}><i className="fab fa-google"></i>oogle</button>
                </center>
            </div>
        </div>
    );
}

export default Login;
