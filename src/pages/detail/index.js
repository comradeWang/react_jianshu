/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/24
 * @Time: 16:07
 * @Description:  $
 */
import React from "react";
import {
  DetailWrapper,
  DetailContent,
  DetailTitle,
  DetailAuthor,
  DetailArticle,
  Ad
} from "./style";
import { connect } from "react-redux";
import {actionCreators} from "./store";

class Detail extends React.Component {
  render() {
    console.log(this.props)
    const { content,title } = this.props;
    return (
      <DetailWrapper>
        <DetailContent>
          <DetailTitle>{title}</DetailTitle>
          <DetailAuthor>
            <a
              href="https://www.jianshu.com/u/6cc14512040a"
              className={"avatar"}
            >
              <img
                src="//upload.jianshu.io/users/upload_avatars/13446028/3201ee5a-a881-4af1-b410-8e4c6488136a?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
                alt=""
              />
            </a>
            <div className="info">
              <span className="name">米娅_ed11</span>
              <span className={"follow"}> + 关注</span>
              <div className="meta">
                <span className={"publish-time"}>2018.10.17 15:09*</span>
                <span className={"wordage"}>字数 2199</span>
                <span className={"views-count"}>阅读 32618</span>
                <span className={"comments-count"}>评论 79</span>
                <span className={"likes-count"}>喜欢 167</span>
              </div>
            </div>
          </DetailAuthor>
          <DetailArticle dangerouslySetInnerHTML={{ __html: content }} />
        </DetailContent>
        <Ad
          jumpUrl={"https://www.jianshu.com/apps"}
          imgUrl={
            "https://cdn2.jianshu.io/assets/web/web-note-ad-side-banner-22096669b4c4b91c3b9266894e951aef.png"
          }
        />
      </DetailWrapper>
    );
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapState = state => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(["detail", "content"])
});
const mapDispatch = dispatch => ({
  getDetail(id){
    dispatch(actionCreators.getDetail(id));
  }


});
export default connect(
  mapState,
  mapDispatch
)(Detail);
