import React from 'react'
import image from "../../assets/body-item/3.JPG"
import "./Division1.css"


const Division3 = () => {
  return (
    <div className="division1-container">
      <div className="division1-text" style={{ backgroundColor: '#fff9e5' }}>

        <p>PLANT PROTEIN POWDER</p>
        <p className="p-tag">Perfectly Balanced Amino Acids</p>
        <p>Our 100% plant based powder is formulated to fuel your body with pure protein. By blending naturally sourced yellow peas with whole grain rice, this formula provides a complete essential amino acid profile.</p>
        <button class="read-more-button">READ MORE

        </button>


      </div>
      <div className="division1-image">
        <img src={image} alt="Alt Text 1" />

      </div>
    </div>
  )
}

export default Division3