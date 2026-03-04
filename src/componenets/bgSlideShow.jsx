import React, {useState, useEffect} from "react";
import { faAngleDoubleLeft,faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SlideShow = ({images, interval = 5000}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // auto slde effect
    useEffect (()=>{
        const slideInterval = setInterval(()=>{
            setCurrentIndex((prevIndex) => (
                prevIndex + 1 
            )% images.length);
        }, interval);

        return () => clearInterval(slideInterval);
    }, [images.length, interval]);

    return ( 
        <div className="slideshow-container" 
            style={{
                background: `url(${images[currentIndex]})`,
            }}>
            

        </div>
     );
}
 
export default SlideShow;