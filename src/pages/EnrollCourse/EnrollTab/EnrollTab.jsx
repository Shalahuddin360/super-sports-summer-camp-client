import CourseCard from "../../../components/CourseCard/CourseCard";


const EnrollTab = ({courses}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {
            courses.map(course => <CourseCard
                key={course._id}
                course={course}
            ></CourseCard>)
        }
    </div>
    );
};

export default EnrollTab;