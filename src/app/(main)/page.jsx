import LeftSide from "@/components/homepages/news/LeftSide/LeftSide"
import RightSide from "@/components/homepages/news/RightSide/RightSide"
import { redirect } from "next/navigation";



const default_id = '01'

export default async function Home() {


    redirect(`/category/${default_id}`)
  ;
}
