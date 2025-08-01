import react from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from 'swiper/modules';

import { reviews } from "../../utils/reviews";
import Rating from "../../components/Rating";

const Testimonial = () => {
   return (
      <section className="container max-w-screen-2xl mx-auto my-20 px-4">
         <div className="text-center mb-12">
            <h3 className="uppercase text-lg text-orange-400 font-semibold mb-5">
               Testimonials
            </h3>
            <h2 className="capitalize text-4xl font-bold mb-5">
               Our Client Reviews
            </h2>
         </div>
         <div>
            <Swiper
               slidesPerView={1}
               spaceBetween={10}
               pagination={{
                  clickable: true,
               }}
               navigation={true}
               breakpoints={{
                  640: {
                     slidesPerView: 1,
                     spaceBetween: 20,
                  },
                  768: {
                     slidesPerView: 2,
                     spaceBetween: 40,
                  },
                  1024: {
                     slidesPerView: 3,
                     spaceBetween: 20,
                  },
               }}
               modules={[Pagination,Navigation]}
               className="mySwiper "
            >
               {reviews.map((review, index) => (
                  <SwiperSlide
                     key={index}
                     className="bg-no-repeat bg-cover rounded-lg "
                     style={{ backgroundImage: `URL(${review.coverImg})` }}
                  >
                     <div className="md:h-[530px] flex justify-center items-center mb-4">
                        <div className="mt-16 mb-5 bg-white rounded-xl md:w-4/5 w-full p-4 relative">
                           <img
                              src={review.image}
                              alt=""
                              className="size-20 absolute -top-10 ring-4 ring-orange-500 object-cover rounded-full left-1/2 -translate-x-1/2  "
                           />
                           <div className="mt-16 text-center">
                              <h3 className="text-lg font-bold">
                                 {review.name}
                              </h3>
                              <p className="mb-3 ">Verified customer</p>
                              <p className="text-gray-500 mb-4 ">
                                 {review.revewer}
                              </p>
                              <div className="w-full mx-auto mb-2 flex items-center justify-center text-center">
                                 <Rating />
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   );
};
export default Testimonial;
