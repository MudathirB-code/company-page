
function TitleComp({compName, compTitle}) {
  return (
    <div className="max-w-5xl mx-auto py-16">
        <div>
            <h2 className="text-xl text-gray-300 uppercase">{compName}
                <span className="text-green-500"> -------</span>
            </h2>
            <p className="text-4xl uppercase font-bold text-gray-600">{compTitle}</p>
        </div>
    </div>
  )
}

export default TitleComp