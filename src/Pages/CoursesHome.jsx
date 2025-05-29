import React, { useEffect } from "react";
import AllCourses from "../Component/AllCourses";
import Landing from "../Component/Landing";
const CoursesHome = () => {
    useEffect(()=>{
        document.title= 'Vizztal Academy | Home ';
    },[])
    return (
        <div className="bg-black">
            <Landing />
            <AllCourses />
        </div>
    );
};

export default CoursesHome;
