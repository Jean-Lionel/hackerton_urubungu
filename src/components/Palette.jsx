

const Pallete = ({user}) => {

  const cases = user.cases.map((e) => isNaN(e) ? 0 : e);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(8, 0fr)",
        gap: 0, 
        padding: 0,
      }}
    >
    
      {cases.map((e) => (  
        
        <img style={{ 
            filter: `opacity(0.80) drop-shadow(0 0 0 ${user.color})`, 
            cursor: "pointer",

          }} 
          className="cart"
         src={`/images/${e}.png`} alt="Cart" />       
      ))}
    </div>
  );
};

export default Pallete;