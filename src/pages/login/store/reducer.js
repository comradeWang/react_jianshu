/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2019/1/3
 * @Time: 11:21
 * @Description:  $
 */
import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  isLogin: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ISLOGIN:
      return state.set("isLogin", action.value);
    case actionTypes.LOGINOUT:
      return state.set("isLogin", action.value);
    default:
      return state;
  }
};
