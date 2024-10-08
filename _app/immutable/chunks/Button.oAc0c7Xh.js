import{n as P,p as A,S as V,i as W,x as Z,H as x,y as p,a as E,D as $,d as k,E as R,g as M,e as H,s as q,c as j,f as y,l as v,C as h,h as L,r as X,u as J,v as K,w as O,t as e0,b as t0,j as n0}from"./index.Bdrwy7i8.js";import{r as i0,s as U,j as l0,n as G}from"./scheduler.DQQAE9or.js";import{g as a0}from"./index.H_JitgBR.js";import{BsFacebook as s0,BsGithub as f0,BsInstagram as c0,BsMastodon as o0,BsTwitterX as r0,BsWindows as h0,BsApple as u0,BsQuestionCircleFill as g0,BsDownload as m0,BsRssFill as w0}from"./index.D7Jwt5yH.js";function A0(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function E0(t,e){P(t,1,1,()=>{e.delete(t.key)})}function M0(t,e,i,f,n,a,l,c,s,o,m,g){let w=t.length,_=a.length,d=w;const S={};for(;d--;)S[t[d].key]=d;const z=[],C=new Map,N=new Map,r=[];for(d=_;d--;){const u=g(n,a,d),b=i(u);let B=l.get(b);B?r.push(()=>B.p(u,e)):(B=o(b,u),B.c()),C.set(b,z[d]=B),b in S&&N.set(b,Math.abs(d-S[b]))}const T=new Set,D=new Set;function F(u){A(u,1),u.m(c,m),l.set(u.key,u),m=u.first,_--}for(;w&&_;){const u=z[_-1],b=t[w-1],B=u.key,I=b.key;u===b?(m=u.first,w--,_--):C.has(I)?!l.has(B)||T.has(B)?F(u):D.has(I)?w--:N.get(B)>N.get(I)?(D.add(B),F(u)):(T.add(I),w--):(s(b,l),w--)}for(;w--;){const u=t[w];C.has(u.key)||s(u,l)}for(;_;)F(z[_-1]);return i0(r),z}function _0(t){let e,i,f,n=[{width:t[1]},{height:t[1]},{viewBox:t[2]},{style:f=t[3]?"color: "+t[3]+";":""},{"stroke-width":"0"},{class:t[4]},t[0].a,t[6],{xmlns:"http://www.w3.org/2000/svg"}],a={};for(let l=0;l<n.length;l+=1)a=l0(a,n[l]);return{c(){e=Z("svg"),i=new x(!0),this.h()},l(l){e=p(l,"svg",{width:!0,height:!0,viewBox:!0,style:!0,"stroke-width":!0,class:!0,xmlns:!0});var c=E(e);i=$(c,!0),c.forEach(k),this.h()},h(){i.a=null,R(e,a)},m(l,c){M(l,e,c),i.m(t[5],e)},p(l,[c]){c&32&&i.p(l[5]),R(e,a=a0(n,[c&2&&{width:l[1]},c&2&&{height:l[1]},c&4&&{viewBox:l[2]},c&8&&f!==(f=l[3]?"color: "+l[3]+";":"")&&{style:f},{"stroke-width":"0"},c&16&&{class:l[4]},c&1&&l[0].a,c&64&&l[6],{xmlns:"http://www.w3.org/2000/svg"}]))},i:G,o:G,d(l){l&&k(e)}}}function d0(t,e,i){let{src:f}=e,{size:n="1em"}=e,{viewBox:a=void 0}=e,{color:l="currentColor"}=e,{title:c=void 0}=e,{className:s=""}=e,o,m={};return t.$$set=g=>{"src"in g&&i(0,f=g.src),"size"in g&&i(1,n=g.size),"viewBox"in g&&i(2,a=g.viewBox),"color"in g&&i(3,l=g.color),"title"in g&&i(7,c=g.title),"className"in g&&i(4,s=g.className)},t.$$.update=()=>{t.$$.dirty&9&&(i(6,m={}),l&&(f.a.stroke!=="none"&&i(6,m.stroke="currentColor",m),f.a.fill!=="none"&&i(6,m.fill="currentColor",m))),t.$$.dirty&129&&i(5,o=(c?`<title>${c}</title>`:"")+f.c)},[f,n,a,l,s,o,m,c]}class Y extends V{constructor(e){super(),W(this,e,d0,_0,U,{src:0,size:1,viewBox:2,color:3,title:7,className:4})}}const v0={a:{viewBox:"0 0 16 16",fill:"currentColor"},c:'<path d="M13.281 11.156a.84.84 0 0 1 .375.297c.084.125.143.276.18.453.02.104.044.2.07.29a1.772 1.772 0 0 0 .219.476c.047.073.11.153.188.242.067.073.127.167.18.281a.793.793 0 0 1 .077.328.49.49 0 0 1-.093.305.944.944 0 0 1-.235.219c-.12.083-.245.156-.375.219-.13.062-.26.127-.39.195a3.624 3.624 0 0 0-.555.328c-.156.115-.313.26-.469.438a2.815 2.815 0 0 1-.625.523 1.471 1.471 0 0 1-.383.172c-.13.036-.26.06-.39.07-.302 0-.552-.052-.75-.156-.198-.104-.37-.294-.516-.57-.042-.079-.083-.128-.125-.149a.774.774 0 0 0-.203-.055L8.67 15c-.26-.02-.525-.031-.796-.031a4.28 4.28 0 0 0-.672.054c-.229.037-.456.081-.68.133-.046.01-.093.05-.14.117a1.7 1.7 0 0 1-.196.227 1.106 1.106 0 0 1-.335.219 1.475 1.475 0 0 1-.555.101c-.172 0-.357-.018-.555-.054a1.82 1.82 0 0 1-.531-.18 3.578 3.578 0 0 0-.953-.328c-.313-.057-.643-.11-.992-.156a3.392 3.392 0 0 1-.344-.063.774.774 0 0 1-.29-.133.705.705 0 0 1-.194-.219.78.78 0 0 1-.079-.351c0-.162.021-.318.063-.469.042-.15.065-.31.07-.476 0-.115-.008-.227-.023-.336a3.53 3.53 0 0 1-.032-.352c0-.265.063-.46.188-.586.125-.125.307-.224.547-.297a.99.99 0 0 0 .297-.148 2.27 2.27 0 0 0 .234-.203 1.86 1.86 0 0 0 .203-.242c.063-.089.133-.178.211-.266a.114.114 0 0 0 .024-.07c0-.063-.003-.123-.008-.18l-.016-.188c0-.354.055-.71.164-1.07.11-.36.253-.71.43-1.055a9.08 9.08 0 0 1 .594-.992c.218-.317.435-.612.648-.883a4.35 4.35 0 0 0 .68-1.203c.15-.416.229-.87.234-1.36 0-.207-.01-.413-.031-.616a6.122 6.122 0 0 1-.031-.625c0-.417.047-.792.14-1.125.094-.334.24-.62.438-.86s.456-.419.773-.539C7.474.075 7.854.01 8.296 0c.527 0 .946.104 1.259.313.312.208.552.481.718.82.167.338.274.716.32 1.133.048.416.074.838.079 1.265v.133c0 .214.002.404.008.57a2.527 2.527 0 0 0 .226.977c.073.161.182.336.328.523.25.329.506.66.766.993.26.333.497.677.71 1.03.214.355.389.725.524 1.11.136.386.206.802.211 1.25a3.3 3.3 0 0 1-.164 1.04zm-6.554-8.14c.072 0 .132.018.18.054a.357.357 0 0 1 .109.149.85.85 0 0 1 .054.187c.01.063.016.128.016.196a.282.282 0 0 1-.024.125.27.27 0 0 1-.07.086l-.094.078a.796.796 0 0 0-.093.093.428.428 0 0 1-.149.141 2.129 2.129 0 0 0-.18.117 1.31 1.31 0 0 0-.156.133.264.264 0 0 0-.07.195c0 .047.023.086.07.117a.704.704 0 0 1 .266.305c.052.12.11.237.172.352.062.114.143.21.242.289.099.078.253.117.46.117h.048c.208-.01.406-.065.594-.164.187-.099.375-.203.562-.313a.633.633 0 0 1 .102-.046.37.37 0 0 0 .101-.055l.57-.445a.926.926 0 0 0 .024-.102 2.75 2.75 0 0 0 .016-.11.236.236 0 0 0-.04-.14.4.4 0 0 0-.093-.094.34.34 0 0 0-.133-.054.909.909 0 0 1-.14-.04 1.083 1.083 0 0 1-.352-.14 1.457 1.457 0 0 0-.344-.156c-.02-.006-.036-.021-.047-.047a.983.983 0 0 1-.031-.094.23.23 0 0 1-.008-.102.126.126 0 0 0-.008-.078c0-.062.005-.127.016-.195a.551.551 0 0 1 .07-.195.417.417 0 0 1 .125-.14.411.411 0 0 1 .203-.056c.162 0 .279.06.352.18.073.12.112.25.117.39a.397.397 0 0 1-.039.18.379.379 0 0 0-.04.172c0 .042.014.07.04.086a.26.26 0 0 0 .102.031c.12 0 .197-.028.234-.085a.533.533 0 0 0 .062-.258c0-.12-.01-.253-.03-.399a1.32 1.32 0 0 0-.126-.406.969.969 0 0 0-.242-.313.574.574 0 0 0-.383-.124c-.27 0-.466.067-.586.203-.12.135-.182.338-.187.609 0 .078.005.156.015.234.01.079.016.157.016.235 0 .026-.003.039-.008.039a.218.218 0 0 1-.047-.016 4.263 4.263 0 0 1-.093-.039.774.774 0 0 0-.118-.039.514.514 0 0 0-.203-.008 1.007 1.007 0 0 1-.125.008c-.073 0-.11-.013-.11-.039 0-.078-.004-.177-.015-.297-.01-.12-.036-.24-.078-.36a.995.995 0 0 0-.156-.296c-.063-.078-.156-.12-.281-.125a.323.323 0 0 0-.227.086.905.905 0 0 0-.164.203.64.64 0 0 0-.086.266 5.4 5.4 0 0 1-.031.25 1.459 1.459 0 0 0 .07.406c.026.083.055.156.086.219.031.062.068.093.11.093.025 0 .06-.018.101-.054.042-.037.063-.07.063-.102 0-.016-.008-.026-.024-.031a.147.147 0 0 0-.047-.008c-.036 0-.068-.018-.094-.055a.468.468 0 0 1-.062-.125 5.144 5.144 0 0 1-.047-.148.564.564 0 0 1 .055-.398c.047-.084.133-.128.258-.133zM5.023 15.18c.125 0 .248-.01.368-.032a.97.97 0 0 0 .336-.125.614.614 0 0 0 .234-.242.943.943 0 0 0 .094-.375.816.816 0 0 0-.047-.273.963.963 0 0 0-.133-.25 2.763 2.763 0 0 0-.203-.281 2.763 2.763 0 0 1-.203-.282 62.93 62.93 0 0 1-.29-.43c-.093-.14-.187-.288-.28-.445a8.124 8.124 0 0 1-.235-.406 2.646 2.646 0 0 0-.266-.398 1.203 1.203 0 0 0-.218-.211.469.469 0 0 0-.29-.094.436.436 0 0 0-.296.11 2.26 2.26 0 0 0-.258.265 3.241 3.241 0 0 1-.297.305c-.11.099-.25.177-.422.234a.744.744 0 0 0-.312.172c-.073.073-.11.185-.11.336 0 .104.008.208.024.312.015.104.026.209.031.313 0 .14-.02.273-.063.398a1.157 1.157 0 0 0-.062.367c0 .141.05.24.148.297.1.058.211.097.336.117.157.027.305.047.446.063.14.016.278.04.414.07.135.032.27.065.406.102.135.036.279.094.43.172.03.015.078.034.14.054l.211.07c.078.027.151.048.219.063a.741.741 0 0 0 .148.024zm2.86-.938c.146 0 .302-.015.469-.047a3.54 3.54 0 0 0 .976-.336 2.59 2.59 0 0 0 .406-.257.222.222 0 0 0 .032-.047.305.305 0 0 0 .023-.063v-.008c.031-.114.057-.24.078-.375a8.63 8.63 0 0 0 .055-.414 8.98 8.98 0 0 1 .055-.414c.02-.135.039-.268.054-.398.021-.14.047-.276.078-.406.032-.13.073-.253.125-.368a1.03 1.03 0 0 1 .211-.304 1.54 1.54 0 0 1 .344-.25v-.016l-.008-.023a.29.29 0 0 1 .047-.149 1.4 1.4 0 0 1 .117-.164.582.582 0 0 1 .149-.133.946.946 0 0 1 .164-.078 9.837 9.837 0 0 0-.102-.375 4.938 4.938 0 0 1-.094-.375 7.126 7.126 0 0 0-.093-.476 2.954 2.954 0 0 0-.11-.36 1.317 1.317 0 0 0-.18-.32c-.077-.104-.174-.23-.288-.375a1.189 1.189 0 0 1-.118-.156.555.555 0 0 1-.046-.196 2.206 2.206 0 0 0-.047-.203 9.48 9.48 0 0 0-.242-.75 2.91 2.91 0 0 0-.172-.383 3.87 3.87 0 0 0-.172-.289c-.052-.078-.107-.117-.164-.117-.125 0-.274.05-.446.149-.171.099-.354.208-.546.328-.193.12-.38.232-.563.336-.182.104-.346.153-.492.148a.7.7 0 0 1-.43-.148 2.236 2.236 0 0 1-.36-.344c-.109-.13-.2-.242-.273-.336-.073-.094-.127-.146-.164-.156-.041 0-.065.031-.07.093a2.56 2.56 0 0 0-.008.211v.133c0 .032-.005.052-.016.063-.057.12-.12.237-.187.351-.068.115-.135.232-.203.352a1.611 1.611 0 0 0-.219.758c0 .078.005.156.016.234.01.078.036.154.078.227l-.016.03a1.31 1.31 0 0 1-.133.157 1.072 1.072 0 0 0-.132.164 2.796 2.796 0 0 0-.407.93c-.078.333-.12.672-.125 1.015 0 .089.006.178.016.266.01.089.016.177.016.266a.526.526 0 0 1-.008.086.525.525 0 0 0-.008.086.75.75 0 0 1 .313.109c.12.068.25.154.39.258.14.104.274.224.399.36.125.135.244.267.359.398.115.13.198.26.25.39.052.13.086.237.101.32a.444.444 0 0 1-.125.329.955.955 0 0 1-.312.203c.089.156.198.289.328.398.13.11.271.198.422.266.151.068.315.117.492.148.177.032.35.047.516.047zm3.133 1.11c.109 0 .216-.016.32-.047a1.65 1.65 0 0 0 .445-.203c.136-.089.26-.198.375-.329a3.07 3.07 0 0 1 .977-.75l.258-.117a2.18 2.18 0 0 0 .257-.133.962.962 0 0 0 .165-.132.256.256 0 0 0 .078-.188.295.295 0 0 0-.024-.117.58.58 0 0 0-.07-.117 5.136 5.136 0 0 1-.203-.305 1.978 1.978 0 0 1-.149-.297l-.125-.312a2.558 2.558 0 0 1-.11-.352.28.28 0 0 0-.054-.101.53.53 0 0 0-.46-.235.533.533 0 0 0-.266.07l-.266.149a7.335 7.335 0 0 1-.281.148.656.656 0 0 1-.297.07.411.411 0 0 1-.258-.077.636.636 0 0 1-.172-.211 2.218 2.218 0 0 1-.117-.258l-.094-.258a1.26 1.26 0 0 1-.14.188.666.666 0 0 0-.125.203c-.068.156-.11.33-.125.523-.026.302-.06.596-.102.883a4.7 4.7 0 0 1-.21.86 1.914 1.914 0 0 0-.063.273 2.88 2.88 0 0 0-.032.289c0 .255.079.466.235.633.156.166.367.25.633.25z"></path>'};function b0(t){let e,i,f;return i=new Y({props:{src:t[10],size:t[2]}}),{c(){e=H("span"),X(i.$$.fragment),this.h()},l(n){e=j(n,"SPAN",{class:!0});var a=E(e);J(i.$$.fragment,a),a.forEach(k),this.h()},h(){v(e,"class","svelte-856y4r"),h(e,"icon-left",t[8]==="left")},m(n,a){M(n,e,a),K(i,e,null),f=!0},p(n,a){const l={};a&4&&(l.size=n[2]),i.$set(l),(!f||a&256)&&h(e,"icon-left",n[8]==="left")},i(n){f||(A(i.$$.fragment,n),f=!0)},o(n){P(i.$$.fragment,n),f=!1},d(n){n&&k(e),O(i)}}}function Q(t){let e,i;return{c(){e=H("span"),i=e0(t[5])},l(f){e=j(f,"SPAN",{});var n=E(e);i=t0(n,t[5]),n.forEach(k)},m(f,n){M(f,e,n),L(e,i)},p(f,n){n&32&&n0(i,f[5])},d(f){f&&k(e)}}}function B0(t){let e,i,f;return i=new Y({props:{src:t[10],size:t[2]}}),{c(){e=H("span"),X(i.$$.fragment),this.h()},l(n){e=j(n,"SPAN",{class:!0});var a=E(e);J(i.$$.fragment,a),a.forEach(k),this.h()},h(){v(e,"class","svelte-856y4r"),h(e,"icon-right",t[8]==="right")},m(n,a){M(n,e,a),K(i,e,null),f=!0},p(n,a){const l={};a&4&&(l.size=n[2]),i.$set(l),(!f||a&256)&&h(e,"icon-right",n[8]==="right")},i(n){f||(A(i.$$.fragment,n),f=!0)},o(n){P(i.$$.fragment,n),f=!1},d(n){n&&k(e),O(i)}}}function k0(t){let e,i,f,n,a=t[11]&&b0(t),l=t[5]&&Q(t),c=t[12]&&B0(t);return{c(){e=H("a"),a&&a.c(),i=q(),l&&l.c(),f=q(),c&&c.c(),this.h()},l(s){e=j(s,"A",{rel:!0,href:!0,title:!0,target:!0,class:!0});var o=E(e);a&&a.l(o),i=y(o),l&&l.l(o),f=y(o),c&&c.l(o),o.forEach(k),this.h()},h(){v(e,"rel",t[4]),v(e,"href",t[3]),v(e,"title",t[6]),v(e,"target",t[7]),v(e,"class","flex items-center justify-between gap-3 text-sm lg:text-xs svelte-856y4r"),h(e,"button",t[0]),h(e,"w-full",t[9]),h(e,"icon-link",!t[0]),h(e,"hover:text-red-berry-950",!t[0]),h(e,"dark:hover:text-neutral-100",!t[0]),h(e,"highlight",t[0]&&t[1]),h(e,"py-4",t[0]),h(e,"px-5",t[0]),h(e,"rounded",t[0]),h(e,"regular",!t[1])},m(s,o){M(s,e,o),a&&a.m(e,null),L(e,i),l&&l.m(e,null),L(e,f),c&&c.m(e,null),n=!0},p(s,[o]){s[11]&&a.p(s,o),s[5]?l?l.p(s,o):(l=Q(s),l.c(),l.m(e,f)):l&&(l.d(1),l=null),s[12]&&c.p(s,o),(!n||o&16)&&v(e,"rel",s[4]),(!n||o&8)&&v(e,"href",s[3]),(!n||o&64)&&v(e,"title",s[6]),(!n||o&128)&&v(e,"target",s[7]),(!n||o&1)&&h(e,"button",s[0]),(!n||o&512)&&h(e,"w-full",s[9]),(!n||o&1)&&h(e,"icon-link",!s[0]),(!n||o&1)&&h(e,"hover:text-red-berry-950",!s[0]),(!n||o&1)&&h(e,"dark:hover:text-neutral-100",!s[0]),(!n||o&3)&&h(e,"highlight",s[0]&&s[1]),(!n||o&1)&&h(e,"py-4",s[0]),(!n||o&1)&&h(e,"px-5",s[0]),(!n||o&1)&&h(e,"rounded",s[0]),(!n||o&2)&&h(e,"regular",!s[1])},i(s){n||(A(a),A(c),n=!0)},o(s){P(a),P(c),n=!1},d(s){s&&k(e),a&&a.d(),l&&l.d(),c&&c.d()}}}function z0(t,e,i){let f={facebook:s0,github:f0,instagram:c0,mastodon:o0,twitter:r0,windows:h0,linux:v0,mac:u0,unknown:g0,download:m0,rss:w0},{button:n=!0}=e,{highlight:a=!1}=e,{icon:l=""}=e,{iconSize:c=20}=e,{href:s=""}=e,{rel:o=""}=e,{text:m=""}=e,{title:g=m}=e,{target:w="_parent"}=e,{iconPosition:_="right"}=e,{fullwidth:d=!1}=e,S=f[l],z=l!==""&&S!==void 0,C=!!(z&&_==="left"),N=!!(z&&_==="right");return t.$$set=r=>{"button"in r&&i(0,n=r.button),"highlight"in r&&i(1,a=r.highlight),"icon"in r&&i(13,l=r.icon),"iconSize"in r&&i(2,c=r.iconSize),"href"in r&&i(3,s=r.href),"rel"in r&&i(4,o=r.rel),"text"in r&&i(5,m=r.text),"title"in r&&i(6,g=r.title),"target"in r&&i(7,w=r.target),"iconPosition"in r&&i(8,_=r.iconPosition),"fullwidth"in r&&i(9,d=r.fullwidth)},[n,a,c,s,o,m,g,w,_,d,S,C,N,l]}class I0 extends V{constructor(e){super(),W(this,e,z0,k0,U,{button:0,highlight:1,icon:13,iconSize:2,href:3,rel:4,text:5,title:6,target:7,iconPosition:8,fullwidth:9})}}export{I0 as B,Y as I,A0 as e,E0 as o,M0 as u};
