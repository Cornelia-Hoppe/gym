
const Cards = ({ item, handleClick }) => {
  const { namn, author,  img } = item;
  return (
    
   
    
    <div className="cards">
        
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{namn}</p>
        <p>{author}</p>
       
      </div>
        </div>
       
  );
};



export default Cards;
