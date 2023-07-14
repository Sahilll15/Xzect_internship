// services/[page].js

import { useRouter } from 'next/router';
import Consultation from '../../components/Consultation';
import Footer from '../../components/Footer';
import styles from '../../styles/ServicePage.module.css';
import PageNavigation from '@/components/PageNavigation';
import Navbar from '@/components/Navbar';

const ServicePage = () => {
    const router = useRouter();
    const { page } = router.query;
    console.log(page)

    const services = [
        {
            name: "Software & App Development",
            description: "We offer custom software and app development tailored to your business needs.",
            image: "https://www.xzect.com/assets/images/featured/software-and-app-dev.png",
            backgroundColor: "#152d47"
        },
        {
            name: "Website Development & SEO",
            description: "We create professional websites and optimize them for search engines to increase your online visibility.",
            image: "https://www.xzect.com/assets/images/featured/website-dev-and-seo.png",
            backgroundColor: "#154727"
        },
        {
            name: "Cloud Services",
            description: "Our cloud services provide secure and scalable solutions to store, manage, and analyze your data.",
            image: "https://www.xzect.com/assets/images/featured/cloud-services.png",
            backgroundColor: "#384715"
        },
        {
            name: "Robotics & Automation",
            description: "We design and develop robotics and automation solutions to streamline your processes and increase efficiency.",
            image: "https://www.xzect.com/assets/images/featured/robotics-and-automation.png",
            backgroundColor: "#154047"
        },
        {
            name: "3D Printing & Prototyping",
            description: "Utilizing cutting-edge 3D printing technology, we offer prototyping and production services for your designs.",
            image: "https://www.xzect.com/assets/images/featured/3d-printing-and-prototyping.png",
            backgroundColor: "#454715"
        },
        {
            name: "Data Science & Analytics",
            description: "We help businesses make data-driven decisions through advanced analytics and machine learning techniques.",
            image: "https://www.xzect.com/assets/images/featured/data-science-and-analytics.png",
            backgroundColor: "#15473b"
        },
        {
            name: "AI & Machine Learning",
            description: "Leveraging artificial intelligence and machine learning, we develop intelligent systems and automation solutions.",
            image: "https://www.xzect.com/assets/images/featured/ai-and-machine-learning.png",
            backgroundColor: "#473e15"
        },
        {
            name: "IoT & VR",
            description: "We offer innovative IoT, augmented reality, and virtual reality solutions to enhance user experiences.",
            image: "https://www.xzect.com/assets/images/featured/iot-ar-vr.png",
            backgroundColor: "#152347"
        },
        {
            name: "Blockchain",
            description: "Our blockchain experts provide secure and decentralized solutions for various industries.",
            image: "https://www.xzect.com/assets/images/featured/blockchain.png",
            backgroundColor: "#100c33"
        },
        {
            name: "Tech Consultancy",
            description: "Our experienced consultants provide strategic guidance and technical expertise for your business.",
            image: "https://www.xzect.com/assets/images/featured/tech-consultancy.png",
            backgroundColor: "#0c330c"
        },
        {
            name: "Research & Development",
            description: "We conduct research and development activities to drive innovation and solve complex problems.",
            image: "https://www.xzect.com/assets/images/featured/research-and-development.png",
            backgroundColor: "#330c18"
        }
    ];

    const decodedPage = decodeURIComponent(page);
    const service = services.find((s) => s.name === decodedPage);

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <div>
            <Navbar />
            <div className={styles.hero} style={{ backgroundColor: `${service.backgroundColor}` }}>

                <div className={styles.left}>
                    <div className={styles.navigation}>
                        <PageNavigation title={'service'} service={`${service.name}`} />
                    </div>


                    <div className={styles.heading}>
                        {service.name}
                    </div>

                    <div className={styles.subheading}>
                        {service.description}

                    </div>

                    <div className={styles.button}>
                        Consult with an Expert
                    </div>


                </div>
                <div className={styles.img}>
                    <img className={styles.img} src={service.image} alt="" />
                </div>
            </div>


            <Consultation />
            <Footer />
        </div>
    );
};

export default ServicePage;
