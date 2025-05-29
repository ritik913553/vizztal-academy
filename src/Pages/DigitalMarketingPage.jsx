import { useEffect, useState } from "react";
import ApplyForm from "../Component/ApplyForm";

const DigitalMarketingPage = () => {
    const [activeModal, setActiveModal] = useState(null);
    useEffect(() => {
        document.title = "Vizztal  | Digital Marketing ";
    }, []);
    const closeModal = () => {
        setActiveModal(null);
        setFormData({
            name: "",
            email: "",
            phone: "",
            education: "",
            experience: "",
            interest: "",
        });
    };

    const curriculum = [
        {
            title: "SEO Mastery",
            description:
                "Learn on-page, off-page, and technical SEO to rank websites effectively",
            icon: "🔍",
            color: "from-green-400 to-green-600",
        },
        {
            title: "Content Marketing",
            description:
                "Develop content strategies and compelling copy for multiple platforms",
            icon: "✍️",
            color: "from-yellow-400 to-yellow-600",
        },
        {
            title: "Social Media Marketing",
            description:
                "Leverage Facebook, Instagram, LinkedIn, and more to grow your brand",
            icon: "📱",
            color: "from-blue-400 to-blue-600",
        },
        {
            title: "Email Marketing",
            description:
                "Design, automate, and analyze high-converting email campaigns",
            icon: "📧",
            color: "from-pink-400 to-pink-600",
        },
        {
            title: "Analytics & Data",
            description:
                "Track performance and optimize strategies using Google Analytics & more",
            icon: "📈",
            color: "from-purple-400 to-purple-600",
        },
        {
            title: "Paid Advertising",
            description: "Master Google Ads, Facebook Ads, and PPC campaigns",
            icon: "💸",
            color: "from-red-400 to-red-600",
        },
    ];

    const benefits = [
        {
            title: "Live Projects",
            description:
                "Execute campaigns on real platforms and analyze outcomes in real-time.",
            icon: "🎯",
            color: "text-green-400",
        },
        {
            title: "Top Mentors",
            description:
                "Learn from digital marketing veterans and current industry experts.",
            icon: "🧑‍💼",
            color: "text-yellow-400",
        },
        {
            title: "Career Services",
            description:
                "Resume building, mock interviews, and guaranteed internship opportunities.",
            icon: "🏆",
            color: "text-pink-400",
        },
    ];

    const stats = [
        { value: "92%", label: "Placement Success" },
        { value: "2", label: "Months Duration" },
        { value: "40+", label: "Tools Covered" },
        { value: "1:1", label: "Mentoring Sessions" },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-green-500 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-yellow-500 rounded-full filter blur-3xl"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
                    <div className="text-center">
                        <p className="text-base sm:text-lg md:text-xl font-medium text-green-400 mb-4">
                            Boost Your Career With
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-400 to-pink-400 leading-tight">
                            Digital Marketing Mastery
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-10 px-4">
                            Hands-on training with real campaigns, modern tools,
                            and top mentors
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gray-800 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="p-4 sm:p-6 bg-gray-700/50 rounded-xl backdrop-blur-sm hover:bg-gray-700/70 transition-all"
                            >
                                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-pink-400">
                                    {stat.value}
                                </p>
                                <p className="mt-2 text-sm sm:text-base text-gray-300">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-pink-400">
                            Curriculum Highlights
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                            All essential modules to become a full-stack digital
                            marketer
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {curriculum.map((item, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${item.color} p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 hover:scale-105`}
                            >
                                <div className="text-4xl sm:text-5xl mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                                    {item.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-100">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-pink-400">
                            Why Learn With Us?
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                            Everything you need to succeed in the digital
                            marketing landscape
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-green-400/30 transition-all transform hover:-translate-y-1"
                            >
                                <div
                                    className={`text-3xl sm:text-4xl mb-4 ${item.color}`}
                                >
                                    {item.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-4 text-white">
                                    {item.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-300">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section - Bottom of Page */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-green-600 via-yellow-500 to-pink-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                        Ready to Transform Your Career?
                    </h2>
                    <p className="text-lg sm:text-xl text-white/90 mb-8 px-4">
                        Join thousands of successful digital marketers who
                        started their journey with us
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
                        <button
                            onClick={() => setActiveModal("internship")}
                            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 text-base sm:text-lg"
                        >
                            Apply for Internship
                        </button>
                        <button
                            onClick={() => setActiveModal("class")}
                            className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 text-base sm:text-lg"
                        >
                            Join Program
                        </button>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {activeModal && (
                <ApplyForm
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
};

export default DigitalMarketingPage;
