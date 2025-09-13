

import React , { useState } from 'react';
import Pallete from '../components/Palette.jsx';
import Agapata from '../components/Agapata.jsx';

const HomePage = () => {

  const [users, setUsers] = useState([
    {
      id : 1,
      cases : [0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0],
      color : "red"
    },
    {
      id : 2,
      cases : [0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0],
      color : "blue"
    },
    {
      id : 3,
      cases : [0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0],
      color : "green"
    }
  ]);

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
