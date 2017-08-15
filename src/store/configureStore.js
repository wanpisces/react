import { createStore,applyMiddleware } from 'redux';
//import Async from './../middlewares/async';
import ReduxPromise from "redux-promise"; // 用于处理异步操作
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}


