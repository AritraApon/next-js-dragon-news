import Image from "next/image";
import DemoCard from '@/assets/demo-card-thumbnail.png'
const AboutPage = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    About <span className="text-orange-500">Dragon News</span>
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Amader lokkho holo shobar age accurate ebong authentic news apnar kache pouchhe dewa. Amra bishwash kori shotyo tathyoi shokti.
                </p>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="text-3xl font-semibold text-gray-800">Our Mission & Vision</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Dragon News shudhu ekta news portal noy, eta ekti trust-based community. Amra proyojoniyo bishoygulo ke guruttho diye thaki—theke shuru kore sports, technology, ebong entertainment porjonto.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="bg-orange-100 p-2 rounded-full text-orange-500">✔</div>
                            <p className="text-gray-700 font-medium">Real-time News Updates</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-orange-100 p-2 rounded-full text-orange-500">✔</div>
                            <p className="text-gray-700 font-medium">Authentic Sources Only</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-orange-100 p-2 rounded-full text-orange-500">✔</div>
                            <p className="text-gray-700 font-medium">User-Centric Reading Experience</p>
                        </div>
                    </div>
                </div>

                {/* Placeholder Image/Illustration */}
                <div className="bg-gray-200 h-[350px] rounded-2xl flex items-center justify-center text-gray-400">
                   <Image
                   src={DemoCard}
                   alt="demo card"
                   width={500}
                   height={500}
                   className="w-full"
                   />
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-gray-50 p-10 rounded-3xl">
                <div>
                    <h3 className="text-3xl font-bold text-orange-500">500+</h3>
                    <p className="text-gray-600 uppercase text-xs font-bold tracking-widest mt-2">Daily News</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-orange-500">10M+</h3>
                    <p className="text-gray-600 uppercase text-xs font-bold tracking-widest mt-2">Monthly Readers</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-orange-500">24/7</h3>
                    <p className="text-gray-600 uppercase text-xs font-bold tracking-widest mt-2">Active Support</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-orange-500">50+</h3>
                    <p className="text-gray-600 uppercase text-xs font-bold tracking-widest mt-2">Experts Writers</p>
                </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-20 text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Stay Connected With Us</h2>
                <p className="mb-6 text-gray-600">Amader news ebong updates niye kono proshno thakle shora-shori jogajog korun.</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-all font-semibold">
                    Contact Our Team
                </button>
            </div>
        </div>
    );
};

export default AboutPage;