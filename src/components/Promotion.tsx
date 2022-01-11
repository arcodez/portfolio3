import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Promotion = () => {
  return (
    <i className="section">
      <i className="container">
        <i className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
          <p>{data.promotionPara}</p>
        </i>
      </i>
    </i>
  )
}

export default Promotion
