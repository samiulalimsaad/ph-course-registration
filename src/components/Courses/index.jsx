/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Course from "./course";

const Courses = ({ handleCourseSelection }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("/courses.json")
            .then((res) => res.json())
            .then((c) => setCourses(c))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {courses.map((course) => (
                <Course
                    handleCourseSelection={handleCourseSelection}
                    key={course.id}
                    course={course}
                />
            ))}
        </div>
    );
};

export default Courses;
