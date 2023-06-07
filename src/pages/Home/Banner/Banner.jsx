import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/banner/criket1.jpg'
import img2 from '../../../assets/banner/2.jpg'
import img3 from '../../../assets/banner/process3.jpg'
import img4 from '../../../assets/banner/process1.jpg'
import img5 from '../../../assets/banner/athletics.jpg'
import img6 from '../../../assets/banner/badminton.jpg'
const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img className="object-cover w-full h-full" src={img1}/>
                  
                </div>
                <div>
                    <img className="object-cover w-full h-full" src={img2} />
              
                </div>
                <div>
                    <img className="object-cover w-full h-full" src={img3} />
             
                </div>
                <div>
                    <img className="object-cover w-full h-full" src={img4} />
          
                </div>
                <div>
                    <img className="object-cover w-full h-full" src={img5} />
                 
                </div>
                <div>
                    <img className="object-cover w-full h-full" src={img6} />
                 
                </div>
            </Carousel>
    );
};

export default Banner;