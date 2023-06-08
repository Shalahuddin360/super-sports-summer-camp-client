
import { Helmet } from 'react-helmet-async';
import ClassCover from '../Shared/ClassCover/ClassCover';
import classImg from '../../assets/classes/classes.jpg'
import useClass from '../../hooks/useClass';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ClassCategory from './ClassCategory';
const Class = () => {
    const [classes] = useClass();
    const football = classes.filter(course=>course.classType === "Football");
    const basketball = classes.filter(course=>course.classType === "Basketball");
    const cricket= classes.filter(course=>course.classType === "Cricket");
    const badminton = classes.filter(course=>course.classType === "Badminton");
    const hockey = classes.filter(course=>course.classType === "Hockey");
    const athletics = classes.filter(course=>course.classType === "athletics");

    return (
        <div>
            <Helmet>
                <title> Sport || Classes</title>
                
            </Helmet>
            <ClassCover  img={classImg} title={"Our Class"} ></ClassCover>
            {/* football class type */}
            <SectionTitle subHeading={"Do not miss"} heading={" Football Course Offer"}></SectionTitle>
            <ClassCategory courses={football}></ClassCategory>
            {/* basketball class type */}
            <SectionTitle subHeading={"Do not miss"} heading={" Basketball Course Offer"}></SectionTitle>
            <ClassCategory courses={basketball}></ClassCategory>
            {/* football class type */}
            <SectionTitle subHeading={"Do not miss"} heading={" Cricket Course Offer"}></SectionTitle>
            <ClassCategory courses={cricket}></ClassCategory>
            {/* football class type */}
            <SectionTitle subHeading={"Do not miss"} heading={"Badminton Course Offer"}></SectionTitle>
            <ClassCategory courses={ badminton}></ClassCategory>
            {/* football class type */}
            <SectionTitle subHeading={"Do not miss"} heading={" hockey Course Offer"}></SectionTitle>
            <ClassCategory courses={hockey}></ClassCategory>
            {/* football class type */}
            <SectionTitle subHeading={"Do not miss"} heading={" athletics Course Offer"}></SectionTitle>
            <ClassCategory courses={athletics}></ClassCategory>
            {/* football class type */}
          
        </div>  
    );
};

export default Class;