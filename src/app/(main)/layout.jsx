import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import Navbar from "@/components/shared/Navbar/Navbar";


const layout = ({children}) => {
    return (
        <div >
          <Header/>
          <Navbar/>
          <main className='container mx-auto'>
            {children}
          </main>
          <Footer/>
        </div>
    );
};

export default layout;