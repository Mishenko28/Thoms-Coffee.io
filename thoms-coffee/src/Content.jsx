

import React, { useState } from "react";

export default function Content(prop) {

  const products = [
    {name: "Americano", price:120, image: "src/assets/Americano.png" },
    {name: "Cappuccino", price: 130, image: "src/assets/Cappuccino.png" },
    {name: "Caramel", price: 110, image: "src/assets/Caramel.png" },
    {name: "Chocolate", price: 125, image: "src/assets/Chocolate.png" },
    {name: "DarkMocha", price: 130, image: "src/assets/DarkMocha.png" },
    {name: "DirtyChai", price: 105, image: "src/assets/DirtyChai.png" },
    {name: "FlatWhite", price: 110, image: "src/assets/FlatWhite.png" },
    {name: "KapeKastilla", price: 100, image: "src/assets/KapeKastilla.png" },
    {name: "KapeMestizo", price: 135, image: "src/assets/KapeMestizo.png" },
    {name: "Latte", price: 110, image: "src/assets/Latte.png" },
    {name: "Matcha", price: 90, image: ".src/assets/Matcha.png" },
    {name: "WhiteMocha", price: 120, image: "src/assets/WhiteMocha.png" }
  ];

  const initialQuantities = Object.fromEntries(
    products.map((product) => [product.name, 0])
  );

  const [quantities, setQuantities] = useState(initialQuantities);
  const [productTotal, setProductTotal] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);
  const [purchaseVisible, setPurchaseVisible] = useState(false);

  const purchaseHandler = () => setPurchaseVisible(
    productTotal != 0 &&
    !purchaseVisible
  )
  
  const buyAgain = () => {
    setPurchaseVisible(false)
    setQuantities(initialQuantities)
    setProductTotal(0)
    setPriceTotal(0)
  }

  const addQty = (name, price) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: prev[name] + 1,
    }))

    setProductTotal((prev) => prev + 1)

    setPriceTotal((prev) => 
      prev + price
    )
  };

  const minusQty = (name, price) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: Math.max(0, prev[name] - 1),
    }))

    setProductTotal((prev) => Math.max(0, prev - 1))

    setPriceTotal((prev) => 
      Math.max(0, prev - price)
    )
  };

  const productList = products.map((product) =>
    <div key={product.name} className="product">
      <h1 className="title">{product.name}</h1>
      <img className="product-img" src={product.image} alt={product.name} />
      <div className="button-container">
        <button onClick={() => minusQty(product.name, product.price)}>
          <i className="fa-solid fa-minus"></i>
        </button>
        <span>{quantities[product.name]}</span>
        <button onClick={() => addQty(product.name, product.price)}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="price-container">
        <h1>Price: </h1>
        <h1 className="price">{product.price}</h1>
      </div>
    </div>
);
  
  const cartList = products.map((product) => 
    quantities[product.name] >= 1 &&
      <div key={product.name} className="cart-product-container">
        <h1>{product.name}</h1>
        <h1>{quantities[product.name]}</h1>
        <h1>{quantities[product.name] * product.price}</h1>
      </div>
  );
  

  return (
    <div onClick={prop.onClick} className="main-container">
      {purchaseVisible &&
        <div className="purchase-container">
          <div className="purchase">
            <h1>Thank you for Purchasing!</h1>
            <button onClick={buyAgain}>Buy Again</button>
          </div>
        </div>
      }
      <div className="cart-container">
        <div className="cart">
          <div className="cart-txt-container">
            <i className="fa-solid fa-cart-shopping"></i>
            <h1 className="cart-txt">Cart</h1>
            <h1 onClick={purchaseHandler} className="buy">Buy</h1>
          </div>
          {productTotal != 0 && 
            <div className="cart-title-container">
              <h1>Item</h1>
              <h1>Qty</h1>
              <h1>Total</h1>
            </div>
          }
          {cartList}
          {productTotal != 0 && 
            <div className="cart-title-container">
              <h1>Total</h1>
              <h1>{productTotal}</h1>
              <h1>{priceTotal}</h1>
            </div>
          }
          {productTotal == 0 && <h1 className="none">No item</h1>}
        </div>
      </div>
      <div className="product-container">
        {productList}
      </div>
    </div>
  )
}