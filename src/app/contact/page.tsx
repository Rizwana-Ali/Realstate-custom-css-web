import React from 'react';

const Contact = () => {
    return (
        <div>
            
            <div className="contact">
                <h1>Contact Us</h1>
                <p>If you have any questions or feedback, feel free to reach out to us!</p>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            
        </div>
    );
};

export default Contact;