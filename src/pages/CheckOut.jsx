import { useContext } from "react";
import { BasketContext } from "../context/basketContex";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
function CheckOut() {
  const { basket, addToBasket, removeBasket } = useContext(BasketContext);

  return (
    <div>
      {basket.length === 0 && <div></div>}
      {basket?.map((i, index) => (
        <div
          key={index}
          className="d-flex justify-content-between align-item-center p-3 gap-5"
        >
          <img src={i.image} height={100} className="rounded shadow" />
          <h4>{i.title?.slice(0, 15)}...</h4>
          <h3>${i.price}</h3>
          <p>amount:{i.amount}</p>
          <div className="fs-2 d-flex flex-column">
            <BiSolidUpArrow
              role="button"
              className="text-success"
              onClick={() => addToBasket(i)}
            />
            <BiSolidDownArrow
              role="button"
              className="text-danger"
              onClick={() => removeBasket(i)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CheckOut;
