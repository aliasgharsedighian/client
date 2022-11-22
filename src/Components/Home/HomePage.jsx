import NavbarHomePage from "../Navbar/navbarHomePage";
import HomePageProducts from "../Products/Products";
import HomeSliderTop from "../Sliders/HomeSliderTop";
import '../../flexboxgrid.css';
import DivSwiper from "../Carousel/divSwiper";
import Footer from "../Footer/Footer";
import HomeSlider from "../Sliders/HomeSlider";



const HomePage = () => {
    return ( 
        <>
        <NavbarHomePage />
        <HomeSlider />
        <HomePageProducts />
        <DivSwiper />
        <Footer />
        </>
     );
}
 
export default HomePage;