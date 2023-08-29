import React from 'react'
import './TeamStyle.css'
import Card from './Card'
const Team = () => {
  return (
    <div id='team' className='team'>
      <h1 className='teamHeading'>
        <span>Meet </span>the team
      </h1>
      <h1 className='teamDes'>
      We are a young start-up comprised of energetic and talented people who are passionate about elegant and efficient design.
      </h1>
      <div className="row1">

      {/* Mantor */}
        <div className="mentor row1Cards">
            <h1 className="mentorHeading"> Mentor</h1>
            <div className="mentorCard">
            <Card value={{imgSrc:"http://res.cloudinary.com/drqizgsy1/image/upload/v1675677500/vrebetuoe98duikfybmi.jpg",name:"Mr. Babulal Yadav",Designation:"MENTOR",skill1:100,skill2:93,skill3:99}}/>
            </div>
            </div>
      {/* director */}
            <div className="director row1Cards">
            <h1 className="directorHeading"> DIRECTOR</h1>
            <div className="directorCard">
            <Card value={{imgSrc:"http://res.cloudinary.com/drqizgsy1/image/upload/v1675677467/eymex4z5aaspll7n1l8o.png",name:"Lekhraj Saini",Designation:"DIRECTOR",skill1:95,skill2:97,skill3:90}}/>
            </div>
            </div>
      </div>

      <h1>Core team members</h1>
      {/* <Card value={{imgSrc:"",name:"",Designation:"",skill1:,skill2:,skill3:}}/> */}
      <div className="row1">

{/* Mantor */}
  <div className=" row1Cards">
      <h1 className="member1Heading"> Mentor</h1>
      <div className="member1Card">
           <Card value={{imgSrc:"http://res.cloudinary.com/drqizgsy1/image/upload/v1674044018/uf1bss31mmylllmyt4qz.png",name:"Moh. Imran",Designation:"CMO",skill1:71,skill2:59,skill3:91}}/>

      </div>
      </div>
{/* Mantor */}
  <div className=" row1Cards">
      <h1 className="member2Heading"> Mentor</h1>
      <div className="member2Card">
           <Card value={{imgSrc:"http://res.cloudinary.com/drqizgsy1/image/upload/v1674044018/uf1bss31mmylllmyt4qz.png",name:"Ms. Keertika Chandrawanshi",Designation:"COO",skill1:64,skill2:64,skill3:64}}/>

      </div>
      </div>
{/* Mantor */}
  <div className=" row1Cards">
      <h1 className="member3Heading"> Mentor</h1>
      <div className="member3Card">
           <Card value={{imgSrc:"http://res.cloudinary.com/drqizgsy1/image/upload/v1674043949/ynymka3cjjhniojq4mmu.jpg",name:"Ms. Ishika Verma",Designation:"ACOO",skill1:91,skill2:93,skill3:91}}/>

      </div>
      </div>

</div>
    </div>
  )
}

export default Team
