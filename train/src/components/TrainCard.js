// src/components/TrainCard.js
import React from 'react';

const TrainCard = ({ train }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    marginBottom: '8px',
  };

  const detailStyle = {
    fontSize: '1rem',
  };

  return (
    <div style={cardStyle}>
      <h2 style={headingStyle}>{train.trainName}</h2>
      <p style={detailStyle}>Train Number: {train.trainNumber}</p>
      {/* Other train details */}
    </div>
  );
};

export default TrainCard;
