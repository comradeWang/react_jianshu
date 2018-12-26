/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/25
 * @Time: 16:19
 * @Description:  $
 */
import * as actionTypes from './actionTypes';
import {fromJS} from "immutable";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList),
      });
    default:
      return state;
  }
};
