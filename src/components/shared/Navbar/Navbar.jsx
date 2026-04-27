'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileImage from "@/assets/user.png";
import { authClient } from "@/lib/auth-client";
import { CiLogout } from "react-icons/ci";


const Navbar = () => {
    const pathName = usePathname()

    const { data: session } = authClient.useSession()
    const user = session?.user
    const img = user?.image


    const links = <>
        <li className={`${pathName === '/' ? 'border-b-3 border-blue-500 text-black' : 'text-gray-500'} `}><Link href={'/'}>Home</Link></li>
        <li className={`${pathName === '/about' ? 'border-b-3 border-blue-500 text-black' : 'text-gray-500'} `}><Link href={'/about'}>About</Link></li>
        <li className={`${pathName === '/Career' ? 'border-b-3 border-blue-500 text-black' : 'text-gray-500'} `}><Link href={'/Career'}>Career</Link></li>
        <li className={`${pathName === '/register' ? 'border-b-3 border-blue-500 text-black' : 'text-gray-500'} text-orange-500 `}><Link href={'/register'}>Register</Link></li>
    </>
    return (
        <div className="mt-3  sticky top-0 z-50 bg-white">
            <div className="navbar  ">
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
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                            {
                                user && <span className="text-xs font-semibold animate-pulse">{user.name}</span>
                            }
                            {
                                user && <span className="text-xs text-gray-400">{user.email}</span>
                            }

                        </div>
                        <Image
                            src={img || ProfileImage}
                            alt="profile picture"
                            width={40}
                            height={40}
                            className="rounded-full"
                            unoptimized={true}
                        />

                    </div>
                    {
                        user ? (

                            <button
                                onClick={() => authClient.signOut()}
                                className="btn btn-outline text-white text-2xl bg-red-500 font-bold hover:bg-red-700"
                            >
                              <CiLogout />
                            </button>
                        ) : (

                            <Link href={'/logIn'}>
                                <button className="btn text-white bg-[#403f3f] px-8 hover:bg-[#0d0d0d]">
                                    Login
                                </button>
                            </Link>
                        )
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;