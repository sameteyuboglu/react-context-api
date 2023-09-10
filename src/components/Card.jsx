import { useContext } from "react";
import { BasketContext } from "../context/basketContex";

/* eslint-disable react/prop-types */
const Card = ({ item }) => {
  const context = useContext(BasketContext);
  return (
    <div className="card py-2" style={{ width: "250px" }}>
      <div className="d-flex justify-content-center">
        <img src={item.image} alt="aa" height={120} />
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <h4>{item.title} </h4>
        <p className="text-success">{item.category}</p>
        <button className="w-100" onClick={() => context.addToBasket(item)}>
          Sepete Ekle
        </button>
        <p></p>
      </div>
      <div></div>
    </div>
  );
};

export default Card;
