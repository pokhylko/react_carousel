(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),c=a.n(r),m=a(1),s=a(2),l=a(4),o=a(3),h=(a(13),a(5)),p=(a(14),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={translate:0},e.moveRight=function(){var t=e.props,a=t.images,n=t.itemWidth,i=t.step,r=t.frameSize,c=t.infinite,m=e.state.translate,s=a.length*n-r*n,l=m;if(l-=n*i,c){var o=a.splice(0,i);a.push.apply(a,Object(h.a)(o))}-l>s&&!c&&(l=-s),e.setState({translate:l})},e.moveLeft=function(){var t=e.props,a=t.images,n=t.itemWidth,i=t.step,r=t.infinite,c=e.state.translate;if(c+=n*i,r){var m=a.splice(-i);a.unshift.apply(a,Object(h.a)(m))}c>0&&!r&&(c=0),e.setState({translate:c})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.images,a=e.itemWidth,n=e.step,r=e.frameSize,c=e.animationDuration,m=e.infinite,s=e.changeStep,l=e.changeWidth,o=e.changeFrame,h=e.changeAnimation,p=e.changeInfinite,g=this.state.translate,u=a*r;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"section-carousel"},i.a.createElement("div",{className:"Carousel",style:{width:"".concat(u,"px")}},i.a.createElement("ul",{className:"Carousel__list",style:{transition:"transform ".concat(c,"ms"),transform:"translateX(".concat(g,"px)"),marginLeft:"".concat(m?-g-a*n:0,"px")}},t.map((function(e){return i.a.createElement("li",{key:e},i.a.createElement("img",{src:e,alt:e,style:{width:"".concat(a,"px")}}))})))),i.a.createElement("button",{className:"button button--prev",type:"button",onClick:this.moveLeft},"Prev"),i.a.createElement("button",{className:"button button--next",type:"button",onClick:this.moveRight},"Next")),i.a.createElement("div",{className:"controllers"},i.a.createElement("div",{className:"item-width"},i.a.createElement("label",{htmlFor:"width"},"Image width:"),i.a.createElement("input",{id:"width",type:"range",min:"50",max:"130",value:a,onChange:l})),i.a.createElement("div",{className:"step"},i.a.createElement("label",{htmlFor:"step"},"Step:"),i.a.createElement("input",{id:"step",type:"range",min:"1",max:"5",value:n,onChange:s})),i.a.createElement("div",{className:"frame"},i.a.createElement("label",{htmlFor:"frame"},"Frame:"),i.a.createElement("input",{id:"frame",type:"range",min:"1",max:"5",value:r,onChange:o})),i.a.createElement("div",{className:"animation"},i.a.createElement("label",{htmlFor:"animation"},"Animation:"),i.a.createElement("input",{id:"animation",type:"range",min:"0",max:"3000",step:"250",value:c,onChange:h})),i.a.createElement("div",{className:"infinite"},i.a.createElement("label",{htmlFor:"infinite"},"Infinite:"),i.a.createElement("input",{id:"infinite",type:"checkbox",checked:m,onChange:p}),i.a.createElement("span",{className:"slider round"}))))}}]),a}(i.a.Component));p.defaultProps={images:[]};var g=p,u=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,step:3,frameSize:3,animationDuration:1e3,infinite:!1},e.changeWidth=function(t){e.setState({itemWidth:+t.target.value})},e.changeStep=function(t){e.setState({step:+t.target.value})},e.changeFrame=function(t){e.setState({frameSize:+t.target.value})},e.changeAnimation=function(t){e.setState({animationDuration:+t.target.value})},e.changeInfinite=function(t){e.setState((function(e){return{infinite:!e.infinite}}))},e}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"App"},i.a.createElement(g,Object.assign({},this.state,{changeStep:this.changeStep,changeWidth:this.changeWidth,changeFrame:this.changeFrame,changeAnimation:this.changeAnimation,changeInfinite:this.changeInfinite})))))}}]),a}(i.a.Component);c.a.render(i.a.createElement(u,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.4d7bfebf.chunk.js.map