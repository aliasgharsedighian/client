import { Pagination, Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";

import "./Swiper.css";
import dataHotOffer from './dataHotOffer';
import { Link } from "react-router-dom";

const HotOfferSwiper = () => {
  return (
    <div className="container-hotoffer">
      <Swiper
        modules={[Navigation, Pagination, FreeMode]}
        navigation
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        className="myswiper"
      >
        {dataHotOffer.map((obj,index)=>{
            return (
                <SwiperSlide className="my-swiper-slide">
                    <Link to='/'>
                    <div className="shopping-cart">
                        <div className="img-sec">
                   <img src={obj.images} alt="" />
                   <span className="offer-per2">{obj.offerPer}</span>
                   <div className="stars">
                    {obj.stars}
                   </div>
                </div>
                <div className="title-shopping-cart">
                    {obj.title}
                </div>
                     <span className="price">
                        {obj.price}
                     </span>
                       </div>
                    </Link>
                </SwiperSlide>
            )
        })}
      </Swiper>
    </div>
  );
};

export default HotOfferSwiper;
