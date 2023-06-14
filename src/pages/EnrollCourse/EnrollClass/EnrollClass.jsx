import { useState } from 'react';
import enrollCover from '../../../assets/banner/classes.jpg'
import ClassCover from '../../Shared/ClassCover/ClassCover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useClass from '../../../hooks/useClass';
import EnrollTab from '../EnrollTab/EnrollTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';



const EnrollClass = () => {
    const classTypes = ['football', 'basketball', 'cricket', 'badminton', 'hockey', 'athletics'];
    const { classType } = useParams();
  
    const initialIndex = classTypes.indexOf(classType)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [classes] = useClass();


    const football = classes.filter(course => course.classType === "Football");
    const basketball = classes.filter(course => course.classType === "Basketball");
    const cricket = classes.filter(course => course.classType === "Cricket");
    const badminton = classes.filter(course => course.classType === "Badminton");
    const hockey = classes.filter(course => course.classType === "Hockey");
    const athletics = classes.filter(course => course.classType === "athletics");
    return (
        <div className=''>
            <Helmet>
                <title> Sport || Classes</title>

            </Helmet>
            <ClassCover img={enrollCover} title={"Our Classes"}></ClassCover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Football</Tab>
                    <Tab>Basketball</Tab>
                    <Tab>Cricket</Tab>
                    <Tab>Badminton</Tab>
                    <Tab>Hockey</Tab>
                    <Tab>athletics</Tab>
                </TabList>

                <TabPanel>
                    <EnrollTab courses={football}></EnrollTab>
                </TabPanel>

                <TabPanel>
                    <EnrollTab courses={basketball}></EnrollTab>
                </TabPanel>
                <TabPanel>
                    <EnrollTab courses={cricket}></EnrollTab>
                </TabPanel>
                <TabPanel>
                    <EnrollTab courses={badminton}></EnrollTab>
                </TabPanel>
                <TabPanel>
                    <EnrollTab courses={hockey}></EnrollTab>
                </TabPanel>
                <TabPanel>
                    <EnrollTab courses={athletics}></EnrollTab>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default EnrollClass;