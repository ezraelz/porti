import proPic from '../static/img/propic.jpg';
import {useState,useEffect} from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    const [isActive, setIsActive] = useState(null);

    const handleClick = (id) => {
        // Toggle the active state
        setIsActive(isActive === id ? null : id);
      };

    return ( 
        <>
            <div className='about' id='about'>
               <div className="about-hero">
                <h2>About Me</h2>
                <p>About | <a href="#contact">Contact</a></p>
               </div>
               <div className="container">
                <div className="about-img">
                                <img src={proPic} alt="" className='img'></img>
                </div>
                <div className="discription">
                        <div id={isActive === "#btn1" ? "btn1" : undefined}
                            className={isActive === "#btn1" ? "modal modal-1" : "modal modal-1 hide"}>
                        <p>Hello! I'm Esrael, a website developer with expertise
                                        in full-stack website development and custom web solutions.
                                        I specialize in creating engaging, user-friendly, 
                                        and high-performance websites that meet clients'
                                        unique needs and help achieve their business goals.
                        </p>
                        <p>
                                        Proficient in front-end and back-end technologies,
                                        including HTML, CSS, JavaScript, React and Django.
                                        I build custom websites tailored to specific needs,
                                        whether it's an e-commerce platform, business site, portfolio, or content management system.
                        </p>
                        <FontAwesomeIcon id="close" icon={faTimes} onClick={() => setIsActive(null)}></FontAwesomeIcon>
                                                        
                    </div>
                    <div id={isActive === "#btn2" ? "btn2" : undefined}
                            className={isActive === "#btn2" ? "modal modal-2" : "modal modal-2 hide"}>
                                    
                        <FontAwesomeIcon id="close" icon={faTimes} onClick={() => setIsActive(null)}></FontAwesomeIcon>
                                    
                    </div>
                    <h1>About Me</h1>
                    <h3>A Website Developer | Expert in Fullstack and Custom Web Solutions</h3>
                    <p>Hello! I'm Esrael, a website developer with expertise
                                    in full-stack website development and custom... 
                                    Proficient in front-end and back-end technologies,
                                    including HTML, CSS, JavaScript, React and Django...
                        <button onClick={() => handleClick("#btn1")}>more</button>
                    </p>
                    <p>
                        Ready to bring your project to life?
                        Feel free to reach out.
                    </p>
                               
                    <button className='btn' id='resume'>Resume</button>
                                
                </div>
               </div>
               <div className='Portfolio' id='skill'>
                    <div className="container">
                        <div className="skills">
                           <h1>SKILLS</h1>
                            <div className="section3">
                            
                                <div className="progress-circle">
                                    <svg width={300} height={300} fill="none">
                                    <defs>
                                        <linearGradient id='grad1'
                                        cx="50%" cy="50%" >
                                            <stop offset="0%" stopColor='#f1c40f'/>
                                            <stop offset='50%' stopColor='#ff6a00'/>
                                            <stop offset="100%" stopColor='#007bff'/>
                                        </linearGradient>
                                    </defs>
                                            {/* Static background circle */}
                                            <circle
                                                cx={120}
                                                cy={120}
                                                r={108}
                                                stroke="lightgray"
                                                strokeWidth={25}
                                                strokeLinecap="round"
                                            />
                                            {/* Dynamic progress circle */}
                                            <circle
                                                cx={120}
                                                cy={120}
                                                r={108}
                                                stroke="url(#grad1)"
                                                strokeWidth={23}
                                                strokeLinecap="round"
                                                strokeDasharray={670}
                                                strokeDashoffset={33.5}
                                                style={{transition: 'all' + 5}}
                                            />
                                    </svg>
                                     <p>
                                        95%<span>HTML</span>
                                    </p>
                                </div>
                                <div className="progress-circle">
                                        <svg width={300} height={300} fill="none">
                                            {/* Static background circle */}
                                            <circle
                                                cx={120}
                                                cy={120}
                                                r={108}
                                                stroke="lightgray"
                                                strokeWidth={23}
                                                strokeLinecap="round"
                                            />
                                            {/* Dynamic progress circle */}
                                            <circle
                                                cx={120}
                                                cy={120}
                                                r={108}
                                                stroke="url(#grad1)"
                                                strokeWidth={23}
                                                strokeLinecap="round"
                                                strokeDasharray={670}
                                                strokeDashoffset={67}
                                            />
                                        </svg>
                                        <p>
                                            90%<span>CSS</span>
                                        </p>
                                </div>
                                
                                <div className="progress-circle">
                                        <svg width={300} height={300} fill="none">
                                            {/* Static background circle */}
                                            <circle
                                                cx={120}
                                                cy={120}
                                                r={108}
                                                stroke="lightgray"
                                                strokeWidth={23}
                                                strokeLinecap="round"
                                            />
                                            {/* Dynamic progress circle */}
                                            <circle
                                                cx={120}
                                                cy={120}
                                                r={108}
                                                stroke="url(#grad1)"
                                                strokeWidth={23}
                                                strokeLinecap="round"
                                                strokeDasharray={670}
                                                strokeDashoffset={134}
                                            />
                                        </svg>
                                        <p>
                                            80%<span>React</span>
                                        </p>
                                </div>
                                <div className="progress-circle">
                                        <svg width={300} height={300} fill="none">
                                            {/* Static background circle */}
                                            <circle
                                                cx={120}
                                                cy={120}
                                                r={108}
                                                stroke="lightgray"
                                                strokeWidth={23}
                                                strokeLinecap="round"
                                            />
                                            {/* Dynamic progress circle */}
                                            <circle
                                                cx={120}
                                                cy={120}
                                                r={108}
                                                stroke="url(#grad1)"
                                                strokeWidth={23}
                                                strokeLinecap="round"
                                                strokeDasharray={670}
                                                strokeDashoffset={67}
                                            />
                                        </svg>
                                        <p>
                                            90%<span>Django</span>
                                        </p>
                                </div> 
                                         
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </>
     );
}
 
export default About;