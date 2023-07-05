import React,{useEffect} from 'react'
import './footer.css'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import video2 from '../../assets/video (2).mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])


  return (
      <section className= 'footer'>
        <div className="videoDiv">
          <video src={video2} loop autoPlay muted type="video/mp4"></video>
        </div>

        <div className="secContent container">
          <div className="contactDiv flex">
            <div data-aos="fade-up" className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Travel With Us</h2>
            </div>

            <div className="inputDiv flex">
              <input data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
              <button data-aos="fade-up" className='btn flex' type='submit'>
               SEND <FiSend className="icon"/>

              </button>
            </div>
          </div>

          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="#" className='logo flex'>
                  <MdOutlineTravelExplore className="icon"/> Travel. 
                </a>
              </div>

              <div data-aos="fade-up" className="footerParagraph">
              “To my mind, the greatest reward and luxury of travel is to be able 
              to experience everyday things as if for the first time, 
              to be in a position in which almost nothing is so familiar it is taken for granted.”
              </div>

              <div data-aos="fade-up" className="footerSocials flex">
                <AiOutlineTwitter className="icon"/>
                <AiFillYoutube className="icon"/>
                <AiFillInstagram className="icon"/>
                <FaTripadvisor className="icon"/>
                
              </div>


            </div>
            <div className="footerLinks grid">
              <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                <span className="groupTitle">
                  OUR AGENCY
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Services
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Insurance
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Agenccy
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Tourism
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Payment
                </li>

              </div>

            </div>
          </div>
        </div>


      </section>
  )
}

export default Footer