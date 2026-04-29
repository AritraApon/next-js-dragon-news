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
        <div className="max-w-7xl mx-auto">
    <div className=" grid lg:grid-cols-12 gap-6 px-4 sm:px-6 my-6 lg:my-10">

        {/* --- LEFT SIDE (Categories) --- */}
        {/* মোবাইলে এটি সবার উপরে থাকবে এবং স্ক্রল করা যাবে */}
        <div className="col-span-1 lg:col-span-2  lg:order-1">
            <div className="lg:sticky lg:top-24 h-fit">
                {/* LeftSide component এর ভেতরে মোবাইল ফ্রেন্ডলি ডিজাইন থাকা জরুরি */}
                <LeftSide categories={categories} activeId={id} />
            </div>
        </div>

        {/* --- MIDDLE SIDE (News Feed) --- */}
        <div className="col-span-1 lg:col-span-7 xl:col-span-8 order-1 lg:order-2">
            <h1 className="font-bold text-xl text-gray-800 mb-5 border-b pb-2">
                Dragon <span className="text-orange-400">News Home</span>
            </h1>

            <div className="space-y-6">
                {news.length > 0 ? (
                    news.map(n => (
                        <NewsCard key={n._id} news={n} />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center min-h-[300px] bg-gray-50 border border-dashed rounded-2xl p-8 text-center">
                        <div className="bg-gray-200 p-4 rounded-full mb-4">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z"></path></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-700">No News Found</h2>
                        <p className="text-gray-500 mt-2 max-w-xs">Currently, there are no news updates for this category.</p>
                        <Link
                            href="/"
                            className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition shadow-md"
                        >
                            Browse Others
                        </Link>
                    </div>
                )}
            </div>
        </div>

        {/* --- RIGHT SIDE (Extra Info/Ads) --- */}
        {/* মোবাইলে এটি সবার নিচে চলে যাবে */}
        <div className="col-span-1 lg:col-span-3 xl:col-span-2 order-3">
            <div className="lg:sticky lg:top-24 h-fit space-y-4">
                <RightSide />
            </div>
        </div>

    </div>
</div>
    );
};

export default NewsCategoryPage;