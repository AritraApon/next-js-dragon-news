import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleLeft, FaEye, FaRegBookmark, FaStar } from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";


const NewsDetailsCard = ({ news }) => {
    return (
        <div>
            <div className="mb-2">
                    <Link href={`/`}>
                        <button className="btn px-10 btn-soft btn-secondary  ">
                            <FaArrowAltCircleLeft /> </button>
                    </Link>

                </div>
            <div className="card bg-base-100   shadow-sm ">
                <div className="card-body space-y-4">

                    <div className="flex justify-between items-center">
                        <div>
                            <div className={`badge ${news.rating?.badge === "Excellent" ? "badge-success" :
                                news.rating?.badge === "Good" ? "badge-info" :
                                    news.rating?.badge === "Average" ? "badge-warning" :
                                        "badge-ghost"
                                } badge-outline font-semibold`}>
                                {news.rating?.badge}
                            </div>
                        </div>
                        <div className="flex  items-center gap-3">
                            <p className="flex items-center gap-1 text-lg"><span className="text-yellow-400"><FaStar /></span> {news.rating.number}</p>
                            <p className="flex items-center gap-1 text-lg">
                                <FaEye /> {news.total_view}</p>

                        </div>

                    </div>



                    {/* author  */}
                    <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Image
                                src={news?.author.img}
                                alt='author image'
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <div >
                                <h1 className="text-lg font-semibold">{news.author?.name}</h1>
                                <p className="text-gray-500">{news?.author.published_date}</p>
                            </div>
                        </div>
                        {/* ---- */}
                        <div className="flex items-center gap-3">
                            <p className="text-xl"><FaRegBookmark /></p>
                            <p className="text-xl"><HiOutlineShare /></p>
                        </div>

                    </div>

                    <h2 className="card-title text-xl  lg:text-2xl">{news.title}</h2>
                    <figure>
                        <Image
                            src={news.image_url}
                            alt='news image'
                            width={500}
                            height={500}
                            className="w-full"
                        />
                    </figure>
                    <div>
                        <p className=" text-lg font-medium">{news.details}</p>
                    </div>
                    <div className="divider"></div>
                    <div className="flex justify-between items-center">

                        <div>
                            <Link href={`/category/${news.category_id}`}>
                                <button className="btn btn-error flex items-center gap-1">
                                    <FaArrowAltCircleLeft />All news in this category.</button>
                            </Link>

                        </div>
                    </div>


                </div>

            </div>
            <div>

            </div>
        </div>
    );
};

export default NewsDetailsCard;