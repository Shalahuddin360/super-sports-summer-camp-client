
import Rating from 'react-rating';
import client1 from '../../../assets/testimonial/testimonial-1.png'
import client2 from '../../../assets/testimonial/testimonial-2.png'
import client3 from '../../../assets/testimonial/testimonial-3.png'
import client4 from '../../../assets/testimonial/testimonial-4.png'
import { FaRegStar, FaStar } from "react-icons/fa";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
const ClientSay = () => {
    return (
     <>
       <SectionTitle subHeading={"AWARDS for Review"} heading={"WHAT  ARE SAYING"}></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 my-5 bg-base-200 shadow-2xl p-4 rounded-md">
            <div className="flex justify-center items-center p-2 w-full ">
                <div className="text-center md:text-left">
                    <p className="font-semibold text-2xl">Welcome to Super Sport Camp !!</p>
                    <h3 className="font-extrabold text-4xl mt-4">What Our <span className="text-yellow-600">Clients Say</span></h3>
                    <Link><button className='btn btn-secondary mt-4'>Read More</button> </Link>
                </div>
            </div>
            <div>
                <div className="carousel w-full h-[400px] mx-auto ">
                    <div id="item1" className="carousel-item w-full">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={client1} style={{width:'96px'}} alt="Client1" className="rounded-xl " />
                            </figure>
                            <div className="card-body items-center text-center">


                                <Rating
                                    placeholderRating={4.5}
                                    readonly
                                    emptySymbol={<FaRegStar />}
                                    placeholderSymbol={<FaStar className='text-yellow-600' />}
                                    fullSymbol={<FaStar />}
                                >

                                </Rating>

                                <h2 className="card-title">Trustworthy and powerful</h2>
                                <p>All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you !..</p>
                                <p><span className='text-center text-yellow-600 font-semibold'>Alva Ono</span></p>
                    
                            </div>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={client2} style={{width:'96px'}} alt="Client2" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <Rating
                                    placeholderRating={5}
                                    readonly
                                    emptySymbol={<FaRegStar />}
                                    placeholderSymbol={<FaStar className='text-yellow-600' />}
                                    fullSymbol={<FaStar />}
                                >

                                </Rating>
                                <h2 className="card-title">Trustworthy and powerful</h2>
                                <p>Perfect Themes and the best of all that you have many options to choose! Best Support team ever!Very fast responding and experts on their fields! Thank you very much! ..</p>
                                <p><span className='text-center text-yellow-600 font-semibold'>Amber Laha</span></p>
                       
                            </div>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={client3} style={{width:'96px'}} alt="Client3" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <Rating
                                    placeholderRating={3.5}
                                    readonly
                                    emptySymbol={<FaRegStar />}
                                    placeholderSymbol={<FaStar className='text-yellow-600' />}
                                    fullSymbol={<FaStar />}
                                >

                                </Rating>
                                <h2 className="card-title">Best designer around</h2>
                                <p>Code, template and others are very good. The support has served me immediately and solved my problems when I need help. Are to be congratulated. Att Renan Andrade ..?</p>
                                <p><span className='text-center text-yellow-600 font-semibold'>Dewey Tetzlaff</span></p>
                        
                            </div>
                        </div>
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-5 pt-10">
                                <img src={client4} style={{width:'96px'}} alt="Client4" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <Rating
                                    placeholderRating={4}
                                    readonly
                                    emptySymbol={<FaRegStar />}
                                    placeholderSymbol={<FaStar className='text-yellow-600' />}
                                    fullSymbol={<FaStar />}
                                >

                                </Rating>
                                <h2 className="card-title">Shoes!</h2>
                                <p>All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you !..?</p>
                                <p><span className='text-center text-yellow-600 font-semibold'>Dewey Onu</span></p>
                    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
        </div>
     </>
    );
};

export default ClientSay;