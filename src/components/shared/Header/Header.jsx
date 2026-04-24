import Image from "next/image";
import logo from '@/assets/logo.png';
import { compareAsc, format } from "date-fns";

const Header = () => {
    return (
        <div className="container mx-auto space-y-5 ">
         <div className="flex justify-center pt-10 mx-6">
            <Image src={logo} alt="logo "  width={500} height={500}/>
         </div>
         <div className="text-center text-xl space-y-5">
            <p className="text-gray-400">Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE , MMMM dd, yyy")}</p>
         </div>
         <div className="w-10/12 mx-auto bg-gray-100 py-3 flex flex-col lg:flex-row items-center gap-4 px-5 ">
            <div className="btn bg-red-700 text-white px-8 ">Latest</div>
            <div>
                <p className="text-gray-700">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </div>
         </div>
        </div>
    );
};

export default Header;