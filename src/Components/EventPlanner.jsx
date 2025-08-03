import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';

const EventPlanner = () => {
    return (
        <div className="event-planner-container">

            {/* Page Header */}
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>

            {/* Section for describing the the purpose or overview of the app */}
            <section className='description'>
                {/* Description content goes here */}
                <p>
                    Plan and organize your events effortlessly with Event Planner. From
                    birthdays to corporate meetings, we've got you covered.
                </p>
                <button className='get-started-button'>Get Started</button>
            </section>

            {/* Section to list or cateorize different types of events*/}
            <section className='events_categories'>
                {/* Event cateories content goes here */}

                {/* Social event types */}
                <ul>
                    <h2>Social Events:</h2>
                    <li>Birthday parties</li>
                    <li>Anniversary celebrations</li>
                    <li>Wedding receptions</li>
                    <li>Baby shower</li>
                    <li>Graduation parties</li>
                    <li>Family reunions</li>
                </ul>

                {/* Entertainment-based event types */}
                <ul>
                    <h2>Entertainment Events</h2>
                    <li>Concerts</li>
                    <li>Music festivals</li>
                    <li>film screenings</li>
                    <li>Comedy shows</li>
                    <li>At exhibitions</li>
                    <li>Cultural events</li>
                </ul>

                {/* Community-focused event types */}
                <ul>
                    <h2>Community Events:</h2>
                    <li>Fundraising events</li>
                    <li>Charity galas</li>
                    <li>Volunteer drives</li>
                    <li>Neighborhood block parties</li>
                    <li>Community festivals</li>
                    <li>Cultural celebrations</li>
                </ul>
            </section>

            {/* Section to highlight all features or functionalities */}
            <section className='features'>
                <h2>Features</h2>
                <ul>
                    <li>Easy event creation and management</li>
                    <li>Customizable event template</li>
                    <li>Guest list management</li>
                    <li>Real-time collaboration</li>
                    <li>Reminders and notifications</li>
                </ul>

            </section>

            {/* Section to showcase user reviews or testimonials */}
            <section className='testimonials'>
                <h2>Testimonials</h2>

                <div className='testimonial'>
                    <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
                    <p>- Francois Nyamsi</p>
                </div>
                <div className='testimonial'>
                    <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                    <p>- Alain Tchondou</p>
                </div>
                <div>
                    <p>"Event Planner make it easy for oranizations to manage events. It save time and efort!"</p>
                    <p>- John Doe</p>
                </div>
            </section>

            {/* Section to provide contact information or a contact form */}
            <section className='contact'>
                <h2>Contact Us</h2>
                <form action="">
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <textarea placeholder="Message"></textarea>
                    <button className='submit-button'>Send</button>
                </form>
            </section>
            <Footer/>
        </div>
    );
};

export default EventPlanner;
