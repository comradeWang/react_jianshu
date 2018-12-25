/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/20
 * @Time: 16:41
 * @Description:  $
 */
import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable"; // 让编码者不能随意更改state的值

const defaultState = fromJS({
  focused: false,
  headerList: [],
  page: 1, // 当前是第几页
  totalPage:1, // 一共多少页
  mouseIn: false // 鼠标是否在框内
});

export default (state = defaultState, action) => {
  // const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionTypes.HANDLE_INPUT_FOCUSED:
      return state.set("focused", true);
    case actionTypes.HANDLE_INPUT_BLUR:
      return state.set("focused", false);
    case actionTypes.CHANGE_LIST:
      return state.merge({
        headerList: action.data,
        totalPage: action.totalPage,
      })
      // return state.set("headerList", action.data).set('totalPage',action.totalPage);
    case actionTypes.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case actionTypes.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case actionTypes.HANDLE_CHANGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};
