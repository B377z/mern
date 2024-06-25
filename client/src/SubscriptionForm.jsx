import React, { useState } from 'react';
import axios from 'axios';

function SubscriptionForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/subscribe', { email })
            .then(() => {
                setMessage('Subscription successful! Check your email.');
                setSubscribed(true);
            })
            .catch(() => setMessage('Subscription failed. Please try again.'));
    };

    return (
        <div>
            {subscribed ? (
                <p>{message}</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Subscribe</button>
                </form>
            )}
            {!subscribed && message && <p>{message}</p>}
        </div>
    );
}

export default SubscriptionForm;

