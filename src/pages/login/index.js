/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2019/1/3
 * @Time: 10:45
 * @Description:  $
 */
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { LoginWrapper, Logo, LoginBox, Input, Button } from "./style";
import { Redirect } from "react-router-dom";

import { actionCreators } from "./store";
class Login extends PureComponent {
  render() {
    const { isLogin } = this.props;
    if (!isLogin) {
      return (
        <LoginWrapper>
          Login
          <Logo>
            <img
              src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png"
              alt="Logo"
            />
          </Logo>
          <LoginBox>
            <Input
              placeholder={"请输入用户名"}
              ref={input => {
                this.account = input;
              }}
            />
            <Input
              placeholder={"请输入密码"}
              ref={input => {
                this.pwd = input;
              }}
              type={"password"}
            />
            <Button
              onClick={() => {
                this.props.toLogin(this.account, this.pwd);
              }}
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to={"/"} />;
    }
  }
  componentDidMount() {}
}

const mapState = state => ({
  isLogin: state.getIn(["login", "isLogin"])
});
const mapDispatch = dispatch => ({
  toLogin(account, pwd) {
    dispatch(actionCreators.login(account.value, pwd.value));
  }
});
export default connect(
  mapState,
  mapDispatch
)(Login);
