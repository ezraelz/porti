import FaqShow from './faqShow';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { faThumbsDown, faThumbsUp, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Reaction = ({ reactId }) => {
    const [count, setCount] = useState({ like: 0, dislike: 0 });
    const [userReaction, setUserReaction] = useState(null);
    const [status, setStatus] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
  
    // Handle scrolling behavior
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
  
      if (currentScrollPosition > scrollPosition) {
        // Scrolling down
        setStatus(true);
      } else {
        // Scrolling up
        setStatus(false);
      }
  
      setScrollPosition(currentScrollPosition);
    };
  
    // Add scroll event listener
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
       }, [scrollPosition]);
  
    // Handle reactions
    const handleReaction = async (reactionType) => {
      try {
        const response = await fetch(`/reactions/${reactId}/${reactionType}`,{
            method:"POST",
            headers: {"Content-Type": "application/json"},
        });
        if (!response.ok){
            console.error("Failed to update reaction",response.statusText);
            return;
        }
        const {updatedLikeCount, updatedDisLikeCount} = await response.json();
        setCount({like:updatedLikeCount || 0, dislike:updatedDisLikeCount || 0});
        setUserReaction(reactionType);
      } catch (error){
        console.error('Error updating reaction:', error);
      }

      
    };
    
  
    return (
      <div className={status ? "reaction hide" : "reaction hide"}>
        <p>
          Thanks for the visit <br />
          <span>What is your reaction?</span>
        </p>
        <div className="container">
          <button className="reaction-close">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <p>
            <FontAwesomeIcon icon={faHeart} className="font" aria-label="Heart" />
            <span className="count">{count.like + count.dislike}</span>
          </p>
          <p onClick={() => handleReaction("like")}>
            <FontAwesomeIcon icon={faThumbsUp} aria-label="Thumbs Up" 
                className={userReaction?"font icon" :"font"}
                 />
            <span className="count">{count.like}</span>
          </p>
          <p onClick={() => handleReaction("dislike")}>
            <FontAwesomeIcon icon={faThumbsDown} aria-label="Thumbs Down" 
            className={`font ${userReaction === "dislike" ? "active" : ""}`}
            />
            <span className="count">{count.dislike}</span>
          </p>
        </div>
      </div>
    );
  };
 
export default Reaction;