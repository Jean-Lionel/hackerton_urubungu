import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';

const JeuxPage = () => {
  const [gameConfig, setGameConfig] = useState({
    username: '',
    case1: '',
    case2: '',
    case3: '',
    case4: ''
  });

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

        <div style={{ margin: '20px 0', padding: '10px', backgroundColor: '#e3f2fd', borderRadius: '5px', fontSize: '14px', color: '#1976d2' }}>
          <strong>   Règle :</strong> Répartissez exactement 16 pièces noires dans les 4 premières cases
        </div>

        <div className="cases-grid">
          <div className="case-input-group">
            <div className="case-label">Case 1</div>
            <input
              type="number"
              className="number-input"
              placeholder="0"
              min="0"
              max="16"
              value={gameConfig.case1}
              onChange={(e) => handleInputChange('case1', parseInt(e.target.value) || 0)}
            />
          </div>

          <div className="case-input-group">
            <div className="case-label">Case 2</div>
            <input
              type="number"
              className="number-input"
              placeholder="0"
              min="0"
              max="16"
              value={gameConfig.case2}
              onChange={(e) => handleInputChange('case2', parseInt(e.target.value) || 0)}
            />
          </div>

          <div className="case-input-group">
            <div className="case-label">Case 3</div>
            <input
              type="number"
              className="number-input"
              placeholder="0"
              min="0"
              max="16"
              value={gameConfig.case3}
              onChange={(e) => handleInputChange('case3', parseInt(e.target.value) || 0)}
            />
          </div>

          <div className="case-input-group">
            <div className="case-label">Case 4</div>
            <input
              type="number"
              className="number-input"
              placeholder="0"
              min="0"
              max="16"
              value={gameConfig.case4}
              onChange={(e) => handleInputChange('case4', parseInt(e.target.value) || 0)}
            />
          </div>
        </div>

        <div className={`total-display ${totalPieces === 16 ? 'total-valid' : 'total-invalid'}`}>
          Total : {totalPieces} / 16 pièces noires
        </div>

        <button className="start-button" onClick={handleStartGame}>
           COMMENCER LE JEU
        </button>
      </div>
    </>
  );
};

export default JeuxPage;