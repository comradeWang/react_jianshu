import React, { Component } from 'react';
import Header from './common/header'
import {GlobalStyle} from "./style";
import {IconFont} from "./statics/iconfont/iconfont";

class App extends Component {
  render() {
    return (
      <div className="App">
        <IconFont />
        <GlobalStyle/>
        <Header/>
      </div>
    );
  }
}

export default App;
