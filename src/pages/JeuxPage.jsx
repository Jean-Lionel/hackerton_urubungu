import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomePallette from '../components/WelcomePallette';
import { LocalStorage } from '../config/localStorage';
import { useIntl } from "react-intl";

const JeuxPage = () => {
  const [gameConfig, setGameConfig] = useState({
    username: '',

  });
  const [positions, setPostions] = useState()

  const intl = useIntl();

  const navigate = useNavigate();

  useEffect(() => {
    testSocket()
  }, [])

  function testSocket() {
  //  alert("JE SUIS COOL")
  }



  const handleInputChange = (field, value) => {
    setGameConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const [currentPion, setCurrentPion] = useState(0);

  const handleStartGame = () => {
    
  
      window.socket.send(JSON.stringify({
        "action": "startGame",
        "username": gameConfig.username ,
        "data": {
            positions
        }
      }))
    
    
      window.socket.onmessage = function (event) {
       // alert("Received message from WebSocket server:", event.data);
        console.log("Received message from WebSocket server:", event.data);
      };

     

  };



  return (
    <>
      <div className="setup-container">
        <h1 className="setup-title"> 🎮 {intl.formatMessage({ id: 'JeuPage.configure' })} </h1>
        
        <div className="form-group">
          <label className="form-label">{intl.formatMessage({ id: 'JeuPage.username' })} :</label>
          <input
            type="text"
            className="form-input"
            placeholder={`${intl.formatMessage({ id: 'JeuPage.plaholerusername' })}`}
            value={gameConfig.username}
            onChange={(e) => handleInputChange('username', e.target.value)}
          />
        </div>

        <div className={`total-display ${currentPion === 32 ? 'total-valid' : 'total-invalid'}`}>
          {intl.formatMessage({ id: 'WelcomePallete.Total' })} : {currentPion} / 32 {intl.formatMessage({ id: 'WelcomePallete.PiecesRestantes' })}
        </div>

        <div className="start-button" onClick={handleStartGame}>
           {intl.formatMessage({ id: 'JeuPage.commencez' })}
        </div>
      </div>
    
      <WelcomePallette currentPion={(e)=>setCurrentPion(e)} setPositionData={(e) => setPostions(e)}/>
    </>
  );
};

export default JeuxPage;