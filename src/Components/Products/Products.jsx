import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Actions";
import dataProducts from "./dataProducts";
import "../../Styles/Products.scss";
import "./flexboxgrid.css";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomePageProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 12;
  const pagesVisited = pageNumber * productPerPage;

  const displayProduct = dataProducts
    .slice(pagesVisited, pagesVisited + productPerPage)
    .filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    })
    .map((obj) => {
      return (
        <article key={obj.id} className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
          <div className="shopping-cart">
            <div className="img-sec2">
              <Link to={`/products/${obj.id}`}>
                <img src={obj.images} alt="" />
              </Link>
              <span className="hot-offer">{obj.hotOffer}</span>
              <span className="offer-per">{obj.offerPer}</span>
              <div className="stars">{obj.stars}</div>
            </div>
            <div className="title-shopping-cart">{obj.title}</div>
            <div className="buttons-shopping-cart">
              <div className="right-shopping-cart">
                <span className="price">{obj.price}</span>
              </div>
              <div className="left-shopping-cart">
                <div className="extend-btn">
                  <Link to={`/products/${obj.id}`}>اطلاعات بیشتر</Link>
                </div>
                <div className="extend-icon">
                  <button onClick={() => dispatch(addToCart(1))}>
                    <i class="fa-solid fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      );
    });

  const pageCount = Math.ceil(dataProducts.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section className="home-page-product">
      <form className="product-search" role="search">
        <label className="search-label" htmlFor="search">
          جستجو محصولات
        </label>
        <input
          className="search-input"
          id="search"
          type="search"
          placeholder="جستجو ..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          autoFocus
          required
        />
      </form>

      <div className="row">{displayProduct}</div>
      <ReactPaginate
        previousLabel={"صفحه قبلی"}
        nextLabel={"صفحه بعدی"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </section>
  );
};

export default HomePageProducts;
