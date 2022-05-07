import { RemoveRounded } from "@mui/icons-material";
import { AddRounded } from "@mui/icons-material";
import React from "react";

const Info = ({ count, setCount, Displaycart }) => {
  const countIncrease = () => {
    setCount((prevValue) => prevValue + 1);
  };
  const countDecrease = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount((prevValue) => prevValue - 1);
    }
  };

  return (
    <article className="info">
      <h4>Sneaker Company</h4>
      <h2>
        Fall Limited Edition <br /> Sneakers
      </h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price">
        <h3>
          $125.00<span> 50%</span>
        </h3>
        <p>$250</p>
      </div>
      <div className="cart">
        <div className="Add">
          <RemoveRounded onClick={countDecrease} className="btn-add" /> {count}
          <AddRounded onClick={countIncrease} className="btn-add" />
        </div>
        <button className="btn" onClick={Displaycart}>
          <img src="./images/icon-cartW.svg" alt="cartlog" />
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default Info;
