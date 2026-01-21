import { useState } from 'react';
import api from '../service/api';

export const useReactions = () => {
  const [reactions, setReactions] = useState([]);

  const fetchReaction = async () => {
    const res = await api.get('/reactions/');
    setReactions(res.data);
  };

  return {
    reactions,
    setReactions,
    fetchReaction
  };
};
