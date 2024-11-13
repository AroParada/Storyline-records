# Storyline Records

An e-commerce website built with React.js, AWS Amplify, Stripe, and DynamoDB. This website is a record store application where users can browse products, add them to a cart, and securely check out using Stripe integration. The frontend is deployed via AWS Amplify, and the application uses AWS services to manage product data, orders, and payments.

## Usage
- Browse Products: Users can browse and view detailed product pages.
- Add to Cart: Select products and add them to the cart
- Checkout: Proceed to checkout with secure payment processing via Stripe.

## Features

- Product Catalog: Displays a list of products that users can browse.
- Shopping Cart: Users can add products to a cart, view item details, and adjust quantities.
- Checkout: Secure checkout flow using Stripe, with AWS Lambda and API Gateway handling serverless backend functions.
- Cart Context: Uses React Context API to manage cart state across components.
- Mobile-Friendly: Optimized for mobile devices for an improved user experience.

## Tech Stack 

- Frontend: React.js, React Bootstrap, AWS Amplify
- Backend: AWS Lambda, API Gateway
- Database: DynamoDB
- Payment: Stripe integration for processing payments

## AWS Architecture Diagram

![AWS Architecture Diagram](/src/assets/AWS%20cloud%20diagram%20(Community)%20(1).png)

### Prerequisites

- Node.js (v14 or later)
- AWS Account with Amplify and DynamoDB access
- Stripe Account

### Future Improvements
- Add a backend to store user profiles and order history.
- Enable product search and filtering.