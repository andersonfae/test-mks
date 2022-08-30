import { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "../../components/Navbar";
import { Cards } from "../../components/Cards";
import { ShoppingCart } from "../../components/ShoppingCart";

export function Homepage() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState({
    items: [],
  });

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

  function onPressRemoveItem(product) {
    const updatedCart = cart?.items?.filter((item) => item?.id !== product?.id);

    setCart({ ...cart, items: updatedCart });
  }

  function onPressRemoveItemAmount(product) {
    const updatedCartItems = cart?.items?.reduce((acc, item) => {
      const isWantedProduct = item?.id === product.id;

      if (isWantedProduct) {
        const newProductAmount = item.quantity - 1;

        if (newProductAmount <= 0) {
          return acc;
        }

        return [...acc, { ...item, quantity: newProductAmount }];
      }

      return [...acc, item];
    }, []);

    setCart({ ...cart, items: updatedCartItems });
  }

  function onPressUp(product) {
    const updatedCartItems = cart?.items?.reduce((acc, item) => {
      const isWantedProduct = item?.id === product.id;

      if (isWantedProduct) {
        const newProductAmount = item.quantity + 1;

        return [...acc, { ...item, quantity: newProductAmount }];
      }

      return [...acc, item];
    }, []);

    setCart({ ...cart, items: updatedCartItems });
  }

  function handleSubmit(product) {
    if (cart?.items?.length === 0) {
      return setCart({ ...cart, items: [{ ...product, quantity: 1 }] });
    }

    const alreadyAddedItem = cart?.items?.some(
      (item) => item?.id === product.id
    );

    if (alreadyAddedItem) {
      const cartItems = cart?.items?.map((item) => {
        if (item?.id === product?.id) {
          return { ...item, quantity: item?.quantity + 1 };
        }

        return item;
      });

      return setCart({ ...cart, items: cartItems });
    }

    const updatedCartItems = [...cart?.items, { ...product, quantity: 1 }];

    setCart({ ...cart, items: updatedCartItems });
  }

  const cartTotal = cart?.items.reduce((acc, item) => {
    return Number(item.price) * item.quantity + acc;
  }, 0);

  const allCartProduct = cart?.items.reduce((acc, item) => {
    return item.quantity + acc;
  }, 0);

  return (
    <>
      <Navbar allCartProduct={allCartProduct} />
      <ShoppingCart
        cart={cart}
        onPressRemoveItem={onPressRemoveItem}
        onPressRemoveItemAmount={onPressRemoveItemAmount}
        onPressUp={onPressUp}
        cartTotal={cartTotal}
      />
      <div>
        {products.map((product, key) => {
          return (
            <div key={key}>
              <Cards
                name={product.name}
                photo={product.photo}
                price={product.price}
                description={product.description}
              />
              <button
                className="w-56 h-8 bg-blue-800 rounded-bl-lg rounded-br-lg text-sm font-semibold text-center text-white"
                onClick={() => handleSubmit(product)}
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
