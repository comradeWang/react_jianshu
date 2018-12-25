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
  width: 240px;
  float: right;
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
/*List组件样式结束*/
