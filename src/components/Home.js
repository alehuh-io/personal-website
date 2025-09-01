import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {
  const typedElement = useRef(null);   // reference to span
  const typedInstance = useRef(null);  // store typed instance

  useEffect(() => {
    // create new instance
    typedInstance.current = new Typed(typedElement.current, {
      strings: ["creates()", "builds()", "designs()", "solves()", "learns()"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      // destroy instance on unmount to prevent memory leaks
      typedInstance.current.destroy();
    };
  }, []);

    return (
        <section class="home" id="home">
            <div className="home-content">
                <h1> aleja.<span className="typing" ref={typedElement}></span></h1>
                <button className="btn">Aleja Jan Lois Velasco</button>
                <p> Computer Engineering Graduate</p>
            </div>
        </section>
    );
}
