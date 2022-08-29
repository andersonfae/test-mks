import { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "../../components/Navbar";
import { Cards } from "../../components/Cards";

export function Homepage() {
  const [products, setProducts] = useState([]);

  const [allProducts, setAllProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC"
        );
        setProducts(...response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {products.map((currentProducts, key) => {
          return (
            <div key={key}>
              <Cards name={currentProducts} />
            </div>
          );
        })}
      </div>
    </>
  );
}
