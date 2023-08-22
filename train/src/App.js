// src/App.js
import React from 'react';
import {BrowserRouter ,Routes ,Route ,Navigate} from 'react-router-dom';
import TrainList from './components/TrainList';
import TrainDetails from './components/TrainCard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TrainList/>} />
        <Route path="/searchtrain/:trainNumber" element={<TrainDetails/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
