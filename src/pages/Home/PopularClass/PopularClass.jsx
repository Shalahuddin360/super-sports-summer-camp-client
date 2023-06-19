
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularClassCard from "../PopularClassCard/PopularClassCard";
import useClass from "../../../hooks/useClass";
// import { useEffect, useState } from "react";


const PopularClass = () => {

const [classes] = useClass();
const PopularApproveClass = classes.filter(approveClass=>approveClass.status==="approve");
    return (
       <section>
        <SectionTitle
        subHeading={"Popular  Class"}
        heading={"From  Our Classes"}
        >
        </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
              PopularApproveClass.map(course=><PopularClassCard
               key={course._id}
               course ={course}
               >

               </PopularClassCard>)
            }
          </div>
       </section>
    );
};

export default PopularClass;