(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{158:function(t,e,a){"use strict";a.r(e),a.d(e,"query",function(){return s});a(69);var n=a(33),r=a(12),o=(a(0),a(166)),i=a(161),c={name:"s54kmr",styles:"margin:0 auto;max-width:800px;"};e.default=function(t){return Object(r.a)(o.a,null,Object(r.a)("div",{css:Object(n.a)({display:"flex",justifyContent:"space-between",hr:{border:"1px solid "+i.a.LIGHT,margin:50},pre:{padding:"20px 30px",backgroundColor:i.a.DARK,color:i.a.LIGHT,overflowX:"auto",borderRadius:2,boxShadow:"0 5px 20px -10px rgba(0, 0, 0, .5)"}})},Object(r.a)("div",{css:Object(n.a)({padding:20,width:"70vw",backgroundColor:i.a.WHITE})},Object(r.a)("div",{css:c},Object(r.a)("h1",null,t.data.markdownRemark.frontmatter.title),Object(r.a)("p",null,t.data.markdownRemark.frontmatter.description),Object(r.a)("hr",null),Object(r.a)("div",{dangerouslySetInnerHTML:{__html:t.data.markdownRemark.html}}))),Object(r.a)("div",{css:Object(n.a)({padding:40,width:"30vw",backgroundColor:i.a.DARKER})},Object(r.a)("div",{dangerouslySetInnerHTML:{__html:t.data.markdownRemark.tableOfContents.replace(/(href=")\/\/#/g,"$1#")},css:Object(n.a)({ul:{margin:0,padding:0,listStyle:"none"},p:{margin:0},"li a":{display:"block",paddingTop:10,paddingBottom:10,color:i.a.TONE1},"li ul":{paddingTop:10,paddingBottom:20},"li ul a":{color:i.a.LIGHT,fontWeight:400}})}))))};var s="4154791096"},161:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n={TONE1:"#9f82fe",TONE2:"#906ffe",TONE3:"#815cfe",TONE4:"#7349fe",BORDER_LIGHT:"#8369d6",BORDER_DARK:"#5d37d8",WHITE:"#ffffff",LIGHT:"#f0f0f0",LIGHT_GREY:"#bbbbbb",GREY:"grey",DARK:"#222222",DARKER:"#111111",BLACK:"#000000"}},162:function(t,e,a){var n;t.exports=(n=a(164))&&n.default||n},163:function(t,e,a){"use strict";a(12);var n=a(0),r=a.n(n),o=a(6),i=a.n(o),c=a(43),s=a.n(c);a.d(e,"a",function(){return s.a});a(162),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},164:function(t,e,a){"use strict";a.r(e);a(67);var n=a(0),r=a.n(n),o=a(6),i=a.n(o),c=a(68),s=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},165:function(t,e){t.exports=[{title:"Learn",to:"/learn"},{title:"Docs",to:"/docs"}]},166:function(t,e,a){"use strict";var n=a(12),r=a(0),o=a.n(r),i=a(33),c=a(163),s=a(161),l=function(){return"undefined"!=typeof window},u=a(165),d=a.n(u),b={name:"1p2q3jy",styles:"margin-left:3px;text-transform:uppercase;font-size:1.5em;"},f=function(){return Object(n.a)("div",{css:Object(i.a)({display:"flex",alignItems:"center",color:s.a.WHITE})},l()&&"/"===window.location.pathname?null:Object(n.a)(o.a.Fragment,null,Object(n.a)("img",{src:"https://github.com/PrismLang.png",height:"40"}),Object(n.a)("div",{css:b},"P r i s m")))},p=function(t){return Object(n.a)(c.a,{to:t.to,title:t.title,css:Object(i.a)({padding:10,color:s.a.LIGHT_GREY,":hover":{color:s.a.TONE1}})},t.title)},m={name:"1fyvb2z",styles:"display:flex;justify-content:space-between;align-items:center;font-weight:bold;"},O=function(t){return Object(n.a)("nav",{css:m},t.links.map(function(t,e){return Object(n.a)(p,{to:t.to,title:t.title})}))},g=function(){return Object(n.a)("header",{css:Object(i.a)({display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem 3rem",backgroundColor:s.a.BLACK})},Object(n.a)(f,null),Object(n.a)(O,{links:d.a}))},j=function(){return Object(n.a)("div",{css:Object(i.a)({padding:"2rem 8rem",display:"flex",justifyContent:"space-between",color:s.a.GREY,backgroundColor:s.a.DARK,fontSize:".8em"})},Object(n.a)("div",null,"Prism Programming Language"))},h=function(){return Object(n.a)("div",{css:Object(i.a)({padding:"2rem 8rem",display:"flex",justifyContent:"space-between",color:s.a.GREY,fontSize:".8em"})},Object(n.a)("div",null,"Coded with ❤ & ☕ by ",Object(n.a)("a",{href:"https://traction.one",target:"__blank"},"Traction")),Object(n.a)("div",null,"© Sankarsan Kampa"))},v=function(){return Object(n.a)("footer",{css:Object(i.a)({backgroundColor:s.a.BLACK,color:s.a.WHITE})},Object(n.a)(j,null),Object(n.a)(h,null))},w={name:"vooagt",styles:"min-height:100vh;"},y=function(t){var e=t.children;return Object(n.a)("main",{css:w},e)},R={name:"10mm05y",styles:"position:fixed;right:10px;bottom:20px;cursor:pointer;transition:opacity .125s ease-out, filter .125s ease-out, transform .125s ease-out;opacity:0.5;:hover{opacity:1;}:active{filter:none;transform:scale(.9);}"},x=function(){return Object(n.a)("div",{css:R,onClick:function(){return l()&&window.scroll({top:0,behavior:"smooth"})}},Object(n.a)("img",{src:"https://github.com/PrismLang.png",height:"50",css:Object(i.a)({filter:"drop-shadow(0 5px 25px "+s.a.BORDER_DARK+")"})}))};a(167),e.a=function(t){var e=t.children;return Object(n.a)("div",null,Object(n.a)(g,null),Object(n.a)(y,null,e),Object(n.a)(v,null),Object(n.a)(x,null))}}}]);
//# sourceMappingURL=component---src-templates-learn-tsx-e23736e76cda30ddfe16.js.map