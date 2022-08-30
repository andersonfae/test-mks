import Cart from "../../images/Cart.svg";
import { useState } from "react";

export function Navbar(props) {
  return (
    <>
      <header
        id="header"
        className="flex items-center justify-between px-16 py-7 bg-[#0F52BA]"
      >
        <h1 className="text-4xl font-semibold leading-tight text-white">
          MKS{" "}
          <span className="text-xl font-light inline-block relative bottom-1.5 align-text-middle">
            Sistemas
          </span>
        </h1>

        <div className="flex space-x-4 items-center justify-end px-6 py-3 bg-white rounded-lg">
          <img src={Cart} alt="Cart" className="h-5 w-5" />
          <p className="text-lg font-bold">{props.allCartProduct}</p>
        </div>
      </header>
    </>
  );
}
