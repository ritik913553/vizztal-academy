import React, { useState } from "react";
import toast from "react-hot-toast";

const ApplyForm = ({ activeModal, setActiveModal, closeModal }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        education: "",
        experience: "",
        interest: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

  
    //     if (!formData.name || !formData.email || !formData.phone) {
    //         toast.error("Please fill in all required fields (Name, Email, Phone)",{
    //           duration:2000,
    //           position:"bottom-left"
    //         });
    //         return;
    //     }
    //     toast.success(
    //         `Form submitted successfully for ${
    //             activeModal === "internship"
    //                 ? "internship"
    //                 : "program registration"
    //         }!`,{
    //           duration:3000,
    //           position:"bottom-left"
    //         }
    //     );
    //     setActiveModal(null);
    //     setFormData({
    //         name: "",
    //         email: "",
    //         phone: "",
    //         education: "",
    //         experience: "",
    //         interest: "",
    //     });
    //     console.log(formData);
    // };
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        // Simple validation
        if (!formData.name || !formData.email || !formData.phone) {
            setError("Please fill in all required fields (Name, Email, Phone)");
            toast.error(
                "Please fill in all required fields (Name, Email, Phone)",
                {
                    duration: 2000,
                    position: "bottom-left",
                }
            );
            return;
        }

        setLoading(true);

        // Construct the payload
        const payload = {
            name: formData.name,
            email: formData.email,
            message: `
Phone: ${formData.phone}
Education: ${formData.education}
Experience: ${formData.experience}
Interest: ${formData.interest}
        `.trim(),
        };
        console.log(payload)

        try {
            const res = await fetch(
                "https://vizzbackend-rsqi.onrender.com/api/mail/send",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                }
            );
            if (!res.ok) throw new Error("Failed to send application.");
            setSuccess("Your application has been sent!");
            toast.success("Application sent successfully!", {
                duration: 3000,
                position: "bottom-left",
            });
            setActiveModal(null);
            setFormData({
                name: "",
                email: "",
                phone: "",
                education: "",
                experience: "",
                interest: "",
            });
        } catch (err) {
            setError(err.message || "Something went wrong.");
            toast.error(err.message || "Something went wrong.", {
                duration: 3000,
                position: "bottom-left",
            });
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-100">
            <div className="form bg-gray-800 rounded-xl w-full max-w-md mx-auto max-h-[80vh] mt-25 overflow-y-auto">
                <div className="p-6 sm:p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                            {activeModal === "internship"
                                ? "Apply for Internship"
                                : "Join Our Program"}
                        </h3>
                        <button
                            onClick={() => closeModal(setFormData)}
                            className="text-gray-400 hover:text-white text-2xl font-bold"
                        >
                            ×
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Education Background
                            </label>
                            <select
                                name="education"
                                value={formData.education}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                            >
                                <option value="">
                                    Select your education level
                                </option>
                                <option value="high-school">High School</option>
                                <option value="bachelor">
                                    Bachelor's Degree
                                </option>
                                <option value="master">Master's Degree</option>
                                <option value="phd">PhD</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Experience Level
                            </label>
                            <select
                                name="experience"
                                value={formData.experience}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                            >
                                <option value="">
                                    Select your experience level
                                </option>
                                <option value="beginner">
                                    Complete Beginner
                                </option>
                                <option value="some-knowledge">
                                    Some Knowledge
                                </option>
                                <option value="intermediate">
                                    Intermediate
                                </option>
                                <option value="advanced">Advanced</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Area of Interest
                            </label>
                            <textarea
                                name="interest"
                                value={formData.interest}
                                onChange={handleInputChange}
                                rows="3"
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none"
                                placeholder="Tell us about your specific interests in digital marketing..."
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition-all transform hover:scale-105 active:scale-95"
                            >
                                Submit Application
                            </button>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="flex-1 px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyForm;
