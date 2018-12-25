/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/20
 * @Time: 16:41
 * @Description:  $
 */
import {combineReducers} from "redux-immutable";

import HeaderReducer from '../common/header/store/reducer'
import HomeReducer from '../pages/home/store/reducer'

const reducer = combineReducers({
  header: HeaderReducer,
  home: HomeReducer
})

export default reducer
