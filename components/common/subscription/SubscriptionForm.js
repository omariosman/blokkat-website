// SubscriptionForm.js
import React, { useState } from 'react';

function SubscriptionForm() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubscribe = (event) => {
        event.preventDefault();
        alert(`Thank you for subscribing with: ${email}`);
        setEmail(''); // Clear the input after subscribing
    };

    return (
		<div className="section bg-gray-800 fugu-section-padding3">
			<div className="container">
        <div className="subscription-form-container">
            <form onSubmit={handleSubscribe} className="subscription-form">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    className="subscription-input"
                    required
                />
                <button type="submit" className="subscription-button">
                    Subscribe
                </button>
            </form>
        </div>
        </div>
        </div>
    );
}

export default SubscriptionForm;
