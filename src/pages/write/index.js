import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux"
class Write extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.isLogin) {
      return (
        <div className="Write">写文章</div>
      );
    }else {
      return (
        <Redirect to={'/Login'} />
      )
    }
  }
}

const mapState = (state) => ({
  isLogin: state.getIn(['login', 'isLogin'])
});

export default connect(mapState,null)(Write) ;
