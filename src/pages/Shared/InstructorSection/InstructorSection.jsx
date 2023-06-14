import { useQuery } from "@tanstack/react-query";
import InstructorCard from "./InstructorCard";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ClassCover from "../ClassCover/ClassCover";
import enrollCover from '../../../assets/banner/instructors.jpg'


const InstructorSection = () => {
    const { data: users = [] } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users');
        return res.json()
    })

    console.log('instructor', users)
    
    const instructors = users.filter(user => user.role === "instructor");
    return (
        <>
         
             <Helmet>
                <title> Sport || Instructors</title>

            </Helmet>
            <ClassCover img={enrollCover} title={"Our Instructors"}></ClassCover>
            <SectionTitle heading={"Our All Instructors"} subHeading={"Instructors Section Are Below"}></SectionTitle>
            <div>
                <h2 className="text-3xl">Total Instructor: <span className="text-yellow-600">{instructors.length}</span> </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {

                        instructors.map(instructor => <InstructorCard
                            key={instructor._id}
                            instructor={instructor}
                        ></InstructorCard>)

                    }
                </div>
            </div>
        </>
    );
};

export default InstructorSection;