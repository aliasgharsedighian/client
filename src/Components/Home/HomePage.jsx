import NavbarHomePage from "../Navbar/navbarHomePage";
import HomePageProducts from "../Products/Products";
import HomeSliderTop from "../Sliders/HomeSliderTop";
import '../../flexboxgrid.css';
import DivSwiper from "../Carousel/divSwiper";
import Footer from "../Footer/Footer";



const HomePage = () => {
    return ( 
        <>
        <NavbarHomePage />
        <HomeSliderTop />
        <HomePageProducts />
        {/* <ProductPagination /> */}
        <DivSwiper />
        <Footer />
        </>
     );
}
 
export default HomePage;