import React, { useState } from "react";
import Navbar from "./component/Navbar";
import PhotoGallery from "./component/PhotoGallery";
import Info from "./component/Info";
import Cart from "./component/Cart";
import Model from "./component/Model";
import DrawerMenu from "./component/DrawerMenu";
import { FirstProductImage } from "./component/data";
const App = () => {
  const [cart, setCart] = useState(false);
  const [bgimage, setBgimage] = useState(FirstProductImage);
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [draw, setDraw] = useState(false);

  const handleOpen = () => setOpen(true);

  const Displaycart = () => {
    setCart((prev) => !prev);
  };

  return (
    <main>
      <header>
        <img
          src="./images/icon-menu.svg"
          className="hamburger"
          alt=""
          onClick={() => setDraw(true)}
        />

        <img src="./images/logo.svg" alt="logo" className="logo" />

        <Navbar />

        <div className="avater-cart">
          <div className="avater-pos">
            <img
              src="./images/icon-cart.svg"
              onClick={Displaycart}
              alt="cart"
              className="cart"
            />
            {count > 0 && <p className="alert-count">{count}</p>}
          </div>

          <img
            src="./images/image-avatar.png"
            alt="avatar"
            className="avatar"
          />
          {cart && <Cart bgimage={bgimage} count={count} />}
        </div>
      </header>
      <div className="Main-hero">
        <Model open={open} setOpen={(word) => setOpen(word)} />
        <DrawerMenu draw={draw} setDraw={(word) => setDraw(word)} />
        <section className="flexHero">
          <PhotoGallery
            bgimage={bgimage}
            handleOpen={handleOpen}
            setBgimage={(word) => setBgimage(word)}
          />
          <Info
            count={count}
            Displaycart={Displaycart}
            setCount={(word) => setCount(word)}
          />
        </section>
      </div>
    </main>
  );
};

export default App;
