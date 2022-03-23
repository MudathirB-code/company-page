import CountUp from "react-countup"

function Counts({ number , title }) {

  return (
    <div className="">
        <div className="">
            <div className="max-w-5xl mx-auto p-9">
                <span className="text-5xl text-green-500 font-bold">
                    <CountUp start={0} end={number} />
                </span>
                <p className='text-xl'>{title}</p>
            </div>
        </div>
    </div>
  )
}

export default Counts