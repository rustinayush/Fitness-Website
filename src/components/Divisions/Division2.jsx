import React from 'react'
import image from "../../assets/body-item/2.JPG"
import "./Division2.css"


const Division2 = () => {
  return (
    <div className="section2-container">

      <div className="division2-image">
        <img src={image} alt="Alt Text 1" />

      </div>
      <div className="division2-text">

        <p>WHEY PROTEIN</p>
        <p className="p-tag">Developed By Sports Nutrition Experts</p>
        <p>Näck’s Whey Protein is expertly formulated to fuel your workouts, boost muscle growth, enhance recovery and support weight management.</p>
        <button class="read-more-button">READ MORE

        </button>


      </div>
    </div>
  )
}

export default Division2