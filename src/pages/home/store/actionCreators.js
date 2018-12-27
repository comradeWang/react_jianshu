/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/25
 * @Time: 16:20
 * @Description:  $
 */
import * as actionTypes from "./actionTypes";
import axios from 'axios'

export const getHomeList = () => {
  return dispatch => {
    axios.get('/api/home.json').then(value => {
      const res = value.data
      if (res.code === 200) {
        const result = res.data;
        const action = changeHomeData(result);
        dispatch(action);
      }
    })
  }
};
/**
 * @author: WangXinYu
 * @describe: 获取更多列表
 * @create: 2018/12/27 13:59
 **/
export const getMoreList = (articlePage) => (
  dispatch =>{
    axios.get(`/api/homeList.json?page=${articlePage}`).then(value => {
      const res = value.data.data;
      dispatch(loadMoreArticleList(res,articlePage));
    })
  }
);
/**
 * @author: WangXinYu
 * @describe: 显示隐藏返回顶部菜单
 * @create: 2018/12/27 14:51
 **/
export const toggleScrollerShow = data => (
  {
    type: actionTypes.TOGGLE_SCROLLER_SHOW,
    flag: data
  }
);
const changeHomeData = result => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
  writerList: result.writerList,
});
const loadMoreArticleList = (list,articlePage) => ({
  type: actionTypes.LOAD_MORE_ARTICLE,
  newArticleList: list,
  articlePage: articlePage + 1
});
