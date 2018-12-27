/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/24
 * @Time: 16:14
 * @Description:  Home页面style组件
 */
import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 300px;
`;
export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const BackToTop = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #999;
  font-size: 12px;
  cursor: pointer;
`;
/*Topic组件样式开始*/
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -27px;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  border: 1px solid #dcdcdc;
  font-size: 12px;
  color: #000;
  border-radius: 4px ;
  padding-right: 10px;
  margin-left: 27px;
  margin-bottom: 18px;
  .topic-pic{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 4px;
  }
`;
/*Topic组件样式结束*/
/*List组件样式开始*/

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
  .img-list{
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`;
export const ListInfo  = styled.div`
  width: 475px;
  float: left;
  display: block;
  .title{
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    cursor: pointer;
    transition: all .4s ease-in-out;
    &:hover{
      text-decoration: underline;
    }
  }
  .desc{
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
`;
/*List组件样式结束*/

/*Recommend组件样式开始*/

export const RecommendWrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 4px;
  min-height: 228px;
  margin-top: -4px;
`;
export const RecommendItem = styled.div`
  margin-bottom: 5px;
  a{
    box-sizing: border-box;
  }
  .banner{
    width: 100%;
    min-height: 50px;
    border-radius: 4px;
  }
`;
export const DownloadApp = styled.a`
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  overflow: hidden;
  display: block;
  .qrCode{
    width: 60px;
    height: 60px;
    opacity: .85;
    vertical-align: middle;
  }
`;
export const DownloadInfo = styled.div`
  display: inline-block;
  margin-left: 7px;
  vertical-align: middle;
  .title{
    font-size: 15px;
    color: #333;
  }
  .desc{
    font-size: 13px;
    margin-top: 6px;
    color: #999 !important;
  }
`;
/*Recommend组件样式结束*/

/*Writer组件样式开始*/
export const WriterWrapper = styled.div`
  position: relative;
  background: url(${props => props.imgUrl});
`;
export const WriterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #969696;
  .change{
    cursor: pointer;
    transition: all .4s ease-in-out;
    &:hover{
      color: #2f2f2f;
    }
  }
`;
export const WriterContent = styled.div`
  margin-top: 20px;
  .seeAll{
    text-align: center;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    display: block;
    margin-top: 20px;
    padding: 7px 7px 7px 12px;
    text-decoration: none;
  }
`;
export const WriterItem = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  .avatar{
    width: 48px;
    height: 48px;
    margin-right: 10px;
    display: inline-block;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50px;
      vertical-align: middle;
    }
  }
  .info{
    display: inline-block;
    vertical-align: middle;
    .name{
      color: #333;
      font-size: 14px;
      text-decoration: none;
    }
    .meta{
      margin-top: 5px;
      font-size: 12px;
      color: #969696;
    }
    .follow{
      position: absolute;
      top: 0px;
      right: 0px;
      margin-top: 5px;
      padding: 0;
      font-size: 13px;
      color: #42c02e;
      cursor: pointer;
    }
  }
`;
/*Writer组件样式结束*/
