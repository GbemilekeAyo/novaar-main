import React from 'react'
import './footer.css'
import Logo from '../../assets/name.png'
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
           <div className="footer-row-left">
            <img src={Logo} alt="LOGO" />
            <p>hello@examle.com</p>
             <p>+234 806854899</p>
             <div>
                <FaFacebook/>
                <FaInstagram/>
                <FaXTwitter/>
             </div>
           </div>

         <div className="footer-row-right">
            <h1>Pages</h1>
            <div>
                <a href="home">Home</a>
                <a href="./project">Project</a>
                <a href="./service">Service</a>
                <a href="./about">About Us</a>
                <a href="./conatc">Contact</a>
            </div>
         </div>
        </div>

        <p className='text-[#ccc]  text-[1.2rem] mt-10 text-center'>&copy;Nova 2024</p>
      </div>
  )
}

export default Footer
