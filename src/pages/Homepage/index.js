import { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "../../components/Navbar";
import { Cards } from "../../components/Cards";
import { ShoppingCart } from "../../components/ShoppingCart";

export function Homepage() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC"
        );
        setProducts([...response.data.products]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    setCart(products);
  }, [products, setProducts]);

  function handleSubmit(e) {
    e.preventDefault();
    const chooseItems = setProducts();
    chooseItems.push(cart);
  }

  return (
    <>
      <Navbar />
      <ShoppingCart />
      <div>
        {products.map((currentProducts, key) => {
          return (
            <div key={key}>
              <Cards
                name={currentProducts.name}
                photo={currentProducts.photo}
                price={currentProducts.price}
                description={currentProducts.description}
              />
              <button
                className="w-56 h-8 bg-blue-800 rounded-bl-lg rounded-br-lg text-sm font-semibold text-center text-white"
                onClick={handleSubmit}
              >
                COMPRAR
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
