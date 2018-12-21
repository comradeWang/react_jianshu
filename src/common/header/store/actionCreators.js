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
export const changeHeaderList = (data) =>(
  {
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data)
  }
)
/**
* @author: WangXinYu
* @describe: ajax获取header热门搜索推荐列表
* @create: 2018/12/21 16:04
**/
export const getList = () =>{
  return dispatch =>{
    axios.get('/api/headerList.json').then(value => {
      console.log(value);
      const action = changeHeaderList(value.data)
      dispatch(action)
    }).catch(reason => {
      console.log('err', reason);
    })
  }
}
