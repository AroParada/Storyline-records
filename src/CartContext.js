import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  items: [],
  products: [],
  loading: true,
  cartDetails: [],
  getProductData: () => {},
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  addOrUpdateCartItem: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartDetails, setCartDetails] = useState([]);

  // console.log(cartDetails, 'cartdetails'); 

  function addOrUpdateCartItem(id, quantity) {
    const productData = getProductData(id);

    setCartDetails((prevDetails) => {
      const existingItemIndex = prevDetails.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        // update existing item quantity and totalPrice
        const updatedDetails = [...prevDetails];
        updatedDetails[existingItemIndex] = {
          ...updatedDetails[existingItemIndex],
          quantity: updatedDetails[existingItemIndex].quantity + quantity,
          totalPrice:
            (updatedDetails[existingItemIndex].quantity + quantity) *
            productData.price,
        };
        return updatedDetails;
      } else {
        // add new item
      }
      return [
        ...prevDetails,
        {
          id,
          title: productData.title,
          image: productData.image,
          quantity,
          totalPrice: quantity * productData.price,
        },
      ];
    });
  }

  // fetches products from DynamoDB
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://1rsmflpz2m.execute-api.us-east-1.amazonaws.com/items"
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("failed to fetch products", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // gets the ids corresponding data
  function getProductData(id) {
    let productData = products.find((product) => product.id === id);
    return productData || undefined;
  }

  // Get the quantity of a specific product in the cart
  // [  { id: 1 , quantity: 2 } ]
  function getProductQuantity(id) {
    // if the .find get an undefined bject we wont ask for the .quantity to aviod error
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
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
    addOrUpdateCartItem(id, 1);
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
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
    addOrUpdateCartItem(id, 1);
  }

  function deleteFromCart(id) {
    // filter [] if an object meets a condition, add the object to array
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
    setCartDetails((prevDetails) =>
      prevDetails.filter((item) => item.id !== id)
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    products,
    loading,
    cartDetails,
    getProductData,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    addOrUpdateCartItem,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;

// Content (cart, addToCart, removeCart)
// Provider -> gives react app access to all the things in your context
