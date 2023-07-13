import React from 'react';
import styles from '../styles/Solution.module.css';

const Card = ({ title, link, image }) => {
    return (
      <div className={styles.card}>
        <img className={styles.image} src={image} alt={title} />
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.link}>{link}</p>
        </div>
      </div>
    );
  };
  

const ServicesCard = () => {
 
    const services = [
        {
          title: "Software & App Development",
          link: "Get Started",
            image: "https://www.xzect.com/assets/images/services/software-and-app-dev.jpg"
          
        },
        {
          title: "Website Development & SEO",
          link: "Get Started",
          image: "https://www.xzect.com/assets/images/services/website-dev-and-seo.jpg"
        },
        {
          title: "Cloud Services",
          link: "Get Started",
          image: "https://www.xzect.com/assets/images/services/cloud-services.jpg"
        },
        {
          title: "Robotics & Automation",
          link: "Get Started",
          image: "https://www.xzect.com/assets/images/services/robotics.jpg"
        },
        {
          title: "3D Printing & Prototyping",
          link: "Get Started",
          image: "https://www.xzect.com/assets/images/services/3d-printing-and-prototyping.jpg"
        },
        {
          title: "Data Science & Analytics",
          link: "Get Started",
          image: "https://www.xzect.com/assets/images/services/data-science.jpg"
        },
        {
          title: "AI & Machine Learning",
          link: "Get Started",
          image: "https://www.xzect.com/assets/images/services/machine-learning.jpg"
        },
        {
          title: "IOT, AR & VR",
          link: "Get Started",
          image: "https://www.xzect.com/assets/images/services/ar-vr.jpg"
        },
        {
          title: "Blockchain",
          link: "Get Started",
          image: "https://www.xzect.com/assets/images/services/blockchain.jpg"
        },
        {
          title: "Tech Consultancy",
          link: "Get Started",
          image: "https://www.xzect.com/assets/images/services/tech-consultancy.jpg"
        },
        {
          title: "Research & Development",
          link: "Get Started",
          image: "https://www.xzect.com/assets/images/services/research-and-dev.jpg"
        }
      ];
      

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Customised Solutions for All Your Business Needs</div>
      
      <div className={styles.subheading}>Take Your Business to the Next Level with Our Industry-Leading Services</div>

      <div className={styles.services}>
      {services.map((service, index) => (
        <Card key={index} title={service.title} link={service.link} image={service.image} />
      ))}
      </div>
     
    </div>
  );
};

export default ServicesCard;
