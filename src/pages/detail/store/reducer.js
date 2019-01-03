/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/25
 * @Time: 16:19
 * @Description:  $
 */
import * as actionTypes from './actionTypes';
import {fromJS} from "immutable";

const defaultState = fromJS({
  title: '我为什么不看好赵丽颖冯绍峰的婚姻？',
  content: "<p>昨天上午，微博发生一件大事，赵丽颖和冯绍峰宣布结婚了。</p> <p>惊讶之余一大波网友纷纷送上祝福，但柏逸君在祝福之余，却隐隐地开始替颖宝担忧。</p><img src=\"//upload-images.jianshu.io/upload_images/13446028-062b90b952185cb9\" alt=\"\"/><img src=\"//upload-images.jianshu.io/upload_images/13446028-d64859800a92eda2\" alt=\"\"/><p>说实话，我并不看好赵丽颖与冯绍峰的婚姻。原因有三：</p>"
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
