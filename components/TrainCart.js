import Image from 'next/image'
import { FireIcon, GlobeAltIcon, MailIcon } from '@heroicons/react/outline'

function TrainCart({ _img, c_name, c_job, c_desc }) {
  return (
    <div className="text-center border w-[420px] md:w-80">
        <div className="">
            <Image 
                src={_img}
                alt="c_image"
            />
        </div>
            <h2 className="text-lg font-bold pt-4">{c_name}</h2>
            <h3 className="text-sm font-mono">{c_job}</h3>
            <p className="text-gray-400 px-4 py-2 pb-4">{c_desc}</p>
            <div className="flex items-center justify-center pb-4 space-x-2">
                <FireIcon className="h-7 bg-green-400 text-white p-1 rounded-full cursor-pointer hover:bg-green-500" />
                <GlobeAltIcon className="h-7 bg-green-400 text-white p-1 rounded-full cursor-pointer hover:bg-green-500" />
                <MailIcon className="h-7 bg-green-400 text-white p-1 rounded-full cursor-pointer hover:bg-green-500" />
            </div>
    </div>
  )
}

export default TrainCart