import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


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
    <div className="container mt-5">
      <div className="card p-4">
        <h2 className="text-center mb-4">Search for a Train</h2>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Train Number"
            value={trainNumber}
            onChange={e => setTrainNumber(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={handleSearch}>Search</button>
          </div>
        </div>

        {searchResult && (
          <div className="mt-4">
            <h3 className="text-center">Search Result</h3>
            <div className="card">
              <div className="card-body">
                <p className="card-text">Train Name: {searchResult.trainName}</p>
                <p className="card-text">Train Number: {searchResult.trainNumber}</p>
                {/* Display other train details here */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchTrain;
