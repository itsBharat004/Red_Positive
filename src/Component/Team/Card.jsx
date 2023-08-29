import React, { useEffect, useRef, useState } from 'react'
import './TeamStyle.css'

const Card = ({value}) => {
    const [skill1,setSkill1]=useState(0);
    const [skill2,setSkill2]=useState(0);
    const [skill3,setSkill3]=useState(0);
    const refSkill1=useRef();
    const refSkill2=useRef();
    const refSkill3=useRef();
    useEffect(()=>{
  
        refSkill1.current.style.background= `conic-gradient(rgb(170, 19, 19) ${skill1*0.01*360}deg, white 0deg)`;
        refSkill2.current.style.background= `conic-gradient(rgb(170, 19, 19) ${skill2*0.01*360}deg, white 0deg)`;
        refSkill3.current.style.background= `conic-gradient(rgb(170, 19, 19) ${skill3*0.01*360}deg, white 0deg)`;
      const percentage=setTimeout(()=>{
        if(skill1<value.skill1)setSkill1(skill1+1);
        if(skill2<value.skill2)setSkill2(skill2+1);
        if(skill3<value.skill3)setSkill3(skill3+1);
      },10);
      if(skill1===value.skill1&&skill2===value.skill2&&skill3===value.skill3){
        clearTimeout(percentage);
      }
      return()=>clearTimeout(percentage);
      
    
    },[skill1,skill2,skill3])

  return (
    <div className='teamCard'>
      <img className='teamCardImg' src={value.imgSrc} alt="not found" />
      <div className="teamCardBody">
      <div class="teamCardName">{value.name}</div>
      <div class="teamCardDesignation">{value.Designation}</div>
      <div className="teamCardSkills">
        <div className="teamCardSkill">
        <div ref={refSkill1} className="teamCardSkill1 teamCardSkillBar">
            <span className='teamCardSkillBarInside'>{skill1+"%"}</span>
            </div>
            Focused
        </div>
        <div className="teamCardSkill">
        <div ref={refSkill2} className="teamCardSkill2 teamCardSkillBar">
            <span className='teamCardSkillBarInside'>{skill2+"%"}</span>
            </div>
            Consultation
        </div>
        <div className="teamCardSkill">
        <div ref={refSkill3} className="teamCardSkill3 teamCardSkillBar">
            <span className='teamCardSkillBarInside'>{skill3+"%"}</span>
            </div>
            Strategy

        </div>
      </div>
      </div>
    </div>
  )
}

export default Card
