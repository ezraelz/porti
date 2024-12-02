import {useState,useEffect} from 'react';

const Services = () => {
    const [isHovered, setIsHovered] = useState(false);

    const hoverEffect = (className) => {
        setIsHovered(className);
    };

    const handleMouseLeave = () => {
        setIsHovered(null);
    }

    return ( 
        <>
            <div className="service">
                <div className="service-hero">
                    <h2>Services</h2>
                    <p>Services | <a href="#contact">Contact</a></p>
               </div>
               <div className="services" id='services'>
                    <div className="container">
                        <div className="service1" onMouseEnter={() => hoverEffect("service1")} onMouseLeave={handleMouseLeave}>
                            <div className={isHovered === "service1" ? "hidden-content" : "hidden-content hide"}>
                                <h2>UI/UX</h2>
                                <p>With a strong focus on 
                                    user-centered design, I blend 
                                    aesthetics and functionality to
                                    create interfaces that are not
                                    only visually appealing but also easy to navigate.
                                </p>
                            </div>
                        </div>
                        <div className="service2" onMouseEnter={() => hoverEffect("service2")} onMouseLeave={handleMouseLeave}>
                            
                            <div className={isHovered==="service2" ? "hidden-content" : "hidden-content hide"}>
                                <h2>Website Development</h2>
                                <p> From creating sleek landing pages
                                    to full-stack applications, I am
                                    committed to
                                    delivering high-quality, 
                                    scalable web solutions.
                                </p>
                            </div>
                        </div>
                        <div className="service3" onMouseEnter={()=> hoverEffect("service3")} onMouseLeave={handleMouseLeave}>
                            
                            <div className={isHovered==="service3" ? "hidden-content" : "hidden-content hide"}>
                                <h2>Consulting</h2>
                                <p> I focus on creating a safe, 
                                    supportive environment where
                                    clients feel heard and understood.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Services;