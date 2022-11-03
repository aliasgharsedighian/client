import NavbarHomePage from "../Navbar/navbarHomePage";
import HomePageProducts from "../Products/Products";
import HomeSliderTop from "../Sliders/HomeSliderTop";
import '../../flexboxgrid.css'

const HomePage = () => {
    return ( 
        <>
        <NavbarHomePage />
        <HomeSliderTop />
        <HomePageProducts />
        </>
     );
}
 
export default HomePage;