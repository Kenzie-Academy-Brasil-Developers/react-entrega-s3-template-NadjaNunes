import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --color-prymary: #27ae60;
    --color-secondary: #eb5757;

    --gray-600: #333333;
    --grey-300: #828282;
    --grey-400: #BDBDBD;
    --grey-100: #e0e0e0;
    --grey-0: #f5f5f5;

    --negative: #e60000;
    --warning: #ffcd07;
    --sucess: #168821;
    --information: #155bcb;

    --font0: 24px;
    --font1: 22px;
    --font2: 1.125rem;
    --font3: 1rem;
    --font4: 18px;
    --font5: 16px;
    --width: bold;
}
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


*{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
li{
    list-style: none;
}
body,html{
width: 100vw;
height: 100vh;
font-family: 'Inter', sans-serif;
}
main{
    margin-top: 30px;
    display: flex;
    justify-content: center;
}

@media(min-width:763px){
    main{
        max-width: 1200px;
    width: 90%;
    display: flex;
    align-items: center;
    height: 100%;
    margin: 30px auto 0px auto;
    padding-bottom: 40px;
    }
}
`

export default GlobalStyle;