import React, { Component } from "react";
import { GlobalStyle } from "./style"; // 引入全局样式
import { IconFont } from "./statics/iconfont/iconfont"; // 引入iconfont 组件
import store from "./store"; // 引入redux 仓库
import { Provider } from "react-redux"; // 引入react-redux 组件
import { BrowserRouter as Router, Route } from "react-router-dom"; // 引入路由
import Header from "./common/header"; // 引入header组件
import Detail from "./pages/detail";
import Home from "./pages/home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <IconFont />
          <GlobalStyle />
          <Router>
            <div>
              <Header />
              <Route path="/" exact component={Home} />
              <Route path="/Detail" exact component={Detail} />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
