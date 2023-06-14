import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ClassType from "../ClassType/ClassType";
import PopularClass from "../PopularClass/PopularClass";
import ClientSay from "../ClientSay/ClientSay";
import InstructorSection from "../../Shared/InstructorSection/InstructorSection";


const Home = () => {
    return (
        <div>
               <Helmet>
                <title> Sport || Home</title>
                
            </Helmet>
            <Banner></Banner>
            <ClassType></ClassType>
            <PopularClass></PopularClass>
            <InstructorSection></InstructorSection>
            <ClientSay></ClientSay>
        </div>
    );
};

export default Home;