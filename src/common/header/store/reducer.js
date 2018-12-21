/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/20
 * @Time: 16:41
 * @Description:  $
 */
import * as actionTypes from "./actionTypes";

const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === actionTypes.HEADER_INPUT_FOCUSED) {
    newState.focused = action.value;
    return newState;
  }
  return state;
};
