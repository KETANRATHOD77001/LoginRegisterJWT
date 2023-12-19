// ProtectedPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProtectedPage() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const token = localStorage.getItem('token'); // Assuming you store the token in localStorage after login
                const response = await axios.get('http://localhost:8080/api/auth/protected', {
                    headers: {
                        Authorization: token,
                    },
                });
                setMessage(response.data.message);
            } catch (error) {
                setMessage('Unauthorized');
            }
        };

        fetchProtectedData();
    }, []);

    return (
        <>
            <h2>Protected Page</h2>
            <p>{message}</p>
        </>
    );
}

export default ProtectedPage;
