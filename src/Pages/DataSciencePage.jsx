import { useEffect, useState } from "react";
import ApplyForm from "../Component/ApplyForm";

const DataSciencePage = () => {
    const [activeModal, setActiveModal] = useState(null);
    useEffect(() => {
        document.title = "Vizztal  | Data Science ";
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
            title: "Python Fundamentals",
            description:
                "Master Python programming basics, data structures, and algorithms",
            icon: "🐍",
            color: "from-emerald-400 to-emerald-600",
        },
        {
            title: "Data Analysis",
            description:
                "Learn Pandas, NumPy, and data visualization with Matplotlib/Seaborn",
            icon: "📊",
            color: "from-blue-400 to-blue-600",
        },
        {
            title: "Machine Learning",
            description:
                "Understand supervised and unsupervised learning algorithms",
            icon: "🤖",
            color: "from-purple-400 to-purple-600",
        },
        {
            title: "Deep Learning",
            description: "Explore neural networks, TensorFlow, and PyTorch",
            icon: "🧠",
            color: "from-violet-400 to-violet-600",
        },
        {
            title: "Big Data Technologies",
            description: "Work with Hadoop, Spark, and cloud platforms",
            icon: "☁️",
            color: "from-indigo-400 to-indigo-600",
        },
        {
            title: "Data Engineering",
            description:
                "Learn ETL processes, data pipelines, and database management",
            icon: "⚙️",
            color: "from-pink-400 to-pink-600",
        },
    ];

    const benefits = [
        {
            title: "Hands-on Projects",
            description:
                "Work on real-world datasets and build a portfolio that showcases your skills to employers.",
            icon: "💻",
            color: "text-blue-400",
        },
        {
            title: "Expert Instructors",
            description:
                "Learn from industry professionals with years of experience in data science and machine learning.",
            icon: "👨‍🏫",
            color: "text-purple-400",
        },
        {
            title: "Career Support",
            description:
                "Get resume reviews, interview preparation, and job placement assistance upon completion.",
            icon: "🚀",
            color: "text-pink-400",
        },
    ];

    const stats = [
        { value: "95%", label: "Completion Rate" },
        { value: "2", label: "Months Program" },
        { value: "120+", label: "Hours of Content" },
        { value: "1:1", label: "Mentorship" },
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Data Scientist at Google",
            content:
                "This program completely changed my career trajectory. The hands-on projects gave me the confidence to apply for data science roles, and I landed my dream job within 2 months of completing the course.",
        },
        {
            name: "Michael Chen",
            role: "ML Engineer at Microsoft",
            content:
                "The curriculum is perfectly structured and the mentorship was invaluable. I went from knowing basic Python to building complex ML models that are now in production.",
        },
        {
            name: "Emily Rodriguez",
            role: "Data Analyst at Netflix",
            content:
                "The real-world projects and industry connections made all the difference. I'm now working on recommendation systems that millions of users interact with daily.",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
                    <div className="text-center">
                        <p className="text-base sm:text-lg md:text-xl font-medium text-blue-400 mb-4">
                            Transform Your Career With
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight">
                            Data Science Mastery
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-10 px-4">
                            Become industry-ready with our comprehensive
                            curriculum and real-world projects
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
                                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
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
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
                            Comprehensive Curriculum
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                            Everything you need to become a proficient Data
                            Scientist
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
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
                            Why Choose Our Program?
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                            We're committed to your success in the data science
                            field
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all transform hover:-translate-y-1"
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

            {/* Testimonials Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
                            Success Stories
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                            Hear from our alumni who transformed their careers
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-blue-500/20 transition-all transform hover:-translate-y-1"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700 flex items-center justify-center text-lg sm:text-xl">
                                        👤
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-white text-sm sm:text-base">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-xs sm:text-sm text-gray-400">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm sm:text-base text-gray-300 italic">
                                    "{testimonial.content}"
                                </p>
                                <div className="mt-4 flex text-yellow-400">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className="text-sm sm:text-base"
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section - Bottom of Page */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                        Ready to Launch Your Data Science Career?
                    </h2>
                    <p className="text-lg sm:text-xl text-white/90 mb-8 px-4">
                        Limited seats available for our next cohort starting
                        soon
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
                            Enroll in Program
                        </button>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {activeModal && (
                <ApplyForm
                    activeModal={activeModal}
                    closeModal={closeModal}
                    setActiveModal={setActiveModal}
                />
            )}
        </div>
    );
};

export default DataSciencePage;
