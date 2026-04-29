import Navbar from "@/components/shared/Navbar/Navbar";


const layout = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen">
          <Navbar/>
          <main className=" mx-auto   ">
            {children}
          </main>
        </div>
    );
};

export default layout;