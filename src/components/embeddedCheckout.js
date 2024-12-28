// import React, { useCallback, useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   EmbeddedCheckoutProvider,
//   EmbeddedCheckout,
// } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(
//   "pk_test_51NNMBoG7tgpxAxuRmGc8qBnN2tEjlsX57N1vvhWumzYfLKpwttpoiuI1vnKb045Q7MnYZzeBWIqAq19v4Uf7pm2y00ybD8G4Nt"
// );

// const CheckoutForm = () => {
//   const fetchClientSecret = useCallback(() => {
//     // Create a Checkout Session
//     return fetch(
//       "/https://1rsmflpz2m.execute-api.us-east-1.amazonaws.com/checkout",
//       {
//         method: "POST",
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => data.clientSecret);
//   }, []);

//   const options = { fetchClientSecret };

//   return (
//     <div id="checkout">
//       <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
//         <EmbeddedCheckout />
//       </EmbeddedCheckoutProvider>
//     </div>
//   );
// };
