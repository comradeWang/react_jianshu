/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/20
 * @Time: 16:41
 * @Description:  $
 */
import { combineReducers } from "redux-immutable";

import HeaderReducer from "../common/header/store/reducer";
import HomeReducer from "../pages/home/store/reducer";
import { DetailReducer } from "../pages/detail/store";
import { LoginReducer } from "../pages/login/store";

const reducer = combineReducers({
  header: HeaderReducer,
  home: HomeReducer,
  detail: DetailReducer,
  login: LoginReducer
});

export default reducer;
