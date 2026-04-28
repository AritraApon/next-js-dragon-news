'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileImage from "@/assets/user.png";
import { authClient } from "@/lib/auth-client";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
    const pathName = usePathname();
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const img = user?.image;

    const links = (
        <>
            <li className={`${pathName === '/' ? 'border-b-2 lg:border-blue-500 text-black font-semibold' : 'text-gray-500'}`}>
                <Link href={'/'}>Home</Link>
            </li>
            <li className={`${pathName === '/about' ? 'border-b-2 lg:border-blue-500 text-black font-semibold' : 'text-gray-500'}`}>
                <Link href={'/about'}>About</Link>
            </li>
            <li className={`${pathName === '/Career' ? 'border-b-2 lg:border-blue-500 text-black font-semibold' : 'text-gray-500'}`}>
                <Link href={'/Career'}>Career</Link>
            </li>
            <li className={`${pathName === '/register' ? 'border-b-2 lg:border-blue-500 text-orange-500 font-semibold' : 'text-orange-400'}`}>
                <Link href={'/register'}>Register</Link>
            </li>
        </>
    );

    return (
        <div className="sticky top-0 z-50 bg-white shadow-sm px-2 sm:px-4">
            <div className="navbar max-w-7xl mx-auto p-0 h-16">

                {/* Mobile Menu & Logo */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-4 shadow-lg border border-gray-100">
                            {links}
                        </ul>
                    </div>
                    <Link href="/" className="text-xl font-bold tracking-tighter sm:text-2xl text-red-600">
                        Dragon News
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>

                {/* End Section: Profile & Auth */}
                <div className="navbar-end gap-2">
                    {user && (
                        <div className="flex items-center gap-2 mr-1">
                            <div className="hidden sm:flex flex-col text-right">
                                <span className="text-[10px] font-bold text-black leading-tight uppercase tracking-tighter">
                                    {user.name}
                                </span>
                                <span className="text-[9px] text-gray-500 leading-tight">
                                    {user.email?.slice(0, 15)}...
                                </span>
                            </div>
                            <div className="avatar online">
                                <div className="w-9 h-9 rounded-full ring ring-gray-100 ring-offset-base-100 ring-offset-2">
                                    <Image
                                        src={img || ProfileImage}
                                        alt="profile"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                        unoptimized={true}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {user ? (
                        <button
                            onClick={() => authClient.signOut()}
                            className="btn btn-sm sm:btn-md btn-error text-white sm:px-4 flex items-center gap-1"
                        >
                            <CiLogout className="text-xl sm:text-2xl" />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    ) : (
                        <Link href={'/logIn'}>
                            <button className="btn btn-sm sm:btn-md text-white bg-[#403f3f] px-4 sm:px-8 hover:bg-black transition-all">
                                Login
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;