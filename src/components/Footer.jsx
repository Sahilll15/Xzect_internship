import React from 'react'
import style from '../styles/Footer.module.css'

const services = [
    "Software & App Development",
    "Website Development & SEO",
    "Cloud Services",
    "Robotics & Automation",
    "3D Printing & Prototyping",
    "Data Science & Analytics",
    "AI & Machine Learning",
    "IOT, AR & VR",
    "Blockchain",
    "Tech Consultancy",
    "Research & Development",
    "View all Services"
  ];
  
  const industries = [
    "eCommerce",
    "Hyperlocal",
    "Healthcare",
    "Finance",
    "Education",
    "Gaming",
    "Social Networking",
    "Agriculture",
    "Travel & Aviation",
    "Logistics",
    "Restaurant",
    "Real Estate",
    "View all Industries"
  ];
  
  const resources = [
    "About",
    "Tech Stack",
    "Contact Us",
    "Careers",
    "Webinars",
    "Terms & Conditions",
    "Privacy Policy",
    "Legal Information",
    "Blog",
    "Youtube (@xzect_labs)",
    "Github (@xzect)",
    "map this"
  ];
  
const Footer = () => {
  return (
    <div className={style.container}>
        <div className={style.footer}>
            <div className={style.info}>
            <div className={style.heading}>
                Xzect Labs Pvt. Ltd.
                </div>
             <div className={style.content}>
               
                
                <div>
                Xzect provides a diverse array of services that enable both businesses and individuals to bring their vision to life . Our specialties include software development, website design and SEO, cloud services, robotics and automation, 3D printing and prototyping, data science and analytics, AI and machine learning, IOT, AR and VR, blockchain, and other tech-related services. Our team of experienced professionals is available to assist with the design and development of new products, exploration of robotics and automation possibilities, or any other requirements.
                </div>
                <div className={style.address}>
                Registered Address: 203, 2-A/3, Asaf Ali Road, Delhi - 110002
                </div>
                <div style={{color:'grey'}} className={style.address}>
                CIN: U72200DL2022PTC408714
                </div>
             </div>
            </div>

            <div className={style.services}>
                <div className={style.heading}>services</div>
                <div className={style.content}>
                    {services.map((service) => (
                        <div>{service}</div>
                    ))}
                </div>

            </div>
            <div className={style.Industries}>
            <div className={style.heading}>Industries</div> 
            <div className={style.content}>
                    {industries.map((industry) => (
                        <div>{industry}</div>
                    ))}

            </div>
          
    </div>
    <div className={style.Resources}>
                <div className={style.heading}>Resources</div>
                <div className={style.content}>
                    {resources.map((resource) => (
                        <div>{resource}</div>
                    ))}

            </div> 

            </div>
    </div>
    </div>
  )
}

export default Footer;