import React from "react";
import Course from "./Course";
import { motion } from "framer-motion";
import Feature from "./Feature";
const AllCourses = () => {
    const courses = [
        {
            title: "Full Stack Web Development",
            description: [
                "Step into the world of modern web creation with our Web Development Course — designed to transform you from a beginner to a job-ready developer. In this comprehensive program, you'll master the fundamentals of the web and move on to building full-stack applications using the most in-demand technologies.",
                <br key="1" />,
                <br key="1" />,
                "From responsive design to dynamic interactivity, you'll not only learn how websites work — you'll build them.",
            ],
            image: "./webDevelopment.png",
            link:"./webdevelopment"
        },
        {
            title: "Data Science & Artificial Intelligence",
            description: [
                "Uncover the power of data and artificial intelligence in our Data Science & AI Course, designed for learners who want to analyze, predict, and automate. This course starts with the basics of data manipulation and statistics, then dives deep into machine learning, data visualization, and AI algorithms.",
                <br key="1" />,
                <br key="1" />,
                "You’ll gain practical experience by working with real datasets, training predictive models, and building intelligent systems using Python and key libraries like Pandas, NumPy, Matplotlib, Scikit-Learn, and TensorFlow.",
            ],
            image: "./datascience.png",
            link:"./datascience"
        },
        {
            title: "Digital Marketing Mastery",
            description: [
                "Welcome to the digital battlefield. Our Digital Marketing Course is built to equip you with practical tools to grow any brand, business, or personal profile online. In this course, you’ll learn how to attract, engage, and convert audiences using today’s most effective platforms and strategies.",
                <br key="1" />,
                <br key="1" />,
                "From mastering SEO and social media ads to building sales funnels and using analytics — this course prepares you to drive real results and measure success.",
            ],
            image: "./Digital.png",
            link:'./digitalmarketing'
        },
    ];
    const features = [
        {
            title: "Practical, Project-Based Learning",
            image: "./Features/feature1.png",
            description:
                "We go beyond theory. Each course includes hands-on projects and real-world case studies to ensure you actually build what you learn.",
        },
        {
            title: "Industry-Relevant Curriculum",
            image: "./Features/feature2.png",
            description:
                "Courses crafted with top professionals to teach in-demand tools, frameworks, and technologies that companies are hiring for.",
        },
        {
            title: "Beginner-Friendly to Advanced Tracks",
            image: "./Features/feature3.png",
            description:
                "Start with zero knowledge or advance to expert level — we offer guided paths for every learner.",
        },
        {
            title: "Flexible Learning, Your Way",
            image: "./Features/feature4.png",
            description:
                "Learn at your own pace, from anywhere. All content is on-demand, accessible, and rewatchable — anytime, anywhere.",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-black to-[#1859AB] ">
            <div className="min-h-screen max-w-screen-xl mx-auto p-5">
                <h1 className="text-[8.4vw] xl:text-[4vw] 2xl:text-[3.4vw] pt-10 font-bold text-transparent  overflow-hidden">
                    <motion.span
                        style={{
                            background:
                                "linear-gradient(279deg,rgba(250, 36, 9, 1) 0%, rgba(250, 36, 9, 1) 20%, rgba(212, 205, 23, 1) 57%, rgba(250, 25, 235, 1) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                        initial={{ x: "-50%", opacity: 0 }}
                        whileInView={{ x: "50%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: [0.22, 1, 0.36, 1],
                            duration: 0.8,
                        }}
                        className="inline-block origin-left  -translate-x-[50%] opacity-0 bg-clip-text"
                    >
                        🚀 Why Learn with Vizztal Academy?
                    </motion.span>
                </h1>{" "}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-15">
                    {features.map((feature, i) => (
                       <Feature feature={feature} key={i} />
                    ))}
                </div>
                <h1 className="text-[8.4vw] mt-15 xl:text-[7vw] 2xl:text-[8vw] font-bold text-transparent  overflow-hidden">
                    <motion.span
                        style={{
                            background:
                                "linear-gradient(279deg,rgba(250, 36, 9, 1) 0%, rgba(250, 36, 9, 1) 20%, rgba(212, 205, 23, 1) 57%, rgba(250, 25, 235, 1) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                        initial={{ x: "-50%", opacity: 0 }}
                        whileInView={{ x: "50%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: [0.22, 1, 0.36, 1],
                            duration: 0.8,
                        }}
                        className="inline-block origin-left  -translate-x-[50%] opacity-0 bg-clip-text"
                    >
                        Our Courses
                    </motion.span>
                </h1>{" "}
                <div className=" pb-10">
                    {courses.map((course, index) => (
                        <Course course={course} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllCourses;
