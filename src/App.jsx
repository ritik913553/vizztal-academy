import React from "react";
import CoursesHome from "./Pages/CoursesHome";
import Footer from "./Component/Footer";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import WebDevelopment from "./Pages/WebDevelopment";
import DataSciencePage from "./Pages/DataSciencePage";
import DigitalMarketingPage from "./Pages/DigitalMarketingPage";
import ScrollToTop from "./Component/ScrollToTop";
import { Toaster } from "react-hot-toast";
const App = () => {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<CoursesHome />} />
                <Route path="/webdevelopment" element={<WebDevelopment />} />
                <Route path="/datascience" element={<DataSciencePage />} />
                <Route
                    path="/digitalmarketing"
                    element={<DigitalMarketingPage />}
                />
            </Routes>
            <Footer />
                <Toaster />
        </>
    );
};

export default App;
