import React from 'react'
import styles from '../styles/Tech.module.css'
import index from '@/pages';

const technologies = [
    {
      name: "C++",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/cpp.png"
    },
    {
      name: "Python",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/python.png"
    },
    {
      name: "Golang",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/golang.png"
    },
    {
      name: "Rust",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/rust.png"
    },
    {
      name: "Node.js",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/nodejs.png"
    },
    {
      name: "React.js",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/react.png"
    },
    {
      name: "Angular",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/angular.png"
    },
    {
      name: "Vue.js",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/vuejs.png"
    },
    {
      name: "Android",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/android.png"
    },
    {
      name: "Swift",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/swift.png"
    },
    {
      name: "WordPress",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/wordpress.png"
    },
    {
      name: "Magento",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/magento.png"
    },
    {
      name: "Laravel",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/laravel.png"
    },
    {
      name: "CodeIgniter",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/codeigniter.png"
    },
    {
      name: "Django",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/codeigniter.png"
    },
    {
      name: "Solidity",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/solidity.png"
    },
    {
      name: "Flutter",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/flutter.png"
    },
    {
      name: "MySQL",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/mysql.png"
    },
    {
      name: "MongoDB",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/mongodb.png"
    },
    {
      name: "GraphQL",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/graphql.png"
    },
    {
      name: "Docker",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/docker.png"
    },
    {
      name: "Nginx",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/nginx.png"
    },
    {
      name: "Ubuntu",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/ubuntu.png"
    },
    {
      name: "TensorFlow",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/tensorflow.png"
    },
    {
      name: "Keras",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/keras.png"
    },
    {
      name: "OpenCV",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/opencv.png"
    },
    {
      name: "Arduino",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/arduino.png"
    },
    {
      name: "ROS",
      image: "https://www.xzect.com/assets/images/icons/tech-stack/ros.png"
    }
  ];
  


const Tech = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>Leverage our software & hardware expertise</div>
        <div className={styles.subheading}>Use our services and tech expertise to create disruptive products & solutions that can revolutionize your business and stay ahead with evolving technological advancements.</div>
        
        <div className={styles.technologies}>
        {technologies.map((technology, index) => (
            <div className={styles.technology} key={index}>
                <div className={styles.image}>
                    <img src={technology.image} alt={technology.name} />
                    </div>
                    <div className={styles.name}>{technology.name}</div>
            </div>
        ))}

    </div>
    <div>
        <div className={styles.btn}>Explore Our Services</div>
    </div>
    </div>
  )
}

export default Tech