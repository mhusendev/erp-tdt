import{_ as r}from"./Icon-kP6R3z7U.js";import{r as c,o as i,c as l,d as s,a as n,z as m,j as d,t as e}from"./index-HpA5oPRI.js";import{_}from"./_plugin-vue_export-helper-x3n3nnut.js";const p={name:"customcard",components:{Icon:r},props:{label:String,percent:String,number:String,icon_name:String,progress:{type:String,default:"up"}},computed:{thumbclass(){return["report-box__indicator",{"bg-danger":this.progress==="down","bg-success":this.progress==="up","bg-slate-400":this.progress==="netral","bg-yellow-400":this.progress==="warn"},"tooltip"," cursor-pointer"]}}},u={class:"col-span-12 sm:col-span-6 xl:col-span-3"},g={class:"report-box zoom-in"},h={class:"box p-5"},b={class:"flex"},x={class:"ml-auto"},f={class:"text-3xl font-medium leading-8 mt-6"},v={class:"text-base text-slate-500 mt-1"};function C(S,w,t,y,z,a){const o=c("Icon");return i(),l("div",u,[s("div",g,[s("div",h,[s("div",b,[n(o,{name:"CreditCard",class:"report-box_icon text-pending"}),s("div",x,[s("div",{class:m(a.thumbclass),title:"2% Lower than last month"},[d(e(t.percent)+" ",1),n(o,{name:t.icon_name,class:"w-4 h-4 ml-0.5"},null,8,["name"])],2)])]),s("div",f,e(t.number),1),s("div",v,e(t.label),1)])])])}const V=_(p,[["render",C]]);export{V as C};
