import React, { useState } from "react";
import Item from "./Item";
import WebbshopModal from "./WebbshopModal";
import "../css/ItemList.css";
//Images
import img from "../images/waterbottle.png"
import img2 from "../images/jumprope.png"
import img3 from "../images/trackshorts.png"
import img4 from "../images/shorts.png"
import img5 from "../images/cropedshirt.png"
import img6 from "../images/tshirt.png"
import img7 from "../images/leggings.png"
import img8 from "../images/foamroller.png"
import img9 from "../images/trackjacket.png"
import img10 from "../images/socks.png"
import img11 from "../images/windbraker.png"
import img12 from "../images/zipshirt.png"

function ItemList() {

  const [openModal, setOpenModal] = useState(false);
  
  const equipment = [];
  const clothesTop = [];
  const clothesBottom = [];
  const currentModal = [];


  const database = [
    //TODO: Implementera images.
    { name: "Vattenflaska", price: "129", id: 1, type: "equipment", img: img, brand: "Sportix Equipment", color: "Blå", shortDesc: "Aluminium water bottle"},
    { name: "Hopprep", price: "149", id: 2, type: "equipment", img: img2, brand: "Sportix Equipment", color: "Svart", shortDesc: "High quality jump rope"},
    { name: "Track Shorts", price: "499", id: 3, type: "bottom", img: img3, brand: "Sportswear of Sportix", color: "Grön", shortDesc: "Long track shorts"},
    { name: "Shorts", price: "249", id: 4, type: "bottom", img: img4, brand: "Sportswear of Sportix", color: "Svart", shortDesc: "Regular fit shorts" },
    { name: "T-shirt", price: "199", id: 5, type: "top", img: img6, brand: "Sportswear of Sportix", color: "Vit", shortDesc: "T-shirt in polyester" },
    { name: "Kroppad Tröja", price: "249", id: 6, type: "top", img: img5, brand: "Sportswear of Sportix", color: "Svart", shortDesc: "Sleeved croped shirt" },
    { name: "Vindjacka", price: "799", id: 7, type: "top", img: img11, brand: "Sportswear of Sportix", color: "Mörkblå", shortDesc: "Windbraker with hood"},
    { name: "Leggings", price: "399", id: 8, type: "bottom", img: img7, brand: "Sportswear of Sportix", color: "Svart", shortDesc: "High-waist women leggings" },
    { name: "Track Jacket", price: "699", id: 9, type: "top", img: img9, brand: "Sportswear of Sportix", color: "Grön", shortDesc: "Track jacket with zip" },
    { name: "Strumpor", price: "199", id: 10, type: "equipment", img: img10, brand: "Sportix Equipment", color: "Svart", shortDesc: "5-pack sport socks" },
    { name: "Foamroller", price: "349", id: 11, type: "equipment", img: img8, brand: "Sportix Equipment", color: "Beige", shortDesc: "Foamroller with texture" },
    { name: "Zip Tröja", price: "449", id: 12, type: "top", img: img12, brand: "Sportswear of Sportix", color: "Röd", shortDesc: "Zipshirt without hood" },
  ];

  function itemModal(itemId){
    const modalId = itemId;
    global.modalId = modalId;
    setOpenModal(true);
  }

  for (var i = 0; i < database.length; i++) {
    if(global.modalId === database[i].id){
      currentModal.push(database[i])
    }
  }
  
  for (var l = 0; l < database.length; l++) {
    //Loop over database and pushing object into correct array.
    if (database[l].type === "equipment") {
      equipment.push(database[l]);
    } else if (database[l].type === "bottom") {
      clothesBottom.push(database[l]);
    } else {
      clothesTop.push(database[l]);
    }
  }

  return (
    <div className="ItemList">
      {openModal &&
        currentModal.map((item, index) => (
          <WebbshopModal
            closeModal={setOpenModal}
            id={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
            brand={item.brand}
            shortDesc={item.shortDesc}
            color={item.color}
            item={item}
            key={index}
            type={item.type}
            size={item.size}
          />
        ))}
      <div className="list-section">
        <h1 className="list-title">Överdelar</h1>
      </div>
      {clothesTop.map((item, index) => (
        <Item
        itemModal={itemModal}
        name={item.name}
          id={item.id}
          price={item.price}
          key={index}
          item={item}
          img={item.img}
          />
          ))}
      <div className="list-section">
        <h1 className="list-title">Underdelar</h1>
      </div>
      {clothesBottom.map((item, index) => (
        <Item
        itemModal={itemModal}
        name={item.name}
        id={item.id}
        price={item.price}
        key={index}
        item={item}
        img={item.img}
        />
        ))}
<div className="list-section">
  <h1 className="list-title">Utrustning</h1>
</div>
{equipment.map((item, index) => (
  <Item
    itemModal={itemModal}
    id={item.id}
    name={item.name}
    price={item.price}
    key={index}
    item={item}
    img={item.img}
  />
))}
    </div>
  );
}

export default ItemList;
