/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/25
 * @Time: 16:20
 * @Description:  $
 */
import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getDetail = (id) => dispatch => {
  axios.get(`/api/detail.json?id = ${id}`).then(value => {
    const res = value.data;
    if (res.code === 200) {
      dispatch(changeDetail(res.data.title,res.data.content))
    }
    console.log(value);
  });
};

const changeDetail = (title,content) => ({
  type: actionTypes.CHANGE_DETAIL,
  title,
  content
});
