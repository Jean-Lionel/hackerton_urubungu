//Cart
import React from "react";

const Cart = ({ stoneCount = 0}) => {
return (
  <div style={{ margin: 0, padding: 0 }}>    
      <img style={{ margin: 0, padding: 0 }} src={`/images/${stoneCount}.png`} alt="Cart" />
    </div>
  );
};

export default Cart;