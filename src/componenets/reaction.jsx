import React, { useState, useEffect } from 'react';
import { 
  faThumbsDown, 
  faThumbsUp, 
  faHeart, 
  faTimes,
  faSmile
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import api from '../service/api';
import { useReactions } from '../hooks/useReactions';

const reactionType = ['like', 'dislike']

const Reaction = () => {
  const [count, setCount] = useState({ like: 0, dislike: 0 });
  const {reactions, fetchReaction} = useReactions();
  const [userReaction, setUserReaction] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() =>{
    fetchReaction();
  }, []);

  const handleReaction = async (reaction) => {
    // Update counts
    setCount(prev => {
      if (reaction === 'like') {
        return {
          like: prev.like + (userReaction === 'like' ? -1 : 1),
          dislike: userReaction === 'dislike' ? prev.dislike - 1 : prev.dislike
        };
      }

      return {
        dislike: prev.dislike + (userReaction === 'dislike' ? -1 : 1),
        like: userReaction === 'like' ? prev.like - 1 : prev.like
      };
    });

    // Toggle user reaction
    setUserReaction(prev => (prev === reaction ? null : reaction));

    // Send to backend
    try {
      const res = await api.post('/reactions/', {
        reaction: reaction
      });
      console.log('sent reaction', res.data);
    } catch (err) {
      console.error('reaction failed', err);
    }
  };



  const handleClose = () => setIsVisible(false);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg"
      >
        <FontAwesomeIcon icon={faSmile} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-xl max-w-xs">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-white font-semibold">Enjoying the content?</h3>
            <p className="text-gray-400 text-sm">Share your reaction</p>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-white -mt-9 ml-6"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <FontAwesomeIcon icon={faHeart} className="text-red-500" />
            <span>{reactions.length + count.like + count.dislike} reactions</span>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon 
                icon={faThumbsUp} 
                className={count.like > 0 ? 'text-green-500' : 'text-gray-500'}
              />
              <span className="text-white text-sm">{count.like}</span>
            </div>
            <div className="flex items-center gap-1">
              <FontAwesomeIcon 
                icon={faThumbsDown} 
                className={count.dislike > 0 ? 'text-red-500' : 'text-gray-500'}
              />
              <span className="text-white text-sm">{count.dislike}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          {reactionType.map((r)=>
          <button
            type='button'
            key={r}
            onClick={() => handleReaction(r)}
            className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 ${
              userReaction === r
                ? 'bg-green-500/20 text-green-400 border border-green-500'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}>
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>{r}</span>
          </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reaction;