(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{74:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));n(77);var a=n(0),r=n.n(a),i=n(2),l=n(3),o=n(10),c=n.n(o),s=n(13),u=n(25);var f=n(66),d=n.n(f),m=n(73),p=n(15),x=n(34),b=n(75),g=n(38),E=n(7),y=i.a.create({row:{flexDirection:"column",marginTop:E.a.currentHeight||0},listContainer:{flex:1,flexDirection:"row",fontSize:24},formContainer:{flex:1,flexDirection:"row",fontSize:24},item:{flex:0,flexDirection:"row",backgroundColor:"#DDDDDD",padding:10,marginVertical:8,marginHorizontal:16},title:{flex:4,fontSize:24,fontFamily:"Georgia",fontWeight:"600",textAlign:"left"},index:{padding:10,fontSize:24},button:{fontSize:20}});function D(e){var t=Object(a.useState)(""),n=c()(t,2),i=n[0],o=n[1],s=Object(a.useState)(""),f=c()(s,2),d=f[0],m=f[1];return r.a.createElement(l.a,null,r.a.createElement(b.a,{visible:e.modalVisible},r.a.createElement(g.a,{style:y.index,placeholder:"\u7522\u54c1\u8aaa\u660e",value:i,onChangeText:function(e){return o(e)}}),r.a.createElement(g.a,{style:y.index,placeholder:"\u50f9\u683c",value:d,onChangeText:function(e){return m(e)}}),r.a.createElement(u.a,{onPress:function(){e.updateInAdd({desc:i,price:d}),e.setModalVisible(!1)},title:"\u78ba\u5b9a"})),r.a.createElement(u.a,{onPress:function(){e.setModalVisible(!0)},title:"\u65b0\u589e"}))}function h(){var e=Object(a.useState)(null),t=c()(e,2),n=t[0],i=t[1],o=Object(a.useState)([{desc:"Prim",price:5e3},{desc:"Dijkstra",price:1e4},{desc:"Floyd-warshall",price:32e3}]),u=c()(o,2),f=u[0],b=u[1],g=Object(a.useState)(!1),E=c()(g,2),h=E[0],C=E[1];return r.a.createElement(l.a,{style:y.row},r.a.createElement(m.a,{style:y.listContainer,data:f,renderItem:function(e){var t=e.item,a=e.index,l=a===n?"#f9c2ff":"#00ffff";return r.a.createElement(x.a,{onPress:function(){s.a.alert("\u60a8\u9ede\u9078\u4e86:"+t.desc),i(a)},style:[y.item,{backgroundColor:l}]},r.a.createElement(p.a,{style:y.title},t.desc),r.a.createElement(p.a,null,t.price),r.a.createElement(p.a,null,"/",a))},keyExtractor:function(e){return e.desc}}),r.a.createElement(D,{style:y.formContainer,updateInAdd:function(e){b((function(t){return[].concat(d()(t),[e])}))},modalVisible:h,setModalVisible:C}))}function C(){return r.a.createElement(l.a,{style:S.container},r.a.createElement(h,null))}var S=i.a.create({container:{flex:1,marginTop:50,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},76:function(e,t,n){e.exports=n(103)}},[[76,1,2]]]);
//# sourceMappingURL=app.a15e628f.chunk.js.map