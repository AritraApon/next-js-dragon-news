import Header from "@/components/shared/Header/Header";
import Navbar from "@/components/shared/Navbar/Navbar";


const layout = ({children}) => {
    return (
        <div>
          <Header/>
          <Navbar/>
          <main>
            {children}
          </main>
        </div>
    );
};

export default layout;