

const Cards = ({ item, handleClick }) => {
  const { namn, job,  img } = item;
  return (
    
  // Trainers Info & img
    <div className="cards">
        
        
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{namn}</p>
        <p>{job}</p>
       
      </div>
        </div>
        
  );
};



export default Cards;
