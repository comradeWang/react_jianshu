import React, {Component} from 'react';
import {RecommendWrapper,RecommendItem,DownloadApp,DownloadInfo} from "../style";
import {connect} from "react-redux";

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {recommendList} = this.props;
    return (
      <RecommendWrapper>
        {recommendList.map( item => (
          <RecommendItem key={item.get('id')}>
            <a target='_blank' rel="noopener noreferrer" href={item.get('url')}>
              <img
                className='banner'
                src={item.get('imgUrl')}
                alt="Banner s 3" />
            </a>
          </RecommendItem>
        ))}
        <DownloadApp href='https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click'>
          <img
            className='qrCode'
            src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
            alt="qrCode"/>
          <DownloadInfo>
            <div className='title'>下载简书手机App   ></div>
            <div className='desc'>随时随地创作和发现内容</div>
          </DownloadInfo>
        </DownloadApp>
      </RecommendWrapper>
    );
  }
}

const mapState = state => ({
  recommendList: state.getIn(['home','recommendList'])
});
const mapDispatch = dispatch => ({});
export default connect(mapState,mapDispatch)(Recommend);
