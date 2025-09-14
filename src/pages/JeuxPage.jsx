import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomePallette from '../components/WelcomePallette';
import { useIntl } from "react-intl";

const JeuxPage = () => {
  const [gameConfig, setGameConfig] = useState({
    username: '',
    case1: '',
    case2: '',
    case3: '',
    case4: ''
  });

  const intl = useIntl();

  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setGameConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleStartGame = () => {
    if (!gameConfig.username.trim()) {
      alert('Veuillez entrer un nom d\'utilisateur');
      return;
    }

    const total = gameConfig.case1 + gameConfig.case2 + gameConfig.case3 + gameConfig.case4;
    
    if (total !== 16) {
      alert('Le total doit être exactement 16 pièces noires');
      return;
    }

    console.log('Configuration du jeu:', gameConfig);
    alert(`Jeu commencé!\nJoueur: ${gameConfig.username}\nRépartition: ${gameConfig.case1}-${gameConfig.case2}-${gameConfig.case3}-${gameConfig.case4}`);
    navigate('/home')

  };

  const totalPieces = gameConfig.case1 + gameConfig.case2 + gameConfig.case3 + gameConfig.case4;

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

        

      

        <div className={`total-display ${totalPieces === 16 ? 'total-valid' : 'total-invalid'}`}>
          Total : {totalPieces} / 16 pièces noires
        </div>

        <button className="start-button" onClick={handleStartGame}>
           {intl.formatMessage({ id: 'JeuPage.commencez' })}
        </button>
      </div>
    
      <WelcomePallette/>
    </>
  );
};

export default JeuxPage;