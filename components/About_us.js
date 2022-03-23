import { CheckIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import about from '../public/assets/about.jpg'

function About_us() {
  return (
    <div className="flex flex-col md:flex-row items-center pt-10 m-5">
        <div className="p-4 ">
            <h2 className="text-2xl font-bold pb-4">ABOUT US</h2>
            <h2 className="font-semibold">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="flex space-x-2 pt-2">
                <div className="space-y-2 pt-1">
                    <CheckIcon className="h-4 text-green-500 border border-green-500 rounded-full" />
                    <CheckIcon className="h-4 text-green-500 border border-green-500 rounded-full" />
                    <CheckIcon className="h-4 text-green-500 border border-green-500 rounded-full" />
                </div>
                <div>
                    <h3 className=""> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
                    <h3 className=""> Duis aute irure dolor in reprehenderit in voluptate velit.</h3>
                    <h3 className=""> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</h3>
                </div>
            </div>
            <h3>irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</h3>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
        </div>
        <div className="">
            <Image 
                src={about}
                alt="about"
                width={900}
                height={800}
                objectFit="contain"
            />
        </div>
    </div>
  )
}

export default About_us