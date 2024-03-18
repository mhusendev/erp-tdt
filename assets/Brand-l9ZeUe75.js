import{D as k}from"./Default-LfTR1VjV.js";import{_ as x}from"./Icon-aDk_KqCg.js";import{u as v}from"./brands-VEDJ9MM6.js";import{o as m,c as b,d as n,t as C,f as c,S as E,r,b as f,w as i,a as d,j as g}from"./index-3VIsnPTN.js";import{D as T}from"./DataTable-aefNwkh5.js";import{B as O}from"./Button-fTGUJeva.js";import{P as j}from"./Pagination-pdYa9xhx.js";import{L as S}from"./Loading-sJ64mZn0.js";import{I}from"./InputField-7BnCext7.js";import{M as N}from"./Modal-eH2qysXC.js";import{_ as p}from"./_plugin-vue_export-helper-x3n3nnut.js";const L={props:{message:{type:String,required:!0}}},V={class:"bg-green-100 border border-green-100 text-green-700 px-4 py-3 rounded relative",role:"alert"},A=n("strong",{class:"font-bold"},"Success!",-1),F={class:"block sm:inline"};function q(e,t,l,u,o,s){return m(),b("div",V,[A,n("span",F,C(l.message),1)])}const R=p(L,[["render",q]]),a=v(),U={name:"brand",components:{Icon:x,Default:k,Button:O,DataTable:T,Pagination:j,Loading:S,InputField:I,Modal:N,SuccessSpan:R},data(){return{label_head:c(a.headers),loading:!1,currentPage:c(a.currentPage),totalPages:c(a.totalPage),body:c(a.data_brands),BrandModel:{brand_name:""},btnMode:"",isModalOpen:!1}},mounted(){this.getData()},methods:{async handlePageChange(e){this.currentPage=await e,this.getData()},async getData(){this.loading=!0,await a.getData(this.currentPage),this.currentPage=await a.currentPage,this.totalPages=await a.totalPage,console.log(a.totalPage),this.body=await this.filterDataforTable(),await this.body.forEach(e=>{let t=Object.keys(e);this.label_head=t}),this.loading=!1},async showModal(e,t){e==="add"?(this.btnMode="New Brand",this.isModalOpen=!0):(this.btnMode="Edit Brand",console.log(t))},async actionToBackend(e){this.loading=!0,e==="New Brand"&&(await a.PostData(this.BrandModel),this.BrandModel.brand_name="",await a.getData(this.currentPage),this.getData()),e==="Edit Brand"&&(await a.PutData(this.BrandModel),this.BrandModel.brand_name="",await a.getData(this.currentPage),this.getData())},closeModal(){this.isModalOpen=!1},async filterDataforTable(){const e=["createdAt","updatedAt","history","is_deleted","products","brand_id"];return await a.data_brands.map(l=>Object.fromEntries(Object.entries(l).filter(([o])=>!e.includes(o))))},handleEdit(e){this.btnMode="Edit Brand",this.BrandModel.brand_id=e.brand_id,this.BrandModel.brand_name=e.brand_name,this.isModalOpen=!0,console.log(e)},async handleDelete(e){this.btnMode="delete",console.log(e),this.BrandModel.brand_id=await e.brand_id,new E({title:"hapus?",text:"data tidak akan bisa kembali!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes"}).then(t=>{t.isConfirmed&&(this.loading=!0,a.DeleteData(this.BrandModel),this.BrandModel.brand_name="",this.getData())})},reloadData(){a.getData(),setTimeout(async()=>{this.body=await this.filterDataforTable(),this.body.forEach(e=>{let t=Object.keys(e);this.label_head=t}),this.loading=!1},4e3)}},computed:{},created(){this.body.forEach(e=>{let t=Object.keys(e);this.label_head=t})}},Y={class:"h-fit px-10 py-10 w-[700px]"},z={class:"flex justify-center items-center gap-3"},G={class:"flex mt-10 justify-end"},H={class:"col-span-12 mt-3 px-10 py-5"},J=n("h1",{class:"text-lg border-b border-slate-900 font-semibold w-fit pr-6 mb-10"},"Brands",-1),K=n("div",{class:"intro-y block sm:flex items-center h-10"},[n("div",{class:"flex items-center justify-center sm:ml-auto mt-3 mr-5 sm:mt-0"})],-1),Q={key:1};function W(e,t,l,u,o,s){const y=r("InputField"),_=r("Button"),B=r("Modal"),M=r("Loading"),D=r("DataTable"),w=r("Pagination"),P=r("Default");return m(),f(P,null,{default:i(()=>[d(B,{show:o.isModalOpen,modalType:"primary",modalLabel:o.btnMode,onCloseModal:s.closeModal},{default:i(()=>[n("div",Y,[n("div",z,[d(y,{type:"text",autofocus:"true",class:"w-full",placeholder:"Brand Name",modelValue:o.BrandModel.brand_name,"onUpdate:modelValue":t[0]||(t[0]=h=>o.BrandModel.brand_name=h)},null,8,["modelValue"])]),n("div",G,[d(_,{type:"success",onClick:t[1]||(t[1]=h=>s.actionToBackend(this.btnMode))},{default:i(()=>[g("Save")]),_:1})])])]),_:1},8,["show","modalLabel","onCloseModal"]),n("div",H,[J,K,o.loading?(m(),f(M,{key:0})):(m(),b("div",Q,[d(D,{theads:o.label_head,items:o.body,btnDelete:!0,btnEdit:!0,onDelete:s.handleDelete,onEdit:s.handleEdit},{default:i(()=>[d(_,{type:"primary",onClick:t[2]||(t[2]=h=>s.showModal("add",null)),icon_name:"Plus",icon_position:"left"},{default:i(()=>[g("New Brands ")]),_:1})]),_:1},8,["theads","items","onDelete","onEdit"]),d(w,{"current-page":o.currentPage,"total-pages":o.totalPages,"visible-page-count":5,onPageChange:s.handlePageChange},null,8,["current-page","total-pages","onPageChange"])]))])]),_:1})}const ie=p(U,[["render",W]]);export{ie as default};