import './polyfills.server.mjs';
import{c as D}from"./chunk-RTXK5UTC.mjs";import{a as V}from"./chunk-AND3IB24.mjs";import{a as P}from"./chunk-WNOLWQD6.mjs";import{a as G}from"./chunk-WZRJUWQA.mjs";import{j as h,k as M}from"./chunk-BOQTZFSY.mjs";import{a as J}from"./chunk-QBRTLSI5.mjs";import{$ as b,Aa as R,Ba as L,Ca as p,G as d,H as w,Ka as F,N as E,O as g,Pa as _,Qa as j,Ra as H,T as r,Ta as T,U as i,Ua as U,V as C,Va as O,W as S,Wa as f,X as A,Y as u,Z as n,ea as I,fa as N,h as m,n as c,o as a,s as k,t as y}from"./chunk-R3X2NBOX.mjs";var B=(t,v)=>{let o=localStorage.getItem("token");if(o){let e=JSON.parse(o);if(e.permisos&&e.rol==="USER")return!0}return!1};var Q=(t,v)=>{let o=localStorage.getItem("token");if(o){let e=JSON.parse(o);if(e.permisos&&e.rol==="ADMIN")return!0}return!1};var et=[{path:"",loadChildren:()=>import("./chunk-K57F3ZO2.mjs").then(t=>t.HomeRoutingModule)},{path:"auth",loadChildren:()=>import("./chunk-DE3SQHOM.mjs").then(t=>t.SecurityRoutingModule),canActivate:[B]},{path:"util",loadChildren:()=>import("./chunk-M2RHDUHZ.mjs").then(t=>t.UtilsRoutingModule)},{path:"admin",loadChildren:()=>import("./chunk-RQDJWQK3.mjs").then(t=>t.AdminRoutingModule),canActivate:[Q]},{path:"**",redirectTo:"/util/no-funciona"}],q=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=a({type:t})}static{this.\u0275inj=m({imports:[f.forRoot(et),f]})}}return t})();function it(t,v){if(t&1){let o=S();r(0,"ul",5)(1,"li",6),n(2,"Home"),i(),r(3,"li",7),n(4,"Lista"),i(),r(5,"li",8)(6,"a",9),n(7),I(8,"titlecase"),i(),r(9,"ul",10)(10,"li")(11,"a",11),A("click",function(){k(o);let s=u();return y(s.logaut())}),n(12,"Cerrar session"),i()()()()()}if(t&2){let o=u();d(7),b(" ",N(8,1,o.nombre)," ")}}function rt(t,v){if(t&1){let o=S();r(0,"ul",5)(1,"li",12),n(2,"Home"),i(),r(3,"li",13),n(4,"Acortador"),i(),r(5,"li",14),n(6,"Lista"),i(),r(7,"li",8)(8,"a",9),n(9),I(10,"titlecase"),i(),r(11,"ul",10)(12,"li")(13,"a",11),A("click",function(){k(o);let s=u();return y(s.logaut())}),n(14,"Cerrar session"),i()()()()()}if(t&2){let o=u();d(9),b(" ",N(10,1,o.nombre)," ")}}function nt(t,v){t&1&&(r(0,"ul",5)(1,"li",15),n(2,"Home"),i(),r(3,"li",16),n(4,"Registrarse"),i(),r(5,"li",17),n(6,"Ingresar"),i()())}var z=(()=>{class t{constructor(o){this.router=o}ngOnInit(){this.verificarInvitado(),this.verificarUsuario(),this.verificarAdmin()}verificarInvitado(){return!localStorage.getItem("token")}verificarUsuario(){let o=localStorage.getItem("token");if(o){let e=JSON.parse(o);if(e.permisos&&e.rol==="USER")return this.nombre=e.nombre,!0}return!1}verificarAdmin(){let o=localStorage.getItem("token");if(o){let e=JSON.parse(o);if(e.permisos&&e.rol==="ADMIN")return this.nombre=e.nombre,!0}return!1}logaut(){localStorage.removeItem("token"),this.router.navigate(["/login"])}static{this.\u0275fac=function(e){return new(e||t)(w(T))}}static{this.\u0275cmp=c({type:t,selectors:[["app-navbar"]],decls:7,vars:3,consts:[[1,"container"],[1,"d-flex","flex-wrap","justify-content-center","py-3","border-bottom","container"],["href","/",1,"d-flex","align-items-center","mb-3","mb-md-0","me-md-auto","link-body-emphasis","text-decoration-none"],["src","/assets/icono.png","alt","",2,"width","200px"],["class","nav nav-pills",4,"ngIf"],[1,"nav","nav-pills"],["routerLink","/admin/inicio","routerLinkActive","active",1,"nav-link","me-3"],["routerLink","/admin/lista","routerLinkActive","active",1,"nav-link"],[1,"nav-item","dropdown"],["href","#","role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],[1,"dropdown-menu"],[1,"dropdown-item",3,"click"],["routerLink","/auth/inicio","routerLinkActive","active",1,"nav-link","me-3"],["routerLink","/auth/acortador-de-enlace","routerLinkActive","active",1,"nav-link","me-3"],["routerLink","/auth/lista-de-enlaces","routerLinkActive","active",1,"nav-link"],["routerLink","/","routerLinkActive","active",1,"nav-link","me-3"],["routerLink","/registro","routerLinkActive","active",1,"nav-link"],["routerLink","/login","routerLinkActive","active",1,"nav-link","me-3"]],template:function(e,s){e&1&&(r(0,"div",0)(1,"header",1)(2,"a",2),C(3,"img",3),i(),E(4,it,13,3,"ul",4)(5,rt,15,3,"ul",4)(6,nt,7,0,"ul",4),i()()),e&2&&(d(4),g("ngIf",s.verificarAdmin()),d(),g("ngIf",s.verificarUsuario()),d(),g("ngIf",s.verificarInvitado()))},dependencies:[R,U,O,L],styles:["li[_ngcontent-%COMP%]{cursor:pointer}"]})}}return t})();var K=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=c({type:t,selectors:[["app-footer"]],decls:19,vars:0,consts:[[1,"py-3","my-4"],[1,"nav","justify-content-center","border-bottom","pb-3","mb-3"],[1,"nav-item"],["href","#",1,"nav-link","px-2","text-body-secondary"],[1,"text-center","text-body-secondary"]],template:function(e,s){e&1&&(r(0,"footer",0)(1,"ul",1)(2,"li",2)(3,"a",3),n(4,"Home"),i()(),r(5,"li",2)(6,"a",3),n(7,"Features"),i()(),r(8,"li",2)(9,"a",3),n(10,"Pricing"),i()(),r(11,"li",2)(12,"a",3),n(13,"FAQs"),i()(),r(14,"li",2)(15,"a",3),n(16,"About"),i()()(),r(17,"p",4),n(18,"\xA9 2024 Camaleon, Inc"),i()())}})}}return t})();var x=(()=>{class t{constructor(){this.title="fron-end"}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:3,vars:0,template:function(e,s){e&1&&C(0,"app-navbar")(1,"router-outlet")(2,"app-footer")},dependencies:[H,z,K]})}}return t})();var W=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=a({type:t})}static{this.\u0275inj=m({imports:[p,f]})}}return t})();var X=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=a({type:t})}static{this.\u0275inj=m({imports:[p,P,h]})}}return t})();var Y=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=a({type:t})}static{this.\u0275inj=m({imports:[p,V,M]})}}return t})();var Z=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=a({type:t})}static{this.\u0275inj=m({imports:[p,J]})}}return t})();var $=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=a({type:t})}static{this.\u0275inj=m({imports:[p,G,h,M]})}}return t})();var tt=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=a({type:t,bootstrap:[x]})}static{this.\u0275inj=m({providers:[j()],imports:[_,q,W,F,X,Y,Z,$]})}}return t})();var pt=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=a({type:t,bootstrap:[x]})}static{this.\u0275inj=m({imports:[tt,D]})}}return t})();export{pt as a};
