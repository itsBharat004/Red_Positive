import React, { useContext, useEffect, useState } from "react";
import "./TeamStyle.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Card from "./Card";
import TeamData from "./TeamData";
const Team = () => {
  const data = useContext(TeamData);
  const [row1Id, setRow1Id] = useState("");
  //showing how much a slider is progress
  const [transitionPercentageRow1, setTransitionPercentageRow1] = useState(0);
  const [row2Id, setRow2Id] = useState("");
  const [transitionPercentageRow2, setTransitionPercentageRow2] = useState(0);
  const handleRow1Slider = () => {
    if (!transitionPercentageRow1) {
      setRow1Id("row1Forward");
      setTransitionPercentageRow1(50);
      console.log(row1Id);
    } else {
      setRow1Id("row1Backward");
      setTransitionPercentageRow1(0);
      console.log(row1Id);
    }
  };
  useEffect(()=>{
    const slider= setTimeout(()=>{
      handleRow1Slider();
     },5000)
     return ()=>{
      clearTimeout(slider)
     }
   },[setTransitionPercentageRow1,row1Id])
  // row 2 slider

  const handleRow2SliderForward = () => {
    if (transitionPercentageRow2 === 0) {
      setRow2Id("row2Forward1");
      setTransitionPercentageRow2(33.33);
      console.log("row2Forward1", row1Id);
    } else if (transitionPercentageRow2 == 33.33) {
      setRow2Id("row2Forward2");
      setTransitionPercentageRow2(66.66);
      console.log("row2Forward2", row1Id);
    } else if (transitionPercentageRow2 == 66.66) {
      setRow2Id("row2Forward3");
      setTransitionPercentageRow2(0);
      console.log("row2Forward3", row1Id);
    }
  };
  const handleRow2SliderBackward = () => {
    if (transitionPercentageRow2 === 0) {
      setRow2Id("row2Backward1");
      setTransitionPercentageRow2(66.66);
      console.log("row2Backward1", row1Id);
    } else if (transitionPercentageRow2 == 33.33) {
      setRow2Id("row2Backward2");
      setTransitionPercentageRow2(0);
      console.log("row2Backward2", row1Id);
    } else if (transitionPercentageRow2 == 66.66) {
      setRow2Id("row2Backward3");
      setTransitionPercentageRow2(33.33);
      console.log("row2Backward3", row1Id);
    }
  };
useEffect(()=>{
 const slider= setTimeout(()=>{
    handleRow2SliderForward();
  },3000)
  return ()=>{
   clearTimeout(slider)
  }
},[setTransitionPercentageRow2,row2Id])
  return (
    <div id="team" className="team">
      <h1 className="teamHeading">
        <span>Meet </span>the team
      </h1>
      <h1 className="teamDes">
        We are a young start-up comprised of energetic and talented people who
        are passionate about elegant and efficient design.
      </h1>
      <div className="TeamContainer1">
        <div onClick={handleRow1Slider} className="leftBtnRow1">
          <KeyboardArrowLeftIcon />
        </div>

        <div id={row1Id} className="row1">
          {data.slice(0, 2).map((item) => {
            return (
              <div className=" row1Cards" key={item.id}>
                <h1 >{item.Designation}</h1>
                <div >
                  <Card value={{ ...item }} />
                </div>
              </div>
            );
          })}
 
        </div>
        <div onClick={handleRow1Slider} className="rightBtnRow1">
          <KeyboardArrowRightIcon />
        </div>
      </div>

      <h1 className="coreHeading">Core team members</h1>
      {/* <Card value={{imgSrc:"",name:"",Designation:"",skill1:,skill2:,skill3:}}/> */}
      <div className="TeamContainer2">
        <div onClick={handleRow2SliderBackward} className="leftBtnRow2">
          <KeyboardArrowLeftIcon />
        </div>
        <div id={row2Id} className="row2">
          {data.slice(2, 5).map((item) => {
            return (
              <div className="row2Cards" key={item.id}>
                <Card value={{ ...item }} />
              </div>
            );
          })}
        </div>
        <div onClick={handleRow2SliderForward} className="rightBtnRow2">
          <KeyboardArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Team;
