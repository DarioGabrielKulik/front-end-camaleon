import './polyfills.server.mjs';
import{a as W,c as H,e as J}from"./chunk-BOQTZFSY.mjs";import{$ as v,Aa as y,Ba as j,G as l,H as E,Ha as S,Ia as R,N as x,O as h,T as r,U as o,Ua as z,V as p,W as M,Wa as T,X as d,Y as m,Z as a,_ as b,aa as k,ba as D,ca as L,ea as N,fa as F,g as A,ga as B,h as V,j as O,n as u,o as $,q as U,s as f,t as g,za as P}from"./chunk-R3X2NBOX.mjs";var w=(()=>{class t{constructor(e){this.http=e}getLista(){let e=localStorage.getItem("token");e&&(this.response=JSON.parse(e));let n=`http://localhost:8080/auth/lista?id=${this.response.id}`,i=btoa(`${this.response.email}:${this.response.password}`),s=new S().set("Authorization",`Basic ${i}`),c={email:this.response.email,password:this.response.password};return this.http.post(n,c,{headers:s})}postUrl(e,n){let i=localStorage.getItem("token");i&&(this.response=JSON.parse(i));let s=`https://camaleon.onrender.com/auth/crear?nombre=${n}&larga=${e}&id=${this.response.id}`,c=btoa(`${this.response.email}:${this.response.password}`),I=new S().set("Authorization",`Basic ${c}`),Y={email:this.response.email,password:this.response.password};return this.http.post(s,Y,{headers:I})}deleteUrl(e){let n=localStorage.getItem("token");n&&(this.response=JSON.parse(n));let i=`https://camaleon.onrender.com/auth/eliminar?id=${this.response.id}&corta=${e}`,s=btoa(`${this.response.email}:${this.response.password}`),c=new S().set("Authorization",`Basic ${s}`),I={email:this.response.email,password:this.response.password};return this.http.post(i,I,{headers:c})}static{this.\u0275fac=function(n){return new(n||t)(O(R))}}static{this.\u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function ee(t,_){if(t&1&&(r(0,"span",9),a(1),o()),t&2){let e=m();l(),b(e.text)}}function te(t,_){if(t&1&&(r(0,"div",3)(1,"h3"),a(2),o()()),t&2){let e=m();l(2),v("http://localhost:8080/",e.resp.url,"")}}var G=(()=>{class t{constructor(e){this.api=e,this.url="",this.nombre="",this.validacion=!1}convertir(){this.api.postUrl(this.url,this.nombre.toLowerCase()).subscribe(e=>{this.resp=e},e=>{e.error.error==="Bad Request"&&(this.text="Url demasiada larga",this.validacion=!0,setTimeout(()=>{this.validacion=!1},2500))})}static{this.\u0275fac=function(n){return new(n||t)(E(w))}}static{this.\u0275cmp=u({type:t,selectors:[["app-acortador-de-enlace"]],decls:14,vars:4,consts:[[1,"container","mb-5"],[1,"mt-5"],["type","text","id","uno","placeholder","Nombre","autocomplete","off",1,"form-control",3,"ngModelChange","ngModel"],[1,"mt-3"],["type","text","id","dos","placeholder","Url",1,"form-control",3,"ngModelChange","ngModel"],["class","form-text text-danger ",4,"ngIf"],["class","mt-3",4,"ngIf"],[1,"col-8","mt-3"],[1,"btn","btn-outline-success","btn-block","btn-lg",3,"click"],[1,"form-text","text-danger"]],template:function(n,i){n&1&&(r(0,"div",0)(1,"div",1)(2,"p"),a(3,"Ingrese un nombre para la url"),o(),r(4,"input",2),L("ngModelChange",function(c){return D(i.nombre,c)||(i.nombre=c),c}),o()(),r(5,"div",3)(6,"p"),a(7,"Ingrese la url acortar"),o(),r(8,"input",4),L("ngModelChange",function(c){return D(i.url,c)||(i.url=c),c}),o()(),x(9,ee,2,1,"span",5)(10,te,3,1,"div",6),r(11,"div",7)(12,"button",8),d("click",function(){return i.convertir()}),a(13,"CONVERTIR"),o()()()),n&2&&(l(4),k("ngModel",i.nombre),l(4),k("ngModel",i.url),l(),h("ngIf",i.validacion),l(),h("ngIf",i.resp))},dependencies:[y,W,H,J]})}}return t})();var K=(()=>{class t{transform(e,n="sin valor"){switch(n){case"nombreMenor":return e=e.sort((i,s)=>i.nombre>s.nombre?1:-1);case"nombreMayor":return e=e.sort((i,s)=>s.nombre>i.nombre?1:-1);case"visitasMenor":return e=e.sort((i,s)=>i.visitas>s.visitas?1:-1);case"visitasMayor":return e=e.sort((i,s)=>s.visitas>i.visitas?1:-1);case"urlMenor":return e=e.sort((i,s)=>i.larga>s.larga?1:-1);case"urlMayor":return e=e.sort((i,s)=>s.larga>i.larga?1:-1);default:return e}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275pipe=U({name:"ordenar",type:t,pure:!0})}}return t})();function ne(t,_){if(t&1){let e=M();r(0,"tr",17)(1,"th",18),a(2),N(3,"titlecase"),o(),r(4,"td"),a(5),o(),r(6,"td"),a(7),o(),r(8,"td"),a(9),o(),r(10,"td",19),d("click",function(){let i=f(e).$implicit,s=m(2);return g(s.eliminar(i.corta))}),a(11,"Eliminar"),o()()}if(t&2){let e=_.$implicit;l(2),b(F(3,4,e.nombre)),l(3),v("http://localhost:8080/",e.corta,""),l(2),b(e.larga),l(2),b(e.visitas)}}function re(t,_){if(t&1){let e=M();r(0,"div",2)(1,"nav",3)(2,"div",4)(3,"span",5),a(4,"Ordenar por"),o(),r(5,"button",6),p(6,"span",7),o(),r(7,"div",8)(8,"ul",9)(9,"li",10),d("click",function(){f(e);let i=m();return g(i.orderNombre())}),a(10," Nombre "),p(11,"i",11),o(),r(12,"li",10),d("click",function(){f(e);let i=m();return g(i.ordervisitas())}),a(13," Visitas "),p(14,"i",11),o(),r(15,"li",10),d("click",function(){f(e);let i=m();return g(i.orderUrl())}),a(16," UrlLargas "),p(17,"i",11),o(),r(18,"li",12),d("click",function(){f(e);let i=m();return g(i.reset())}),a(19," Resetiar "),p(20,"i",13),o()()()()(),r(21,"table",14)(22,"thead")(23,"tr")(24,"th",15),a(25,"Nombre"),o(),r(26,"th",15),a(27,"Url Corta"),o(),r(28,"th",15),a(29,"Url Larga"),o(),r(30,"th",15),a(31,"Visitas"),o(),r(32,"th",15),a(33,"Accion"),o()()(),r(34,"tbody"),x(35,ne,12,6,"tr",16),N(36,"ordenar"),o()()()}if(t&2){let e=m();l(35),h("ngForOf",B(36,1,e.lista,e.order))}}function oe(t,_){t&1&&(r(0,"div",20)(1,"h1"),a(2,"No tienes enlaces recortados"),o()())}var Q=(()=>{class t{constructor(e){this.api=e,this.lista=[],this.order="sin valor",this.cambio=!1}ngOnInit(){this.buscar()}eliminar(e){this.api.deleteUrl(e).subscribe(n=>{this.buscar()})}buscar(){this.api.getLista().subscribe(e=>{this.lista=e})}orderNombre(){this.cambio=!this.cambio,this.cambio?this.order="nombreMenor":this.order="nombreMayor"}ordervisitas(){this.cambio=!this.cambio,this.cambio?this.order="visitasMenor":this.order="visitasMayor"}orderUrl(){this.cambio=!this.cambio,this.cambio?this.order="urlMenor":this.order="urlMayor"}reset(){this.buscar(),this.order="sin valor"}static{this.\u0275fac=function(n){return new(n||t)(E(w))}}static{this.\u0275cmp=u({type:t,selectors:[["app-lista-de-enlaces"]],decls:2,vars:2,consts:[["class","container mt-5",4,"ngIf"],["class","container mt-5 text-center",4,"ngIf"],[1,"container","mt-5"],["data-bs-theme","dark",1,"navbar","navbar-expand-lg","bg-dark"],[1,"container-fluid"],[1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarColor02","aria-controls","navbarColor02","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarColor02",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mt-1"],[1,"nav-link","me-3",3,"click"],[1,"fa-solid","fa-sort"],[1,"nav-link",3,"click"],[1,"fa-solid","fa-rotate-left"],[1,"table","table-hover","table-dark","mt-1"],["scope","col"],["class","table-secondary",4,"ngFor","ngForOf"],[1,"table-secondary"],["scope","row"],[1,"text-danger",2,"cursor","pointer",3,"click"],[1,"container","mt-5","text-center"]],template:function(n,i){n&1&&x(0,re,37,4,"div",0)(1,oe,3,0,"div",1),n&2&&(h("ngIf",i.lista.length!=0),l(),h("ngIf",i.lista.length===0))},dependencies:[P,y,j,K],styles:["li[_ngcontent-%COMP%]{cursor:pointer}"]})}}return t})();var X=(()=>{class t{ngOnInit(){this.getNombre()}getNombre(){let e=localStorage.getItem("token");if(e){let n=JSON.parse(e);this.nombre=n.nombre}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-inicio"]],decls:11,vars:1,consts:[[1,"container","mt-2"],[1,"row"],[1,"col-lg-6"],["src","./assets/portada.png","alt","",2,"width","100%"],[1,"col-lg-6","m-auto"],[1,"text-uppercase",2,"font-size","4rem"],[2,"font-size","2rem"],["type","button","routerLink","/auth/acortador-de-enlace",1,"btn","btn-outline-success"]],template:function(n,i){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),p(3,"img",3),o(),r(4,"div",4)(5,"h1",5),a(6),o(),r(7,"p",6),a(8,"Empieza a recortar enlaces ya!"),o(),r(9,"button",7),a(10,"Acortador"),o()()()()),n&2&&(l(6),v("Hola ",i.nombre,""))},dependencies:[z]})}}return t})();var ae=[{path:"inicio",component:X},{path:"acortador-de-enlace",component:G},{path:"lista-de-enlaces",component:Q}],ve=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=$({type:t})}static{this.\u0275inj=V({imports:[T.forChild(ae),T]})}}return t})();export{ve as a};