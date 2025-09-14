import React, { useEffect, useState } from 'react'
import Pallete from './Palette';
import { LocalStorage } from '../config/localStorage';

function WelcomePallette({currentPion}) {
    const maxPions = 32;
    const [pions, setPion] = useState([
        15,14,13,12,11,10,9,8,
        0,1,2,3,4,5,6,7
    ]);
   
    const [pionsRestant, setPionsRestant] = useState(maxPions);
    

    const [positions, setPositions] = useState([
        0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0
    ])

    const handleInputChange = (index, value) => {
        if(value === ""){
            value = 0;
        }
      
        if (value > pionsRestant) {
           // value = pionsRestant;    
            alert("La valeur doit etre inferieur ou egale a " + pionsRestant);
            return;
          
       }
      
    const newPositions = [...positions];
    newPositions[index] = parseInt(value);
        setPositions(newPositions);
    };


    useEffect(() => {
        const total = positions.reduce((total, pion) => total + parseInt(pion), 0);
        setPionsRestant(maxPions - total); 
        currentPion(parseInt(pionsRestant));
        localStorage.setItem(LocalStorage.CURRENT_PION, parseInt(pionsRestant));
        localStorage.setItem(LocalStorage.UMUKENYURO, JSON.stringify(positions));
    }, [positions,currentPion,pionsRestant]);
    

    return (
        <>
        <div style={{ margin: '20px 0', padding: '10px', backgroundColor: '#e3f2fd', borderRadius: '5px', fontSize: '14px', color: '#1976d2' }}>
                <strong>   Règle :</strong> Répartissez exactement 32 pièces noires dans les 16 premières cases <br />
                <strong>   Total :</strong> {pionsRestant}/32 pièces  restantes
        </div>
        <div>
                <Pallete user={{cases: positions, color: "red"}}/>
            </div>
           
        
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '20px' }}>
                
          
          {
            pions.map((pion, index) => (
                <div key={index} >
                    <input type="number" 
                        placeholder={pion}
                        min={0}
                        max={15}
                        step={1}
                        value={parseInt(positions[index])}
                 
                        onChange={(e) => handleInputChange(index, e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center', fontSize: '16px', color: '#333', fontWeight: 'bold', outline: 'none', boxSizing: 'border-box', margin: '2px auto' }} />
                </div>
            ))
          }
    </div>
    <button onClick={() => setPositions([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])}
            style={{ margin: '20px 0', padding: '10px', backgroundColor: '#e3f2fd', borderRadius: '5px', fontSize: '14px', color: '#1976d2' , cursor: 'pointer', border: 'none', outline: 'none', fontWeight: 'bold', width: '100%', textAlign: 'center', marginTop: '20px'}}>reset</button>
    </>
  )
}

export default WelcomePallette