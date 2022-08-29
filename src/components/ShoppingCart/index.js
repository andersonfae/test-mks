import { ShoppingCards } from "../ShoppingCards";

export function ShoppingCart() {
  return (
    <>
      <div className="flex justify-end z-50">
        <div
          className="bg-[#0F52BA] text-2xl font-bold text-white h-full z-50"
          style={{ width: 486, height: 1024 }}
        >
          <p>Carrinho de compra</p>
          <span className="w-9 h-9 bg-black rounded-full">X</span>
          <ShoppingCards />
        </div>
      </div>
    </>
  );
}
