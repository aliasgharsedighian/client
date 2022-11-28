import NavbarHomePage from "../Navbar/navbarHomePage";
import HomePageProducts from "../Products/Products";
import '../../flexboxgrid.css';
import DivSwiper from "../Carousel/divSwiper";
import HomeSlider from "../Sliders/HomeSlider";



const HomePage = () => {
    return ( 
        <>
        <NavbarHomePage />
        <HomeSlider />
        <HomePageProducts />
        <DivSwiper />
        </>
     );
}
 
export default HomePage;