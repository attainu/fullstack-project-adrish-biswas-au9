import {combineReducers} from 'redux';
import article from './article_reducer';
import gallery from './gallery_reducer';
import wishlist from './wishlist_reducer';

const rootReducer = combineReducers({
    wishlist
});

export default rootReducer;
