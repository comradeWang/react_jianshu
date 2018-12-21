/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/19
 * @Time: 15:55
 * @Description:  $
 */
import React from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from "./style";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import {actionCreators} from "./store";


// 无状态组件，提升性能
const Header = (props) =>(
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
          in={props.focused}
          timeout={500}
          classNames="slide"
        >
          <NavSearch
            className={props.focused ? "focused" : ""}
            onFocus={props.handleNavSearchFocused}
            onBlur={props.handleNavSearchBlur}
          />
        </CSSTransition>
        <i className={props.focused ? "focused iconfont" : "iconfont"}>
          &#xe63d;
        </i>
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

const mapStateToProps = state => ({
  focused: state.header.focused
});
const mapDispatchToProps = dispatch => ({
  handleNavSearchFocused() {
    const action = actionCreators.getInputFocused(true);
    dispatch(action);
  },
  handleNavSearchBlur() {
    const action = actionCreators.getInputFocused(false);
    dispatch(action);
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
