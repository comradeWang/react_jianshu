/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/12/28
 * @Time: 15:37
 * @Description:  $
 */
import styled from "styled-components";

export const DetailWrapper = styled.div`
  position: relative;
  padding-top: 10px;
`;
export const DetailContent = styled.div`
  width: 620px;
  margin: 0 auto;
`;
export const DetailTitle = styled.h1`
    word-break: break-word!important;
    margin: 20px 0 0;
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
`;
export const DetailAuthor = styled.div`
    margin: 30px 0 40px;
    .avatar{
      width: 48px;
      height: 48px;
      vertical-align: middle;
      display: inline-block;
      img{
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
      }
    }
    .info{
      display: inline-block;
      vertical-align: middle;
      margin-left: 10px;
      color: #2f2f2f;
      .name{
        cursor: pointer;
      }
      .follow{
        background-color: #42c02e;
        padding: 3px 10px;
        border-radius: 15px;
        color: #fff;
        margin-left: 20px;
        font-size: 14px;
        cursor: pointer;
      }
      .meta{
        margin-top: 10px;
        font-size: 12px;
        color: #969696;
        span{
          padding-right: 5px;
        }
      }
    }
`;
export const DetailArticle = styled.div`
  p{
    color: #2f2f2f;
    word-break: break-word!important;
    word-break: break-all;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    margin-bottom: 25px;
  }
  img{
    width: 100%;
  }
`;

export const Ad = styled.a.attrs({
  href: props => props.jumpUrl || '#'
})`
    position: fixed;
    top: 80px;
    right: 50%;
    margin-right: -560px;
    width: 180px;
    height: 260px;
    display: block;
    background-image: url(${props => props.imgUrl || ''});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    margin-bottom: 15px;
`;
