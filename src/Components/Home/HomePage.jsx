import NavbarHomePage from "../Navbar/navbarHomePage";
import HomePageProducts from "../Products/Products";
import HomeSliderTop from "../Sliders/HomeSliderTop";
import '../../flexboxgrid.css';
import HotOfferSwiper from "../Carousel/hotOfferSwiper";
import DivSwiper from "../Carousel/divSwiper";


const HomePage = () => {
    return ( 
        <>
        <NavbarHomePage />
        <HomeSliderTop />
        <HomePageProducts />
        <DivSwiper />
        </>
     );
}
 
export default HomePage;