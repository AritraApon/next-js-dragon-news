'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
    const pathName = usePathname()

    const links = <>
       <li className={`${pathName === '/' ? 'border-b-3 border-blue-500 text-black':'text-gray-500'} `}><Link href={'/'}>Home</Link></li>
       <li className={`${pathName === '/about' ? 'border-b-3 border-blue-500 text-black':'text-gray-500'} `}><Link href={'/about'}>About</Link></li>
       <li className={`${pathName === '/Career' ? 'border-b-3 border-blue-500 text-black':'text-gray-500'} `}><Link href={'/Career'}>Career</Link></li>
    </>
    return (
        <div className="mt-3 ">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                             {links}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3 mx-2">
                    <Link href={'/register'}><div className="text-4xl hover:text-blue-700"><FaUserCircle /></div></Link>
                    <Link href={'/logIn'}><button className="btn text-white bg-[#403f3f] px-8 hover:bg-[#0d0d0d]">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;