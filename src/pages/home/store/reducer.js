/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/25
 * @Time: 16:19
 * @Description:  $
 */
// import * as actionTypes from './actionTypes';
import {fromJS} from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id:1,
      title: '社会热点',
      imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id:2,
      title: '手绘',
      imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
  ],
  articleList:[
    {
      id:1,
      title: '一代才女诗意的生活（二）',
      desc:'一代才女诗意的生活（一） 夕阳红十三妹阿姨的原创诗画 （一）     《庆》 松鹤延年苏绣品，平铺框内挂门前。 栩栩如生入双眼，吉祥进福增添岁。...',
      imgUrl:'//upload-images.jianshu.io/upload_images/9764856-952904a17bbb50f4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id:2 ,
      title: '娇妻似蛊',
      desc:'\n' +
        '      第1章     “孟韩烨，你如果想要我就别蒙上我的眼睛！”   这是孟娇第三次拒绝孟韩烨，因为她希望亲眼看一看自己的丈夫怜惜她的样子，而不是他初...\n' +
        '    ',
      imgUrl:'//upload-images.jianshu.io/upload_images/12709485-775d5c16bf712212.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
