import React, {Component} from 'react';
import {ListItem,ListInfo} from "../style";
import {connect} from "react-redux";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {articleList} = this.props;
    return (
      <div>
        {articleList.map((item,index) => (
          <ListItem key={item.get('id')}>
            <img
              className='img-list'
              src={item.get('imgUrl')}
              alt=""/>
            <ListInfo>
              <h3 className='title'>{item.get('title')}</h3>
              <p className='desc'>
                {item.get('desc')}
              </p>
            </ListInfo>
          </ListItem>
        ))}
      </div>
    );
  }
}

const mapState = (state) => ({
  articleList: state.getIn(['home', 'articleList'])
});
const mapDispatch = dispatch => ({
});

export default connect(mapState,mapDispatch)(List);
