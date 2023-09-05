import React from 'react'
import image from "../../assets/body-item/1.JPG"
import "./Division1.css"


const Division1 = () => {
  return (
    <div className="division1-container">
      <div className="division1-text">

        <p>EAA+ELECTROLYTES</p>
        <p className="p-tag">Essential Fuel With Hydrating Electrolytes</p>
        <p>A potent blend of EAAs with 3.5g leucine per serving, and highly bioavailable electrolytes in pocket-sized sachets - convenient and effective fuel to maximise your performance and hydration.</p>
        <button class="read-more-button">READ MORE

        </button>


      </div>
      <div className="division1-image">
        <img src={image} alt="Alt Text " />

      </div>
    </div>
  )
}

export default Division1