import SingleClass from "./SingleClass";



const ClassCategory = ({courses}) => {
  
   
    return (
        <div>
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-4 my-16">
                {
                    courses.map(course=><SingleClass
                    key={course._id}
                    course={course}
                    ></SingleClass>)
                     
                }

            </div>
           
        </div>
    );
};

export default ClassCategory;