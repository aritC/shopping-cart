# shopping-cart

Shopping Cart App using react and express

- Product Implementation

  - Each Product should have general fields, like Name, Description, Rating, Price, Category (New Product Document/ Collection)
  - In Product component each item when we click to display details should also have a button "Add To Item" on click should add to New Cart

- Cart Implementation

  - Create New Cart Component using react hooks, functional component
  - Each Item in this component should be added from Product Component
  - On Cart Component, Button for save to Checkout should save the cart item to database (New Cart Document/ Collection)

- Checkout Component

  - Create A functional component and use react hook or using container to read data from store
  - Show - User Details (Name, address) //We will deliver products to below address kind of message as well
  - Show Table of cart put up for purchase (you need to re-use the cartlist and cartitem components)
  - Show the purchase Summary (total qty and total amount)
  - Show a Button to Proceed to Payment
  - Integrate this page on CartComponent Button (Go to checkout) -(Go To Checkout From Cart Component)

- Second Task :
  - Create a state using useState to show hide (Make Payment Message)
  - Upon Clicking on MakePayment button, hide everything and just show the message - "Thankyou for the payment, your items under process!"
  - Change the header from Checkout Page to Payment Page
