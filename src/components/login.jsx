import React, { useState } from "react";
import "../style/index.css";

const Login = ({ setToken }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        setError(""); 

        try {
            const response = await fetch("https://fakestoreapi.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            if (!response.ok) {
                throw new Error("Login failed"); 
            }

            const data = await response.json();
            console.log(data.token);
            setToken(data.token); 
        } catch (error) {
            console.error("Login error:", error);
            setError("Failed to log in. Please check your credentials.");
        }
    };

    return (
        <div className="login">
            <div className="login-inputs">
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Username"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <small>{error}</small>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;
