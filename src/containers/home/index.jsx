import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      {/* Image section */}
      <div className="home__image-wrapper">
        <img src="images/SprofileImg.jpg" alt="Snehal Tembhurne" className="home__image" />
      </div>
      
      {/* Text section */}
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Snehal Tembhurne
          <br />
          Fullstack Developer
        </h1>
      </div>
      
      {/* Contact button */}
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
