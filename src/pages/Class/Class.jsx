
import { Helmet } from 'react-helmet-async';
import ClassCover from '../Shared/ClassCover/ClassCover';
import classImg from '../../assets/banner/class.jpg'
import useClass from '../../hooks/useClass';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ClassCategory from './ClassCategory';
const Class = () => {
    const [classes] = useClass();
    const approveClass = classes.filter(approveClass=>approveClass.status==="approve");
    // console.log("ApproveClass",approveClass);
    const football = approveClass.filter(course=>course.classType === "Football");
    const basketball = approveClass.filter(course=>course.classType === "Basketball");
    const cricket= approveClass.filter(course=>course.classType === "Cricket");
    const badminton = approveClass.filter(course=>course.classType === "Badminton");
    const hockey = approveClass.filter(course=>course.classType === "Hockey");
    const athletics = approveClass.filter(course=>course.classType === "athletics");

    return (
        <div>
            <Helmet>
                <title> Sport || Enroll Class</title>
                
            </Helmet>
            <ClassCover  img={classImg} title={"Our Class"} ></ClassCover>
            {/* football class type */}
            <SectionTitle subHeading={"Do not miss"} heading={" Football Class Offer"}></SectionTitle>
            <ClassCategory courses={football} classType={"football"}></ClassCategory>
            {/* basketball class type */}
            <SectionTitle subHeading={"Do not miss"} heading={" Basketball Class Offer"}></SectionTitle>
            <ClassCategory courses={basketball} classType={"basketball"} ></ClassCategory>
            {/* football class type */}
            <SectionTitle subHeading={"Do not miss"} heading={" Cricket Class Offer"}></SectionTitle>
            <ClassCategory courses={cricket} classType={"cricket"}></ClassCategory>
            {/* football class type */}
            <SectionTitle subHeading={"Do not miss"} heading={"Badminton  Offer"}></SectionTitle>
            <ClassCategory courses={badminton} classType={"badminton"}></ClassCategory>
            {/* football class type */}
            <SectionTitle subHeading={"Do not miss"} heading={" hockey Class Offer"}></SectionTitle>
            <ClassCategory courses={hockey} classType={"hockey"}></ClassCategory>
            {/* football class type */}
            <SectionTitle subHeading={"Do not miss"} heading={" athletics Class Offer"}></SectionTitle>
            <ClassCategory courses={athletics} classType={"athletics"}></ClassCategory>
            {/* football class type */}
          
        </div>  
    );
};

export default Class;