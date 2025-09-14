

import React , { useState,useEffect } from 'react';
import Pallete from '../components/Palette.jsx';
import Agapata from '../components/Agapata.jsx';
import ApiService from '../services/api';
import { API_CONFIG } from '../config/config.js';
import { LocalStorage } from '../config/localStorage.js';
import { useIntl } from "react-intl";
import beep from '../assets/audio/beep.mp3';

const HomePage = () => {

  const Intl = useIntl();

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
   
  ]);

    useEffect(() =>  {
      loadData();
    }, []);

    const loadData = async () => {
      // if in local storate state game = 1
      if(localStorage.getItem(LocalStorage.START_GAME) === "1") {
        // Get Current Position 
        const positions = localStorage.getItem(LocalStorage.UMUKENYURO);
        const currentPion = localStorage.getItem(LocalStorage.CURRENT_PION);
        const username = localStorage.getItem(LocalStorage.USERNAME);
        console.log("positions",positions);
        console.log("currentPion", currentPion);
        setUsers([
          {
            id : 2,
            cases :  JSON.parse(positions),
            color : "blue"
          },
        ]);
      }
    }

  const startGame = () => {
    const audio = new Audio(beep);
    audio.play();
      
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
      
      <div>
        <button  className='start-button' onClick={() =>startGame()}>
          {Intl.formatMessage({ id: 'JeuPage.jouer' })}
        </button>
      </div>
      
    </div>
  );
}

export default HomePage;
