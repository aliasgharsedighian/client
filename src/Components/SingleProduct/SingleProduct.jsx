import {Link, useParams} from 'react-router-dom';
import dataProducts from '../Products/dataProducts';
import './SingleProduct.css'
import Footer from '../Footer/Footer'

const SingleProduct = (props) => {
    
    const {productId} = useParams();
    const product = dataProducts.find((obj)=> obj.id == productId);
    const {images , title, price, stars, moreDetail} = product;
    
    console.log(product)
    return ( 
        <div>
            <div className='single-product-container'>
            <div className="img-Sproduct">
                <img src={images} alt='' />
            </div>
            <div className="rateC">
                <h4>امتیاز خریداران</h4>
                <p>{stars}</p>
            </div>
            <div className="detail1">
                <h3>{title}</h3>
                <p>{moreDetail}</p>
            </div>
            <div className="detail2">
                <h5>ویژگی ها</h5>
            </div>
            <div className="Sprice">
                قیمت:
                <span>{price}</span>
            </div>
            <div className="addToCard">
                <button>افزودن به سبد خرید</button>
            </div>
            <Link className='back-to-products' to='/products'>برگشت به صفحه محصولات</Link>
        </div>
        <Footer />
        </div>
    )
}
export default SingleProduct;