// src/components/TrainList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrainCard from './TrainCard';

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/realtime') // Replace with your backend API endpoint
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.error('Error fetching train data:', error);
      });
  }, []);

  return (
    <div>
      {trains.map(train => (
        <TrainCard key={train.trainNumber} train={train} />
      ))}
    </div>
  );
};

export default TrainList;
