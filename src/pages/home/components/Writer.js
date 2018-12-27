import React, {Component} from 'react';
import {WriterWrapper,WriterHeader,WriterContent,WriterItem} from "../style";
import {connect} from "react-redux";

class Writer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {writerList} = this.props;
    return (
      <WriterWrapper>
        <WriterHeader>
          <div className='title'>
            推荐作者
          </div>
          <div className='change'>
            <i className='iconfont'>&#xe851;</i>
            <span>换一批</span>
          </div>
        </WriterHeader>
        <WriterContent>
          {writerList.map(item => (
            <WriterItem key={item.get('id')}>
              <a
                target='_blank'
                rel="noopener noreferrer"
                href={item.get('personUrl')}
                className='avatar'
              >
                <img className='avatar-img' src={item.get('avatarUrl')} alt=""/>
              </a>
              <div className='info'>
                <a
                  target='_blank'
                  rel="noopener noreferrer"
                  href={item.get('personUrl')}
                  className='name'
                >
                  {item.get('name')}
                </a>
                <div className='meta'>写了{item.get('totalWord')}字·{item.get('totalLike')}喜欢</div>
                <div className='follow'>+关注</div>
              </div>
            </WriterItem>
          ))}
          <a className='seeAll' href={'https://www.jianshu.com/recommendations/users?utm_source=desktop&utm_medium=index-users'}>查看全部 ></a>
        </WriterContent>
      </WriterWrapper>
    );
  }
}

const mapState = state => ({
  writerList: state.getIn(['home', 'writerList'])

});

const mapDispatch = dispatch => ({});

export default connect(mapState,mapDispatch)(Writer);
