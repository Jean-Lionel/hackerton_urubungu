import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
import WelcomePallette from '../components/WelcomePallette';
import { LocalStorage } from '../config/localStorage';

const JeuxPage = () => {
  const [gameConfig, setGameConfig] = useState({
    username: ''
  });

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
  
    if (currentPion != 32) {
      alert('Le total doit être exactement 32 pièces noires ' + currentPion);
      return;
    }
    console.log('Configuration du jeu:', gameConfig);
    // Local Storage
    localStorage.setItem(LocalStorage.START_GAME,1);
    navigate('/home')

  };



  return (
    <>
      <div className="setup-container">
        <h1 className="setup-title">🎮 Configuration du Jeu</h1>
        
        <div className="form-group">
          <label className="form-label">Nom d'utilisateur :</label>
          <input
            type="text"
            className="form-input"
            placeholder="Entrez votre nom..."
            value={gameConfig.username}
            onChange={(e) => handleInputChange('username', e.target.value)}
          />
        </div>

        

      

        <div className={`total-display ${currentPion === 32 ? 'total-valid' : 'total-invalid'}`}>
          Total : {currentPion} / 32 pièces noires
        </div>

        <button className="start-button" onClick={handleStartGame}>
           COMMENCER LE JEU
        </button>
      </div>
    
      <WelcomePallette currentPion={(e)=>setCurrentPion(e)}/>
    </>
  );
};

export default JeuxPage;