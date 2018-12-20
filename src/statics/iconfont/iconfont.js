import { createGlobalStyle } from "styled-components";

export const IconFont = createGlobalStyle`
  
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1545272203814'); /* IE9*/
  src: url('iconfont.eot?t=1545272203814#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('iconfont.ttf?t=1545272203814') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('iconfont.svg?t=1545272203814#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-fangdajing:before { content: "\\e63d"; }

.icon-24:before { content: "\\e6af"; }

.icon-Aa:before { content: "\\e636"; }

.icon-maobi:before { content: "\\e602"; }


`;
