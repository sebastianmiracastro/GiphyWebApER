import React from 'react'
import '../App.css'

export const CardDesign = ({ tittle, image }) => {
  return (
    <div className='CardContainerDesign'>
        <h2 className='CardNameContent'>{tittle}</h2>
        <img src={image} alt="ImageContentGif" />
    </div>
  )
}

export default CardDesign;