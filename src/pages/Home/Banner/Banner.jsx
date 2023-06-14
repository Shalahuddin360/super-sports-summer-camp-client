import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/banner/kids-and-friends-badminton-777x437.jpg'
import img2 from '../../../assets/banner/footballs.jpg'
import img3 from '../../../assets/banner/Childrens_Coaching_Courses.jpg'
import img4 from '../../../assets/banner//home-hero-3.jpg'
import img5 from '../../../assets/banner/basketballs.jpg'
import img6 from '../../../assets/banner/badminton.jpg'

const Banner = () => {
    return (
        <div>
        <div className="carousel w-full h-[600px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={img3} className="w-full rounded-xl" />
            <div className="absolute flex items-center h-full rounded-xl left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className='space-y-7 w-1/2 pl-12'>
                <h2 className=' lg:text-3xl text-white font-bold'>Welcome To The Super Sport Camp Learning Platform !! </h2>
                <p>They are many variations  of passage of available but the majority have suffered alteration in some  </p>
                <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  <button className="btn btn-outline btn-secondary">Latest Classes</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide6" className="btn btn-circle mr-4">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
            <div className="absolute flex items-center h-full rounded-xl left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className='space-y-7 w-1/2 pl-12'>
              <h2 className='lg:text-3xl text-white font-bold'>Welcome To The Super Sport Camp Learning Platform !! </h2>
                <p>They are many variations  of passage of available but the majority have suffered alteration in some  </p>
                <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  <button className="btn btn-outline btn-secondary">Latest Classes</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide1" className="btn btn-circle mr-4">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
            <div className="absolute flex items-center h-full rounded-xl left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className='space-y-7 w-1/2 pl-12'>
              <h2 className='lg:text-3xl text-white font-bold'>Welcome To The Super Sport Camp Learning Platform !! </h2>
                <p>They are many variations  of passage of available but the majority have suffered alteration in some  </p>
                <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  <button className="btn btn-outline btn-secondary">Latest Classes</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide2" className="btn btn-circle mr-4">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl" />
            <div className="absolute flex items-center h-full rounded-xl left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className='space-y-7 w-1/2 pl-12'>
              <h2 className='lg:text-3xl text-white font-bold'>Welcome To The Super Sport Camp Learning Platform !! </h2>
                <p>They are many variations  of passage of available but the majority have suffered alteration in some  </p>
                <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  <button className="btn btn-outline btn-secondary">Latest Classes</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide3" className="btn btn-circle mr-4">❮</a>
              <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full rounded-xl" />
            <div className="absolute flex items-center h-full rounded-xl left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className='space-y-7 w-1/2 pl-12'>
              <h2 className='lg:text-3xl text-white font-bold'>Welcome To The Super Sport Camp Learning Platform !! </h2>
                <p>They are many variations  of passage of available but the majority have suffered alteration in some  </p>
                <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  <button className="btn btn-outline btn-secondary">Latest Classes</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide4" className="btn btn-circle mr-4">❮</a>
              <a href="#slide6" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full rounded-xl" />
            <div className="absolute flex items-center h-full rounded-xl left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className='space-y-7 w-1/2 pl-12'>
              <h2 className='lg:text-3xl text-white font-bold'>Welcome To The Super Sport Camp Learning Platform !! </h2>
                <p>They are many variations  of passage of available but the majority have suffered alteration in some  </p>
                <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  <button className="btn btn-outline btn-secondary">Latest Classes</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide5" className="btn btn-circle mr-4">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;