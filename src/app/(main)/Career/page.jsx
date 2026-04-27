const CareerPage = () => {
    const jobs = [
        { id: 1, title: "Senior News Reporter", type: "Full Time", location: "Dhaka, BD", dept: "Editorial" },
        { id: 2, title: "UI/UX Designer", type: "Remote", location: "Global", dept: "Design" },
        { id: 3, title: "Content Writer (Sports)", type: "Part Time", location: "Chittagong, BD", dept: "Editorial" },
        { id: 4, title: "Full Stack Developer", type: "Full Time", location: "Dhaka, BD", dept: "Tech Team" },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Join Our <span className="text-orange-500">Dragon Team</span>
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Amra emon kichu manush khujchi jara news poribeshan-e agrahi ebong creative kichu korte chay. Amader shathe kaj kore apnar career-ke niye jan ek notun uchhotay.
                </p>
            </div>

            {/* Why Join Us Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition">
                    <div className="text-3xl mb-4">🚀</div>
                    <h3 className="text-xl font-bold mb-2">Fast Growth</h3>
                    <p className="text-gray-500 text-sm">Amader shathe kaj korle apni paben druto career growth ebong proyojoniyo training.</p>
                </div>
                <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition">
                    <div className="text-3xl mb-4">🏠</div>
                    <h3 className="text-xl font-bold mb-2">Work Flexibility</h3>
                    <p className="text-gray-500 text-sm">Amra remote ebong hybrid working model-e bishwash kori jate kaje baroti chap na pore.</p>
                </div>
                <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition">
                    <div className="text-3xl mb-4">🏥</div>
                    <h3 className="text-xl font-bold mb-2">Health Benefits</h3>
                    <p className="text-gray-500 text-sm">Amader protiti full-time employee-er jonno thakche medical ebong insurance subidha.</p>
                </div>
            </div>

            {/* Job Listings */}
            <div className="bg-gray-50 p-8 rounded-3xl">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">Current Openings</h2>

                <div className="space-y-4">
                    {jobs.map((job) => (
                        <div key={job.id} className="bg-white p-6 rounded-xl border flex flex-col md:flex-row justify-between items-center hover:border-orange-400 transition cursor-pointer group">
                            <div className="mb-4 md:mb-0">
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-500">{job.title}</h3>
                                <div className="flex gap-4 mt-2 text-sm text-gray-500 font-medium">
                                    <span className="bg-gray-100 px-2 py-1 rounded">{job.dept}</span>
                                    <span>📍 {job.location}</span>
                                    <span className="text-orange-500">● {job.type}</span>
                                </div>
                            </div>
                            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition-colors">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Resume Upload CTA */}
            <div className="mt-20 bg-orange-500 rounded-3xl p-10 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Don't see a fitting role?</h2>
                <p className="mb-8 opacity-90 max-w-xl mx-auto">
                    Jodi apnar proyojoniyo role ekhane na thake, tobe apnar resume amader email korun। Amra bishishto talent-der shobshomoy amontron janai।
                </p>
                <a href="" className="bg-white text-orange-500 px-10 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform inline-block">
                    Send Resume
                </a>
            </div>
        </div>
    );
};

export default CareerPage;