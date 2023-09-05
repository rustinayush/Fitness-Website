import React from 'react'
import image from "../../assets/body-item/4.JPG"
import "./Division2.css"


const Division4 = () => {
  return (
    <div className="division2-container">

      <div className="division2-image">
        <img src={image} alt="Alt Text 1" />

      </div>
      <div className="division2-text">

        <p>IMMUNITY BOOST</p>
        <p className="p-tag">Nature's Strongest Antioxidant</p>
        <p>Boost your immune system with nature’s most powerful antioxidant, Astaxanthin. Its unique and strong cellular protection capacity allows it to protect each cell against free radicals and oxidative stress.
        </p>
        <button class="read-more-button">READ MORE

        </button>


      </div>
    </div>
  )
}

export default Division4