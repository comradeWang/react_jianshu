/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/19
 * @Time: 15:55
 * @Description:  $
 */
import React, {Component} from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoItem
} from "./style";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import {actionCreators} from "./store";

// 无状态组件，提升性能
// const Header = (props) =>(
//
// )
class Header extends Component{
  render() {
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={500}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? "focused" : ""}
                onFocus={this.props.handleNavSearchFocused}
                onBlur={this.props.handleNavSearchBlur}
              />
            </CSSTransition>
            <i className={this.props.focused ? "focused iconfont" : "iconfont"}>
              &#xe63d;
            </i>
            {this.getSearchListArea(this.props.focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="written">
            <i className="iconfont">&#xe6af;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
  // 显示或隐藏搜索提示框
  getSearchListArea = (show)=>{
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            <span>热门搜索</span>
            <span>换一批</span>
          </SearchInfoTitle>
          <div>
            {this.props.headerList.map((item) => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>
            })}
            <SearchInfoItem>教育</SearchInfoItem>
          </div>
        </SearchInfo>
      )
    }
    return null
  }
}
const mapStateToProps = state => ({
  focused: state.getIn(['header','focused']),// get('header').get('focused')
  headerList: state.getIn(['header','headerList'])// get('header').get('focused')
});
const mapDispatchToProps = dispatch => ({
  handleNavSearchFocused() {
    const action = actionCreators.getInputFocused();
    dispatch(action);
    dispatch(actionCreators.getList())
  },
  handleNavSearchBlur() {
    const action = actionCreators.getInputBlur();
    dispatch(action);
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
