import React from 'react';

function Contact() {
    return (
        <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Contact Us</h2>
            <form>
                <div style={{ marginBottom: '16px' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '6px' }}>Name</label>
                    <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px' }} />
                </div>
                <div style={{ marginBottom: '16px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '6px' }}>Email</label>
                    <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px' }} />
                </div>
                <div style={{ marginBottom: '16px' }}>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '6px' }}>Message</label>
                    <textarea id="message" name="message" rows="5" style={{ width: '100%', padding: '8px' }} />
                </div>
                <button type="submit" style={{ padding: '10px 20px' }}>Send</button>
            </form>
        </div>
    );
}

export default Contact;