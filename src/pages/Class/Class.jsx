
import { Helmet } from 'react-helmet-async';
import ClassCover from '../Shared/ClassCover/ClassCover';
import classImg from '../../assets/classses/class1.jpg'
const Class = () => {
    return (
        <div>
            <Helmet>
                <title> Sport || Classes</title>
                
            </Helmet>
            <ClassCover img={classImg} title={"Our Class"} ></ClassCover>
        </div>
    );
};

export default Class;