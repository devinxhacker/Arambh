import React from 'react';
import { useEffect, useRef } from 'react';

function Loader() {
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
    return (<div className="load-holder" ref={loadHolderRef} id="load-holder">
      <div id="loader" ref={loaderRef}></div>
    </div>);
  }
  
  
export default Loader;  