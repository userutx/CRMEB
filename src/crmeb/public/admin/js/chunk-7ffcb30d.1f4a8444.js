(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ffcb30d"],{"0f7c":function(t,e,r){},3793:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"i-layout-page-header"},[r("div",{staticClass:"i-layout-page-header"},[r("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),r("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[r("div",{staticClass:"backs",on:{click:t.goBack}},[r("Icon",{staticClass:"mr5",attrs:{type:"ios-folder-outline"}}),r("span",[t._v("返回上级")])],1),r("Table",{ref:"selection",staticClass:"mt20",attrs:{columns:t.columns4,data:t.tabList,loading:t.loading,"no-data-text":"暂无数据","highlight-row":"","no-filtered-data-text":"暂无筛选结果"},on:{"on-current-change":t.currentChange},scopedSlots:t._u([{key:"filename",fn:function(e){var n=e.row;return[n.isDir?r("Icon",{staticClass:"mr5",attrs:{type:"ios-folder-outline"}}):r("Icon",{staticClass:"mr5",attrs:{type:"ios-document-outline"}}),r("span",[t._v(t._s(n.filename))])]}},{key:"isWritable",fn:function(e){var n=e.row;return[r("span",{domProps:{textContent:t._s(n.isWritable?"是":"否")}})]}},{key:"action",fn:function(e){var n=e.row;e.index;return[n.isDir?r("a",{on:{click:function(e){return t.open(n)}}},[t._v("打开")]):r("a",{on:{click:function(e){return t.edit(n)}}},[t._v("编辑")])]}}])})],1),r("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:t.title,"mask-closable":!1,width:"900"},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[r("Button",{staticClass:"mr5 mb15",attrs:{type:"primary",id:"savefile"},on:{click:t.savefile}},[t._v("保存")]),r("Button",{staticClass:"mr5 mb15",attrs:{id:"undo"},on:{click:t.undofile}},[t._v("撤销")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],ref:"mycode",staticClass:"codesql public_text",domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),t.spinShow?r("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)},a=[],i=(r("96cf"),r("1da1")),o=r("8593"),c=r("56b3"),u=r.n(c);r("0f7c");r("f9d4");var s={name:"opendir",data:function(){return{code:"",modals:!1,spinShow:!1,loading:!1,tabList:[],columns4:[{title:"文件/文件夹名",slot:"filename",minWidth:150,back:"返回上级"},{title:"文件/文件夹路径",key:"real_path",minWidth:150},{title:"文件/文件夹大小",key:"size",minWidth:100},{title:"是否可写",slot:"isWritable",minWidth:100},{title:"更新时间",key:"mtime",minWidth:150},{title:"Action",slot:"action",minWidth:150}],formItem:{dir:"",superior:0,filedir:""},rows:{},pathname:"",title:""}},mounted:function(){this.editor=u.a.fromTextArea(this.$refs.mycode,{value:"http://www.crmeb.com",mode:"text/javascript",theme:"ambiance",indentUnit:4,smartIndent:!0,tabSize:4,readOnly:!1,showCursorWhenSelecting:!0,lineNumbers:!0})},created:function(){this.getList()},methods:{currentChange:function(t){t.isDir?this.open(t):this.edit(t),console.log(t)},getList:function(){var t=this;this.loading=!0,Object(o["z"])(this.formItem).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=r.data,t.tabList=n.list,t.dir=n.dir,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},goBack:function(){this.formItem={dir:this.dir,superior:1,filedir:""},this.getList()},open:function(t){this.rows=t,this.formItem={dir:t.path,superior:0,filedir:t.filename},this.getList()},edit:function(t){var e=this;this.modals=!0,this.spinShow=!0,this.pathname=t.pathname,this.title=t.filename,Object(o["A"])(t.pathname).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=r.data,e.code=n.content,e.editor.setValue(e.code),e.spinShow=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.spinShow=!1,e.$Message.error(t.msg)}))},savefile:function(){var t=this,e={comment:this.editor.getValue(),filepath:this.pathname};Object(o["C"])(e).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$Message.success(r.msg),t.modals=!1;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},undofile:function(){this.editor.undo()},redofile:function(){this.editor.redo()},refreshfile:function(){this.editor.refresh()}}},l=s,f=(r("7d0c"),r("2877")),d=Object(f["a"])(l,n,a,!1,null,"a3a7529c",null);e["default"]=d.exports},"793a":function(t,e,r){},"7d0c":function(t,e,r){"use strict";r("793a")},8593:function(t,e,r){"use strict";r.d(e,"h",(function(){return a})),r.d(e,"f",(function(){return i})),r.d(e,"g",(function(){return o})),r.d(e,"E",(function(){return c})),r.d(e,"l",(function(){return u})),r.d(e,"j",(function(){return s})),r.d(e,"k",(function(){return l})),r.d(e,"i",(function(){return f})),r.d(e,"y",(function(){return d})),r.d(e,"q",(function(){return m})),r.d(e,"x",(function(){return p})),r.d(e,"v",(function(){return h})),r.d(e,"s",(function(){return v})),r.d(e,"t",(function(){return k})),r.d(e,"u",(function(){return b})),r.d(e,"w",(function(){return y})),r.d(e,"D",(function(){return g})),r.d(e,"F",(function(){return w})),r.d(e,"m",(function(){return x})),r.d(e,"b",(function(){return j})),r.d(e,"d",(function(){return O})),r.d(e,"a",(function(){return _})),r.d(e,"c",(function(){return M})),r.d(e,"e",(function(){return E})),r.d(e,"p",(function(){return T})),r.d(e,"n",(function(){return C})),r.d(e,"o",(function(){return A})),r.d(e,"z",(function(){return I})),r.d(e,"A",(function(){return z})),r.d(e,"C",(function(){return V})),r.d(e,"B",(function(){return $})),r.d(e,"r",(function(){return S}));var n=r("6b6c");function a(t){return Object(n["a"])({url:"setting/config_class",method:"get",params:t})}function i(t){return Object(n["a"])({url:"setting/config_class/create",method:"get"})}function o(t){return Object(n["a"])({url:"setting/config_class/".concat(t,"/edit"),method:"get"})}function c(t){return Object(n["a"])({url:"setting/config_class/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function u(t){return Object(n["a"])({url:"setting/config",method:"get",params:t})}function s(t){return Object(n["a"])({url:"setting/config/create",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/setting/config/".concat(t,"/edit"),method:"get"})}function f(t,e){return Object(n["a"])({url:"setting/config/set_status/".concat(t,"/").concat(e),method:"PUT"})}function d(t){return Object(n["a"])({url:"setting/group",method:"get",params:t})}function m(t){return Object(n["a"])({url:t.url,method:t.method,data:t.datas})}function p(t){return Object(n["a"])({url:"setting/group/".concat(t),method:"get"})}function h(t,e){return Object(n["a"])({url:e,method:"get",params:t})}function v(t,e){return Object(n["a"])({url:e,method:"get",params:t})}function k(t,e){return Object(n["a"])({url:e,method:"get",params:t})}function b(t,e){return Object(n["a"])({url:e,method:"get",params:t})}function y(t){return Object(n["a"])({url:t,method:"PUT"})}function g(t){return Object(n["a"])({url:"system/log/search_admin",method:"GET"})}function w(t){return Object(n["a"])({url:"system/log",method:"GET",params:t})}function x(){return Object(n["a"])({url:"system/file",method:"GET"})}function j(){return Object(n["a"])({url:"system/backup",method:"GET"})}function O(t){return Object(n["a"])({url:"system/backup/read",method:"GET",params:t})}function _(t){return Object(n["a"])({url:"system/backup/backup",method:"put",data:t})}function M(t){return Object(n["a"])({url:"system/backup/optimize",method:"put",data:t})}function E(t){return Object(n["a"])({url:"system/backup/repair",method:"put",data:t})}function T(t){return Object(n["a"])({url:"system/backup/file_list",method:"GET"})}function C(t){return Object(n["a"])({url:"backup/download",method:"get",responseType:"blob",xsrfHeaderName:"Authori-zation",params:t})}function A(t){return Object(n["a"])({url:"system/backup/import",method:"POST",data:t})}function I(t){return Object(n["a"])({url:"system/file/opendir",method:"GET",params:t})}function z(t){return Object(n["a"])({url:"system/file/openfile?filepath=".concat(t),method:"GET"})}function V(t){return Object(n["a"])({url:"system/file/savefile",method:"post",data:t})}function $(t){return Object(n["a"])({url:"system/replace_site_url",method:"post",data:t})}function S(){return Object(n["a"])({url:"setting/group_all",method:"get"})}},f9d4:function(t,e,r){(function(t){t(r("56b3"))})((function(t){"use strict";t.defineMode("javascript",(function(e,r){var n,a,i=e.indentUnit,o=r.statementIndent,c=r.jsonld,u=r.json||c,s=r.typescript,l=r.wordCharacters||/[\w$\xa1-\uffff]/,f=function(){function t(t){return{type:t,style:"keyword"}}var e=t("keyword a"),r=t("keyword b"),n=t("keyword c"),a=t("keyword d"),i=t("operator"),o={type:"atom",style:"atom"};return{if:t("if"),while:e,with:e,else:r,do:r,try:r,finally:r,return:a,break:a,continue:a,new:t("new"),delete:n,void:n,throw:n,debugger:t("debugger"),var:t("var"),const:t("var"),let:t("var"),function:t("function"),catch:t("catch"),for:t("for"),switch:t("switch"),case:t("case"),default:t("default"),in:i,typeof:i,instanceof:i,true:o,false:o,null:o,undefined:o,NaN:o,Infinity:o,this:t("this"),class:t("class"),super:t("atom"),yield:n,export:t("export"),import:t("import"),extends:n,await:n}}(),d=/[+\-*&%=<>!?|~^@]/,m=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function p(t){var e,r=!1,n=!1;while(null!=(e=t.next())){if(!r){if("/"==e&&!n)return;"["==e?n=!0:n&&"]"==e&&(n=!1)}r=!r&&"\\"==e}}function h(t,e,r){return n=t,a=r,e}function v(t,e){var r=t.next();if('"'==r||"'"==r)return e.tokenize=k(r),e.tokenize(t,e);if("."==r&&t.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return h("number","number");if("."==r&&t.match(".."))return h("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(r))return h(r);if("="==r&&t.eat(">"))return h("=>","operator");if("0"==r&&t.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return h("number","number");if(/\d/.test(r))return t.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),h("number","number");if("/"==r)return t.eat("*")?(e.tokenize=b,b(t,e)):t.eat("/")?(t.skipToEnd(),h("comment","comment")):ee(t,e,1)?(p(t),t.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),h("regexp","string-2")):(t.eat("="),h("operator","operator",t.current()));if("`"==r)return e.tokenize=y,y(t,e);if("#"==r&&"!"==t.peek())return t.skipToEnd(),h("meta","meta");if("#"==r&&t.eatWhile(l))return h("variable","property");if("<"==r&&t.match("!--")||"-"==r&&t.match("->")&&!/\S/.test(t.string.slice(0,t.start)))return t.skipToEnd(),h("comment","comment");if(d.test(r))return">"==r&&e.lexical&&">"==e.lexical.type||(t.eat("=")?"!"!=r&&"="!=r||t.eat("="):/[<>*+\-|&?]/.test(r)&&(t.eat(r),">"==r&&t.eat(r))),"?"==r&&t.eat(".")?h("."):h("operator","operator",t.current());if(l.test(r)){t.eatWhile(l);var n=t.current();if("."!=e.lastType){if(f.propertyIsEnumerable(n)){var a=f[n];return h(a.type,a.style,n)}if("async"==n&&t.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return h("async","keyword",n)}return h("variable","variable",n)}}function k(t){return function(e,r){var n,a=!1;if(c&&"@"==e.peek()&&e.match(m))return r.tokenize=v,h("jsonld-keyword","meta");while(null!=(n=e.next())){if(n==t&&!a)break;a=!a&&"\\"==n}return a||(r.tokenize=v),h("string","string")}}function b(t,e){var r,n=!1;while(r=t.next()){if("/"==r&&n){e.tokenize=v;break}n="*"==r}return h("comment","comment")}function y(t,e){var r,n=!1;while(null!=(r=t.next())){if(!n&&("`"==r||"$"==r&&t.eat("{"))){e.tokenize=v;break}n=!n&&"\\"==r}return h("quasi","string-2",t.current())}var g="([{}])";function w(t,e){e.fatArrowAt&&(e.fatArrowAt=null);var r=t.string.indexOf("=>",t.start);if(!(r<0)){if(s){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(t.string.slice(t.start,r));n&&(r=n.index)}for(var a=0,i=!1,o=r-1;o>=0;--o){var c=t.string.charAt(o),u=g.indexOf(c);if(u>=0&&u<3){if(!a){++o;break}if(0==--a){"("==c&&(i=!0);break}}else if(u>=3&&u<6)++a;else if(l.test(c))i=!0;else if(/["'\/`]/.test(c))for(;;--o){if(0==o)return;var f=t.string.charAt(o-1);if(f==c&&"\\"!=t.string.charAt(o-2)){o--;break}}else if(i&&!a){++o;break}}i&&!a&&(e.fatArrowAt=o)}}var x={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0};function j(t,e,r,n,a,i){this.indented=t,this.column=e,this.type=r,this.prev=a,this.info=i,null!=n&&(this.align=n)}function O(t,e){for(var r=t.localVars;r;r=r.next)if(r.name==e)return!0;for(var n=t.context;n;n=n.prev)for(r=n.vars;r;r=r.next)if(r.name==e)return!0}function _(t,e,r,n,a){var i=t.cc;M.state=t,M.stream=a,M.marked=null,M.cc=i,M.style=e,t.lexical.hasOwnProperty("align")||(t.lexical.align=!0);while(1){var o=i.length?i.pop():u?N:R;if(o(r,n)){while(i.length&&i[i.length-1].lex)i.pop()();return M.marked?M.marked:"variable"==r&&O(t,n)?"variable-2":e}}}var M={state:null,column:null,marked:null,cc:null};function E(){for(var t=arguments.length-1;t>=0;t--)M.cc.push(arguments[t])}function T(){return E.apply(null,arguments),!0}function C(t,e){for(var r=e;r;r=r.next)if(r.name==t)return!0;return!1}function A(t){var e=M.state;if(M.marked="def",e.context)if("var"==e.lexical.info&&e.context&&e.context.block){var n=I(t,e.context);if(null!=n)return void(e.context=n)}else if(!C(t,e.localVars))return void(e.localVars=new $(t,e.localVars));r.globalVars&&!C(t,e.globalVars)&&(e.globalVars=new $(t,e.globalVars))}function I(t,e){if(e){if(e.block){var r=I(t,e.prev);return r?r==e.prev?e:new V(r,e.vars,!0):null}return C(t,e.vars)?e:new V(e.prev,new $(t,e.vars),!1)}return null}function z(t){return"public"==t||"private"==t||"protected"==t||"abstract"==t||"readonly"==t}function V(t,e,r){this.prev=t,this.vars=e,this.block=r}function $(t,e){this.name=t,this.next=e}var S=new $("this",new $("arguments",null));function W(){M.state.context=new V(M.state.context,M.state.localVars,!1),M.state.localVars=S}function P(){M.state.context=new V(M.state.context,M.state.localVars,!0),M.state.localVars=null}function G(){M.state.localVars=M.state.context.vars,M.state.context=M.state.context.prev}function q(t,e){var r=function(){var r=M.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var a=r.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented;r.lexical=new j(n,M.stream.column(),t,null,r.lexical,e)};return r.lex=!0,r}function L(){var t=M.state;t.lexical.prev&&(")"==t.lexical.type&&(t.indented=t.lexical.indented),t.lexical=t.lexical.prev)}function B(t){function e(r){return r==t?T():";"==t||"}"==r||")"==r||"]"==r?E():T(e)}return e}function R(t,e){return"var"==t?T(q("vardef",e),_t,B(";"),L):"keyword a"==t?T(q("form"),F,R,L):"keyword b"==t?T(q("form"),R,L):"keyword d"==t?M.stream.match(/^\s*$/,!1)?T():T(q("stat"),J,B(";"),L):"debugger"==t?T(B(";")):"{"==t?T(q("}"),P,ft,L,G):";"==t?T():"if"==t?("else"==M.state.lexical.info&&M.state.cc[M.state.cc.length-1]==L&&M.state.cc.pop()(),T(q("form"),F,R,L,It)):"function"==t?T(St):"for"==t?T(q("form"),zt,R,L):"class"==t||s&&"interface"==e?(M.marked="keyword",T(q("form","class"==t?t:e),Lt,L)):"variable"==t?s&&"declare"==e?(M.marked="keyword",T(R)):s&&("module"==e||"enum"==e||"type"==e)&&M.stream.match(/^\s*\w/,!1)?(M.marked="keyword","enum"==e?T(Yt):"type"==e?T(Pt,B("operator"),vt,B(";")):T(q("form"),Mt,B("{"),q("}"),ft,L,L)):s&&"namespace"==e?(M.marked="keyword",T(q("form"),N,R,L)):s&&"abstract"==e?(M.marked="keyword",T(R)):T(q("stat"),at):"switch"==t?T(q("form"),F,B("{"),q("}","switch"),P,ft,L,L,G):"case"==t?T(N,B(":")):"default"==t?T(B(":")):"catch"==t?T(q("form"),W,U,R,L,G):"export"==t?T(q("stat"),Nt,L):"import"==t?T(q("stat"),Ft,L):"async"==t?T(R):"@"==e?T(N,R):E(q("stat"),N,B(";"),L)}function U(t){if("("==t)return T(Gt,B(")"))}function N(t,e){return H(t,e,!1)}function D(t,e){return H(t,e,!0)}function F(t){return"("!=t?E():T(q(")"),J,B(")"),L)}function H(t,e,r){if(M.state.fatArrowAt==M.stream.start){var n=r?tt:Z;if("("==t)return T(W,q(")"),st(Gt,")"),L,B("=>"),n,G);if("variable"==t)return E(W,Mt,B("=>"),n,G)}var a=r?Q:K;return x.hasOwnProperty(t)?T(a):"function"==t?T(St,a):"class"==t||s&&"interface"==e?(M.marked="keyword",T(q("form"),qt,L)):"keyword c"==t||"async"==t?T(r?D:N):"("==t?T(q(")"),J,B(")"),L,a):"operator"==t||"spread"==t?T(r?D:N):"["==t?T(q("]"),Xt,L,a):"{"==t?lt(ot,"}",null,a):"quasi"==t?E(X,a):"new"==t?T(et(r)):"import"==t?T(N):T()}function J(t){return t.match(/[;\}\)\],]/)?E():E(N)}function K(t,e){return","==t?T(J):Q(t,e,!1)}function Q(t,e,r){var n=0==r?K:Q,a=0==r?N:D;return"=>"==t?T(W,r?tt:Z,G):"operator"==t?/\+\+|--/.test(e)||s&&"!"==e?T(n):s&&"<"==e&&M.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?T(q(">"),st(vt,">"),L,n):"?"==e?T(N,B(":"),a):T(a):"quasi"==t?E(X,n):";"!=t?"("==t?lt(D,")","call",n):"."==t?T(it,n):"["==t?T(q("]"),J,B("]"),L,n):s&&"as"==e?(M.marked="keyword",T(vt,n)):"regexp"==t?(M.state.lastType=M.marked="operator",M.stream.backUp(M.stream.pos-M.stream.start-1),T(a)):void 0:void 0}function X(t,e){return"quasi"!=t?E():"${"!=e.slice(e.length-2)?T(X):T(N,Y)}function Y(t){if("}"==t)return M.marked="string-2",M.state.tokenize=y,T(X)}function Z(t){return w(M.stream,M.state),E("{"==t?R:N)}function tt(t){return w(M.stream,M.state),E("{"==t?R:D)}function et(t){return function(e){return"."==e?T(t?nt:rt):"variable"==e&&s?T(xt,t?Q:K):E(t?D:N)}}function rt(t,e){if("target"==e)return M.marked="keyword",T(K)}function nt(t,e){if("target"==e)return M.marked="keyword",T(Q)}function at(t){return":"==t?T(L,R):E(K,B(";"),L)}function it(t){if("variable"==t)return M.marked="property",T()}function ot(t,e){return"async"==t?(M.marked="property",T(ot)):"variable"==t||"keyword"==M.style?(M.marked="property","get"==e||"set"==e?T(ct):(s&&M.state.fatArrowAt==M.stream.start&&(r=M.stream.match(/^\s*:\s*/,!1))&&(M.state.fatArrowAt=M.stream.pos+r[0].length),T(ut))):"number"==t||"string"==t?(M.marked=c?"property":M.style+" property",T(ut)):"jsonld-keyword"==t?T(ut):s&&z(e)?(M.marked="keyword",T(ot)):"["==t?T(N,dt,B("]"),ut):"spread"==t?T(D,ut):"*"==e?(M.marked="keyword",T(ot)):":"==t?E(ut):void 0;var r}function ct(t){return"variable"!=t?E(ut):(M.marked="property",T(St))}function ut(t){return":"==t?T(D):"("==t?E(St):void 0}function st(t,e,r){function n(a,i){if(r?r.indexOf(a)>-1:","==a){var o=M.state.lexical;return"call"==o.info&&(o.pos=(o.pos||0)+1),T((function(r,n){return r==e||n==e?E():E(t)}),n)}return a==e||i==e?T():r&&r.indexOf(";")>-1?E(t):T(B(e))}return function(r,a){return r==e||a==e?T():E(t,n)}}function lt(t,e,r){for(var n=3;n<arguments.length;n++)M.cc.push(arguments[n]);return T(q(e,r),st(t,e),L)}function ft(t){return"}"==t?T():E(R,ft)}function dt(t,e){if(s){if(":"==t)return T(vt);if("?"==e)return T(dt)}}function mt(t,e){if(s&&(":"==t||"in"==e))return T(vt)}function pt(t){if(s&&":"==t)return M.stream.match(/^\s*\w+\s+is\b/,!1)?T(N,ht,vt):T(vt)}function ht(t,e){if("is"==e)return M.marked="keyword",T()}function vt(t,e){return"keyof"==e||"typeof"==e||"infer"==e?(M.marked="keyword",T("typeof"==e?D:vt)):"variable"==t||"void"==e?(M.marked="type",T(wt)):"|"==e||"&"==e?T(vt):"string"==t||"number"==t||"atom"==t?T(wt):"["==t?T(q("]"),st(vt,"]",","),L,wt):"{"==t?T(q("}"),bt,L,wt):"("==t?T(st(gt,")"),kt,wt):"<"==t?T(st(vt,">"),vt):void 0}function kt(t){if("=>"==t)return T(vt)}function bt(t){return"}"==t?T():","==t||";"==t?T(bt):E(yt,bt)}function yt(t,e){return"variable"==t||"keyword"==M.style?(M.marked="property",T(yt)):"?"==e||"number"==t||"string"==t?T(yt):":"==t?T(vt):"["==t?T(B("variable"),mt,B("]"),yt):"("==t?E(Wt,yt):t.match(/[;\}\)\],]/)?void 0:T()}function gt(t,e){return"variable"==t&&M.stream.match(/^\s*[?:]/,!1)||"?"==e?T(gt):":"==t?T(vt):"spread"==t?T(gt):E(vt)}function wt(t,e){return"<"==e?T(q(">"),st(vt,">"),L,wt):"|"==e||"."==t||"&"==e?T(vt):"["==t?T(vt,B("]"),wt):"extends"==e||"implements"==e?(M.marked="keyword",T(vt)):"?"==e?T(vt,B(":"),vt):void 0}function xt(t,e){if("<"==e)return T(q(">"),st(vt,">"),L,wt)}function jt(){return E(vt,Ot)}function Ot(t,e){if("="==e)return T(vt)}function _t(t,e){return"enum"==e?(M.marked="keyword",T(Yt)):E(Mt,dt,Ct,At)}function Mt(t,e){return s&&z(e)?(M.marked="keyword",T(Mt)):"variable"==t?(A(e),T()):"spread"==t?T(Mt):"["==t?lt(Tt,"]"):"{"==t?lt(Et,"}"):void 0}function Et(t,e){return"variable"!=t||M.stream.match(/^\s*:/,!1)?("variable"==t&&(M.marked="property"),"spread"==t?T(Mt):"}"==t?E():"["==t?T(N,B("]"),B(":"),Et):T(B(":"),Mt,Ct)):(A(e),T(Ct))}function Tt(){return E(Mt,Ct)}function Ct(t,e){if("="==e)return T(D)}function At(t){if(","==t)return T(_t)}function It(t,e){if("keyword b"==t&&"else"==e)return T(q("form","else"),R,L)}function zt(t,e){return"await"==e?T(zt):"("==t?T(q(")"),Vt,L):void 0}function Vt(t){return"var"==t?T(_t,$t):"variable"==t?T($t):E($t)}function $t(t,e){return")"==t?T():";"==t?T($t):"in"==e||"of"==e?(M.marked="keyword",T(N,$t)):E(N,$t)}function St(t,e){return"*"==e?(M.marked="keyword",T(St)):"variable"==t?(A(e),T(St)):"("==t?T(W,q(")"),st(Gt,")"),L,pt,R,G):s&&"<"==e?T(q(">"),st(jt,">"),L,St):void 0}function Wt(t,e){return"*"==e?(M.marked="keyword",T(Wt)):"variable"==t?(A(e),T(Wt)):"("==t?T(W,q(")"),st(Gt,")"),L,pt,G):s&&"<"==e?T(q(">"),st(jt,">"),L,Wt):void 0}function Pt(t,e){return"keyword"==t||"variable"==t?(M.marked="type",T(Pt)):"<"==e?T(q(">"),st(jt,">"),L):void 0}function Gt(t,e){return"@"==e&&T(N,Gt),"spread"==t?T(Gt):s&&z(e)?(M.marked="keyword",T(Gt)):s&&"this"==t?T(dt,Ct):E(Mt,dt,Ct)}function qt(t,e){return"variable"==t?Lt(t,e):Bt(t,e)}function Lt(t,e){if("variable"==t)return A(e),T(Bt)}function Bt(t,e){return"<"==e?T(q(">"),st(jt,">"),L,Bt):"extends"==e||"implements"==e||s&&","==t?("implements"==e&&(M.marked="keyword"),T(s?vt:N,Bt)):"{"==t?T(q("}"),Rt,L):void 0}function Rt(t,e){return"async"==t||"variable"==t&&("static"==e||"get"==e||"set"==e||s&&z(e))&&M.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(M.marked="keyword",T(Rt)):"variable"==t||"keyword"==M.style?(M.marked="property",T(Ut,Rt)):"number"==t||"string"==t?T(Ut,Rt):"["==t?T(N,dt,B("]"),Ut,Rt):"*"==e?(M.marked="keyword",T(Rt)):s&&"("==t?E(Wt,Rt):";"==t||","==t?T(Rt):"}"==t?T():"@"==e?T(N,Rt):void 0}function Ut(t,e){if("?"==e)return T(Ut);if(":"==t)return T(vt,Ct);if("="==e)return T(D);var r=M.state.lexical.prev,n=r&&"interface"==r.info;return E(n?Wt:St)}function Nt(t,e){return"*"==e?(M.marked="keyword",T(Qt,B(";"))):"default"==e?(M.marked="keyword",T(N,B(";"))):"{"==t?T(st(Dt,"}"),Qt,B(";")):E(R)}function Dt(t,e){return"as"==e?(M.marked="keyword",T(B("variable"))):"variable"==t?E(D,Dt):void 0}function Ft(t){return"string"==t?T():"("==t?E(N):E(Ht,Jt,Qt)}function Ht(t,e){return"{"==t?lt(Ht,"}"):("variable"==t&&A(e),"*"==e&&(M.marked="keyword"),T(Kt))}function Jt(t){if(","==t)return T(Ht,Jt)}function Kt(t,e){if("as"==e)return M.marked="keyword",T(Ht)}function Qt(t,e){if("from"==e)return M.marked="keyword",T(N)}function Xt(t){return"]"==t?T():E(st(D,"]"))}function Yt(){return E(q("form"),Mt,B("{"),q("}"),st(Zt,"}"),L,L)}function Zt(){return E(Mt,Ct)}function te(t,e){return"operator"==t.lastType||","==t.lastType||d.test(e.charAt(0))||/[,.]/.test(e.charAt(0))}function ee(t,e,r){return e.tokenize==v&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(e.lastType)||"quasi"==e.lastType&&/\{\s*$/.test(t.string.slice(0,t.pos-(r||0)))}return G.lex=!0,L.lex=!0,{startState:function(t){var e={tokenize:v,lastType:"sof",cc:[],lexical:new j((t||0)-i,0,"block",!1),localVars:r.localVars,context:r.localVars&&new V(null,null,!1),indented:t||0};return r.globalVars&&"object"==typeof r.globalVars&&(e.globalVars=r.globalVars),e},token:function(t,e){if(t.sol()&&(e.lexical.hasOwnProperty("align")||(e.lexical.align=!1),e.indented=t.indentation(),w(t,e)),e.tokenize!=b&&t.eatSpace())return null;var r=e.tokenize(t,e);return"comment"==n?r:(e.lastType="operator"!=n||"++"!=a&&"--"!=a?n:"incdec",_(e,r,n,a,t))},indent:function(e,n){if(e.tokenize==b||e.tokenize==y)return t.Pass;if(e.tokenize!=v)return 0;var a,c=n&&n.charAt(0),u=e.lexical;if(!/^\s*else\b/.test(n))for(var s=e.cc.length-1;s>=0;--s){var l=e.cc[s];if(l==L)u=u.prev;else if(l!=It)break}while(("stat"==u.type||"form"==u.type)&&("}"==c||(a=e.cc[e.cc.length-1])&&(a==K||a==Q)&&!/^[,\.=+\-*:?[\(]/.test(n)))u=u.prev;o&&")"==u.type&&"stat"==u.prev.type&&(u=u.prev);var f=u.type,d=c==f;return"vardef"==f?u.indented+("operator"==e.lastType||","==e.lastType?u.info.length+1:0):"form"==f&&"{"==c?u.indented:"form"==f?u.indented+i:"stat"==f?u.indented+(te(e,n)?o||i:0):"switch"!=u.info||d||0==r.doubleIndentSwitch?u.align?u.column+(d?0:1):u.indented+(d?0:i):u.indented+(/^(?:case|default)\b/.test(n)?i:2*i)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:u?null:"/*",blockCommentEnd:u?null:"*/",blockCommentContinue:u?null:" * ",lineComment:u?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:u?"json":"javascript",jsonldMode:c,jsonMode:u,expressionAllowed:ee,skipExpression:function(t){var e=t.cc[t.cc.length-1];e!=N&&e!=D||t.cc.pop()}}})),t.registerHelper("wordChars","javascript",/[\w$]/),t.defineMIME("text/javascript","javascript"),t.defineMIME("text/ecmascript","javascript"),t.defineMIME("application/javascript","javascript"),t.defineMIME("application/x-javascript","javascript"),t.defineMIME("application/ecmascript","javascript"),t.defineMIME("application/json",{name:"javascript",json:!0}),t.defineMIME("application/x-json",{name:"javascript",json:!0}),t.defineMIME("application/manifest+json",{name:"javascript",json:!0}),t.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),t.defineMIME("text/typescript",{name:"javascript",typescript:!0}),t.defineMIME("application/typescript",{name:"javascript",typescript:!0})}))}}]);