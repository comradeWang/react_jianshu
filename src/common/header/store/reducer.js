/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/20
 * @Time: 16:41
 * @Description:  $
 */
import * as actionTypes from "./actionTypes";
import {fromJS} from 'immutable' // 让编码者不能随意更改state的值

const defaultState = fromJS({
  focused: false,
  headerList: []
});

export default (state = defaultState, action) => {
  // const newState = JSON.parse(JSON.stringify(state));
  if (action.type === actionTypes.HANDLE_INPUT_FOCUSED) {
    return state.set('focused', true);
  }
  if (action.type === actionTypes.HANDLE_INPUT_BLUR) {
    return state.set('focused', false);
  }
  if (action.type === actionTypes.CHANGE_LIST) {
    return state.set('headerList', action.data);
  }
  return state;
};
