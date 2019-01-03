import React, { PureComponent } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { articleList, articlePage } = this.props;
    return (
      <div>
        {articleList.map((item, index) => (
          /*页面之间传值方法一：动态路由 需要将App.js中的路由标签后加上 /:id*/
          <Link to={"/Detail/"+item.get('id')} key={item.get('id')}>
            <ListItem key={item.get("id")}>
              <img className="img-list" src={item.get("imgUrl")} alt="" />
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="desc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          </Link>
        ))}
        <LoadMore onClick={() => this.props.getMoreList(articlePage)}>
          更多文字
        </LoadMore>
      </div>
    );
  }
}

const mapState = state => ({
  articleList: state.getIn(["home", "articleList"]),
  articlePage: state.getIn(["home", "articlePage"])
});
const mapDispatch = dispatch => ({
  getMoreList(articlePage) {
    dispatch(actionCreators.getMoreList(articlePage));
  }
});

export default connect(
  mapState,
  mapDispatch
)(List);
