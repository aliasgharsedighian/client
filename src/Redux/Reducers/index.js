import addToCartReducer from './addToCart';
import loggedReducer from './isLogged';
import themeModeReducer from './themeMode';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    addtocards: addToCartReducer,
    islogged : loggedReducer,
    themeMode: themeModeReducer
})
export default allReducers;