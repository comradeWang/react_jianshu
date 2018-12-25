import { createGlobalStyle } from "styled-components";

export const IconFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1545631232194'); /* IE9*/
  src: url('./iconfont.eot?t=1545631232194#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1545631232194') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1545631232194#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-spin:before { content: "\\e851"; }

.icon-fangdajing:before { content: "\\e63d"; }

.icon-24:before { content: "\\e6af"; }

.icon-Aa:before { content: "\\e636"; }

.icon-maobi:before { content: "\\e602"; }
`;
