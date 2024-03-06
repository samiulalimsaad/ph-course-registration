import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart";
import Courses from "./components/Courses";

export const totalCredits = 15;

function App() {
    const [carts, setCarts] = useState([]);

    const handleCourseSelection = (course) => {
        console.log(course);

        const credits = carts.reduce((p, c) => p + c.credit, 0);

        if (credits + course.credit > totalCredits)
            return toast.error(`only ${totalCredits} credits allowed`);

        const alreadyExists = carts.find((c) => c.id == course.id);
        if (alreadyExists) {
            toast.warn("Course already Selected");
        } else {
            setCarts((c) => [...c, course]);
            toast.success("Course Added");
        }
    };

    return (
        <div className="p-4 bg-base-200">
            <h1 className="text-3xl font-bold text-center">
                Course Registration
            </h1>
            <div className="grid grid-cols-12 my-4 gap-8">
                <div className="col-span-10">
                    <Courses handleCourseSelection={handleCourseSelection} />
                </div>
                <div className="col-span-2">
                    <Cart carts={carts} />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default App;
