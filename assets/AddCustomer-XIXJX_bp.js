import{D as B}from"./Default-BQYD8_Ix.js";import{_ as U}from"./Icon-JtKGVolk.js";import{B as I}from"./Button-L2bFlQpT.js";import{_ as N,m as A,c as f,w,r as h,o as d,b as r,a as l,n as T,d as c,l as x,F as v,t as M,q as z,h as V,s as E,g as L}from"./index-jErkSH92.js";import{M as S}from"./MenuCard-fm8191j7.js";import{I as j}from"./InputField-gaHDi2mc.js";import{B as P}from"./ButtonLink-v4Xigd-7.js";import{T as O}from"./TextArea-xXqy_h2u.js";import{u as q}from"./customers-hQZYLVAv.js";const R=q(),W={name:"AddCustomer",components:{Default:B,Icon:U,Button:I,MenuCard:S,InputField:j,ButtonLink:P,TextArea:O},data(){return{formFields:[[{name:"title1",label:"title",type:"select",value:"",options:[{label:"Mr",value:"Mr"},{label:"Ms",value:"Ms"}]},{name:"contact_name1",label:"name",type:"text",value:""},{name:"position1",label:"position",type:"text",value:""},{name:"mobile_phone1",label:"phone",type:"text",value:""},{name:"email1",label:"email",type:"email",value:""},{name:"is_whatsapp1",label:"whatsapp",type:"checkbox",value:!1}]],formvalue:[],titleOptions:[{label:"Mr",value:"Mr"},{label:"Ms",value:"Ms"}],formData:A([]),ModelData:{customer_name:"",npwp:"",customer_building:"",customer_shipping_address:"",customer_billing_address:"",city:"",telephone:"",fax:"",customerPIC:[]}}},methods:{async submitForm(){this.contactData(),console.log(this.ModelData),R.PostData(this.ModelData)},contactData(){let n=this.formFields.map(e=>e.map(a=>({[a.name]:a.value}))),t=[];for(let e in n)for(let a in n[e])t.push(n[e][a]);const u=[];for(const e of t)for(const a in e){const p=a.match(/\d+/),m=p?p[0]:"",_=a.replace(/\d+$/,"");u[m]=u[m]||{},u[m][_]=e[a]}const y=u.filter(e=>Object.keys(e).length>=0);this.ModelData.customerPIC.push(...y)},addFormField(){const n=[{name:"title"+(this.formFields.length+1),label:"title ",type:"select",options:this.titleOptions},{name:"contact_name"+(this.formFields.length+1),label:"name ",type:"text"},{name:"position"+(this.formFields.length+1),label:"position ",type:"text"},{name:"mobile_phone"+(this.formFields.length+1),label:"phone ",type:"text"},{name:"email"+(this.formFields.length+1),label:"email ",type:"email"},{name:"is_whatsapp"+(this.formFields.length+1),label:"whatsapp ",type:"checkbox"}];this.formFields.push(n)},deleteFormField(n){this.formFields.splice(n,1)},tabclick(n){let t="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",u="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500",y=document.getElementById("customer-detail"),e=document.getElementById("customer-pic"),a=document.getElementById("btn-cust-detail"),p=document.getElementById("btn-cust-pic");n==="detail"?(y.style="display:block",e.style="display:none",a.className=u,p.className=t):n==="contact"&&(y.style="display:none",e.style="display:block",a.className=t,p.className=u)}}},G={class:"flex gap-5"},H={class:"px-[2%] py-[1%]"},J={class:"text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"},K={class:"flex flex-wrap -mb-px"},Q={class:"me-2"},X={class:"me-2"},Y={class:"px-[2%] py-[1%]"},Z={class:"w-full px-[2%] py-[2%] bg-white shadow-md rounded-md"},$={id:"customer-detail"},ee={class:"grid grid-cols-3 gap-5"},te={class:"gird gird-cols-2 gap-2"},le={id:"customer-pic",hidden:""},oe={class:"px-5 text-slate-700 mt-5 py-4 rounded bg-gray-200"},ae={class:"grid grid-cols-3 rounded-lg gap-3 px-2 border pb-3 mt-5"},se={key:0,class:"relative rounded px-2 py-2 border"},re=l("label",{class:"absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 capitalize"},"Title",-1),ne=["onUpdate:modelValue","id"],de=["value"],ie={key:1,class:"flex gap-5"},ue={class:"relative rounded px-5 border w-fit px-2 py-2"},ce=l("label",{class:"absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 capitalize"},"Whatsapp",-1),pe=["onUpdate:modelValue","id"],me={class:"flex justify-center items-center w-full"};function be(n,t,u,y,e,a){const p=h("ButtonLink"),m=h("Button"),_=h("MenuCard"),b=h("InputField"),k=h("TextArea"),D=h("Default");return d(),f(D,null,{default:w(()=>[r(_,{menuLabel:"New Customer"},{default:w(()=>[l("div",G,[r(p,{type:"secondary",size:"small",icon_name:"ArrowBigLeft",icon_position:"left",link:!0,to:"/master/customers"}),r(m,{type:"success",size:"small",onClick:a.submitForm,icon_name:"Save",icon_position:"right"},null,8,["onClick"])])]),_:1}),l("div",H,[l("div",J,[l("ul",K,[l("li",Q,[l("button",{id:"btn-cust-detail",onClick:t[0]||(t[0]=o=>a.tabclick("detail")),class:"inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500"}," Detail Customer ")]),l("li",X,[l("button",{id:"btn-cust-pic",onClick:t[1]||(t[1]=o=>a.tabclick("contact")),class:"inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300","aria-current":"page"}," Contacts ")])])])]),l("div",Y,[l("div",Z,[l("div",$,[l("div",ee,[r(b,{type:"text",placeholder:"name",modelValue:e.ModelData.customer_name,"onUpdate:modelValue":t[2]||(t[2]=o=>e.ModelData.customer_name=o)},null,8,["modelValue"]),r(b,{type:"text",placeholder:"npwp",modelValue:e.ModelData.npwp,"onUpdate:modelValue":t[3]||(t[3]=o=>e.ModelData.npwp=o)},null,8,["modelValue"]),r(b,{type:"text",placeholder:"building",modelValue:e.ModelData.customer_building,"onUpdate:modelValue":t[4]||(t[4]=o=>e.ModelData.customer_building=o)},null,8,["modelValue"]),r(b,{type:"text",placeholder:"telephone",modelValue:e.ModelData.telephone,"onUpdate:modelValue":t[5]||(t[5]=o=>e.ModelData.telephone=o)},null,8,["modelValue"]),r(b,{type:"text",placeholder:"fax",modelValue:e.ModelData.fax,"onUpdate:modelValue":t[6]||(t[6]=o=>e.ModelData.fax=o)},null,8,["modelValue"]),r(b,{type:"text",placeholder:"city",modelValue:e.ModelData.city,"onUpdate:modelValue":t[7]||(t[7]=o=>e.ModelData.city=o)},null,8,["modelValue"])]),l("div",te,[l("div",null,[r(k,{id:"myTextarea",label:"Billing Address",modelValue:e.ModelData.customer_billing_address,"onUpdate:modelValue":t[8]||(t[8]=o=>e.ModelData.customer_billing_address=o),placeholder:"Enter your address here",rows:6,cols:20},null,8,["modelValue"])]),l("div",null,[r(k,{id:"myTextarea",label:"Shipping Address",modelValue:e.ModelData.customer_shipping_address,"onUpdate:modelValue":t[9]||(t[9]=o=>e.ModelData.customer_shipping_address=o),placeholder:"Enter your address here",rows:6,cols:20},null,8,["modelValue"])])])]),l("div",le,[l("form",{onSubmit:t[10]||(t[10]=T(()=>{},["prevent"]))},[(d(!0),c(v,null,x(e.formFields,(o,g)=>(d(),c("div",{key:g},[l("div",oe,[l("h1",null,"Contact "+M(g+1),1)]),l("div",ae,[(d(!0),c(v,null,x(o,(s,F)=>(d(),c("div",{key:F,class:"mt-5 w-full"},[s.type==="select"?(d(),c("div",se,[re,V(l("select",{"onUpdate:modelValue":i=>s.value=i,id:s.name,class:"block px-2.5 pb-2.5 pt-5 text-sm w-full text-sm text-gray-700 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" "},[(d(!0),c(v,null,x(s.options,(i,C)=>(d(),c("option",{key:C,value:i.value},M(i.label),9,de))),128))],8,ne),[[z,s.value]])])):s.type==="checkbox"?(d(),c("div",ie,[l("div",ue,[ce,V(l("input",{type:"checkbox","onUpdate:modelValue":i=>s.value=i,id:s.name,class:"block px-2.5 pb-2.5 pt-5 text-sm w-fit mt-3 text-sm text-gray-700 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" "},null,8,pe),[[E,s.value]])]),l("div",me,[g>0?(d(),f(m,{key:0,type:"danger",icon_name:"Trash",class:"w-full h-fit",icon_position:"center",onClick:i=>a.deleteFormField(g)},null,8,["onClick"])):L("",!0)])])):(d(),f(b,{key:2,type:s.type,class:"w-full",id:s.name,name:s.name,placeholder:s.label,modelValue:s.value,"onUpdate:modelValue":i=>s.value=i},null,8,["type","id","name","placeholder","modelValue","onUpdate:modelValue"]))]))),128))])]))),128))],32),r(m,{type:"success",class:"float-right mt-10",size:"small",icon_name:"Plus",icon_position:"right",onClick:a.addFormField},null,8,["onClick"])])])])]),_:1})}const Me=N(W,[["render",be]]);export{Me as default};