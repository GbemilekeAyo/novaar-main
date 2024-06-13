import React from 'react'
import './team.css'
import team1 from '../../assets/team1.webp'
import team2 from '../../assets/team2.webp'
import team3 from '../../assets/team3.webp'
import team4 from '../../assets/team4.webp'
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";




const Team = () => {
  return (
    <div className='team'>
        <div className="team-container">
            <h1>Our Team</h1>
           <div className="team-flex">

           <div className="team-row">
                <div className="team-left">
                 <img src={team1} alt="team1" />
                 <p>Cameroon Williamson</p>
                </div>
                <div className="team-right">
                    <p>CEO</p>
                    <span>
                      <FaFacebook/>
                      <FaXTwitter/>
                      <FaInstagram/>
                    </span>
                </div>
            </div>
                
             <hr />
            <div className="team-row">
                <div className="team-left">
                 <img src={team2} alt="team1" />
                 <p>Albert Flores</p>
                </div>
                <div className="team-right">
                    <p>ARCHITECT</p>
                    <span>
                      <FaFacebook/>
                      <FaXTwitter/>
                      <FaInstagram/>
                    </span>
                </div>
            </div>
         
         <hr />
            <div className="team-row">
                <div className="team-left">
                 <img src={team3} alt="team1" />
                 <p>Annette Black</p>
                </div>
                <div className="team-right">
                    <p>INTERIOR DESIGNER</p>
                    <span>
                      <FaFacebook/>
                      <FaXTwitter/>
                      <FaInstagram/>
                    </span>
                </div>
            </div>
             <hr />
            <div className="team-row">
                <div className="team-left">
                 <img src={team4} alt="team1" />
                 <p>Bessie Copper</p>
                </div>
                <div className="team-right">
                    <p>INTERIOR DESIGNER</p>
                    <span>
                      <FaFacebook/>
                      <FaXTwitter/>
                      <FaInstagram/>
                    </span>
                </div>
            </div>
            </div>
        </div>
        {/*INNOVATIVE SECTION*/}
        <div className="innovative">
          <div className="innovative-container">
          <h1>INNOVATIVE DESIGN</h1>
         <p>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Perferendis accusantium 
        fugit mollitia illum beatae aliquid libero 
        doloribus magnam quia accusamus. Nesciunt 
        excepturi ullam fugit, nihil minus accusamus
         voluptatem. Quas, laudantium.</p>

         <div className='extra'>
          <h1>Our Story  </h1>
          <FaArrowRight/>
         </div>
          </div>
        </div>
        
        {/* CONTACT SECTION*/}
        <div className="contact">
          <h1>Contact</h1>
          <div className="contact-container">
           <h1>Curious about what we can do for you?</h1>
           <a href="#">GET IN TOUCH</a>
          </div>
        </div>

   </div>
  )
}

export default Team
