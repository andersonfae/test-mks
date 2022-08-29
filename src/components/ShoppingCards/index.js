export function ShoppingCards(props) {
  return (
    <>
      <div className="w-96 h-24 bg-white shadow rounded-lg">
        <img
          className="w-28 h-36 rounded-full"
          src={`${props.photo}`}
          alt="Products"
        />
        <div className="">
          <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{`${props.name}`}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            R${`${props.price}`}
          </p>
        </div>
      </div>
    </>
  );
}
