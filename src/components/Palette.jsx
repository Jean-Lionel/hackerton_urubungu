

const Pallete = ({user}) => {

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(8, 0fr)",
        gap: 0, 
        padding: 0,
      }}
    >
    
      {user.cases.map((e) => (   
        <img style={{ 
            filter: `opacity(0.80) drop-shadow(0 0 0 ${user.color})`, 
            cursor: "pointer",

          }} 
         src={`/images/${e}.png`} alt="Cart" />       
      ))}
    </div>
  );
};

export default Pallete;