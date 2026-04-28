import Navbar from "@/components/shared/Navbar/Navbar";


const layout = ({children}) => {
    return (
        <div>
          <Navbar/>
          <main className="container mx-auto">
            {children}
          </main>
        </div>
    );
};

export default layout;