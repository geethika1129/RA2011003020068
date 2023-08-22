
import React, { useState } from 'react';
import axios from 'axios';

const SearchTrain = () => {
  const [trainNumber, setTrainNumber] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    axios.get(`http://localhost:5000/api/searchtrain/${trainNumber}`)
      .then(response => {
        setSearchResult(response.data);
      })
      .catch(error => {
        console.error('Error searching for train:', error);
        setSearchResult(null);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Train Number"
        value={trainNumber}
        onChange={e => setTrainNumber(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResult && (
        <div>
          <h2>Search Result</h2>
          {}
          <p>Train Name: {searchResult.trainName}</p>
          <p>Train Number: {searchResult.trainNumber}</p>
          {}
        </div>
      )}
    </div>
  );
};

export default SearchTrain;
