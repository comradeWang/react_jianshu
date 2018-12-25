/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/21
 * @Time: 10:45
 * @Description:  $
 */
import * as actionTypes from "./actionTypes";
import axios from 'axios'
import {fromJS} from "immutable";

export const getInputFocused = () => ({
  type:actionTypes.HANDLE_INPUT_FOCUSED,
});
export const getInputBlur = () => ({
  type:actionTypes.HANDLE_INPUT_BLUR,
});
/**
* @author: WangXinYu
* @describe: ajax获取header热门搜索推荐列表
* @create: 2018/12/21 16:04
**/
export const getList = () =>{
  return dispatch =>{
    axios.get('/api/headerList.json').then(value => {
      const action = changeHeaderList(value.data)
      dispatch(action)
    }).catch(reason => {
      console.log('err', reason);
    })
  }
}
const changeHeaderList = (data) => (
  {
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)

  }
);
/**
 * @author: WangXinYu
 * @describe: 鼠标进入热门搜索框事件
 * @create: 2018/12/24 10:48
 **/
export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
});

/**
 * @author: WangXinYu
 * @describe:
 * @create: 2018/12/24 11:07
 **/
export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
});

/**
* @author: WangXinYu
* @describe: 换一批事件触发
* @create: 2018/12/24 11:28
**/
export const handleChange = (page) => ({
  type: actionTypes.HANDLE_CHANGE,
  page
})
