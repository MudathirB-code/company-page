import { ChatIcon, CloudDownloadIcon, CloudIcon, CubeIcon, FireIcon, GlobeAltIcon, MailIcon } from '@heroicons/react/outline'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="bg-gray-100  ">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 md:px-8 lg:px-0 my-10 py-20">
            <div className="text-gray-600 font-sans">
                <h2 className="f-link">Mentor</h2>
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p className="pb-4">United States</p>
                <p><span className="font-bold text-gray-500">Phone:</span> +1 5589 55488 55</p>
                <p><span className="font-bold text-gray-500">Email:</span> info@example.com</p>
            </div>
            <div>
                <h2 className="f-link">Useful Links</h2>
                <ul className="f-f-link ">
                    <li className="hover:underline">
                        <Link href={{
                                pathname:"/",
                                query:{ name:"Home" }
                            }}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="hover:underline">
                        <Link href={{
                                pathname:"/aboutUs",
                                query:{ name:"About_us" }
                            }}>
                            <a>About us</a>
                        </Link>
                    </li>
                    <li className="hover:underline">
                        <Link href={{
                                pathname:"/",
                                query:{ name:"Services" }
                            }}>
                            <a>Services</a>
                        </Link>
                    </li>
                    <li className="hover:underline">
                        <Link href={{
                                pathname:"/",
                                query:{ name:"Terms" }
                            }}>
                            <a>Terms of service</a>
                        </Link>
                    </li>
                    <li className="hover:underline">
                        <Link href={{
                                pathname:"/",
                                query:{ name:"HoPrivacy & policy" }
                            }}>
                            <a>Privacy policy</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="f-link">Our Services</h2>
                <ul className="f-f-link">
                    <li className="hover:underline">
                        <Link href={{
                                pathname:"/",
                                query:{ name:"Home" }
                            }}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="hover:underline">
                        <Link href={{
                                pathname:"/aboutUs",
                                query:{ name:"About_us" }
                            }}>
                            <a>About us</a>
                        </Link>
                    </li>
                    <li className="hover:underline">
                        <Link href={{
                                pathname:"/",
                                query:{ name:"Services" }
                            }}>
                            <a>Services</a>
                        </Link>
                    </li>
                    <li className="hover:underline">
                        <Link href={{
                                pathname:"/",
                                query:{ name:"Terms" }
                            }}>
                            <a>Terms of service</a>
                        </Link>
                    </li>
                    <li className="hover:underline">
                        <Link href={{
                                pathname:"/",
                                query:{ name:"HoPrivacy & policy" }
                            }}>
                            <a>Privacy policy</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="text-gray-600 font-sans">
                <h2 className="f-link">Join Our Newsletter</h2>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <div className="relative flex items-center justify-center px-10 md:px-12 lg:px-0">
                    <input className="mt-6 w-full p-2 rounded-full outline-none border border-gray-300" type="text" />
                    <button className="absolute top-0 right-0 mt-6 px-4 py-[9px] rounded-full bg-green-600 text-white">Subscribe</button>
                </div>
            </div>
        </div>
        <div className="bg-gray-200">
            <div className="max-w-5xl mx-auto grid grid-col items-center md:flex md:justify-between md:px-8 lg:px-0  space-y-4 py-10">
                <div className="text-center">
                    <p className="f-f-link">© Copyright Mentor. All Rights Reserved</p>
                    <p className="f-f-link">Designed by: <span className='text-green-600 font-bold'> Mudathir musa</span></p>
                </div>
                <div className="flex justify-center space-x-2">
                    <ChatIcon className="h-10 bg-green-400 text-white p-2 rounded-full cursor-pointer hover:bg-green-500" />
                    <CloudDownloadIcon className="h-10 bg-green-400 text-white p-2 rounded-full cursor-pointer hover:bg-green-500" />
                    <CubeIcon className="h-10 bg-green-400 text-white p-2 rounded-full cursor-pointer hover:bg-green-500" />
                    <FireIcon className="h-10 bg-green-400 text-white p-2 rounded-full cursor-pointer hover:bg-green-500" />
                    <GlobeAltIcon className="h-10 bg-green-400 text-white p-2 rounded-full cursor-pointer hover:bg-green-500" />
                    <MailIcon className="h-10 bg-green-400 text-white p-2 rounded-full cursor-pointer hover:bg-green-500" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer