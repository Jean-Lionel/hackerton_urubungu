

const Pallete = ({user}) => {

  const cases = user.cases.map((e) =>
    (isNaN(e) || e === null || e === undefined || e === "" || e === "0" || e > 32)
    ? 0 : parseInt(e) > 15 ? 15 : parseInt(e)) ;

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
        
        <img key={e.id} style={{ 
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