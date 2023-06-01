import { createContext, useState } from "react";
import { productsArray } from "./productsStore";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  // [  { id: 1 , quantity: 2 } ]
  function getProductQuantity(id) {
    // if the .find get an undefined bject we wont ask for the .quantity to aviod error
    cartProducts.find((product) => product.id === id)?.quantity;

    if (quantity == undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      // product is not in cart
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      // product is in cart
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, quantity: product.quantity + 1 } // if statement is true ( turnary statement )
              : product // if statement is false
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if(quantity == 1) {
        deleteFromCart(id);
    } else {
        setCartProducts(
          cartProducts.map(
            (product) =>
              product.id === id // if condition
                ? { ...product, quantity: product.quantity - 1 } // if statement is true ( turnary statement )
                : product // if statement is false
          )
        );
    }
  }

  function deleteFromCart(id) {
    // filter [] if an object meets a condition, add the object to array
    setCartProducts(cartProducts =>
      cartProducts.filter(currentProduct => {
        return currentProduct.id != id;
      })
    );
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

// Content (cart, addToCart, removeCart)
// Provider -> gives react app access to all the things in your context
