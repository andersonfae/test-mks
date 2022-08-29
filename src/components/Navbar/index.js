export function Navbar() {
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
          <div className="flex space-x-4 items-center justify-end flex-1 h-full pl-4 pr-7 pt-2.5 pb-3 bg-white rounded-lg">
            <div className="w-5 h-4 bg-black rounded-lg" />
            <p className="text-lg font-bold">0</p>
          </div>
        </div>
      </div>
    </>
  );
}
