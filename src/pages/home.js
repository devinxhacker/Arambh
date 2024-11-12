import React from 'react';

// import App2 from './App2';

function Home() {
    return (
        <div className="main">
            <img src="assets/images/boto.jpg" alt="logo" id="bot" height="300px" width="300px" />
            <h1>
                ACE<br />
                <p style={{ fontSize: "0.5cm", fontWeight: 100 }}>
                    Admission Chat Engine
                </p>
            </h1>
            <br />
            {/* <button onClick={<App2></App2>}><i className="fa fa-right-long"></i></button> */}
        </div>
    );
}

export default Home;