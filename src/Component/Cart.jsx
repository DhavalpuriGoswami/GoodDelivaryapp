import React, { useEffect, useRef, useState } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";

const Cart = (props) => {
  let dispatch = useDispatchCart();
  let data = useCart();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  let options = props.options;
  let priceOptions = Object.keys(options || {});
  const priceRef = useRef();
  
  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
    if (food !== null) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: props.foodItem.price, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id:  props.foodItem._id, name:  props.foodName, price: props.foodItem.price, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: props.foodItem.price, qty: qty, size: size })


    // setBtnEnable(true)

  }

  return (
    <div>
      <div class="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          src={props.ImgSrc}
          class="card-img-top"
          alt="..."
          style={{ height: "120px", objectFit: "fill" }}
        />
        <div class="card-body">
          <h5 class="card-title">{props.foodName}</h5>
          <div className="container w-100">
            <select
              className="m-2 h-100 bg-warning rounded"
              onClick={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-100 bg-warning rounded"
              ref={priceRef}
              onClick={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
          </div>
          <hr></hr>
          <div className="btn btn-success" onClick={() => handleAddToCart()}>
            Addtocart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
