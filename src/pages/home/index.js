/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/24
 * @Time: 16:07
 * @Description:  $
 */
import React, {PureComponent} from "react";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import {actionCreators} from "./store/index";

import {HomeWrapper, HomeLeft, HomeRight, BackToTop} from "./style";
import {connect} from "react-redux";

class Home extends PureComponent {



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
        {this.props.showScroller ? <BackToTop onClick={this.handleScrollTop}>回到顶部</BackToTop> : null}
      </HomeWrapper>
    );
  }

  handleScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  bindScroller() {
    window.addEventListener("scroll", this.props.changeScrollerShow)
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindScroller();
  }
  // 页面销毁前解除绑定
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollerShow)
  }
}

const mapState = state => ({
  showScroller: state.getIn(['home', 'showScroller'])
});
const mapDispatch = dispatch => ({
  changeHomeData() {
    const action = actionCreators.getHomeList();
    dispatch(action)
  },
  changeScrollerShow(e) {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleScrollerShow(true));
    } else {
      dispatch(actionCreators.toggleScrollerShow(false));
    }
    console.log(document.documentElement.scrollTop);
  }
});
export default connect(mapState, mapDispatch)(Home);
