import Image from "next/image";
import logo from '@/assets/logo.png';
import { compareAsc, format } from "date-fns";
import Marquee from "react-fast-marquee";

const breakingNews = [
  { id: 1, text: "Next.js 16-er notun update asche!" },
  { id: 2, text: "Better-Auth ekhon aro fast kaj korbe." },
  { id: 3, text: "MongoDB Atlas-e serverless setup ekhon shohoj." },
  { id: 4, text: "Tailwind CSS v4-e asche darun kichu feature." },
  { id: 5, text: "React Server Components-er jhamela komlo." }
];

const Header = () => {
    return (
        <div className="container mx-auto space-y-5 ">
         <div className="flex justify-center pt-10 mx-6">
            <Image
            src={logo}
            alt="logo "
            priority
            width={500}
            height={500}
            style={{ height: 'auto' }}/>
         </div>
         <div className="text-center text-xl space-y-5">
            <p className="text-gray-400">Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE , MMMM dd, yyy")}</p>
         </div>
         <div className="w-full   bg-gray-100 py-3 flex  items-center gap-4 px-5 ">
            <div className="btn bg-red-700 text-white px-1 lg:px-8 ">Latest</div>
            <div>
               <Marquee pauseOnHover={true}>
                     {
                        breakingNews.map(news => <p key={news.id} className="text-gray-700 px-5">{news.text}</p>)
                     }
               </Marquee>

            </div>
         </div>
        </div>
    );
};

export default Header;