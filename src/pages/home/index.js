/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/24
 * @Time: 16:07
 * @Description:  $
 */
import React from "react";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import axios from 'axios';
import * as actionTypes from './store/actionTypes'
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import {connect} from "react-redux";
class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className='banner-img'
            src="//upload.jianshu.io/admin_banners/web_images/4588/c9d175a9865206d371742d53c41ed4a042c5d00b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    );
  }
  componentDidMount() {
      axios.get('/api/home.json').then(value => {
        const res = value.data
        if (res.code === 200) {
          const result = res.data;
          const action = {
            type: actionTypes.CHANGE_HOME_DATA,
            topicList:result.topicList,
            articleList:result.articleList,
            recommendList:result.recommendList,
            writerList:result.writerList,
          }
          this.props.changeHomeData(action);
        }
      })
  }
}
const mapDispatch = dispatch => ({
  changeHomeData(action) {
    dispatch(action)
  }
})
export default connect(null,mapDispatch)(Home);
