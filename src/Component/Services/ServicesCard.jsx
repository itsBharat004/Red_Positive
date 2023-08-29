import React from 'react'
import './ServicesStyle.css'

const ServicesCard = ({value}) => {
  return (
      <>
      <img className='servicesCardImg' src={value.imgSrc} alt="not found" />
      <div className="servicesCardBody">
      <div className="servicesCardTitle">
        <div className="servicesCardTitle1">{value?.title1}</div>
        <div className="servicesCardTitle2">{value?.title2}</div>
      </div>
      <div class="servicesCardDes">{value?.des}</div> 
      </div>
      <img className='servicesCardBorderImg' src="https://www.redpositive.in/images/polygon_3.png" alt="not found" />
      </>
  )
}

export default ServicesCard
