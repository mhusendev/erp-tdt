import{_ as s,o as d,d as c,a,t as r,p as n,k as i}from"./index-UcG7K48i.js";const p={props:{id:String,label:String,modelValue:String,placeholder:String,rows:{type:Number,default:4},cols:{type:Number,default:20}},model:{prop:"modelValue",event:"update:modelValue"}},u=t=>(n("data-v-f6c1bda3"),t=t(),i(),t),_={class:"pt-5"},m={class:"flex gap-2"},f={class:"mb-3 font-light text-slate-500 whitespace-nowrap"},h=u(()=>a("div",{class:"border-t w-full h-fit mt-3"},null,-1)),g=["id","value","placeholder","rows","cols"];function v(t,l,e,b,w,S){return d(),c("div",_,[a("div",m,[a("p",f,r(e.label),1),h]),a("textarea",{id:e.id,value:e.modelValue,placeholder:e.placeholder,rows:e.rows,cols:e.cols,class:"rounded-lg",onInput:l[0]||(l[0]=o=>t.$emit("update:modelValue",o.target.value))},null,40,g)])}const V=s(p,[["render",v],["__scopeId","data-v-f6c1bda3"]]);export{V as T};
