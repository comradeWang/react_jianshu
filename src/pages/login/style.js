/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2019/1/3
 * @Time: 10:46
 * @Description:  $
 */
import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: 750px;
  font-size: 14px;
  background-color: #f1f1f1;
  z-index: 0;
`;

export const Logo = styled.a`
  position: absolute;
  margin-left: 56px;
  top: 50px;
`;

export const LoginBox = styled.div`
  position: relative;
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0,0%,71%,.1);
  box-sizing: border-box;
  padding: 0px 12px;
`;
export const Button = styled.button`
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
`;
