const express = require('express');
const router = express.Router();
const axios = require('axios');


const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI3MjM1MjcsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiZmZlNGJjYjctMGE4MS00YjE1LTgxYjEtNzRhODM4YjYzYmZiIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IlJBMjAxMTAwMzAyMDA2OCJ9.u3wigXMGh2p8YCu66bx0O9YPU4u9UoXnAr2q2AUhTew';

async function getData() {
  try {
    const response = await axios.get('http://20.244.56.144/train/trains', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });   
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch ');
  }
}

async function arrangeTrains() {
  const data = await getData();
  console.log('Received train data:', data);
  const noww = new Date().getTime();
  const allow = 12 * 60 * 60 * 1000; 

  const after = data.filter(train => {
    const dep = new Date().setHours(train.departureTime.Hours, train.departureTime.Minutes, 0, 0);
    return dep - noww > 0 && dep - noww <= allow;
  });

  const sortedTrains = after.sort((a, b) => {
    if (a.price.sleeper !== b.price.sleeper) {
      return a.price.sleeper - b.price.sleeper;
    } else if (a.price.AC !== b.price.AC) {
      return a.price.AC - b.price.AC;
    } else {
      return b.seatsAvailable.sleeper - a.seatsAvailable.sleeper || b.seatsAvailable.AC - a.seatsAvailable.AC;
    }
  });

  return sortedTrains;
}

router.get('/realtime', async (req, res) => {
  try {
    const realTimeSchedule = await arrangeTrains();
    res.json(realTimeSchedule);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
   
  }
});

router.get('/searchtrain/:trainNumber', async (req, res) => {
    try {
      const trainNumber = req.params.trainNumber;
      const response = await axios.get(`http://20.244.56.144/train/trains/${trainNumber}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
  
      if (response.status !== 200) {
        return res.status(response.status).json({ error: 'Failed to fetch train data from server' });
      }
  
      const train = response.data;
      res.json(train);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;
