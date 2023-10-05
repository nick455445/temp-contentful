import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>ContentFul CMS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            nostrum atque consequuntur? Repellat necessitatibus perferendis
            maiores tenetur, corrupti consectetur quos ut voluptas omnis
            corporis possimus quisquam molestiae incidunt quam ipsum vero
            eveniet doloribus nostrum debitis! Porro perspiciatis officia
            inventore tempore modi? In cum sunt excepturi voluptatem autem
            tempora adipisci illum!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="something" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
