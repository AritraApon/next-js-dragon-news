import LeftSide from "@/components/homepages/news/LeftSide/LeftSide"
import RightSide from "@/components/homepages/news/RightSide/RightSide"

const getCategory = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories',{cache: "no-store"})
  const data = await res.json()
  return data
}

export default async function Home() {
  const categoryData = await getCategory()
  const categories = categoryData.data.news_category

  return (
    <div>
      <div className="grid grid-rows-1 md:grid-cols-12 gap-3 mx-6 my-10">

        {/* left side  */}
        <div className="bg-gray-50 p-1 rounded  col-span-2">
         <div>
         <LeftSide categories={categories} activeId={'01'} />

         </div>
        </div>

        {/* middle side  */}
        <div className="bg-amber-300 col-span-8">
          all news
        </div>

        {/* right side  */}
        <div className=" col-span-2">
         <RightSide/>
        </div>
      </div>
    </div>
  );
}
