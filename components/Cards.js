
function Cards({ NewspaperIcon, head, mean }) {
  return (
        <div className="">
          <div className="p-2 border m-8">
            <div className="text-center p-8">
              <p className="flex justify-center items-center p-4">{NewspaperIcon}</p>
              <h2 className="text-xl font-bold text-gray-600 p-2">{head}</h2>
              <p className="text-gray-400 p-4">{mean}</p>
            </div>
          </div>
        </div>
  )
}

export default Cards