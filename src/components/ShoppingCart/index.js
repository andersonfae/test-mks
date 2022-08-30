import { ShoppingCards } from "../ShoppingCards";

export function ShoppingCart(props) {
  return (
    <>
      <div className="flex justify-end z-50">
        <div
          className="bg-[#0F52BA] text-2xl font-bold text-white h-full z-50"
          style={{ width: 486, height: 1024 }}
        >
          <p>Carrinho de compra</p>
          <span className="w-9 h-9 bg-black rounded-full">X</span>
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
          <span>Total: R$ {props.cartTotal}</span>
        </div>
      </div>
    </>
  );
}
