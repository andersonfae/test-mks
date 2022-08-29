export function Cards(props) {
  return (
    <>
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          className="w-28 h-36 rounded-full"
          src={`${props.photo}`}
          alt="Products"
        />
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{`${props.name}`}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            R${`${props.price}`}
          </p>
        </div>
        <p>{`${props.description}`}</p>
      </div>
    </>
  );
}
