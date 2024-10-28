import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const loaderRef = useRef(null);
  const loadHolderRef = useRef(null);

  useEffect(() => {
    const onReadyStateChange = () => {
      const state = document.readyState;
      if (state === "interactive") {
        if (loaderRef.current) loaderRef.current.style.visibility = "visible";
        document.body.style.overflow = "hidden";
      } else if (state === "complete") {
        setTimeout(() => {
          if (loaderRef.current) loaderRef.current.style.visibility = "hidden";
          if (loadHolderRef.current) loadHolderRef.current.style.visibility = "hidden";
          document.body.style.overflow = "auto";
        }, 0);
      }
    };

    document.onreadystatechange = onReadyStateChange;
    return () => {
      document.onreadystatechange = null;
    };
  }, []);

  const openAI = () => {
    // Define your open_ai function here or import it from elsewhere
    console.log("openAI function triggered");
  };

  return (
    <div className="App">
      <div className="load-holder" ref={loadHolderRef} id="load-holder">
        <div id="loader" ref={loaderRef}></div>
      </div>
      <header>
        <span> Arambh </span>
        <nav>
          <a href="about.html">About</a>
          <a href="help.html">Help</a>
          <a href="faqs.html">FAQ's</a>
          <a href="feedback.html">Feedback</a>
          <a href="login.html">Login</a>
        </nav>
      </header>
      <div className="main">
        <img src="assets/images/boto.jpg" alt="logo" id="bot" height="300px" width="300px" />
        <h1>
          ACE<br />
          <p style={{ fontSize: "0.5cm", fontWeight: 100 }}>
            Admission Chat Engine
          </p>
        </h1>
        <br />
        <button onClick={openAI}><i className="fa fa-right-long"></i></button>
      </div>
    </div>
  );
}

export default App;
