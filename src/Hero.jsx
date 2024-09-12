import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title"></div>
        <div className="img-container">
          <img src={heroImg} alt="idk" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
