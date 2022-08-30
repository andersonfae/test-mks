import { ShoppingCards } from "../ShoppingCards";

export function ShoppingCart(props) {
  return (
    <>
      <aside
        id="cartSideBar"
        className="fixed flex flex-col justify-end bg-[#0F52BA] right-0 top-0 z-50 text-white h-full shadow-lg shadow-black w-[32rem]"
      >
        <div className="inner-content p-8 grow">
          <h2 className="text-4xl font-bold text-white my-8">
            Carrinho de compra
          </h2>
          <span className="bg-black rounded-full p-1.5 inline-block absolute right-10 top-10 text-center text-white">
            ✖
          </span>
          <div className="space-y-4">
            {props.cart?.items?.map((currentItem) => (
              <ShoppingCards
                name={currentItem.name}
                photo={currentItem.photo}
                price={currentItem.price}
                quantity={currentItem.quantity}
                onPressRemoveItem={() => props.onPressRemoveItem(currentItem)}
                onPressRemoveItemAmount={() =>
                  props.onPressRemoveItemAmount(currentItem)
                }
                onPressUp={() => props.onPressUp(currentItem)}
              />
            ))}
          </div>
        </div>
        <footer className="flex flex-col space-y-11 items-center justify-start">
          <div className="inline-flex space-x-52 items-start justify-start w-96">
            <span className="flex-1 text-3xl font-bold leading-none text-white">
              Total:
            </span>
            <strong className="inline-block text-2xl w-88 font-bold leading-none text-white">
              R$ {props.cartTotal}
            </strong>
          </div>
          <div className="px-2.5 py-10 bg-black w-full text-center text-white">
            <button className="text-3xl font-bold leading-none">
              Finalizar Compra
            </button>
          </div>
        </footer>
      </aside>
    </>
  );
}
