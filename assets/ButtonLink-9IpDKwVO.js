import{r as s,o as t,b as n,w as l,g as r,e as m,z as u}from"./index-3VIsnPTN.js";import{_ as d}from"./Icon-aDk_KqCg.js";import{_}from"./_plugin-vue_export-helper-x3n3nnut.js";const p={name:"ButtonLink",components:{Icon:d},props:{icon_position:{type:String,default:"right"},to:{type:String,default:""},type:{type:String,default:"primary"},size:{type:String,default:"medium"},icon_name:{type:String,default:""}},computed:{buttonClasses(){return["flex","gap-2","w-fit","justify-between","items-center","px-5","py-2","rounded-lg","focus:outline-none",{"bg-blue-800 text-white hover:bg-blue-900":this.type==="primary","bg-white border shadow hover:bg-gray-100":this.type==="secondary","bg-green-600 border text-white shadow hover:bg-green-800":this.type==="success","text-sm":this.size==="small","text-lg":this.size==="large"}]}},methods:{}};function f(a,g,e,h,y,i){const o=s("Icon"),c=s("router-link");return t(),n(c,{to:e.to,class:u(i.buttonClasses)},{default:l(()=>[e.icon_position==="left"?(t(),n(o,{key:0,name:e.icon_name,class:""},null,8,["name"])):r("",!0),m(a.$slots,"default",{},void 0,!0),e.icon_position==="right"?(t(),n(o,{key:1,name:e.icon_name},null,8,["name"])):r("",!0)]),_:3},8,["to","class"])}const k=_(p,[["render",f],["__scopeId","data-v-604f7510"]]);export{k as B};