export function Cards(props) {
  return (
    <>
      <div className="w-56 h-72 bg-white shadow rounded-lg" />
      <div className="w-56 h-8">
        <div className="flex items-center justify-center flex-1 h-full px-14 pt-1.5 pb-2 bg-blue-800 rounded-bl-lg rounded-br-lg">
          <div className="flex space-x-3.5 items-center justify-end flex-1 h-full">
            <img
              className="w-3 h-3.5 rounded-full"
              src="https://via.placeholder.com/12x13.5"
            />
            <p>{`${props.name}`}</p>
            <p className="w-3/4 h-3.5 text-sm font-semibold leading-none text-white">
              COMPRAR
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
