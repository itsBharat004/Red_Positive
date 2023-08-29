import React from 'react'

const ServicesGenricCompo = ({value}) => {
  return (
    <>
    <div className='ServicesGenricCompo'>
    <div className='ServicesGenricCompoFirst'>
        <img  className='ServicesGenricCompoFirstImg'src={value?.imgSrc} alt="not found" />
    </div>
    <div className='ServicesGenricCompoSecond'>
         {value?.heading   &&<h1 className='ServicesGenricCompoSecondHeading'>   {value?.heading}   </h1>}
        {value?.subTitle   &&<h6 className='ServicesGenricCompoSecondSubTitle'>  {value?.subTitle}  </h6>}
        {value?.subTitleDes&&<p className='ServicesGenricCompoSecondSubTitleDes'>{value?.subTitleDes}</p>}
      {/* subheading1 */}
        {value?.subHeading1&&<h2 className='ServicesGenricCompoSecondSubHeading'>{value?.subHeading1}</h2>}
        {value?.subHeading1Img1&&<h2 className='ServicesGenricCompoSecondSubHeadingImgs'>
           <div className='ServicesGenricCompoSecondSubHeadingImg'><img  src={value?.subHeading1Img1} alt="not found" /></div>
           <div className='ServicesGenricCompoSecondSubHeadingImg'><img  src={value?.subHeading1Img2} alt="not found" /></div>
           <div className='ServicesGenricCompoSecondSubHeadingImg'><img  src={value?.subHeading1Img3} alt="not found" /></div>
           <div className='ServicesGenricCompoSecondSubHeadingImg'><img  src={value?.subHeading1Img4} alt="not found" /></div>
        </h2>}
       { value?.subHeading1Des&&<p className='ServicesGenricCompoSecondSubHeadingDec'>{value?.subHeading1Des}</p>}
      {/* subheading2 */}
      {value?.subHeading2 && <h2 className='ServicesGenricCompoSecondSubHeading'>{value?.subHeading2}</h2>}
        {value?.subHeading2Img1&& <h2 className='ServicesGenricCompoSecondSubHeadingImgs'>
          <div className='ServicesGenricCompoSecondSubHeadingImg'> <img  src={value?.subHeading2Img1} alt="not found" /></div>
          <div className='ServicesGenricCompoSecondSubHeadingImg'> <img  src={value?.subHeading2Img2} alt="not found" /></div>
          <div className='ServicesGenricCompoSecondSubHeadingImg'> <img  src={value?.subHeading2Img3} alt="not found" /></div>
          <div className='ServicesGenricCompoSecondSubHeadingImg'> <img  src={value?.subHeading2Img4} alt="not found" /></div>  
        </h2>}
        {value?.subHeading2Des&&<p className='ServicesGenricCompoSecondSubHeadingDec'> {value?.subHeading2Des}</p>}
      {/* subheading 3 */}
      {value?.subHeading3&&<h2 className='ServicesGenricCompoSecondSubHeading'>{value?.subHeading3}</h2>}
      {value?.subHeading3Img&&  <h2 className='ServicesGenricCompoSecondSubHeadingImgs'>
            <img className='ServicesGenricCompoSecondSubHeadingImg3' src={value?.subHeading3Img} alt="not found" />
        </h2>}
    </div>
 

    </div>
             {/* subheading 4*/}
             {value?.subHeading4 && <h2 className='ServicesGenricCompoSecondSubHeading ServicesGenricCompoSecondSubHeading4'>{value?.subHeading4}</h2>}
          {value?.subHeading4Img1&&  <h2 className='ServicesGenricCompoSecondSubHeadingImgsDots'>
           <img className=  'ServicesGenricCompoSecondSubHeadingImgDot' src={value?.subHeading4Img1} alt="not found" />
           <div className="arrows">
            <img className="arrow" src={value?.arrowImg} alt="not found" />
            <img className="arrow" src={value?.arrowImg} alt="not found" />
            <img className="arrow" src={value?.arrowImg} alt="not found" />
           </div>
           <img className='ServicesGenricCompoSecondSubHeadingImgDot' src={value?.subHeading4Img2} alt="not found" />
           <div className="arrows">
            <img className="arrow" src={value?.arrowImg} alt="not found" />
            <img className="arrow" src={value?.arrowImg} alt="not found" />
            <img className="arrow" src={value?.arrowImg} alt="not found" />
           </div>
           <img className='ServicesGenricCompoSecondSubHeadingImgDot' src={value?.subHeading4Img3} alt="not found" />
           <div className="arrows">
            <img className="arrow" src={value?.arrowImg} alt="not found" />
            <img className="arrow" src={value?.arrowImg} alt="not found" />
            <img className="arrow" src={value?.arrowImg} alt="not found" />
           </div>
           <img className='ServicesGenricCompoSecondSubHeadingImgDot' src={value?.subHeading4Img4} alt="not found" />    
        </h2>}

          {/* subheading 5*/}
          {value?.subHeading4 && <h2 className='ServicesGenricCompoSecondSubHeading ServicesGenricCompoSecondSubHeading5'>{value?.subHeading5}</h2>}
          {value?.subHeading4Img1&&  <h2 className='ServicesGenricCompoSecondSubHeadingImgsDots'>
         <img className=  'ServicesGenricCompoSecondSubHeadingImgDot' src={value?.subHeading4Img2} alt="not found" />
         <div className="arrows">
            <img className="arrow" src={value?.arrowImg} alt="not found" />
            <img className="arrow" src={value?.arrowImg} alt="not found" />
            <img className="arrow" src={value?.arrowImg} alt="not found" />
           </div>
           <img className='ServicesGenricCompoSecondSubHeadingImgDot' src={value?.subHeading4Img4} alt="not found" />
        </h2>}
    </>
  )
}

export default ServicesGenricCompo
