const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] w-full">
            {/* Main Spinner Container */}
            <div className="relative flex items-center justify-center">

                {/* Outer Glowing Circle */}
                <div className="absolute animate-pulse w-24 h-24 rounded-full bg-blue-500/20 blur-xl"></div>

                {/* The Spinner */}
                <div className="w-16 h-16 border-4 border-t-transparent border-blue-600 border-b-violet-600 rounded-full animate-spin shadow-lg"></div>

                {/* Inner Dot */}
                <div className="absolute w-2 h-2 bg-violet-500 rounded-full"></div>
            </div>

            {/* Loading Text */}
            <div className="mt-6 flex flex-col items-center">
                <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent animate-pulse">
                    Loading News
                </h2>
                <p className="text-gray-400 text-sm mt-1">Please wait a moment...</p>
            </div>
        </div>
    );
};

export default Loading;