import React from 'react';
import Image from '../../assets/image.jpg'; // Replace with your image file
import './about.css'
//import Navbar from '../Navbar/Navbar'
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'react-bootstrap';


const About = () => {
  return (
  
  
    <>
     <section className ='about'>
      <div className="overlay"></div>
      <img src={Image} />
      <div className="homeContent container">
        <div className="textDiv">

        <h1 className="aboutTitle">
          ABOUT US
        </h1>

        </div>

      </div>

     

     

      
     </section>

     <div className="about-content">
        <div className="company-details-card">
          <h2>Company Mission: </h2>
          <p>
            Our mission is to be the leading and most trustworthy travel management company that sets the standard for professionalism, reliability, and transparency to its customers.
          </p>
          {/* Add more details as needed */}
        </div>

        </div>

        <div className="about-content">
        <div className="company-details-card">
          <h2>Company Strengths: </h2>
          <p > </p>
          <ul className="company-strengths-list" >
            <li>
              
              We have varied experience with global networking travel management companies
            </li>
            <li>
            Broad expertise in the local travel market
            </li>
            <li>
            Client-first approach to business
            </li>
          </ul>
          
          {/* Add more details as needed */}
        </div>

        <div className="about-content" style={{'padding-bottom':'5%'}}>
          <div className="company-details-card" >
            <h2>Turn around time experts:</h2>
            <p>
            Our excellent rapport of over two decades with the Airlines, Hotels, Car Rentals, Visa Providers has given us the confidence to do the best in times of crisis or emergencies and won us the trust of our clients. Robust decision making process owing to us being a single owner agency enables us to “Focus on exceeding service expectation”.
          </p>
          </div>
        </div>

        <div  className="grid_6 blue fade-right animate1 animated fadeInRight">
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>CREATIVE</Accordion.Header>
        <Accordion.Body>
        Passionate, Innovative, Integrity, Commitment and Teamwork are the core values of Yatra Tours & Travels Pvt. Ltd.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>DYNAMIC</Accordion.Header>
        <Accordion.Body>
       
        Yatra Tours & Travels Pvt. Ltd. wants to be recognised by it’s peers and customers as the foremost leader in the tours and travels industry.
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>PROFESSIONAL</Accordion.Header>
        <Accordion.Body>
       
        Yatra Tours & Travels Pvt. Ltd. offers a wide variety of tours and holidays and have separate divisions for corporate travel, tailor-made holidays and escorted tours.
        
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>

        <div className="contact-card">
          <h2>Contact Us</h2>
          <p>Phone: +91-8986767574</p>
          <p>Email: Yatrainfo@gmail.com</p>
          <p>Address: #358, Road No:80, Jubilee Hills,
Hyderabad - 500096,
Telangana, India
</p>
        </div>


        </div>

       
      

       

        </>

   

     
    
 )
}
    
    export default About;