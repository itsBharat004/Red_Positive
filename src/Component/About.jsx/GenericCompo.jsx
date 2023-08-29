import React from 'react'
import './AboutStyle.css'
const GenericCompo = ({value}) => {
    console.log(value)
    console.log(value.rightToLeft)
  return (
    <div className={value.rightToLeft?'genericCompoRToL':'genericCompoLToR'}>
    <img className="genericCompoImg" src={value.imgSrc} alt="not found" />      
    <div className="genericCompoText">
        <h1 className="genericCompoTitle">{value.title}</h1>
        <div className="genericCompoDes">{value.dec}</div>
    </div>
    </div>
  )
}

export default GenericCompo
