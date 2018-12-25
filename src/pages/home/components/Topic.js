import React, {Component} from 'react';
import {TopicWrapper,TopicItem} from "../style";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/es/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img
            className='topic-pic'
            src="//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
            alt=""/>
          <span>社会热点</span>
        </TopicItem>
      </TopicWrapper>
    );
  }
}

const mapStateToProps = (state) => ({});
cosst mapDispatchToProps = () =>

export default connect(mapStateToProps,mapDispatchToProps)(Topic);
