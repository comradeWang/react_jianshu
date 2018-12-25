/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/19
 * @Time: 15:58
 * @Description:  $
 */
import styled from "styled-components";
import logoPic from "../../statics/logo.png";
export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({
  href: "/"
})`
  height: 56px;
  position: absolute;
  display: block;
  width: 100px;
  top: 0;
  left: 0;
  background-image: url(${logoPic});
  background-position: center;
  background-size: contain;
`;
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  font-size: 17px;
  padding: 0 15px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    cursor: pointer;
    &.focused {
      background-color: #777;
      color: #fff;
    }
  }
`;
export const NavSearch = styled.input.attrs({ placeholder: "搜索" })`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  background-color: #eee;
  margin-top: 9px;
  font-size: 14px;
  margin-left: 20px;
  color: #666;
  &::placeholder {
    color: #999999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.5s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.5s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 58px;
  width: 240px;
  padding: 0 20px;
  min-height: 80px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  &:before {
    content: "";
    left: 27px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    top: -5px;
    z-index: -1;
    background-color: coral;
  }
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .change{
    cursor: pointer;
  }
  .spin{
    font-size: 12px;
    margin-right: 2px;
    transition: all .4s ease-in;
    transform-origin: center;
    display: block;
    float: left;
  }
`;
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 15px;
  transition: all .3s ease-in-out;
  &:hover{
      color: #333;
      border: 1px solid #333;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  margin-right: 15px;
  border: 1px solid #ec6149;
  padding: 0 20px;
  font-size: 14px;
  cursor: pointer;
  &.reg {
    color: #ec6149;
  }
  &.written {
    color: #fff;
    background-color: #ec6149;
  }
`;
