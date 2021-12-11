import { combineReducers } from "redux";
import auth from './authReducer';
import loader from './loaderReducer';
import categories from './categoryReducer';
import products from './product';
 
export default combineReducers({
    auth, loader, categories, products
})