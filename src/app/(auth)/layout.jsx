import Navbar from "@/components/shared/Navbar/Navbar";


const layout = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen">
          <Navbar/>
          <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 ">
            {children}
          </main>
        </div>
    );
};

export default layout;