import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ApplyForm from "../Component/ApplyForm";
const WebDevelopment = () => {
    const [activeModal, setActiveModal] = useState(null);
    useEffect(() => {
        document.title = "Vizztal  | Web Development ";
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
            title: "HTML, CSS & JavaScript",
            description:
                "Build strong foundations in semantic HTML, modern CSS, and interactive JavaScript.",
            icon: "🌐",
            color: "from-yellow-400 to-yellow-600",
        },
        {
            title: "Frontend Frameworks",
            description:
                "Master React.js to build dynamic and responsive single-page applications.",
            icon: "⚛️",
            color: "from-blue-400 to-blue-600",
        },
        {
            title: "Backend Development",
            description:
                "Learn Node.js, Express.js, and how to build RESTful APIs from scratch.",
            icon: "🛠️",
            color: "from-green-400 to-green-600",
        },
        {
            title: "Database Management",
            description:
                "Understand and work with MongoDB and SQL databases to store and manage data.",
            icon: "🗄️",
            color: "from-rose-400 to-rose-600",
        },
        {
            title: "Authentication & Security",
            description:
                "Implement secure login systems, JWT, OAuth, and best practices for web security.",
            icon: "🔐",
            color: "from-indigo-400 to-indigo-600",
        },
        {
            title: "Deployment & DevOps",
            description:
                "Deploy your full stack apps to the cloud using tools like Vercel, Netlify, and Docker.",
            icon: "🚀",
            color: "from-purple-400 to-purple-600",
        },
    ];
    const benefits = [
        {
            title: "Project-Centric Approach",
            description:
                "You’ll build full-featured websites and apps that demonstrate your technical ability.",
            icon: "💡",
            color: "text-blue-400",
        },
        {
            title: "Up-to-Date Tech Stack",
            description:
                "Stay ahead of the curve with modern tools and technologies used by top companies.",
            icon: "📦",
            color: "text-green-400",
        },
        {
            title: "Career-Focused Learning",
            description:
                "Portfolio reviews, career mentorship, and mock interviews help you land real jobs.",
            icon: "🎯",
            color: "text-purple-400",
        },
    ];
    const stats = [
        { value: "92%", label: "Course Completion Rate" },
        { value: "3", label: "Months Program" },
        { value: "100+", label: "Coding Assignments" },
        { value: "5+", label: "Live Projects" },
    ];
    const testimonials = [
        {
            name: "Amit Verma",
            role: "Frontend Developer at Swiggy",
            content:
                "The hands-on experience was unmatched. I started as a beginner and within 3 months, I was confident building real-world apps.",
        },
        {
            name: "Priya Singh",
            role: "Full Stack Engineer at Zoho",
            content:
                "The curriculum covered exactly what I needed for my job. The deployment and backend sessions helped me ace technical interviews.",
        },
        {
            name: "Rahul Mehta",
            role: "Software Developer at TCS",
            content:
                "The portfolio projects helped me stand out. I got multiple interview calls just by showcasing the work I did in the course.",
        },
    ];

    return (
        <div className="min-h-screen bg-transparent w-full overflow-x-hidden">
            {/* Hero section */}
            {/* Hero section */}
            <div className="relative px-4 lg:px-0 bg-black -z-20 w-screen h-screen flex flex-col lg:flex lg:flex-row">
                {/* Left Side (Content) */}
                <div className="w-full h-full z-10 flex items-center justify-center">
                    {/* Your content here */}
                    <div className="text-white text-3xl text-center font-bold max-w-screen-xl mx-auto">
                        <h1 className="text-4xl text-center  md:text-7xl font-bold z-10 sm:mt-10 mt-15 2xl:mt-35  overflow-hidden">
                            <motion.span
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    ease: [0.22, 1, 0.36, 1],
                                    duration: 0.8,
                                }}
                                className="inline-block origin-left"
                            >
                                {" "}
                                Become a Professional Web Developer
                            </motion.span>
                        </h1>
                        <p className="text-lg  lg:text-xl  text-center opacity-60 md:text-xl max-w-3xl mx-auto mt-15  overflow-hidden">
                            <motion.span
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    ease: [0.22, 1, 0.36, 1],
                                    duration: 0.8,
                                    delay: 0.3,
                                }}
                                className="inline-block origin-left"
                            >
                                Master the art of building modern, responsive
                                websites and web applications from scratch
                            </motion.span>
                        </p>
                        <p className="text-xl lg:text-xl text-center md:text-xl opacity-60 max-w-3xl mx-auto  mt-10  overflow-hidden">
                            <motion.span
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    ease: [0.22, 1, 0.36, 1],
                                    duration: 0.8,
                                    delay: 0.6,
                                }}
                                className="inline-block origin-left"
                            >
                                At Vizztal Academy, our Web Development course
                                is crafted to take you from a complete beginner
                                to a job-ready web developer. Learn the latest
                                technologies, build stunning websites, and
                                understand the complete workflow of frontend and
                                backend development through real-world projects.
                            </motion.span>
                        </p>
                    </div>
                </div>
                {/* Right Side (Background Image) */}
                <div className=" lg:w-1/2 h-full absolute top-100  lg:top-0 right-0 -z-10">
                    <img
                        src="./developmentbg.png"
                        className="w-full h-full object-contain lg:object-cover "
                        alt=""
                    />
                </div>
            </div>
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

export default WebDevelopment;
