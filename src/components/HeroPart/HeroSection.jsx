import React from 'react';
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from '../../assets/Hero-Images/Hero1.JPG';
import Image2 from '../../assets/Hero-Images/Hero2.JPG';
import Image3 from '../../assets/Hero-Images/Hero3.JPG';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <Carousel
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      showArrows={true}
      showThumbs={false}
      swipeable={true}
      className="Carousel"

    >
      <div>
        <div className="carousel-content">
          <img src={Image2} alt="Image 1" />
          <div className="carousel-text">
            <h2>Rapid Reconvery. Effective Hydration</h2>
            <p>Boost performance and hydration with a unique blend of full-secptrum Essential Amino Acids and electrolytes</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <div>
        <div className="carousel-content">
          <img src={Image1} alt="Image 2" />
          <div className="carousel-text">
            <h2>Stronger Than The Summer Sun!</h2>
            <p>Protect your skin from the harmful UV rays this summer with nature's strongest antioxidant- Astaxanthin.</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <div>
        <div className="carousel-content">
          <img src={Image3} alt="Image 3" />
          <div className="carousel-text">
            <h2>Beyond The Yoga Mat</h2>
            <p>Yoga practitioners and trainers share the benefits of Yoga on and off the mat</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default HeroSection;

