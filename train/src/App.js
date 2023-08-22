// src/App.js
import React from 'react';
import {BrowserRouter ,Routes ,Route ,Navigate} from 'react-router-dom';
import TrainList from './components/TrainList';
import TrainDetails from './components/TrainCard';
import SearchTrain from './components/SearchTrain';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TrainList/>} />
        <Route path="/search" element={<SearchTrain/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
