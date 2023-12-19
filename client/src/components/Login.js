import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                email,
                password,
            });
            // Handle successful login (e.g., set authentication token)
            if (response && response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                navigate('/protected'); // Redirect to the ProtectedPage
            } else {
                window.alert('Something went wrong');
            }
        } catch (error) {
            // Handle login error
            // console.error('Login error:', error.response.data.message);
            console.error('Login error:');
        } finally {
            setLoading(false); // Reset loading to false after the response is received
        }
    };

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
            <p>
                Don't have an account? <Link to="/register">Register here</Link>.
            </p>
        </>
    );
}

export default Login