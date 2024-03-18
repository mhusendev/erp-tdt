import{_ as c,o as t,d as r,c as i,g as s,e as l,z as d,r as m}from"./index-H1euUr_g.js";import{_ as u}from"./Icon-BpAxyt7Y.js";const _={name:"Button",components:{Icon:u},props:{icon_position:{type:String,default:""},icon_size:{type:Number,default:20},type:{type:String,default:"primary"},size:{type:String,default:"medium"},icon_name:{type:String,default:""},disable:{type:Boolean,default:!1}},computed:{buttonClasses(){return["flex","gap-2","w-fit",{"justify-between":this.icon_position==="left"||this.icon_position==="right","justify-center":this.icon_position==="center"},"px-5","py-2","items-center","rounded-lg","focus:outline-none",{"bg-red-600 text-white hover:bg-red-800":this.type==="danger","bg-blue-800 text-white hover:bg-blue-900":this.type==="primary","bg-white border shadow hover:bg-gray-100":this.type==="secondary","bg-green-600 border text-white shadow hover:bg-green-800":this.type==="success","text-sm":this.size==="small","text-lg":this.size==="large","text-xs":this.size==="extra-small"}]}},methods:{handleClick(){this.$emit("click")}}},h=["disabled"];function f(o,g,e,b,y,a){const n=m("Icon");return t(),r("button",{class:d(a.buttonClasses),disabled:e.disable},[e.icon_position==="left"?(t(),i(n,{key:0,name:e.icon_name,size:e.icon_size},null,8,["name","size"])):s("",!0),l(o.$slots,"default",{},void 0,!0),e.icon_position==="right"?(t(),i(n,{key:1,name:e.icon_name,size:e.icon_size},null,8,["name","size"])):s("",!0),e.icon_position==="center"?(t(),i(n,{key:2,name:e.icon_name,size:e.icon_size},null,8,["name","size"])):s("",!0)],10,h)}const x=c(_,[["render",f],["__scopeId","data-v-3508bc7a"]]);export{x as B};