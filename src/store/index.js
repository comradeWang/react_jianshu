/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/20
 * @Time: 16:40
 * @Description:  $
 */
import { createStore, compose } from "redux";
import reducer from "./reducer";

// 使用redux devTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers());

export default store;
