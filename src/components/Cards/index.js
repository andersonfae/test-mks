export function Cards(props) {
  return (
    <>
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-6 flex items-stretch h-96">
        <div className="flex flex-col">
          <div className="h-44 overflow-hidden productImage text-center flex justify-center">
            <img className="" src={`${props.photo}`} alt="Products" />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-3xl leading-tight text-gray-800">{`${props.name}`}</span>
            <div className="flex items-center justify-center py-1 px-1.5 bg-gray-800 rounded">
              <div className="flex text-base font-bold leading-none text-white">
                R${Math.trunc(`${props.price}`)}
              </div>
            </div>
          </div>
          <p className="text-xs font-light leading-5 text-gray-800 pt-4">{`${props.description}`}</p>
        </div>
      </div>
    </>
  );
}
