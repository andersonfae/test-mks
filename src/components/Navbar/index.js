import Cart from "../../images/Cart.svg";

export function Navbar(props) {
  return (
    <>
      <div className="flex items-center justify-end pl-96 pr-20 py-7 bg-blue-800">
        <div className="flex-1 h-full">
          <p className="w-32 h-11 text-4xl font-semibold leading-tight text-white">
            MKS
          </p>
          <p className="w-48 h-11 text-xl font-light leading-tight text-white">
            Sistemas
          </p>
          <div className="flex justify-center justify-between py-3.5 w-24 h-11 bg-white rounded-lg">
            <img src={Cart} alt="Cart" className="h-5 w-5" />
            <p className="text-lg font-bold">{props.allCartProduct}</p>
          </div>
        </div>
      </div>
    </>
  );
}
