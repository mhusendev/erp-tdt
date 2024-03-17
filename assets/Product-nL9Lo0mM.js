import{D as x}from"./Default-8989BuUh.js";import{_ as C}from"./Icon-iMiFcnKi.js";import{u as T}from"./products-xeBWE8_M.js";import{u as I}from"./brands-s0lbHocn.js";import{_ as S,f as c,S as V,c as h,w as i,r as d,o as u,b as r,a as n,j as f,d as E,p as O,k as j}from"./index-UcG7K48i.js";import{D as A}from"./DataTable-AMI-jNCU.js";import{B as L}from"./Button-FXweG6b0.js";import{P as N}from"./Pagination-ht6DyZgL.js";import{L as U}from"./Loading-I60fnMB4.js";import{I as F}from"./InputField-hT0RIayt.js";import{M as R}from"./Modal-qZ73HCU_.js";import{s as Y}from"./default.css_vue_type_style_index_0_src_true_lang-Hev4rVM_.js";import{T as q}from"./TextArea-e4RlF1I6.js";const a=T(),_=I(),z={name:"product",components:{Icon:C,Default:x,Button:L,DataTable:A,Pagination:N,Loading:U,InputField:F,Modal:R,TextArea:q,Multiselect:Y},data(){return{label_head:c(a.headers),loading:!1,currentPage:c(a.currentPage),totalPages:c(a.totalPage),body:c(a.data_products),productModel:{product_number:"",brand_id:"",product_description:""},btnMode:"",isModalOpen:!1}},mounted(){this.getData()},methods:{handlePageChange(e){console.log("Berpindah ke halaman",e),this.currentPage=e,this.getData()},async getData(){this.loading=!0,await a.getData(this.currentPage),this.currentPage=await a.currentPage,this.totalPages=await a.totalPage,console.log(a.totalPage),this.body=await this.filterDataforTable(),await this.body.forEach(e=>{let t=Object.keys(e);this.label_head=t}),this.loading=!1},async showModal(e,t){e==="add"?(this.btnMode="New Product",this.isModalOpen=!0,this.productModel.product_number="",this.productModel.product_description=""):(this.btnMode="Update Product",console.log(t))},async actionToBackend(e){this.loading=!0,e==="New Product"&&(await a.PostData(this.productModel),this.productModel.product_number="",this.productModel.product_description="",await a.getData(this.currentPage),this.getData()),e==="Update Product"&&(await a.PutData(this.productModel),this.isModalOpen=!1,this.productModel.product_number="",await a.getData(this.currentPage),this.getData())},closeModal(){this.isModalOpen=!1},async filterDataforTable(){const e=["createdAt","updatedAt","history","is_deleted","brand_id","brand"];return await a.data_products.map(p=>Object.fromEntries(Object.entries(p).filter(([o])=>!e.includes(o))))},handleEdit(e){this.btnMode="Update Product",this.productModel.product_id=e.product_id,this.productModel.product_number=e.product_number,this.productModel.product_description=e.product_description,this.isModalOpen=!0,console.log(e)},async handleDelete(e){this.btnMode="delete",console.log(e),this.productModel.product_id=await e.product_id,new V({title:"hapus?",text:"data tidak akan bisa kembali!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes"}).then(t=>{t.isConfirmed&&(this.loading=!0,a.DeleteData(this.productModel),this.productModel.product_number="",this.getData())})},async Brands(e){return await _.Search(e),await _.dataSearch.map(t=>({value:t.brand_id,label:t.brand_name}))}},computed:{},created(){this.body.forEach(e=>{let t=Object.keys(e);this.label_head=t})}},b=e=>(O("data-v-a4f7c95c"),e=e(),j(),e),G={class:"h-fit px-10 py-10 w-[700px]"},H={class:""},J={class:"flex mt-10 justify-end"},K={class:"col-span-12 mt-3 px-10 py-5"},Q=b(()=>n("h1",{class:"text-lg border-b border-slate-900 font-semibold w-fit pr-6 mb-10"},"products",-1)),W=b(()=>n("div",{class:"intro-y block sm:flex items-center h-10"},[n("div",{class:"flex items-center justify-center sm:ml-auto mt-3 mr-5 sm:mt-0"})],-1)),X={key:1};function Z(e,t,p,g,o,l){const M=d("InputField"),y=d("Multiselect"),P=d("TextArea"),m=d("Button"),w=d("Modal"),D=d("Loading"),k=d("DataTable"),v=d("Pagination"),B=d("Default");return u(),h(B,null,{default:i(()=>[r(w,{show:o.isModalOpen,modalType:"primary",modalLabel:o.btnMode,onCloseModal:l.closeModal},{default:i(()=>[n("div",G,[n("div",H,[r(M,{type:"text",class:"w-full h-fit mb-5",placeholder:"product number",modelValue:o.productModel.product_number,"onUpdate:modelValue":t[0]||(t[0]=s=>o.productModel.product_number=s)},null,8,["modelValue"]),r(y,{placeholder:"Select Brand",modelValue:o.productModel.brand_id,"onUpdate:modelValue":t[1]||(t[1]=s=>o.productModel.brand_id=s),options:l.Brands,"filter-results":!1,"resolve-on-load":!1,delay:0,searchable:!0,onSelect:t[2]||(t[2]=s=>e.disablePIC=!1),onDeselect:t[3]||(t[3]=s=>e.disablePIC=!0),class:"multiselect-blue mt-10 w-full h-fit","close-on-select":!0},null,8,["modelValue","options"]),r(P,{id:"myTextarea",label:"Description",modelValue:o.productModel.product_description,"onUpdate:modelValue":t[4]||(t[4]=s=>o.productModel.product_description=s),placeholder:"Enter your description here",rows:6,cols:40},null,8,["modelValue"])]),n("div",J,[r(m,{type:"success",onClick:t[5]||(t[5]=s=>l.actionToBackend(this.btnMode))},{default:i(()=>[f("Save")]),_:1})])])]),_:1},8,["show","modalLabel","onCloseModal"]),n("div",K,[Q,W,o.loading?(u(),h(D,{key:0})):(u(),E("div",X,[r(k,{theads:o.label_head,items:o.body,btnDelete:!0,btnEdit:!0,onDelete:l.handleDelete,onEdit:l.handleEdit},{default:i(()=>[r(m,{type:"primary",onClick:t[6]||(t[6]=s=>l.showModal("add",null)),icon_name:"Plus",icon_position:"left"},{default:i(()=>[f("New products ")]),_:1})]),_:1},8,["theads","items","onDelete","onEdit"]),r(v,{"current-page":o.currentPage,"total-pages":o.totalPages,"visible-page-count":5,onPageChange:l.handlePageChange},null,8,["current-page","total-pages","onPageChange"])]))])]),_:1})}const pe=S(z,[["render",Z],["__scopeId","data-v-a4f7c95c"]]);export{pe as default};
