

import React , { useState,useEffect } from 'react';
import Pallete from '../components/Palette.jsx';
import Agapata from '../components/Agapata.jsx';
import ApiService from '../services/api';
import { API_CONFIG } from '../config/config.js';

const HomePage = () => {

  const [users, setUsers] = useState([
    {
      id : 1,
      cases : [1,0,0,8,0,0,2,0,0,0,0,0,0,0,0,0],
      color : "red"
    },
    {
      id : 2,
      cases : [0,0,0,8,0,0,0,7,0,0,0,0,0,0,0,0],
      color : "blue"
    },
    {
      id : 3,
      cases : [0,0,0,0,4,0,0,0,5,0,0,0,0,0,0,0],
      color : "green"
    }
  ]);

    useEffect(() =>  {
      loadData();
    }, []);

    const loadData = async () => {
      const response = await ApiService.get(API_CONFIG.ENDPOINTS.TEST);
      console.log("Les donnes"+ response.data);
    }
  return (
    <div>
    {
     
      users.map((user, index) => (
        <div key={index} className="parent-container">
          <Pallete user={user}/>         
          {index !== users.length - 1 && <Agapata  />}
        </div>
      ))
    }
      
    </div>
  );
}

export default HomePage;
