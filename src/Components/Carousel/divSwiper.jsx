import HotOfferSwiper from './hotOfferSwiper';
import './Swiper.css'
import imageHotOffer from './images/Super-offer.jpg'

const DivSwiper = () => {
    return ( 
        <div className="swiper-hotoffer-container">
            <div className='img2-sec'>
                <img src={imageHotOffer} alt="" />
                <a href="/">مشاهده همه</a>
            </div>
            <div className='product-sec'>
                <HotOfferSwiper />
            </div>
        </div>
     );
}
 
export default DivSwiper;
