import { useDispatch} from 'react-redux';
import { addToCart } from '../../Redux/Actions';
import dataProducts from "./dataProducts";
import './Products.css';
import './flexboxgrid.css';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';


const HomePageProducts = () => {
    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState(0);

    const productPerPage = 12
    const pagesVisited = pageNumber * productPerPage

    const displayProduct = dataProducts
    .slice(pagesVisited, pagesVisited + productPerPage)
    .map(obj =>{
        return (
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
           <div className="shopping-cart">
            <div className="img-sec2">
       <img src={obj.images} alt="" />
       <span className="hot-offer">{obj.hotOffer}</span>
       <span className="offer-per">{obj.offerPer}</span>
       <div className="stars">
        {obj.stars}
       </div>
    </div>
    <div className="title-shopping-cart">
        {obj.title}
    </div>
    <div className="buttons-shopping-cart">
       <div className="right-shopping-cart">
         <span className="price">
            {obj.price}
         </span>
       </div>
       <div className="left-shopping-cart">
        
        <div className="extend-btn">
            <a href="#">اطلاعات بیشتر</a>
            
        </div>
        <div className="extend-icon">
            <button onClick={()=> dispatch(addToCart(1))}><i class="fa-solid fa-cart-plus"></i></button>
        </div>
     </div>
    </div>
           </div>
           </div>
        )
    });

    const pageCount = Math.ceil(dataProducts.length / productPerPage);

    const changePage = ({selected})=>{
        setPageNumber(selected)
    };

    return ( 
        <section className="home-page-product">
            <div className="row">
                {displayProduct}
            </div>
            <ReactPaginate 
                  previousLabel={"صفحه قبلی"}
                  nextLabel={"صفحه بعدی"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={'paginationBttns'}
                  previousLinkClassName={'previousBttn'}
                  nextLinkClassName={'nextBttn'}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={'paginationActive'}
                />
            </section>
        
     );
}
 
export default HomePageProducts;