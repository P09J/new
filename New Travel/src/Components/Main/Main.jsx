import React,{useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../assets/img (1).jpg'
import img2 from '../../assets/img (2).jpg'
import img3 from '../../assets/img (3).jpg'
import img4 from '../../assets/img (4).jpg'
import img5 from '../../assets/img (5).jpg'
import img6 from '../../assets/img (6).jpg'
import img7 from '../../assets/img (7).jpg'
import img8 from '../../assets/img (8).jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Data =[
  {
    id:1,
    imgSrc: img,
    destTitle: 'Gulmarg',
    location: 'Kashmir',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Located in the Pir Panjal Range of the Himalayas, Gulmarg is a renowned skiing destination during the winter season.'
    },

    {
      id:2,
      imgSrc: img2,
      destTitle: 'Taj Mahal',
      location: 'Agra',
      grade: 'Monument',
      fees: '$200',
      description: 'This iconic masterpiece is widely regarded as one of the most beautiful buildings in the world and holds a special place as a symbol of eternal love.'
      },
      {
        id:3,
        imgSrc: img3,
        destTitle: 'Silicon valley Of india',
        location: 'Bengluru',
        grade: 'IT Masterpiece',
        fees: '$800',
        description: 'Bengaluru is a vibrant city that seamlessly blends its rich cultural heritage with modernity.'
        },
        {
          id:4,
          imgSrc: img4,
          destTitle: 'Monsoon King',
          location: 'Pune',
          grade: 'Vibrant CULTURAl',
          fees: '$600',
          description: 'Pune, also known as the "Oxford of the East," is a vibrant city located in the western Indian state of Maharashtra'
          },
          {
            id:5,
            imgSrc: img5,
            destTitle: 'Kishkindha',
            location: 'Hampi',
            grade: 'Heritage Site',
            fees: '$800',
            description: 'Hampi is an ancient and UNESCO World Heritage Site located in the northern part of the Indian state of Karnataka.'
            },
            {
              id:6,
              imgSrc: img6,
              destTitle: 'Mohen Jodaro',
              location: 'Sindh',
              grade: 'Ancient Tales',
              fees: '$700',
              description: 'Mohenjo-daro is an ancient archaeological site located in the Sindh province of present-day Pakistan'
              },
              {
                id:7,
                imgSrc: img7,
                destTitle: 'Beach',
                location: 'Goa',
                grade: 'Night Life',
                fees: '$1000',
                description: 'Goa is a coastal state located on the southwestern coast of India, known for its stunning beaches, vibrant culture, and Portuguese influence.'
                },

                {
                  id:8,
                  imgSrc: img8,
                  destTitle: 'Kolkata',
                  location: 'West Bengal',
                  grade: 'Durga Puja',
                  fees: '$500',
                  description: 'Kolkata has a rich cultural heritage and is often referred to as the "Cultural Capital of India." '
                  },

    ]

const Main = () => {
  
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])
 
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">

        {
          Data.map((item)=>{
            const { id, imgSrc, destTitle, location, grade, fees, description } = item;
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                      </div>

                      <div className="desc">
                        <p>{description}</p>
                        </div>

                        <button className='btn flex'>
                          DETAILS<HiOutlineClipboardCheck className="icon"/>
                          </button>  
                </div>


              </div>


            )

            
          })
        }


      </div>


    </section>
  )
}

export default Main