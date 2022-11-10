import './NotFoundPage.css'

const NotFoundPage = () => {
    return ( 
            <div className="page-not-found">
                <h1>404</h1>
                <h4>Oops ,Sorry we can't find that Page!</h4>
                <p>Somthing went wrong or the page doesn't exist anymore</p>
                <button><a href="/">Home Page</a></button>
            </div>
        );
}
 
export default NotFoundPage;