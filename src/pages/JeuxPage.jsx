import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomePallette from '../components/WelcomePallette';
import { LocalStorage } from '../config/localStorage';
import { useIntl } from "react-intl";

const JeuxPage = () => {
  const [gameConfig, setGameConfig] = useState({
    username: '',

  });

  const intl = useIntl();

  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setGameConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const [currentPion, setCurrentPion] = useState(0);

  const handleStartGame = () => {
    if (!gameConfig.username.trim()) {
      alert('Veuillez entrer un nom d\'utilisateur');
      return;
    }
    //alert('Le total doit être exactement 32 pièces noires ' + currentPion);
  
  
    console.log('Configuration du jeu:', gameConfig);
    // Local Storage
    localStorage.setItem(LocalStorage.START_GAME,1);
    navigate('/home')

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
    
      <WelcomePallette currentPion={(e)=>setCurrentPion(e)}/>
    </>
  );
};

export default JeuxPage;