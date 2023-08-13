import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Type() {
    const el = useRef(null);
  
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Software Engineer", "Designer"], 
        typeSpeed: 125,
        backSpeed: 125,
        loop: true
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
  
    return (
      <div>
        <span ref={el}></span>
      </div>
    );
  }