const Box = ({ boxes }) => {
    
  
    return (
      <div className="d-flex flex-wrap justify-content-center mt-3">
        {boxes.map((box) => (
          <div
            key={box.id} 
            style={{
              width: `${box.size}px`,
              height: `${box.size}px`,
              backgroundColor: box.color,
              margin: "10px",
            }}
          ></div>
        ))}
      </div>
    );
  };
  
  export default Box;
