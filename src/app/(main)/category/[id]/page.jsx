import LeftSide from '@/components/homepages/news/LeftSide/LeftSide';
import RightSide from '@/components/homepages/news/RightSide/RightSide';
import NewsCard from '@/components/Ui/NewsCard';
import { getCategory, getNewsCategory } from '@/lib/Categroy Data/data';
import Link from 'next/link';
import React from 'react';




const NewsCategoryPage = async ({ params }) => {
    const { id } = await params

    const categoryData = await getCategory()
    const categories = categoryData.data.news_category

    const news = await getNewsCategory(id)


    return (
        <div>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mx-6 my-10 ">

                    {/* left side  */}
                    <div className="bg-gray-50 p-1 rounded  col-span-2 ">
                        <div className='sticky top-20 h-fit'>
                            <LeftSide categories={categories} activeId={id} />

                        </div>
                    </div>

                    {/* middle side  */}
                    <div className=" col-span-8">
                        <h1 className="font-bold text-xl">Dragon News Home </h1>
                        <div className='mt-5 space-y-3'>
                            {news.length > 0 ?
                                news.map(n => <NewsCard key={n._id}
                                    news={n}
                                    />

                                ) :

                                <div className="flex flex-col items-center justify-center min-h-[300px] bg-gray-50 border rounded-xl p-8 text-center">
                                    <h2 className="text-2xl font-bold text-gray-700">No News Found</h2>
                                    <p className="text-gray-500 mt-2">Currently, there are no news updates for this category</p>

                                    <Link
                                        href="/"
                                        className="mt-5 px-5 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-300 transition"
                                    >
                                        Browse Others
                                    </Link>
                                </div>
                            }
                        </div>

                    </div>

                    {/* right side  */}
                    <div className=" col-span-2  sticky top-20 h-fit ">
                        <RightSide />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCategoryPage;