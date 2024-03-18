import{D as g}from"./Default-UzTWWqk9.js";import{_ as S}from"./Icon-rtOuHIS6.js";import{_ as D,c as u,w as m,r as a,o as _,b as i,a as c,j as v}from"./index-2Xl9qFv7.js";import{u as w}from"./projects-m_BtDv-_.js";import{u as O}from"./quotations-DO3D_tSp.js";import{u as T}from"./purchase-orders-F54LUs0k.js";import{u as P}from"./profits-DD-uQzfp.js";import{u as x}from"./sales-orders-o2BgRW2k.js";import{I}from"./InputField-eKlKr605.js";import{M as L}from"./MenuCard-Cm1nNJYU.js";import{B as C}from"./ButtonLink-xY7BTdTe.js";import{B}from"./Button-_saYDuqz.js";import{L as M}from"./Loading-bud4hAA4.js";import{s as V}from"./default.css_vue_type_style_index_0_src_true_lang-U16oWYK-.js";import{D as $}from"./DataTable-yeLKldhm.js";import{M as j}from"./Modal-ZMIHFB3R.js";import{T as A}from"./TextArea-KW4ixcr0.js";import{T as N}from"./TextCurrency-fK0DUXJx.js";import{S as Q}from"./Stepper-iYhSeoBN.js";import"./Pagination-9Wn2p13Z.js";w();O();const d=T(),f=P();x();const F={components:{TextCurrency:N,Default:g,Icon:S,MenuCard:L,ButtonLink:C,Button:B,Loading:M,InputField:I,DataTable:$,Modal:j,Multiselect:V,TextArea:A,Stepper:Q},data(){return{body:[],label_head:[],aprove:!1,stepper_menu:[{label:"QT",complete:!1,link:"/quotation/detail/"},{label:"PL",complete:!1,link:"/profit-and-loss/detail/"},{label:"SO",complete:!1,link:"/sales-order/detail/"},{label:"PO",complete:!1,link:"/purchase-order/"},{label:"RG",complete:!1,link:"/receive-list/"},{label:"DO",complete:!1,link:"/delivery-order/"},{label:"IV",complete:!1,link:"/invoice/so/"}],file1:null,file2:null,dataPO:{},loading:!1}},methods:{async setStepper(){let e=await JSON.parse(localStorage.getItem("progress"));this.stepper_menu[0].complete=e[0].status,this.stepper_menu[0].link=this.stepper_menu[0].link+e[0].idQT,this.stepper_menu[1].complete=e[1].status,this.stepper_menu[1].link=this.stepper_menu[1].link+e[1].idQT,this.stepper_menu[2].complete=e[2].status,this.stepper_menu[2].link=this.stepper_menu[2].link+e[2].idPL,this.stepper_menu[3].complete=e[3].status,this.stepper_menu[3].link=this.stepper_menu[3].link+e[3].idQT,this.stepper_menu[4].complete=e[4].status,this.stepper_menu[4].link=this.stepper_menu[4].link+e[4].idQT,this.stepper_menu[5].complete=e[5].status,this.stepper_menu[5].link=this.stepper_menu[5].link+e[5].idSO,this.stepper_menu[6].complete=e[6].status,this.stepper_menu[6].link=this.stepper_menu[6].link+e[6].idSO},toDetail(e,t){this.$router.push("/purchase-order/detail/"+d.data_po[e].po_id)},formatDateTime(e){const t=new Date(e),s=t.getDate().toString().padStart(2,"0"),o=(t.getMonth()+1).toString().padStart(2,"0"),r=t.getFullYear().toString().slice(-2),n=t.getHours().toString().padStart(2,"0"),l=t.getMinutes().toString().padStart(2,"0"),p=t.getSeconds().toString().padStart(2,"0");return`${s}/${o}/${r} ${n}:${l}:${p}`},formatCurrency(e){return e?new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e):"Rp.0"},handleFileChange1(e){this.file1=e.target.files[0]},handleFileChange2(e){this.file2=e.target.files[0]},async checkPL(){await f.getData(this.$route.params.id),f.data_profit.status!==1&&(this.aprove=!0)},async filterDataforTable(){const e=["createdAt","updatedAt","history","vendor_id","quotation_id","vendor_pic_name","vendor_pic_email","vendor_pic_id","inv_vendor_attachment","so_id","project_id","receive_type","po_id"],t=await d.data_po.map(s=>Object.fromEntries(Object.entries(s).filter(([r])=>!e.includes(r))));for(let s in t)t[s].total=this.formatCurrency(t[s].total);return t},reorderedArray(e){let t=["po_number","project_name","customer_po_number","vendor_name","so_number","total","ppn","po_status"];return e.map(s=>{const o={};for(const r of t)s.hasOwnProperty(r)&&(o[r]=s[r]);return o})}},async created(){this.loading=!0,await this.checkPL(),await this.setStepper(),await d.getData(this.$route.params.id),this.dataPO.quotation_id=this.$route.params.id,this.body=await this.filterDataforTable(),this.body=await this.reorderedArray(this.body),this.body.forEach(e=>{let t=Object.keys(e);this.label_head=t}),this.loading=!1,console.log(this.dataPO)}},q={class:"flex gap-5"},R={class:"px-20 py-10 w-full flex justify-center items-center"},E={class:"w-full px-10 py-10 bg-white"};function z(e,t,s,o,r,n){const l=a("Loading"),p=a("ButtonLink"),h=a("MenuCard"),y=a("Stepper"),k=a("DataTable"),b=a("Default");return r.loading?(_(),u(l,{key:0})):(_(),u(b,{key:1},{default:m(()=>[i(h,{menuLabel:"Purchase Order"},{default:m(()=>[c("div",q,[i(p,{type:"secondary",size:"small",to:"/receive-list/"+r.dataPO.quotation_id},{default:m(()=>[v(" Next")]),_:1},8,["to"])])]),_:1}),c("div",R,[i(y,{menu:r.stepper_menu},null,8,["menu"])]),c("div",E,[i(k,{theads:r.label_head,items:r.body,btnView:!0,onView:n.toDetail},null,8,["theads","items","onView"])])]),_:1}))}const ce=D(F,[["render",z],["__scopeId","data-v-2c838b66"]]);export{ce as default};