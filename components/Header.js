import Image from "next/image"
import Link from "next/link"
import logo from '../public/assets/logo.png'
import { MenuIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white shadow-md py-3 px-3 md:px-8 lg:px-32">
        <div className="relative h-[48px] flex items-center">
            <Link href={{
                pathname:"/",
                query:{ name:"Home"}
            }} scroll={false}>
                <a>
                <Image 
                    src={logo} // the url of your image or path of image
                    alt="logo"
                    // layout="fill"
                    width="110"
                    height="75"
                    objectFit="contain" // to fit the image 
                    objectPosition="left" //the image will be in the left...
                />
                </a>
            </Link>
        </div>
            <div className="hidden md:inline-flex">
                <ul className="flex items-center space-x-2 md:space-x-4">
                    <li className="links">
                        <Link href={{
                            pathname:"/",
                            query:{ name:"Home" }
                        }}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="links">
                        <Link href={{
                            pathname:"/aboutUs",
                            query:{ name:"About" }
                        }}>
                            <a>About</a>
                        </Link>
                    </li>
                    <li className="links">
                        <Link href={{
                            pathname:"/courses",
                            query:{ name:"Courses" }
                        }}>
                            <a>Courses</a>
                        </Link>
                    </li>
                    <li className="links">
                        <Link href={{
                            pathname:"/trainers",
                            query:{ name:"Trainers" }
                        }}>
                            <a>Trainers</a>
                        </Link>
                    </li>
                    <li className="links">
                        <Link href={{
                            pathname:"/events",
                            query:{ name:"Events" }
                        }}>
                            <a>Events</a>
                        </Link>
                    </li>
                    <li className="links">
                        <Link href={{
                            pathname:"/pricing",
                            query:{ name:"Pricing" }
                        }}>
                            <a>Pricing</a>
                        </Link>
                    </li>
                    <li className="links">
                        <Link href={{
                            pathname:"/contact",
                            query:{ name:"_Contact" }
                        }}>
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
            
            <div className="flex items-center justify-end space-x-4 mx-6">
                <button className="bg-green-400 text-white px-6 py-2 md:px-8 md:hidden sm:inline lg:inline xl:inline rounded-full hover:bg-green-500 hover:shadow-lg shadow-md">Get Started</button>
                <div className="">
                    <MenuIcon className="md:hidden h-8" />
                </div>
            </div>
    </header>
  )
}

export default Header