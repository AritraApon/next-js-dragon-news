            import Link from 'next/link';

const NotfoundPage = () => {
    return (
        <div>


        <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white p-4">
                <div className="text-center space-y-6 max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
                    <h1 className="text-9xl font-bold text-orange-500 animate-pulse">404</h1>

                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold">Page Not Fount!</h2>
                       
                    </div>

                    <Link
                        href="/"
                        className="inline-block px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all transform hover:scale-105"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default NotfoundPage;