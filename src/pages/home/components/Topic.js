import React, { Component } from "react";
import { TopicWrapper, TopicItem } from "../style";
import { connect } from "react-redux";

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { topicList } = this.props;
    return (
      <TopicWrapper>
        {}
        {topicList.map((item, index) => {
          return (
            <TopicItem key={item.get("id")}>
              <img className="topic-pic" src={item.get("imgUrl")} alt="" />
              <span>{item.get("title")}</span>
            </TopicItem>
          );
        })}
      </TopicWrapper>
    );
  }
}

const mapStateToProps = state => ({
  topicList: state.getIn(["home", "topicList"])
});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topic);
