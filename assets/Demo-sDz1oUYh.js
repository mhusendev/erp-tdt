import{I as k}from"./InputField-hT0RIayt.js";import{_ as h,o as f,d as y,a as e,b as o,t as u,F as b,r as l,p as O,k as z,w as a,j as i}from"./index-UcG7K48i.js";import{S as F,P as N}from"./Pagination-ht6DyZgL.js";import{D as P}from"./Default-8989BuUh.js";import{B as A}from"./Button-FXweG6b0.js";import{s as E}from"./default.css_vue_type_style_index_0_src_true_lang-Hev4rVM_.js";import{T as K}from"./TextArea-e4RlF1I6.js";import{M as U}from"./Modal-qZ73HCU_.js";import{_ as j}from"./Card-WqI04T3k.js";import{C as m}from"./CardIdentity-BnpFq04B.js";import{C as L}from"./CustomCard-pPIVjSvg.js";import{S as R}from"./Stepper-nVdArXdJ.js";import"./Icon-iMiFcnKi.js";const $={props:{options:{type:Function,default:()=>{}},value:{type:[String,Number],default:null}},components:{Multiselect:E},data(){return{value:null}},methods:{onKeypres(n){this.options(n)}}},v=n=>(O("data-v-223ee8f9"),n=n(),z(),n),q={class:"px-5 py-5 border rounded-lg"},G=v(()=>e("br",null,null,-1)),H=v(()=>e("hr",null,null,-1));function J(n,s,C,S,t,c){const p=l("Multiselect");return f(),y(b,null,[e("div",q,[o(p,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=d=>t.value=d),options:c.onKeypres,"filter-results":!1,"resolve-on-load":!1,delay:0,searchable:!0,class:"multiselect-blue","close-on-select":!1},null,8,["modelValue","options"])]),G,H,e("div",null,u(t.value),1)],64)}const Q=h($,[["render",J],["__scopeId","data-v-223ee8f9"]]),W={name:"demo",components:{InputField:k,Searchbar:F,Default:P,Button:A,Select:Q,TextArea:K,Modal:U,Card:j,CustomCard:L,Pagination:N,Stepper:R,CardIdentity:m,CardIdentity:m},data(){return{m_input:"",description:"",isModalOpen:!1}},methods:{openModal(){this.isModalOpen=!0},closeModal(){this.isModalOpen=!1}},computed(){console.log(this.m_input)}},X=e("div",{class:"w-[900px] h-[500px]"},null,-1),Y={class:"grid grid-cols-3 gap-5"},Z={class:"px-10 py-10 rounded mt-5"},ee=e("p",null,"Input Components",-1),oe=e("hr",null,null,-1),le=e("br",null,null,-1),te={class:"px-10 py-10 rounded mt-5"},ne=e("p",null,"Search Components",-1),se=e("hr",null,null,-1),ae=e("br",null,null,-1),ie=e("br",null,null,-1),de=e("p",null,"Button Components",-1),re=e("hr",null,null,-1),ce=e("br",null,null,-1),pe={class:"grid grid-cols-2 gap-4"},_e=e("br",null,null,-1),ue=e("p",null,"Modal Component",-1),me=e("hr",null,null,-1),he=e("br",null,null,-1),fe={class:"px-10 py-10 rounded mt-5"},ye=e("p",null,"Select Components",-1),be=e("hr",null,null,-1),ve=e("br",null,null,-1),Ce=e("hr",null,null,-1),Se=e("br",null,null,-1),xe=e("p",null,"Textarea",-1),Me=e("hr",null,null,-1),ge={class:"px-10 py-10 rounded mt-5"},we=e("p",null,"Card Components",-1),Ie=e("hr",null,null,-1),Ve=e("br",null,null,-1),Te=e("hr",null,null,-1),De=e("br",null,null,-1),Be=e("p",null,"Lorem ipsum",-1),ke=e("br",null,null,-1),Oe={class:"px-10 py-10 rounded mt-5"},ze=e("p",null,"pagination Components",-1),Fe=e("hr",null,null,-1),Ne=e("br",null,null,-1),Pe=e("br",null,null,-1),Ae=e("p",null,"Stepper",-1),Ee=e("hr",null,null,-1),Ke=e("br",null,null,-1),Ue={class:"w-[500px]"};function je(n,s,C,S,t,c){const p=l("Modal"),d=l("InputField"),x=l("Searchbar"),r=l("Button"),M=l("Select"),g=l("TextArea"),w=l("Card"),I=l("custom-card"),V=l("Pagination"),T=l("Stepper"),D=l("CardIdentity"),B=l("Default");return f(),y(b,null,[o(p,{show:t.isModalOpen,modalType:"danger",onCloseModal:c.closeModal},{default:a(()=>[X]),_:1},8,["show","onCloseModal"]),o(B,null,{default:a(()=>[e("div",Y,[e("div",Z,[ee,oe,le,o(d,{type:"text",name:"data",modelValue:t.m_input,"onUpdate:modelValue":s[0]||(s[0]=_=>t.m_input=_),class:"m-3",placeholder:"Text"},null,8,["modelValue"]),i(" "+u(t.m_input)+" ",1),o(d,{type:"email",class:"m-3",placeholder:"Email"}),o(d,{type:"number",class:"m-3",placeholder:"Number"}),o(d,{type:"date",class:"m-3",placeholder:"date"})]),e("div",te,[ne,se,ae,o(x),ie,de,re,ce,e("div",pe,[o(r,{type:"secondary",size:"small",icon_name:"RefreshCcw",icon_position:"left",link:!0,to:"/demo"}),o(r,{type:"success",size:"small",icon_name:"Save",icon_position:"left"},{default:a(()=>[i("Save")]),_:1}),o(r,{type:"primary",size:"small",icon_name:"Save",icon_position:"right"},{default:a(()=>[i("Save")]),_:1}),o(r,{type:"danger",size:"small"},{default:a(()=>[i("delete")]),_:1})]),_e,ue,me,i(),he,o(r,{type:"primary",onClick:c.openModal,size:"small"},{default:a(()=>[i("Open Modal")]),_:1},8,["onClick"])]),e("div",fe,[ye,be,ve,o(M),Ce,Se,xe,Me,o(g,{id:"myTextarea",label:"Description",modelValue:t.description,"onUpdate:modelValue":s[1]||(s[1]=_=>t.description=_),placeholder:"Enter your description here",rows:6,cols:40},null,8,["modelValue"]),e("p",null,"Typed text: "+u(t.description),1)]),e("div",ge,[we,Ie,Ve,o(w,null,{default:a(()=>[i(" hello this is cardview "),Te,De,Be]),_:1}),ke,o(I,{class:"z-0",label:"New Orders",number:"3.2123",icon_name:"ChevronDown",percent:"2%"})]),e("div",Oe,[ze,Fe,Ne,o(V),Pe,Ae,Ee,Ke,o(T)])]),e("div",Ue,[o(D,{name:"Krisna Sadewa",position:"DevOps",phone:"08943848483",email:"krisna@cws.co.id",whatsapp:!0},null,8,["email"])])]),_:1})],64)}const oo=h(W,[["render",je]]);export{oo as default};
