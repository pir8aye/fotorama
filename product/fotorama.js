/*!
 * Fotorama 4.2.4 | http://fotorama.io/license/
 */
!function(a,b,c,d){"use strict";function e(a){var b="bez_"+c.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof c.easing[b]){var d=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));)c-=b/g(c);return c};return function(a){return f(h(a),1)}};c.easing[b]=function(b,c,e,f,g){return f*d([a[0],a[1]],[a[2],a[3]])(c/g)+e}}return b}function f(){}function g(a,b,c){return Math.max(isNaN(b)?-1/0:b,Math.min(isNaN(c)?1/0:c,a))}function h(a){return a.match(/^m/)&&a.match(/-?\d+/g)[4]}function i(a){return nc?+h(a.css("transform")):+a.css("left").replace("px","")}function j(a){var b={};return nc?b.transform="translate3d("+a+"px,0,0)":b.left=a,b}function k(a){return{"transition-duration":a+"ms"}}function l(a,b){return+String(a).replace(b||"px","")}function m(a){return/%$/.test(a)&&l(a,"%")}function n(a){return(!!l(a)||!!l(a,"%"))&&a}function o(a,b,c,d){return(a-(d||0))*(b+(c||0))}function p(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0))}function q(a){var b=a.data();if(!b.tEnd){var c=a[0],d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};c.addEventListener(d[U.prefixed("transition")],function(a){b.tProp&&a.propertyName.match(b.tProp)&&b.onEndFn()}),b.tEnd=!0}}function r(a,b,c,d){var e,f=a.data();f&&(f.onEndFn=function(){e||(e=!0,clearTimeout(f.tT),c())},f.tProp=b,clearTimeout(f.tT),f.tT=setTimeout(f.onEndFn,1.5*d),q(a))}function s(a,b){if(a.length){var c=a.data();nc?(a.css(k(0)),c.onEndFn=f,clearTimeout(c.tT)):a.stop();var d=b||i(a);return a.css(j(d)),d}}function t(a,b){return Math.round(a+(b-a)/1.5)}function u(){return u.p=u.p||("https://"===location.protocol?"https://":"http://"),u.p}function v(a){var c=b.createElement("a");return c.href=a,c}function w(a,b){if("string"!=typeof a)return a;a=v(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube"}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d}:!1}function x(a,b,d){var e,f,g=a.video;return"youtube"===g.type?(f=u()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?c.ajax({url:u()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function(c){a.thumbsReady=!0,y(b,{img:c[0].thumbnail_large,thumb:c[0].thumbnail_small},a.i,d)}}):a.thumbsReady=!0,{img:e,thumb:f}}function y(a,b,d,e){for(var f=0,g=a.length;g>f;f++){var h=a[f];if(h.i===d&&h.thumbsReady){var i={videoReady:!0};i[yc]=i[Ac]=i[zc]=!1,e.splice(f,1,c.extend({},h,i,b));break}}}function z(a){function b(a,b){var c=a.data(),e=a.children("img").eq(0),f=a.attr("href"),g=a.attr("src"),h=e.attr("src"),i=c.video,j=b?w(f,i===!0):!1;j?f=!1:j=w(i,i);var k=c.img||f||g||h,m=c.thumb||h||g||f,n=k!==m,o=l(c.width||a.attr("width")),p=l(c.height||a.attr("height")),q=l(c.thumbWidth||e.attr("width")||n||o),r=l(c.thumbHeight||e.attr("height")||n||p);return{video:j,img:k,width:o||d,height:p||d,thumb:m,thumbRatio:q/r||d}}var e=[];return a.children().each(function(){var a=c(this),d=c.extend(a.data(),{id:a.attr("id")});if(a.is("a, img"))c.extend(d,b(a,!0));else{if(a.is(":empty"))return;c.extend(d,{html:this,_html:a.html()})}e.push(d)}),e}function A(a){return 0===a.offsetWidth&&0===a.offsetHeight}function B(a){return!c.contains(b.documentElement,a)}function C(a,b,c){a()?b():setTimeout(function(){C(a,b)},c||100)}function D(a){location.replace(location.protocol+"//"+location.host+location.pathname.replace(/^\/?/,"/")+location.search+"#"+a)}function E(a,b,c){var d=a.data(),e=d.measures;if(e&&(!d.l||d.l.W!==e.width||d.l.H!==e.height||d.l.r!==e.ratio||d.l.w!==b.w||d.l.h!==b.h||d.l.m!==c)){var f=e.width,h=e.height,i=b.w/b.h,j=e.ratio>=i,k="scale-down"===c,l="contain"===c,m="cover"===c;j&&(k||l)||!j&&m?(f=g(b.w,0,k?f:1/0),h=f/e.ratio):(j&&m||!j&&(k||l))&&(h=g(b.h,0,k?h:1/0),f=h*e.ratio),a.css({width:Math.ceil(f),height:Math.ceil(h),marginLeft:Math.floor(-f/2),marginTop:Math.floor(-h/2)}),d.l={W:e.width,H:e.height,r:e.ratio,w:b.w,h:b.h,m:c}}return!0}function F(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b)}function G(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"}function H(a,b,c){if(!c)return!1;if(!isNaN(a))return a-1;for(var d,e=0,f=b.length;f>e;e++){var g=b[e];if(g.id===a){d=e;break}}return d}function I(a,b,d){d=d||{},a.each(function(){var a,e=c(this),g=e.data();g.clickOn||(g.clickOn=!0,c.extend(P(e,{onStart:function(b){a=b,(d.onStart||f).call(this,b)},onMove:d.onMove||f,onEnd:function(c){c.moved||d.tail.checked||b.call(this,a)}}),d.tail))})}function J(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"}function K(a){for(var b=a.length;b;){var c=Math.floor(Math.random()*b--),d=a[b];a[b]=a[c],a[c]=d}return a}function L(a,b){jc.scrollLeft(a).scrollTop(b)}function M(a,b){var d=Math.round(b.pos),e=b.onEnd||f;"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(d=b.overPos,e=function(){M(a,c.extend({},b,{overPos:b.pos,time:Math.max(sc,b.time/2)}))});var g=c.extend(j(d),{width:b.width});nc?(a.css(c.extend(k(b.time),g)),b.time>10?r(a,"transform",e,b.time):e()):a.stop().animate(g,b.time,Bc,e)}function N(a,b,d,e){a=a||c(a),b=b||c(b);var g=a[0],h=b[0],i="crossfade"===e.method,j=function(){j.done||((e.onEnd||f)(),j.done=!0)},l=k(e.time),m=k(0),n={opacity:0},o={opacity:1};d.removeClass(Kb+" "+Jb),a.addClass(Kb),b.addClass(Jb),nc?(s(a),s(b),i&&h&&a.css(c.extend(m,n)).width(),a.css(c.extend(i?l:m,o)),b.css(c.extend(l,n)),e.time>10&&(g||h)?(r(a,"opacity",j,e.time),r(b,"opacity",j,e.time)):j()):(a.stop(),b.stop(),i&&h&&a.fadeTo(0,0),a.fadeTo(i?e.time:1,1,i&&j),b.fadeTo(e.time,0,j),g&&i||h||j())}function O(a,b){if(b){var c=a.touches[0];a._x=c.clientX,a._y=c.clientY}else a._x=a.clientX,a._y=a.clientY}function P(a,d){function e(a){return l=c(a.target),s.checked=o=p=!1,j||s.flow||a.touches&&a.touches.length>1||a.which>1||_&&_.type!==a.type&&bb||(o=d.select&&l.is(d.select,q))?o:(n=a.type.match("touch"),p=l.is("a, a *",q),O(a,n),k=_=a,ab=a.type.replace(/down|start/,"move"),m=s.control,(d.onStart||f).call(q,a,{control:m,$target:l}),j=s.flow=!0,(!n||s.go)&&a.preventDefault(),void 0)}function g(a){if(a.touches&&a.touches.length>1||ab!==a.type||!j)return j&&h(),void 0;O(a,n);var b=Math.abs(a._x-k._x),c=Math.abs(a._y-k._y),e=b-c,g=(s.go||e>=0)&&!s.noSwipe,i=0>e;n&&!s.checked?(j=g,j&&a.preventDefault()):(a.preventDefault(),(d.onMove||f).call(q,a,{touch:n})),s.checked=s.checked||g||i}function h(a){var b=j;s.control=j=!1,!b||p&&!s.checked||(s.flow=!1,a&&a.preventDefault(),bb=!0,clearTimeout(cb),cb=setTimeout(function(){bb=!1},1e3),(d.onEnd||f).call(q,{moved:s.checked,$target:l,control:m,startEvent:k,aborted:!a,touch:n}))}var i,j,k,l,m,n,o,p,q=a[0],r="addEventListener",s={};return q[r]&&(q[r]("touchstart",e),q[r]("touchmove",g),q[r]("touchend",h),b[r]("touchstart",function(){clearTimeout(i),s.flow=!0}),b[r]("touchend",function(){clearTimeout(i),i=setTimeout(function(){s.flow=!1},rc)})),a.on("mousedown",e),kc.on("mousemove",g).on("mouseup",h),a.on("click","a",function(a){s.checked&&a.preventDefault()}),s}function Q(a,b){function d(c){k=l=c._x,p=[[+new Date,k]],m=n=s(a,b.getPos&&b.getPos()),(b.onStart||f).call(z,c,{pos:m})}function e(a,b){r=A.min,u=A.max,v=A.snap,w=a.altKey,y=!1,x=b.control,x||d(a)}function h(c,e){x&&(x=!1,d(c)),B.noSwipe||(l=c._x,p.push([(new Date).getTime(),l]),n=m-(k-l),o=G(n,r,u),r>=n?n=t(n,r):n>=u&&(n=t(n,u)),B.noMove||(a.css(j(n)),y||(y=!0,e.touch||a.addClass(Zb)),(b.onMove||f).call(z,c,{pos:n,edge:o})))}function i(d){if(!x){d.touch||a.removeClass(Zb),q=(new Date).getTime();for(var e,h,i,j,k,o,s,t,y,A=q-rc,B=null,C=sc,D=b.friction,E=p.length-1;E>=0;E--){if(e=p[E][0],h=Math.abs(e-A),null===B||i>h)B=e,j=p[E][1];else if(B===A||h>i)break;i=h}s=g(n,r,u);var F=j-l,G=F>=0,H=q-B,I=H>rc,J=!I&&n!==m&&s===n;v&&(s=g(Math[J?G?"floor":"ceil":"round"](n/v)*v,r,u),r=u=s),J&&(v||s===n)&&(y=-(F/H),C*=g(Math.abs(y),b.timeLow,b.timeHigh),k=Math.round(n+y*C/D),v||(s=k),(!G&&k>u||G&&r>k)&&(o=G?r:u,t=k-o,v||(s=o),t=g(s+.03*t,o-50,o+50),C=Math.abs((n-t)/(y/D)))),C*=w?10:1,(b.onEnd||f).call(z,c.extend(d,{pos:n,newPos:s,overPos:t,time:C,moved:I&&v||d.moved}))}}var k,l,m,n,o,p,q,r,u,v,w,x,y,z=a[0],A=a.data(),B={};return B=c.extend(P(b.$wrap,{onStart:e,onMove:h,onEnd:i,select:b.select,control:b.control}),B)}function R(a){S(!0),Cc.appendTo(a),eb=0,Dc(),db=setInterval(Dc,200)}function S(a){a||Cc.detach(),clearInterval(db)}var T={},U=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.csstransforms3d=function(){var a=!!i("perspective");return a};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(a,b),V={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},W="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)V.ok=!0;else for(var X=0,Y=W.length;Y>X;X++)if(V.prefix=W[X],"undefined"!=typeof b[V.prefix+"CancelFullScreen"]){V.ok=!0;break}V.ok&&(V.event=V.prefix+"fullscreenchange",V.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"]}},V.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},V.cancel=function(){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]()});var Z,$,_,ab,bb,cb,db,eb,fb="fotorama",gb="fullscreen",hb=fb+"__wrap",ib=hb+"--css3",jb=hb+"--video",kb=hb+"--fade",lb=hb+"--slide",mb=hb+"--no-controls",nb=hb+"--no-shadows",ob=fb+"__stage",pb=ob+"__frame",qb=pb+"--video",rb=ob+"__shaft",sb=ob+"--only-active",tb=fb+"__grab",ub=fb+"__pointer",vb=fb+"__arr",wb=vb+"--disabled",xb=vb+"--prev",yb=vb+"--next",zb=vb+"__arr",Ab=fb+"__nav",Bb=Ab+"-wrap",Cb=Ab+"__shaft",Db=Ab+"--dots",Eb=Ab+"--thumbs",Fb=Ab+"__frame",Gb=Fb+"--dot",Hb=Fb+"--thumb",Ib=fb+"__fade",Jb=Ib+"-front",Kb=Ib+"-rear",Lb=fb+"__shadow",Mb=Lb+"s",Nb=Mb+"--left",Ob=Mb+"--right",Pb=fb+"__active",Qb=fb+"__select",Rb=fb+"--hidden",Sb=fb+"--fullscreen",Tb=fb+"__fullscreen-icon",Ub=fb+"__error",Vb=fb+"__loading",Wb=fb+"__loaded",Xb=Wb+"--full",Yb=Wb+"--img",Zb=fb+"__grabbing",$b=fb+"__img",_b=$b+"--full",ac=fb+"__dot",bc=fb+"__thumb",cc=bc+"-border",dc=fb+"__html",ec=fb+"__video",fc=ec+"-play",gc=ec+"-close",hc=fb+"__caption",ic=fb+"__oooo",jc=c(a),kc=c(b),lc="CSS1Compat"===b.compatMode,mc="quirks"===location.hash.replace("#",""),nc=U.csstransforms3d&&!mc,oc=V.ok,pc=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),qc=!nc||pc,rc=250,sc=300,tc=5e3,uc=2,vc=64,wc=500,xc=333,yc="$stageFrame",zc="$navDotFrame",Ac="$navThumbFrame",Bc=e([.1,0,.25,1]),Cc=c(J("",J(ic))),Dc=function(){Cc.attr("class",ic+" "+ic+"--"+eb),eb++,eb>4&&(eb=0)};jQuery.Fotorama=function(e,f){function h(){c.each(Uc,function(a,b){if(!b.i){b.i=Dd++;var c=w(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=x(b,Uc,yd),y(Uc,{img:d.img,thumb:d.thumb},b.i,yd)}}})}function i(a){a!==i.f&&(a?(e.html("").addClass(Bd).append(Hd).before(Fd).before(Gd),c.Fotorama.size++):(Hd.detach(),Fd.detach(),Gd.detach(),e.html(Ed.urtext).removeClass(Bd),c.Fotorama.size--),i.f=a)}function q(){Uc=yd.data=Uc||z(e),Vc=yd.size=Uc.length,!Tc.ok&&f.shuffle&&K(Uc),h(),_d=O(_d),Vc&&i(!0)}function r(){ce.noMove=2>Vc||Xc||kd,ce.noSwipe=!f.swipe||Xc,Jd.toggleClass(tb,!ce.noMove&&!ce.noSwipe)}function t(a){a===!0&&(a=""),f.autoplay=Math.max(+a||tc,1.5*nd)}function u(a){return a?"add":"remove"}function v(){kd="crossfade"===f.transition||"dissolve"===f.transition,ed=f.loop&&(Vc>2||kd),nd=+f.transitionDuration||sc;var a={add:[],remove:[]};Vc>1?(fd=f.nav,hd="top"===f.navPosition,a.remove.push(Qb),Nd.toggle(f.arrows),Zb()):(fd=!1,Nd.hide()),f.autoplay&&t(f.autoplay),ld=l(f.thumbWidth)||vc,md=l(f.thumbHeight)||vc,r(),Fc(f,!0),gd="thumbs"===fd,gd?(cb(Vc,"navThumb"),Wc=Sd,xd=Ac,F(Fd,c.Fotorama.jst.style({w:ld,h:md,m:uc,s:Ad,q:!lc})),Pd.addClass(Eb).removeClass(Db)):"dots"===fd?(cb(Vc,"navDot"),Wc=Rd,xd=zc,Pd.addClass(Db).removeClass(Eb)):(fd=!1,Pd.removeClass(Eb+" "+Db)),fd&&(hd?Od.insertBefore(Id):Od.insertAfter(Id),Jb.nav=!1,Jb(Wc,Qd,"nav")),id=f.allowFullScreen,id?(Wd.appendTo(Id),jd=oc&&"native"===id):(Wd.detach(),jd=!1),a[u(kd)].push(kb),a[u(!kd)].push(lb),od=f.shadows&&!qc,a[u(!od)].push(nb),S(),Hd.addClass(a.add.join(" ")).removeClass(a.remove.join(" ")),ae=c.extend({},f)}function A(a){return 0>a?(Vc+a%Vc)%Vc:a>=Vc?a%Vc:a}function O(a){return g(a,0,Vc-1)}function P(a){return ed?A(a):O(a)}function T(a){return a>0||ed?a-1:!1}function U(a){return Vc-1>a||ed?a+1:!1}function W(){Td.min=ed?-1/0:-o(Vc-1,be.w,uc,$c),Td.max=ed?1/0:-o(0,be.w,uc,$c),Td.snap=be.w+uc}function X(){Ud.min=Math.min(0,be.w-Qd.width()),Ud.max=0,de.noMove=Ud.min===Ud.max,Qd.toggleClass(tb,!de.noMove)}function Y(a,b,d){if("number"==typeof a){a=new Array(a);var e=!0}return c.each(a,function(a,c){if(e&&(c=a),"number"==typeof c){var f=Uc[A(c)],g="$"+b+"Frame",h=f[g];d.call(this,a,c,f,h,g,h&&h.data())}})}function _(a,b,c,d){(!pd||"*"===pd&&d===dd)&&(a=n(f.width)||n(a)||wc,b=n(f.height)||n(b)||xc,yd.resize({width:a,ratio:f.ratio||c||a/b},0,d===dd?!0:"*"))}function ab(a,b,d,e,g){Y(a,b,function(a,h,i,j,k,l){function m(a){var b=A(h);Gc(a,{index:b,src:v,frame:Uc[b]})}function n(){s.remove(),c.Fotorama.cache[v]="error",i.html&&"stage"===b||!w||w===v?(v&&!i.html?(j.trigger("f:error").removeClass(Vb).addClass(Ub),m("error")):"stage"===b&&(j.trigger("f:load").removeClass(Vb+" "+Ub).addClass(Wb),m("load"),_()),l.state="error",!(Vc>1)||i.html||i.deleted||i.video||q||(i.deleted=!0,yd.splice(h,1))):(i[u]=v=w,ab([h],b,d,e,!0))}function o(){var a=r.width,g=r.height,k=a/g;t.measures={width:a,height:g,ratio:k},_(a,g,k,h),s.off("load error").addClass($b+(q?" "+_b:"")).prependTo(j),E(s,d||be,e||i.fit||f.fit),c.Fotorama.cache[v]="loaded",l.state="loaded",setTimeout(function(){j.trigger("f:load").removeClass(Vb+" "+Ub).addClass(Wb+" "+(q?Xb:Yb)),"stage"===b&&m("load")},5)}function p(){var a=10;C(function(){return!wd||!a--},function(){o()})}if(j){var q=yd.fullScreen&&i.full&&!l.$full&&"stage"===b;if(!l.$img||g||q){var r=new Image,s=c(r),t=s.data();l[q?"$full":"$img"]=s;var u="stage"===b?q?"full":"img":"thumb",v=i[u],w=q?null:i["stage"===b?"thumb":"img"];if("navThumb"===b&&(j=l.$wrap),!v)return n(),void 0;c.Fotorama.cache[v]?function x(){"error"===c.Fotorama.cache[v]?n():"loaded"===c.Fotorama.cache[v]?setTimeout(p,0):setTimeout(x,100)}():(c.Fotorama.cache[v]="*",s.on("load",p).on("error",n)),r.src=v}}})}function bb(){var a=yd.activeFrame[yc];a&&!a.data().state&&(R(a),a.on("f:load f:error",function(){a.off("f:load f:error"),S()}))}function cb(a,b){Y(a,b,function(a,d,e,g,h,i){g||(g=e[h]=Hd[h].clone(),i=g.data(),i.data=e,"stage"===b?(e.html&&c('<div class="'+dc+'"></div>').append(e._html?c(e.html).removeAttr("id").html(e._html):e.html).appendTo(g),f.captions&&e.caption&&c('<div class="'+hc+'"></div>').append(e.caption).appendTo(g),e.video&&g.addClass(qb).append(Yd.clone()),Kd=Kd.add(g)):"navDot"===b?Rd=Rd.add(g):"navThumb"===b&&(i.$wrap=g.children(":first"),Sd=Sd.add(g),e.video&&g.append(Yd.clone())))})}function db(a,b,c){return a&&a.length&&E(a,b,c)}function eb(a){Y(a,"stage",function(a,b,d,e,g,h){if(e){fe[yc][A(b)]=e.css(c.extend({left:kd?0:o(b,be.w,uc,$c)},kd&&k(0))),B(e[0])&&(e.appendTo(Jd),Nc(d.$video));var i=d.fit||f.fit;db(h.$img,be,i),db(h.$full,be,i)}})}function Ib(a,b){if("thumbs"===fd&&!isNaN(a)){var d=-a,e=-a+be.w;Sd.each(function(){var a=c(this),f=a.data(),g=f.eq,h={h:md},i="cover";h.w=f.w,f.l+f.w<d||f.l>e||db(f.$img,h,i)||b&&ab([g],"navThumb",h,i)})}}function Jb(a,b,d){if(!Jb[d]){var e="nav"===d&&gd,f=0;b.append(a.filter(function(){for(var a,b=c(this),d=b.data(),e=0,f=Uc.length;f>e;e++)if(d.data===Uc[e]){a=!0,d.eq=e;break}return a||b.remove()&&!1}).sort(function(a,b){return c(a).data().eq-c(b).data().eq}).each(function(){if(e){var a=c(this),b=a.data(),d=Math.round(md*b.data.thumbRatio||ld);b.l=f,b.w=d,a.css({width:d}),f+=d+uc}})),Jb[d]=!0}}function Kb(a){return a-ge>be.w/3}function Lb(a){return!(ed||_d+a&&_d-Vc+a||Xc)}function Zb(){Nd.each(function(a){c(this).toggleClass(wb,Lb(a))})}function ec(a){var b,c,d=a.data();return gd?(b=d.l,c=d.w):(b=a.position().left,c=a.width()),{c:b+c/2,min:-b+10*uc,max:-b+be.w-c-10*uc}}function ic(a){var b=yd.activeFrame[xd].data();M(Vd,{time:.9*a,pos:b.l,width:b.w-2*uc})}function mc(a){var b=Uc[a.guessIndex][xd];if(b){var c=Ud.min!==Ud.max,d=c&&ec(yd.activeFrame[xd]),e=c&&g(g(a.coo-ec(b).c,d.min,d.max),Ud.min,Ud.max),f=.9*a.time;M(Qd,{time:f,pos:e||0,onEnd:function(){Ib(e,!0)}}),f&&Ib(e),Mc(Pd,G(e,Ud.min,Ud.max))}}function pc(){Bc(xd),ee[xd].push(yd.activeFrame[xd].addClass(Pb))}function Bc(a){for(var b=ee[a];b.length;)b.shift().removeClass(Pb)}function Cc(a){var b=fe[a];c.each(Zc,function(a,c){delete b[c]}),c.each(b,function(a,c){delete b[a],c.detach()})}function Dc(a){$c=_c=_d;var b=yd.activeFrame,c=b[yc];c&&(Bc(yc),ee[yc].push(c.addClass(Pb)),a||yd.show.onEnd(!0),s(Jd.css(j(0))),Cc(yc),eb(Zc,!0),W(),X())}function Fc(a,b){a&&c.extend(be,{width:a.width||be.width,height:a.height,minWidth:a.minWidth,maxWidth:a.maxWidth,minHeight:a.minHeight,maxHeight:a.maxHeight,ratio:function(a){if(a){var b=Number(a);return isNaN(b)?(b=a.split("/"),Number(b[0]/b[1])||d):b}}(a.ratio)})&&!b&&c.extend(f,{width:be.width,height:be.height,minWidth:be.minWidth,maxWidth:be.maxWidth,minHeight:be.minHeight,maxHeight:be.maxHeight,ratio:be.ratio})}function Gc(a,b){e.trigger(fb+":"+a,[yd,b])}function Hc(){clearTimeout(Ic.t),wd=1,f.stopAutoplayOnTouch?yd.stopAutoplay():td=!0}function Ic(){Ic.t=setTimeout(function(){wd=0},sc+rc)}function Jc(){td=!(!Xc&&!ud)}function Kc(){if(clearTimeout(Kc.t),!f.autoplay||td)return yd.autoplay&&(yd.autoplay=!1,Gc("stopautoplay")),void 0;yd.autoplay||(yd.autoplay=!0,Gc("startautoplay"));var a=_d;Kc.t=setTimeout(function(){var b=yd.activeFrame[yc].data();C(function(){return b.state||a!==_d},function(){td||a!==_d||yd.show(ed?">":A(_d+1))})},f.autoplay)}function Lc(){yd.fullScreen&&(yd.fullScreen=!1,oc&&V.cancel(Cd),$.removeClass(gb),e.removeClass(Sb).insertAfter(Gd),Gc("fullscreenexit"),be=c.extend({},vd),Nc(Xc,!0,!0),yd.resize(),ab(Zc,"stage"),L(rd,qd))}function Mc(a,b){od&&(a.removeClass(Nb+" "+Ob),b&&!Xc&&a.addClass(b.replace(/^|\s/g," "+Mb+"--")))}function Nc(a,b,c){b&&(Hd.removeClass(jb),Xc=!1,r()),a&&a!==Xc&&(a.remove(),Gc("unloadvideo")),c&&(Jc(),Kc())}function Oc(a){Hd.toggleClass(mb,a)}function Pc(a){if(!ce.flow){var b=a?a.pageX:Pc.x,c=!Lb(Kb(b))&&f.click;Pc.p===c||!kd&&f.swipe||!Id.toggleClass(ub,c)||(Pc.p=c,Pc.x=b)}}function Qc(a,b){var d=a.target,e=c(d);e.hasClass(fc)?yd.playVideo():d===Xd?yd[(yd.fullScreen?"cancel":"request")+"FullScreen"]():Xc?d===$d&&Nc(Xc,!0,!0):b&&f.arrows?Oc():f.click&&yd.show({index:a.shiftKey||!Kb(a._x)?"<":">",slow:a.altKey,direct:!0})}function Rc(a,b){var d=c(this).data().eq;yd.show({index:d,slow:a.altKey,direct:!0,coo:a._x-Pd.offset().left,time:b})}function Sc(){q(),v(),Tc.ok||(f.hash&&location.hash&&(dd=H(location.hash.replace(/^#/,""),Uc,0===zd)),_d=$c=_c=ad=dd=P(dd)||0),Vc?(Xc&&Nc(Xc,!0),Zc=[],Cc(yc),yd.show({index:_d,time:0}),yd.resize()):yd.destroy()}function Tc(){Tc.ok||(Tc.ok=!0,Gc("ready"))}Z=Z||c("html"),$=$||c("body");var Uc,Vc,Wc,Xc,Yc,Zc,$c,_c,ad,bd,cd,dd,ed,fd,gd,hd,id,jd,kd,ld,md,nd,od,pd,qd,rd,sd,td,ud,vd,wd,xd,yd=this,zd=Ec,Ad=+new Date,Bd=fb+Ad,Cd=e[0],Dd=1,Ed=e.data(),Fd=c("<style></style>"),Gd=c(J(Rb)),Hd=c(J(hb)),Id=c(J(ob)).appendTo(Hd),Jd=(Id[0],c(J(rb)).appendTo(Id)),Kd=c(),Ld=c(J(vb+" "+xb,J(zb))),Md=c(J(vb+" "+yb,J(zb))),Nd=Ld.add(Md).appendTo(Id),Od=c(J(Bb)),Pd=c(J(Ab)).appendTo(Od),Qd=c(J(Cb)).appendTo(Pd),Rd=c(),Sd=c(),Td=Jd.data(),Ud=Qd.data(),Vd=c(J(cc)).appendTo(Qd),Wd=c(J(Tb)),Xd=Wd[0],Yd=c(J(fc)),Zd=c(J(gc)).appendTo(Id),$d=Zd[0],_d=!1,ae={},be={},ce={},de={},ee={},fe={},ge=0;Hd[yc]=c(J(pb)),Hd[Ac]=c(J(Fb+" "+Hb,J(bc))),Hd[zc]=c(J(Fb+" "+Gb,J(ac))),ee[yc]=[],ee[Ac]=[],ee[zc]=[],fe[yc]={},nc&&Hd.addClass(ib),Ed.fotorama=this,yd.options=f,Ec++,yd.startAutoplay=function(a){return yd.autoplay?this:(td=ud=!1,t(a||f.autoplay),Kc(),this)},yd.stopAutoplay=function(){return yd.autoplay&&(td=ud=!0,Kc()),this},yd.show=function(a){var b;"object"!=typeof a?(b=a,a={}):b=a.index,b=">"===b?_c+1:"<"===b?_c-1:"<<"===b?0:">>"===b?Vc-1:b,b=isNaN(b)?H(b,Uc,!0):b,b="undefined"==typeof b?_d||0:b,yd.activeIndex=_d=P(b),bd=T(_d),cd=U(_d),Zc=[_d,bd,cd],_c=ed?b:_d;var c=Math.abs(ad-_c),d="number"==typeof a.time?a.time:Math.min(nd*(1+(c-1)/12),2*nd),e=a.overPos;a.slow&&(d*=10),yd.activeFrame=Yc=Uc[_d],Nc(!1,Yc.i!==Uc[A($c)].i),cb(Zc,"stage"),eb([_c,T(_c),U(_c)]),Gc("show",a.direct),ce.go=de.go=!0;var h=yd.show.onEnd=function(b){h.ok||(h.ok=!0,bb(),ab(Zc,"stage"),b||Dc(!0),Gc("showend",a.direct),ce.go=de.go=!1,Pc(),Jc(),Kc())};if(kd){var i=Yc[yc],j=_d!==ad?Uc[ad][yc]:null;N(i,j,Kd,{time:d,method:f.transition,onEnd:h})}else M(Jd,{pos:-o(_c,be.w,uc,$c),overPos:e,time:d,onEnd:h});if(Zb(),fd){pc();var k=O(_d+g(_c-ad,-1,1)),l="undefined"==typeof a.coo;(!l||k!==_d)&&mc({time:d,coo:l||k===_d?be.w/2:a.coo,guessIndex:l?_d:k}),gd&&ic(d)}return sd="undefined"!=typeof ad&&ad!==_d,ad=_d,f.hash&&sd&&!yd.eq&&D(Yc.id||_d+1),this},yd.requestFullScreen=function(){return id&&!yd.fullScreen&&(qd=jc.scrollTop(),rd=jc.scrollLeft(),L(0,0),vd=c.extend({},be),e.addClass(Sb).appendTo($.addClass(gb)),Nc(Xc,!0,!0),yd.fullScreen=!0,jd&&V.request(Cd),yd.resize(),ab(Zc,"stage"),Gc("fullscreenenter")),this},yd.cancelFullScreen=function(){return jd&&V.is()?V.cancel(b):Lc(),this},b.addEventListener&&b.addEventListener(V.event,function(){V.is()||Xc||Lc()}),kc.on("keydown",function(a){Xc&&27===a.keyCode?(a.preventDefault(),Nc(Xc,!0,!0)):(yd.fullScreen||f.keyboard&&!zd)&&(27===a.keyCode?(a.preventDefault(),yd.cancelFullScreen()):39===a.keyCode||40===a.keyCode&&yd.fullScreen?(a.preventDefault(),yd.show({index:">",slow:a.altKey,direct:!0})):(37===a.keyCode||38===a.keyCode&&yd.fullScreen)&&(a.preventDefault(),yd.show({index:"<",slow:a.altKey,direct:!0})))}),zd||kc.on("keydown","textarea, input, select",function(a){yd.fullScreen||a.stopPropagation()}),yd.resize=function(b){if(!Uc)return this;Fc(yd.fullScreen?{width:"100%",maxWidth:null,minWidth:null,height:"100%",maxHeight:null,minHeight:null}:b,yd.fullScreen);var c=arguments[1]||0,d=arguments[2],e=be.width,f=be.height,h=be.ratio,i=a.innerHeight-(fd?Pd.height():0);return n(e)&&(Hd.css({width:e,minWidth:be.minWidth,maxWidth:be.maxWidth}),e=be.w=Hd.width(),f=m(f)/100*i||l(f),f=f||h&&e/h,f&&(e=Math.round(e),f=be.h=Math.round(g(f,m(be.minHeight)/100*i||l(be.minHeight),m(be.maxHeight)/100*i||l(be.maxHeight))),Dc(),Id.addClass(sb).stop().animate({width:e,height:f},c,function(){Id.removeClass(sb)}),fd&&(Pd.stop().animate({width:e},c),mc({guessIndex:_d,time:c,coo:be.w/2}),gd&&Jb.nav&&ic(c)),pd=d||!0,Tc())),ge=Id.offset().left,this},yd.setOptions=function(a){return c.extend(f,a),Sc(),this},yd.shuffle=function(){return Uc&&K(Uc)&&Sc(),this},yd.destroy=function(){return yd.cancelFullScreen(),yd.stopAutoplay(),Uc=yd.data=null,i(),Zc=[],Cc(yc),this},yd.playVideo=function(){var a=yd.activeFrame,b=a.video,d=_d;return"object"==typeof b&&a.videoReady&&(jd&&yd.fullScreen&&yd.cancelFullScreen(),C(function(){return!V.is()||d!==_d},function(){d===_d&&(a.$video=a.$video||c(c.Fotorama.jst.video(b)),a.$video.appendTo(a[yc]),Hd.addClass(jb),Xc=a.$video,r(),Gc("loadvideo"))})),this},yd.stopVideo=function(){return Nc(Xc,!0,!0),this},Hd.hover(function(){Oc(!1)},function(){Oc(!0)}),Id.on("mousemove",Pc),ce=Q(Jd,{onStart:Hc,onMove:function(a,b){Mc(Id,b.edge)},onEnd:function(a){if(Mc(Id),Ic(),a.moved||a.touch&&a.pos!==a.newPos){var b=p(a.newPos,be.w,uc,$c);yd.show({index:b,time:kd?nd:a.time,overPos:a.overPos,direct:!0})}else a.aborted||Qc(a.startEvent,a.touch)},getPos:function(){return-o(_c,be.w,uc,$c)},timeLow:1,timeHigh:1,friction:2,select:"."+Qb+", ."+Qb+" *",$wrap:Id}),de=Q(Qd,{onStart:Hc,onMove:function(a,b){Mc(Pd,b.edge)},onEnd:function(a){function b(){Jc(),Kc(),Ib(a.newPos,!0)}if(Ic(),a.moved)a.pos!==a.newPos?(M(Qd,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),Ib(a.newPos),Mc(Pd,G(a.newPos,Ud.min,Ud.max))):b();else{var c=a.$target.closest("."+Fb,Qd)[0];c&&Rc.call(c,a.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:Pd}),I(Nd,function(a){a.preventDefault(),Xc?Nc(Xc,!0,!0):(Ic(),yd.show({index:Nd.index(this)?">":"<",slow:a.altKey,direct:!0}))},{onStart:function(){Hc(),ce.control=!0},tail:ce}),c.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){yd[b]=function(){return Uc=Uc||[],"load"!==b?Array.prototype[b].apply(Uc,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(Uc=arguments[0]),Sc(),yd}}),jc.on("resize",yd.resize),Sc()},c.fn.fotorama=function(a){return this.each(function(){var b=this,d=c(this),e=d.data(),f=e.fotorama;f?f.setOptions(a):C(function(){return!A(b)},function(){e.urtext=d.html(),new c.Fotorama(d,c.extend({},{width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,ratio:null,nav:"dots",navPosition:"bottom",thumbWidth:vc,thumbHeight:vc,arrows:!0,click:!0,swipe:!0,allowFullScreen:!1,fit:"contain",transition:"slide",transitionDuration:sc,captions:!0,hash:!1,autoplay:!1,stopAutoplayOnTouch:!0,keyboard:!1,loop:!1,shuffle:!1,shadows:!0},a,e))})})},c.Fotorama.cache={};var Ec=0;c.Fotorama.size=0,c(function(){c("."+fb+':not([data-auto="false"])').fotorama()}),c=c||{},c.Fotorama=c.Fotorama||{},c.Fotorama.jst=c.Fotorama.jst||{},c.Fotorama.jst.style=function(a){var b,c="";return T.escape,c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nheight:"+(null==(b=a.h-a.m*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.m)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px}"},c.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"")}var c="",d=(T.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b("youtube"==a.type?"http://youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?"http://player.vimeo.com/video/"+a.id+"?autoplay=1&amp;badge=0":a.id),c+='" frameborder="0" allowfullscreen></iframe></div>'}}(window,document,jQuery);