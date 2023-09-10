import axios from "axios";
import { useEffect, useState } from "react";

import Loading from "../components/loading";
import Card from "../components/Card";

function MainPage() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div className="container d-flex flex-wrap justify-content-center justify-content-md-between gap-5">
      {products ? (
        products.map((x) => <Card key={x.id} item={x}></Card>)
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default MainPage;
