
import { Link } from "react-router-dom";
import SingleClass from "./SingleClass";



const ClassCategory = ({ courses, classType }) => {


    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 my-16">
                {
                    courses.map(course => <SingleClass
                        key={course._id}
                        course={course}
                    ></SingleClass>)

                }

            </div>
            <div className="card-actions w-full mx-auto">
                <Link to={`/enroll/${classType}`}>  <button className="btn btn-primary  border-0 border-b-4">Enroll Now</button></Link>
            </div>

        </div>
    );
};

export default ClassCategory;