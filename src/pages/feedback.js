import React from 'react';

function Feedback() {
    return (
        <div><br /><br />
            <h1>Feedback - Form</h1>
            <br />
            <center>
                <div className="outerlog">
                    <form action="" method="post">
                        <div className="loginfo">
                            <label htmlFor="name">Name</label><br />
                            <input type="text" id="name" placeholder="Name" className="login" required />
                            <br /><br />
                            <label htmlFor="email">Email</label><br />
                            <input type="email" id="email" placeholder="Email" className="login" required /><br /><br />
                            <label htmlFor="message">Message</label><br />
                            <textarea id="message" placeholder="Message" className="login" required></textarea><br /><br />
                            <button type="submit" className="login_button">Submit</button><br /><br />
                        </div>
                    </form>
                </div>
            </center>
        </div>
    );
}

export default Feedback;