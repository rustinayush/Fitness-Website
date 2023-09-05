import React from 'react'
import image from "../../assets/body-item/5.JPG"
import "./Division1.css"


const Division5 = () => {
  return (
    <div className="division1-container" >
      <div className="division1-text">

        <p>HEALTH COACHES</p>
        <p className="p-tag">Meet Our Experts</p>
        <p>Searching for an expert within nutrition, fitness or mental health? Look no further. Our best in class experts are just one click away and ready to support you from the comfort of your home.</p>
        <button class="read-more-button">READ MORE

        </button>


      </div>
      <div className="division1-image">
        <img src={image} alt="Alt Text 1" />

      </div>
    </div>
  )
}

export default Division5