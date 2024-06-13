import React from 'react';
import  './services.css'
import Card from '../../UI/Card'
import { FaArrowRight } from "react-icons/fa";
import Team from '../Team/Team';

const Services = () => {
  return (
    <div className='services'>
      <header>Our Services</header>

      <div className="services-container">
        <div className="services-row">
            <span>01</span>
            <h1>Architecture Design</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Esse, vero recusandae molestiae rerum impedit aspernatur hic
            sint voluptas aperiam. Facere ipsum ducimus dolores pariatur
             nisi dolore corporis sapiente optio nobis?</p>
        </div>

        <hr className='hr' />

        <div className="services-row">
            <span>02</span>
            <h1>Interior Design</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Esse, vero recusandae molestiae rerum impedit aspernatur hic
            sint voluptas aperiam. Facere ipsum ducimus dolores pariatur
             nisi dolore corporis sapiente optio nobis?</p>
        </div>
         
         <hr className='hr'/>
        <div className="services-row mb-[7%]">
            <span>03</span>
            <h1>Exterior Design</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Esse, vero recusandae molestiae rerum impedit aspernatur hic
            sint voluptas aperiam. Facere ipsum ducimus dolores pariatur
             nisi dolore corporis sapiente optio nobis?</p>
        </div>
       </div>
    
       {/*CARD*/}
       <div className='card1'>
        <Card
        headerText='OCEAN WAVE'
        paragraghText='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet fuga nostrum deleniti ipsam mollitia, molestiae debitis'
        />
        <div className="card-flex">
          <span>
            <p>Commercial</p>
            <p>Berlin</p>
          </span>
          <h1>Explore</h1>
        </div>
        
        </div>

        <div className='card2'>
        <Card
        headerText='PUZZLE TOWER'
        paragraghText='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet fuga nostrum deleniti ipsam mollitia, molestiae debitis'
        />
        <div className="card-flex">
          <span>
            <p>Commercial</p>
            <p>Berlin</p>
          </span>
          <h1>Explore</h1>
        </div>
        </div>

        <div className='card3'>
        <Card
        headerText='HONEY COMB'
        paragraghText='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet fuga nostrum deleniti ipsam mollitia, molestiae debitis'
        />
        <div className="card-flex">
          <span>
            <p>Commercial</p>
            <p>Berlin</p>
          </span>
          <h1>Explore</h1>
        </div>
        </div>

        <div className='card4'>
        <Card
        headerText='YELLOW SUITES'
        paragraghText='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet fuga nostrum deleniti ipsam mollitia, molestiae debitis'
        />
        <div className="card-flex">
          <span>
            <p>Commerial</p>
            <p>Berlin</p>
          </span>
          <h1>Explore</h1>
        </div>
        </div>

        {/*ARCHITECTURE IN MOTION SECTION*/}
       <div className="motion">
        <div className="motion-container">
          <div className='motion-text'>
            <h1>Architecture in Motion</h1>
            <p>Lorem ipsum dolor, sit amet consectetur
             adipisicing elit. Esse tenetur dolorum, 
             corrupti aliquam maxime quo ipsum dicta quis,
             suscipit harum non. Illo sint laboriosam numquam
             natus. Suscipit harum delectus quidem.
            </p>
            <span>
              <p>Our Service</p>
              <FaArrowRight />
            </span>
          </div>
          <div className="motion-grid">
            <div className="motion-grid-row">
            <h1>200+</h1>
            <h2>PROPERTIES</h2>
            <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Enim ipsam pariatur tempore
             mollitia nesciunt aliquam officia placeat sit 
             tenetur aut!</p>
            </div>

            <div className="motion-grid-row">
            <h1>300+</h1>
            <h2>CLIENTS</h2>
            <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Enim ipsam pariatur tempore
             mollitia nesciunt aliquam officia placeat sit 
             tenetur aut!</p>
            </div>

            <div className="motion-grid-row">
            <h1>100%</h1>
            <h2>HAPPY CLIENTS</h2>
            <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Enim ipsam pariatur tempore
             mollitia nesciunt aliquam officia placeat sit 
             tenetur aut!</p>
            </div>

            <div className="motion-grid-row">
            <h1>900K</h1>
            <h2>FOLLOWERS</h2>
            <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Enim ipsam pariatur tempore
             mollitia nesciunt aliquam officia placeat sit 
             tenetur aut!</p>
            </div>
          </div>
        </div>
       </div>
      <Team/>
    </div>
  )
}

export default Services
