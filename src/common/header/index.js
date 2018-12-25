/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/19
 * @Time: 15:55
 * @Description:  $
 */
import React, { Component } from "react";
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
import { actionCreators } from "./store";

// 无状态组件，提升性能
// const Header = (props) =>(
//
// )
class Header extends Component {
  render() {
    const {
      focused,
      headerList,
      mouseIn,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleChange
    } = this.props;
    // 显示或隐藏搜索提示框
    const getSearchListArea = () => {
      const newList = headerList.toJS();
      const pageList = [];
      if (newList.length) {
        for (let i = (page - 1) * 10; i < page * 10; i++) {
          const item = newList[i];
          if (item !== undefined && item !== null) {
            pageList.push(<SearchInfoItem key={item}>{item}</SearchInfoItem>);
          }
        }
      }
      if (focused || mouseIn) {
        return (
          <SearchInfo
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            <SearchInfoTitle>
              <span>热门搜索</span>
              <span
                className="change"
                onClick={() => {
                  handleChange(page, totalPage, this.spinIcon);
                }}
              >
                <i
                  ref={instance => {
                    this.spinIcon = instance;
                  }}
                  className="iconfont spin"
                >
                  &#xe851;
                </i>
                换一批
              </span>
            </SearchInfoTitle>
            <div>{pageList}</div>
          </SearchInfo>
        );
      }
      return null;
    };
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
            <CSSTransition in={focused} timeout={500} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() =>{this.props.handleNavSearchFocused(headerList)}}
                onBlur={this.props.handleNavSearchBlur}
              />
            </CSSTransition>
            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe63d;
            </i>
            {getSearchListArea()}
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
    );
  }
}
const mapStateToProps = state => ({
  focused: state.getIn(["header", "focused"]), // get('header').get('focused')
  headerList: state.getIn(["header", "headerList"]), // get('header').get('focused')
  page: state.getIn(["header", "page"]),
  totalPage: state.getIn(["header", "totalPage"]),
  mouseIn: state.getIn(["header", "mouseIn"])
});
const mapDispatchToProps = dispatch => ({
  handleNavSearchFocused(headerList) {
    if (headerList.size <= 0) {
      dispatch(actionCreators.getList());
    }
    dispatch(actionCreators.getInputFocused());
  },
  handleNavSearchBlur() {
    const action = actionCreators.getInputBlur();
    dispatch(action);
  },
  handleMouseEnter() {
    dispatch(actionCreators.mouseEnter());
  },
  handleMouseLeave() {
    dispatch(actionCreators.mouseLeave());
  },
  handleChange(page, totalPage, spin) {
    let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
    if (originAngle) {
      originAngle = parseInt(originAngle, 10);
    } else {
      originAngle = 0;
    }
    console.log(originAngle);
    spin.style.transform = `rotate(${originAngle + 360}deg)`;
    if (page < totalPage) {
      dispatch(actionCreators.handleChange(page + 1));
    } else {
      dispatch(actionCreators.handleChange(1));
    }
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
