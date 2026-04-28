import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import Navbar from "@/components/shared/Navbar/Navbar";


const layout = ({children}) => {
    return (
        <div >
          <Header/>
          <Navbar/>
          <main className="flex-grow w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer/>
        </div>
    );
};

export default layout;