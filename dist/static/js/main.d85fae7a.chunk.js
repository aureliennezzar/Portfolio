(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,a){},109:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),r=a.n(c),i=(a(98),a(33)),o=a(7),s=a(174),m=a(173),u=a(167),p=a(176),d=a(178),h=a(172),E=a(168),g=a(179),v=a(169),f=a(170),b=a(82),w=a.n(b),N=a(84),I=a.n(N),y=a(175),x=a(47),j=a(165),C=a(12),S=a(24),k=a(42),G=a(26),F=a(27),A=a(2),J=a(64),L=(a(99),new Audio);L.src="nintendo.wav",L.volume=.2;var R=function(e){Object(F.a)(a,e);var t=Object(G.a)(a);function a(){var e;Object(S.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).handleClick=function(){L.play()},e}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector("canvas.webgl"),t=e.getBoundingClientRect(),a=new J.a,n=new A.Y;n.background=new A.h(16448250);var l=new A.a(16777215,.2);n.add(l);var c=new A.i(16777215,1);c.position.x=5,c.position.y=5,c.position.z=5,n.add(c);var r=new A.m;a.load("models/room/scene.gltf",(function(e){for(;e.scene.children.length;){var t=e.scene.children[0];r.add(t)}}),(function(e){console.log("progress"),console.log(e)}),(function(e){console.log("error"),console.log(e)})),n.add(r);var i=new A.P(75,t.width/t.height,.01,100);i.position.z=7,i.position.x=5,i.position.y=8,n.add(i),i.lookAt(new A.ib(0,0,0));var o=new A.kb({canvas:e});o.setSize(t.width,t.height),window.addEventListener("resize",(function(){var t=e.getBoundingClientRect();i.aspect=t.width/t.height,i.updateProjectionMatrix(),o.setSize(t.width,t.height)}));!function e(){r.rotation.y+=.005,o.render(n,i),window.requestAnimationFrame(e)}()}},{key:"render",value:function(){return l.a.createElement("canvas",{className:"webgl",onClick:this.handleClick})}}]),a}(n.Component),z=(a(100),a(65)),O=a.n(z),P=a(66),q=a.n(P),B=(a(101),a(109),Object(n.createContext)("ENG")),M=function(){var e=l.a.useContext(B);return l.a.createElement("section",{className:"hero"},l.a.createElement("div",{className:"hero-body"},"ENG"===e?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Front-end Developer"),l.a.createElement(x.a,{paragraph:!0,className:"aboutDescription"},"I've been interested in programming since I was 13, I love what I do, especially bringing ideas to life.")):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Developpeur Front-end"),l.a.createElement(x.a,{paragraph:!0,className:"aboutDescription"},"Je m'int\xe9resse \xe0 la programmation depuis que j'ai 13 ans, j'adore ce que je fais, surtout donner vie \xe0 mes id\xe9es.")),l.a.createElement("div",{className:"hero-body-center"},l.a.createElement("div",{className:"profilePicCtnr"},l.a.createElement("div",null,l.a.createElement("img",{className:"profilePic",height:"150",width:"150",src:O.a}))),l.a.createElement(R,null))),"s",l.a.createElement("div",{className:"hero-foot"},l.a.createElement("div",{className:"illustrationCtnr"},l.a.createElement("img",{className:"illustration",src:q.a}))))},T=(a(112),a(67)),D=a.n(T),W=a(68),H=a.n(W),V=a(69),K=a.n(V),Z=a(70),U=a.n(Z),Y=a(71),$=a.n(Y),_=a(72),Q=a.n(_),X=a(73),ee=a.n(X),te=a(128),ae=a(166),ne=a(74),le=Object(n.createContext)(),ce=(n.Component,Object(j.a)((function(e){return{root:{height:180},container:{display:"flex"},paper:{margin:e.spacing(1),width:200,position:"absolute",cursor:"default"},typo:{padding:e.spacing(1)},svg:{width:100,height:100},polygon:{fill:e.palette.common.white,stroke:e.palette.divider,strokeWidth:1}}}))),re=[{iconClass:"htmlIcon",imgId:"htmlShow",imgAlt:"HTML5",iconSrc:D.a,title:"HTML 5",textENG:"Its been nearly a year that I started coding with HTML 5",textFR:"Cela fait presque 1 an que je code avec HTML"},{iconClass:"cssIcon",imgId:"cssShow",imgAlt:"CSS3",iconSrc:H.a,title:"CSS 3",textENG:"Its been nearly a year that I started coding with CSS 3",textFR:"Cela fait presque 1 an que je code avec CSS"},{iconClass:"jsIcon",imgId:"jsShow",imgAlt:"JavaScript",iconSrc:K.a,title:"JavaScript",textENG:"Its been nearly a year that I started coding with JavaScript",textFR:"Cela fait presque 1 an que je code avec JavaScript"},{iconClass:"pythonIcon",imgId:"pythonShow",imgAlt:"Python",iconSrc:U.a,title:"Python",textENG:"I've begun started coding with python since 2015. I really like it !",textFR:"J'ai commenc\xe9 \xe0 utiliser Python depuis 2015. J'adore ce language !"}],ie=[{iconClass:"reactIcon",imgId:"reactShow",imgAlt:"ReactJS",iconSrc:$.a,title:"ReactJS",textENG:"I just begun using this technology. Already falling in love for it!",textFR:"J'ai recemment commenc\xe9 a utiliser ReactJS. J'en suis d\xe9j\xe0 amoureux!"},{iconClass:"webglIcon",imgId:"webglShow",imgAlt:"WebGL",iconSrc:Q.a,title:"WebGL",textENG:"I also just begun with it, I love the the way its working. I am also using ThreeJS with it!",textFR:"J'ai aussi commenc\xe9 recemment a utiliser WebGL, j'adore la mani\xe8re dont il marche. J'utilise aussi ThreeJS avec..."},{iconClass:"firebaseIcon",imgId:"firebaseShow",imgAlt:"Firebase",iconSrc:ee.a,title:"Firebase",textENG:"I did some projects with this tool, really powerful and useful!",textFR:"J'ai d\xe9j\xe0 fais quelques projets avec Firebase, c'est tr\xe8s puissant et utile!"}],oe=function(){var e=ce(),t=l.a.useContext(B),a=l.a.useState({htmlIcon:!1,cssIcon:!1,jsIcon:!1,pythonIcon:!1,reactIcon:!1,webglIcon:!1,firebaseIcon:!1}),n=Object(i.a)(a,2),c=n[0],r=n[1],s=function(e){var t=e.currentTarget.getAttribute("class").split(" ")[1];r(Object(o.a)({htmlIcon:!1,cssIcon:!1,jsIcon:!1,pythonIcon:!1},t,!c[t]))};return l.a.createElement("section",{className:"skills"},"ENG"===t?l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Hi, I'm Aur\xe9lien. Welcome to my portfolio !"),l.a.createElement(x.a,{paragraph:!0,className:"skillsDescription"},"I love programming since 2012, I first started by doing small CLI projects that was useful only for me (usually made with Batch or Visual Basic), then begun using python, to do more helpful applications. I've recently begun to learn web development, I just love it.")):l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Je m'appelle Aur\xe9lien. Bienvenue !"),l.a.createElement(x.a,{paragraph:!0,className:"skillsDescription"},"J'adore programmer depuis 2012, j'ai d'abbords commenc\xe9 par faire des petits projets \"CLI\" \xe0 des fins personnels (fait en Batch ou Visual Basic), puis j'ai decouvert Python ce qui m'as permis de faire des projets personnels plus complexes. J'ai recemment debut\xe9 le devellopement web, j'adore \xe7a!")),"ENG"===t?l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"My skills"),l.a.createElement("h4",null,"The langages I speak")):l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Mes comp\xe9tences"),l.a.createElement("h4",null,"Les langages dont je parle")),l.a.createElement("div",{className:"skillsCtnr"},re.map((function(a){return l.a.createElement("div",{key:a.imgId,className:"icon ".concat(a.iconClass),onClick:s},l.a.createElement("img",{src:a.iconSrc,id:a.imgId,alt:"".concat(a.imgAlt," icon"),width:"90px",height:"90px"}),l.a.createElement("span",{className:"tooltiptext"},a.title),l.a.createElement(ae.a,{in:c[a.iconClass]},l.a.createElement(te.a,{elevation:4,className:e.paper},l.a.createElement(x.a,{className:e.typo},a.title),l.a.createElement(u.a,null),l.a.createElement(x.a,{className:e.typo},"ENG"===t?a.textENG:a.textFR))))}))),"ENG"===t?l.a.createElement("h4",null,"Technologies I am using"):l.a.createElement("h4",null,"Les technologies que j'utilise"),l.a.createElement("div",{className:"techCtnr"},ie.map((function(a){return l.a.createElement("div",{key:a.imgId,className:"icon ".concat(a.iconClass),onClick:s},"Firebase"==a.title?l.a.createElement("img",{src:a.iconSrc,id:a.imgId,alt:"".concat(a.imgAlt," icon"),width:64,height:87}):l.a.createElement("img",{src:a.iconSrc,id:a.imgId,alt:"".concat(a.imgAlt," icon"),width:"90px",height:"90px"}),l.a.createElement("span",{className:"tooltiptext"},a.title),l.a.createElement(ae.a,{in:c[a.iconClass]},l.a.createElement(te.a,{elevation:4,className:e.paper},l.a.createElement(x.a,{className:e.typo},a.title),l.a.createElement(u.a,null),l.a.createElement(x.a,{className:e.typo},"ENG"===t?a.textENG:a.textFR))))}))))},se=(a(113),function(){return l.a.createElement("section",{className:"projects"},l.a.createElement("h2",null,"My last projects"),l.a.createElement("div",{className:"projectsCtnr"},l.a.createElement("article",{className:"project ponctual"}),l.a.createElement("article",{className:"project dirCleaner"}),l.a.createElement("article",{className:"project winCrypt"}),l.a.createElement("article",{className:"project connect4"}),l.a.createElement("article",{className:"project nezzarChat"}),l.a.createElement("article",{className:"project slh"})))}),me=(a(114),a(75)),ue=a.n(me),pe=a(76),de=a.n(pe),he=a(77),Ee=a.n(he),ge=function(){var e=l.a.useContext(B);return l.a.createElement("section",{className:"contact"},"ENG"===e?l.a.createElement("h2",null,"Reach me on social medias..."):l.a.createElement("h2",null,"Retrouvez moi sur les r\xe9saux sociaux..."),l.a.createElement("div",{className:"contactIcons"},l.a.createElement("img",{src:ue.a,alt:"Twitter Icon",width:35,height:35}),l.a.createElement("img",{src:de.a,alt:"Github Icon",width:35,height:35}),l.a.createElement("img",{src:Ee.a,alt:"Linkedin Icon",width:35,height:35})),"ENG"===e?l.a.createElement("h5",null,"... or send me an email : "):l.a.createElement("h5",null,"... ou envoyez-moi un email : "),l.a.createElement("div",{className:"emailCtnr"},l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:aurelien.nezzar@outlooK.fr?subject=SweetWords"},"aurelien.nezzar@outlooK.fr"))))};var ve=function(){return l.a.createElement("div",null,l.a.createElement(M,null),l.a.createElement(oe,null),l.a.createElement(se,null),l.a.createElement(ge,null))},fe=a(79),be=a.n(fe),we=a(80),Ne=a.n(we),Ie=a(81),ye=a.n(Ie),xe=a(83),je=a.n(xe),Ce=a(177),Se=a(78),ke=a(171),Ge=Object(j.a)((function(e){return{root:{display:"flex"},drawer:Object(o.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:{zIndex:e.zIndex.drawer+1},menuButton:Object(o.a)({},e.breakpoints.up("sm"),{display:"none"}),title:{flexGrow:1,fontSize:"25px"},toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1}}}));var Fe=function(e){var t=e.window,a=Ge(),n=(Object(C.a)(),l.a.useState(!1)),c=Object(i.a)(n,2),r=c[0],o=c[1],b=l.a.useState(!1),N=Object(i.a)(b,2),j=N[0],S=N[1],k=l.a.useState("ENG"),G=Object(i.a)(k,2),F=G[0],A=G[1],J=function(){o(!r)},L=[["ENG"===F?"About":"A propos",l.a.createElement(be.a,null),"hero"],["ENG"===F?"Skills":"Comp\xe9tences",l.a.createElement(Ne.a,null),"skills"],["ENG"===F?"Projects":"Projets",l.a.createElement(ye.a,null),"projects"],["ENG"===F?"Contact me":"Me contacter",l.a.createElement(w.a,null),"contact"]],R=l.a.createElement("div",null,l.a.createElement("div",{className:a.toolbar}),l.a.createElement(u.a,null),l.a.createElement(E.a,null,L.map((function(e){return l.a.createElement(Se.Link,{activeClass:"active",to:e[2],spy:!0,smooth:!0,offset:-64,duration:100,key:e[0]},l.a.createElement(g.a,{button:!0},l.a.createElement(v.a,null,e[1]),l.a.createElement(f.a,{primary:e[0]})))})),l.a.createElement(g.a,{button:!0,key:"Download resume"},l.a.createElement(v.a,null,l.a.createElement(je.a,null)),l.a.createElement(f.a,{primary:"ENG"===F?"Download resume":"T\xe9l\xe9charger CV"})),l.a.createElement(g.a,{key:"SwitchLang"},l.a.createElement(x.a,{component:"div"},l.a.createElement(ke.a,{component:"label",container:!0,alignItems:"center",spacing:1},l.a.createElement(ke.a,{item:!0},"ENG"),l.a.createElement(ke.a,{item:!0},l.a.createElement(Ce.a,{checked:j,onChange:function(e){S(e.target.checked),e.target.checked?A("FR"):A("ENG")},name:"checkedLng",color:"primary"})),l.a.createElement(ke.a,{item:!0},"FR")))))),z=void 0!==t?function(){return t().document.body}:void 0;return l.a.createElement("div",{className:a.root},l.a.createElement(m.a,null),l.a.createElement(s.a,{position:"fixed",className:a.appBar},l.a.createElement(y.a,null,l.a.createElement(x.a,{className:a.title,variant:"h1",noWrap:!0},"Aur\xe9lien NEZZAR"),l.a.createElement(h.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:J,className:a.menuButton},l.a.createElement(I.a,null)))),l.a.createElement("nav",{className:a.drawer,"aria-label":"mailbox folders"},l.a.createElement(d.a,{smUp:!0,implementation:"css"},l.a.createElement(p.a,{container:z,variant:"temporary",anchor:"right",open:r,onClose:J,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},R)),l.a.createElement(d.a,{xsDown:!0,implementation:"css"},l.a.createElement(p.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},R))),l.a.createElement("main",{className:a.content},l.a.createElement("div",{className:a.toolbar}),l.a.createElement(B.Provider,{value:F},l.a.createElement(ve,null))))},Ae=a(87);var Je=function(){return l.a.createElement(Ae.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(Fe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(Je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,a){e.exports=a.p+"static/media/avatar.564623ae.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/illustration.db0b7ae5.png"},67:function(e,t,a){e.exports=a.p+"static/media/html5-brands.f7e0c7ae.svg"},68:function(e,t,a){e.exports=a.p+"static/media/css3-alt-brands.9c1c2da2.svg"},69:function(e,t,a){e.exports=a.p+"static/media/js-brands.a4f804e9.svg"},70:function(e,t,a){e.exports=a.p+"static/media/python-brands.32c95a3f.svg"},71:function(e,t,a){e.exports=a.p+"static/media/react-brands.a046060a.svg"},72:function(e,t,a){e.exports=a.p+"static/media/WebGL_Logo.c36b25d9.svg"},73:function(e,t,a){e.exports=a.p+"static/media/firebase-logo.c24b6b9c.png"},75:function(e,t,a){e.exports=a.p+"static/media/twitterIcon.923455be.svg"},76:function(e,t,a){e.exports=a.p+"static/media/githubIcon.07883e93.svg"},77:function(e,t,a){e.exports=a.p+"static/media/linkedinLogo.4b475fb3.svg"},93:function(e,t,a){e.exports=a(126)},98:function(e,t,a){},99:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.d85fae7a.chunk.js.map