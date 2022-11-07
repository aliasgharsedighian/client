import addToCart from './addToCart';
import loggedReducer from './isLogged';
import themeMode from './themeMode';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    addtocart: addToCart,
    islogged : loggedReducer,
    themeMode: themeMode
})
export default allReducers;