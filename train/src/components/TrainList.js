import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrainCard from './TrainCard';
import 'bootstrap/dist/css/bootstrap.min.css';


const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/realtime')
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.error('Error fetching train data:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Train Schedule</h2>
      <div className="row">
        {trains.map(train => (
          <div key={train.trainNumber} className="col-md-4 mb-4">
            <TrainCard train={train} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainList;
