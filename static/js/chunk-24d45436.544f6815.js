/*!
 *  build: vue-admin-beautiful 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-10-1 17:48:11
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24d45436"],{b8855:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-editor-container"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{xs:24,sm:24,md:24,lg:12,xl:12}},[n("vab-markdown-editor",{ref:"mde",on:{"show-html":t.handleShowHtml},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),n("el-button",{on:{click:t.handleAddText}},[t._v("增加文本")]),n("el-button",{on:{click:t.handleAddImg}},[t._v("增加图片")])],1),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:12,xl:12}},[n("el-card",{attrs:{shadow:"hover"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[t._v("markdown转换html实时演示区域")])]),n("div",{domProps:{innerHTML:t._s(t.html)}})])],1)],1)],1)},d=[],l=n("cf88"),o={name:"MarkdownEditor",components:{VabMarkdownEditor:l["default"]},data:function(){return{value:"# vue-admin-beautiful",html:'<h1 id="vue-admin-beautiful">vue-admin-beautiful</h1>'}},methods:{handleAddText:function(){this.$refs.mde.add("\n### 新增加的内容")},handleAddImg:function(){this.$refs.mde.add("\n![](https://chu1204505056.gitee.io/byui-bookmarks/img/ewm.png)")},handleShowHtml:function(t){this.html=t}}},r=o,i=n("9ca4"),s=Object(i["a"])(r,a,d,!1,null,null,null);e["default"]=s.exports},cf88:function(t,e,n){"use strict";n.r(e);var a=n("05eb"),d=n.n(a),l=(n("1d57"),d.a);e["default"]=l}}]);