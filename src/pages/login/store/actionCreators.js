/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2019/1/3
 * @Time: 11:21
 * @Description:  $
 */
import axios from "axios";
import * as actionTypes from "./actionTypes";

const changeIsLogin = () => ({
  type: actionTypes.CHANGE_ISLOGIN,
  value: true
});

export const loginOut = () => ({
  type: actionTypes.LOGINOUT,
  value: false
});
export const login = (account, password) => {
  return dispatch => {
    axios.get("/api/login.json").then(value => {
      let res = value.data.data;
      if (res) {
        console.log(res);
        dispatch(changeIsLogin());
      } else {
      }
    });
  };
};
