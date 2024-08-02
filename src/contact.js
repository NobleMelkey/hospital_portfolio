import React, { useState } from 'react';
import axios from 'axios';
import './newcss.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!name || !email || !message) {
            setError('All fields are required');
            return;
        }

        try {
            await axios.post('http://localhost:6003/contacts', {
                name,
                email,
                message
            });
            setSuccess('Message sent successfully');
            setName('');
            setEmail('');
            setMessage('');
            setError('');
        } catch (err) {
            setError('An error occurred while sending your message');
            console.error(err);
        }
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>
            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className="uil uil-calling contact__icon" />
                        <div>
                            <h3 className="contact__title">Contact Me</h3>
                            <span className="contact__subtitle"><a href="tel:8072586621">8072586621</a></span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <i className="uil uil-envelope-minus contact__icon" />
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">noblesam66@gmail.com</span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <i className="uil uil-map-marker contact__icon" />
                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">India, Tamil Nadu, Thoothukudi</span>
                        </div>
                    </div>
                </div>
                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="name" className="contact__label">Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                className="contact__input" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="contact__content">
                            <label htmlFor="email" className="contact__label">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                className="contact__input" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="contact__content">
                        <label htmlFor="message" className="contact__label">Message</label>
                        <textarea 
                            name="message" 
                            rows="7" 
                            className="contact__input" 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="button button--flex">
                        Send Message <i className="uil uil-message button__icon" />
                    </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
