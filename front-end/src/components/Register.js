import React from 'react';
import '../css/Auth.css';

export default function Register() {
    return (
        <section className="auth-container">
            <form action="" className="auth-form">
                <h2>Register your account</h2>
                <div className="error-message">Error: Your Password is incorrect</div>
                <input 
                    type="email"
                    name="email"
                    id=""
                    required
                    placeholder="Enter your email address"
                />
                <input 
                    type="password"
                    name="password"
                    id=""
                    required
                    placeholder="Enter your password"
                />
                <button className="btn" type="submit">Register</button>
            </form>
        </section>
  
    )
}
