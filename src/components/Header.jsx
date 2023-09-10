import { Link } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { useContext } from "react";
import { BasketContext } from "../context/basketContex";
function Header() {
  const context = useContext(BasketContext); 
  return (
    <header className="d-flex justify-content-between align-item-center p-4 text-light bg-dark sticky-top">
      <Link to={"/"}>
        <h2>Store</h2>
      </Link>
      <Link className="fs-4 text-light" to={"/checkout"}>
        <IoCartSharp />
        <span className="mx-2 fs-6 badge bg-danger">
          {context && context.basket.length}
        </span>
      </Link>
    </header>
  );
}

export default Header;
