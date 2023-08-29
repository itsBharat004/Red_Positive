import React, { useState } from 'react'
import './ServicesStyle.css'
import { useContext } from 'react'
import ServicesData from './ServicesData'
import ServicesCard from './ServicesCard'
import ServicesGenricCompo from './ServicesGenricCompo'
import ProductData from './ProductData'
const Services = () => {
  const [currentProdunctIndex,setcurrentProdunctIndex]=useState(0);
  const CardData=useContext(ServicesData);
  const ProductDatas=useContext(ProductData);
  console.log(CardData)
  return (
    <div className='services'>
      <h1><span>
      <span className='servicesheading'>Excl</span>usive 
      <span className='servicesheading2'> products</span>
        </span> </h1>
        {/* <ServicesCard/> */}
        <div className="servicesCards">
        {
          CardData.map((item,index)=>{
          return(
            <div onClick={()=>setcurrentProdunctIndex(index)} key={item.id} className='servicesCard'>

        <ServicesCard value={{...item}}/>

            </div>
          )
          })
        }
    </div>
    <ServicesGenricCompo value={{...ProductDatas[currentProdunctIndex]}}/>
    </div>
  )
}

export default Services
