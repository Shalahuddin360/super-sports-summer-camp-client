import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slider1 from "../../../assets/slider/slider1.jpg"
import slider2 from "../../../assets/slider/slider2.jpg"
import slider3 from "../../../assets/slider/slider3.jpg"
import slider4 from "../../../assets/slider/slider4.jpg"
import slider5 from "../../../assets/slider/slider5.jpg"
import slider6 from "../../../assets/slider/slider6.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const ClassType = () => {
    return (
        <section>
            <SectionTitle
             subHeading={"sports classes"} 
             heading={"Top Classes Gallery"}
            >

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="object-cover w-full h-full" src={slider1} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white font-bold ">Football</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="object-cover w-full h-full" src={slider2} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white font-bold ">Badminton</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="object-cover w-full h-full" src={slider3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white font-bold ">athletics</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="object-cover w-full h-full" src={slider4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white font-bold ">Cricket</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="object-cover w-full h-full" src={slider5} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white font-bold ">Hockey</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="object-cover w-full h-full" src={slider6} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white font-bold "></h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default ClassType;