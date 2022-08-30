export function ShoppingCards(props) {
  return (
    <>
      <div className="flex relative flex-row bg-white rounded-lg justify-between p-4 text-black">
        <span
          className="bg-black rounded-full p-0.5 inline-block absolute text-center -right-4 -top-4 text-white"
          onClick={props.onPressRemoveItem}
        >
          ✖
        </span>
        <div className="metaTitle flex flex-row">
          <div className="h-14 overflow-hidden productImage text-center flex justify-center mr-2">
            <img className="" src={`${props.photo}`} alt="Products" />
          </div>
          <h4 className="text-base leading-none text-gray-800 mt-4 max-w-[90%]">
            <span className="inline-block align-middle">{`${props.name}`}</span>
          </h4>
        </div>
        <div className="metaQtd flex flex-row text-center bg-white text-black border border-[#BFBFBF] rounded-lg h-8 mt-3">
          <span
            className="w-9 h-9 rounded-full"
            onClick={props.onPressRemoveItemAmount}
          >
            -
          </span>
          <span className="inline-block border-x px-1.5 border-[#BFBFBF]">
            {props.quantity}
          </span>
          <span className="w-9 h-9 rounded-full" onClick={props.onPressUp}>
            +
          </span>
        </div>
        <div className="metaPrice text-sm font-bold leading-none mt-4">
          R${`${props.price}`}
        </div>
      </div>
    </>
  );
}
