import Navbar from "@/components/shared/Navbar/Navbar";


const layout = ({children}) => {
    return (
        <div>
          <Navbar/>
          <main>
            {children}
          </main>
        </div>
    );
};

export default layout;