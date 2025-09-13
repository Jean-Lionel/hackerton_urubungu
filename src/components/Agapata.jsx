import React from 'react';
import agapata from "../assets/images/agapata1.jpeg";

const Agapata = () => {
    return (
        <div style={{ margin: 0, padding: 0 ,marginRight: 150, display: "flex", justifyContent: "space-around"}}>
            <img style={{ height: "50px",}} src={agapata} alt="Agapata" />
            <img style={{ height: "50px",}} src={agapata} alt="Agapata" />
        </div>
    );
}

export default Agapata;
