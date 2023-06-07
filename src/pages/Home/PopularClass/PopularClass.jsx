
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const PopularClass = () => {
    const [classes,setClasses] =useState([])
 useEffect(()=>{
 
    fetch('classes.json')
    .then(res=>res.json())
    .then(data=>{
        setClasses(data)
    })
 },[])
    return (
       <section>
        <SectionTitle
        subHeading={"Popular  Courses"}
        heading={"From  Our Classes"}
        >
        </SectionTitle>
          <div>
            {
                
            }
          </div>
       </section>
    );
};

export default PopularClass;