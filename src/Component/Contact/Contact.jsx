import React, { useEffect, useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import './ContactStyle.css'

  
const Contact = () => {
    const [showUpdate,setShowUpdate]=useState("");
     
  useEffect(() => {
   let func= setTimeout(()=>{setShowUpdate("")},5000)
  console.log("called effect")
    return () => {
     clearTimeout(func);
    }
  }, [showUpdate])
    const[result,showResult]=useState(false);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [message,setMessage]=useState("");
    const form=useRef();
    const handleSubmit=(e)=>{
        
        e.preventDefault(); 
        var templateParams = {
            user_name:name,
            user_email:email,
            phoneNumber:phone,
            message:message,
        };
         
        emailjs.send('service_l8u32ft', 'template_ucy6fnk', templateParams,'7MWnsbWHW9H6kN-yX')    
           .then(result => {
                console.log(result.text);
              

            })
            .catch(error => { console.log(error.text) })
            // e.target.reset();
            setShowUpdate("Thank you for your message. We will connect with you shortly.")
            console.log("result change",showUpdate)
            showResult(true);
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
           
    };
    
  return (
    <div id='contact' className='contact'>
    <div className='contactContainer '>
   <h1><span>Con</span>tact</h1>
   <div className="contactImages">
   <img className='contanctImg1' src="https://www.redpositive.in/images/polygoncontact2.png" alt="not found" />
   <img className='contanctImgMain' src="https://www.redpositive.in/images/contact1_gif.gif" alt="not found" />
   <img className='contanctImg2' src="https://www.redpositive.in/images/polygoncontact1.png" alt="not found" />
   </div>
   {/* location */}
 <div className="locationCards">
    {/* email */}
    <div className="socialCard">
        <div className="socialCardTop">
            <img className='socialCardTopImg' src="https://www.redpositive.in/images/email.png" alt="not found" />
           <div className="socialCardTopText">e-mail</div>
        </div>
        <div className="socialCardBottom">info@redpositive.in</div>
    </div>
    {/* address */}
    <div className="socialCard">
        <div className="socialCardTop">
            <img className='socialCardTopImg2' src="https://www.redpositive.in/images/address.png" alt="not found" />
           <div className="socialCardTopText">Address</div>
        </div>
        <div className="socialCardBottom">115 Salasar Vatika 9th, NangalnRoad, Jhotwara, Jaipur, Rajasthan 302012</div>
    </div>
    <img className='locationCardImg' src="https://www.redpositive.in/images/polygoncontact3.png" alt="not found" />
 </div>
   {/* mail */}
   <div className="mail">
    <div className="mailFirst">
        <img className="mailFirstImg" src="https://www.redpositive.in/images/contact2_gif.gif" alt="not found" />
    </div>
    <div className="mailSecond">
        <div className="contactForm">
        <h1>Have some questions!!!</h1>
        <form ref={form} className='form'>
            <input className='contactField' type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Full name' name="user_name" required/>
            <input className='contactField' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='e-mail' name="user_email" required/>
            <input className='contactField' type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Phone' name='phoneNumber' required/>
            <input className='contactField message' type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='message' required />
            <button onClick={handleSubmit} className="submitBtn">Submit</button>
            </form>
            <div className="row">{result&& showUpdate}</div>

        </div>
        <div className="contactSocialMedia">
            <h1>Find us on social media</h1>
         
           <div>
            <img className="contactSocialMediaImg" src="https://www.redpositive.in/images/facebook.png" alt="not found" />
            <img className="contactSocialMediaImg" src="https://www.redpositive.in/images/instagram.png" alt="not found" />
            <img className="contactSocialMediaImg" src="https://www.redpositive.in/images/linkedin.png" alt="not found" />
            <img className="contactSocialMediaImg" src="https://www.redpositive.in/images/youtube.png" alt="not found" />
            <img className="contactSocialMediaImg" src="https://www.redpositive.in/images/twitter.png" alt="not found" />
         
           </div>
            <p>©All Right Reserved | RedPositive Service OPC Private Limited</p>
        </div>

    </div>
   </div>

    </div>
    </div>
  )
}

export default Contact

// import emailjs from "@emailjs/browser";
// import { useState } from "react";
// const Result =()=>{
//     return (
//         <p>Your message has been successfullly sent, i will contact you soon</p>
//     )
// }
// export default function ContactForm(props) {
//     const[result,showResult]=useState(false);
   
//     const sendEmail = (e) => {
//         e.preventDefault();
//         emailjs.sendForm('service_vpmualg', 'template_ucy6fnk',e.target, '7MWnsbWHW9H6kN-yX')
  
//            .then(result => {
//                 console.log(result.text);
//                 alert("message send");

//             })
//             .catch(error => { console.log(error.text) })
//             e.target.reset();
//             showResult(true);
//     };
   
//     return (
//         <>
//             <div className="form">
//                 <h2>Send us mail</h2>
//                 {/* <form ref={form} onSubmit={sendEmail} className="styledForm" > */}
//                 <form action="" onSubmit={sendEmail} className="styledForm" >
//                     <label className="styledLabel">Full Name</label>
//                     <input className="styledInput" type="text" name="user_name" required />
//                     <label className="styledLable">Email</label>
//                     <input className="styledInput" type="email" name="email" required/>
//                     <label className="styledLabel">Message</label>
//                     <input className="styledInput2" type="text" name="message" required />
//                     <input className="styledInput" type="submit" value="send" />


//                 </form>
//                 <div className="row">{result?<Result/>:null}</div>
//                 <div className="location">
//                 <h4>Located In</h4>
//                 <p> new delhi-110044</p>
//                 <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8454.984048955728!2d77.23905829648399!3d28.572252877289426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3ff2179f111%3A0xe0f8dbc3a1b3378e!2sBlueStone%20Jewellery%20Lajpat%20Nagar!5e0!3m2!1sen!2sin!4v1666783736785!5m2!1sen!2sin"
//                  width="100%"
//                   height="450"
//                   style={{border:0}}
//                   allowFullScreen=""
//                   loading="lazy" 
//                   referrerpolicy="no-referrer-when-downgrade">

//                      </iframe>
//                 </div>
                
//             </div>

//         </>

//     );
// }