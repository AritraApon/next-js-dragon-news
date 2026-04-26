import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import Swimming from '@/assets/swimming.png'
import ClassRoom from '@/assets/class.png'
import PlayGround from '@/assets/playground.png'
import Image from "next/image";
import Bg from '@/assets/bg.png'




const RightSide = () => {
    return (
        <div className="mt-10">
           <h1 className="font-bold text-xl">Login With</h1>

           <div className="space-y-2 mt-4">
            <button className="btn w-full text-blue-500 border-2 border-blue-500 flex items-center">
                <FaGoogle />
                <p >Login with Google
                </p>
            </button>
            <button className="btn w-full border-2 border-black flex items-center ">
                <FaGithub />
                <p>Login with Github
                </p>
            </button>
           </div>


   {/* Find Us On */}
             <div className="mt-5">
                <h1 className="text-xl font-semibold">Find Us On</h1>
                <div className="mt-4 rounded-lg bg-gray-50">
                    <p className="text-xl text-center p-4 shadow  flex gap-3 items-center border-2 border-gray-300 hover:bg-gray-300"><CiFacebook />  Facebook</p>
                    <p className="text-xl text-center p-4 shadow  flex gap-3 items-center border-2 border-gray-300 hover:bg-gray-300"><FaTwitter />  Twitter</p>
                    <p className="text-xl text-center p-4 shadow  flex gap-3 items-center  border-2 border-gray-300 hover:bg-gray-300"><FaInstagram />  Instagram</p>
                </div>
             </div>

       {/* Q zone  */}

       <div className="mt-5 bg-[#f3f3f3] p-2 ">
        <h1 className="text-xl font-semibold">Q zone</h1>
        <div className="w-auto  flex justify-center">
            <Image
                 src={Swimming}
                 alt="Swimming logo"
                 width={500}
                 height={500}
            />
        </div>
        <div className="w-auto  flex justify-center">
            <Image
                 src={ClassRoom}
                 alt="Swimming logo"
                 width={500}
                 height={500}
            />
        </div>
        <div className="w-auto  flex justify-center">
            <Image
                 src={PlayGround}
                 alt="Swimming logo"
                 width={500}
                 height={500}
            />
        </div>

       </div>

 {/* bg */}
       <div className="mt-5 w-auto  flex justify-center">
           <Image
                 src={Bg}
                 alt="Swimming logo"
                 width={1100}
                 height={1100}
            />
        </div>


        </div>
    );
};

export default RightSide;