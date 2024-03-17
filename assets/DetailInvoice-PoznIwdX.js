import{D as k}from"./Default-BQYD8_Ix.js";import{_ as B}from"./Icon-JtKGVolk.js";import{_ as T,c as b,w as _,r as l,o as i,b as m,a as t,t as s,j as c,d as y,l as C,F as L,p as N,k as P}from"./index-jErkSH92.js";import{u as M}from"./projects-jxuxNDd3.js";import{u as F}from"./products-vswYlDIi.js";import{u as V}from"./brands-kfNX3JLc.js";import{u as O}from"./quotations-T5MJbp8z.js";import{u as j}from"./vendors-vsA6Kt7C.js";import{u as Q}from"./profits-rIYum_s1.js";import{u as R}from"./sales-orders-8keD3WSj.js";import{u as z}from"./invoice-7qlS8a67.js";import{I as A}from"./InputField-gaHDi2mc.js";import{M as q}from"./MenuCard-fm8191j7.js";import{B as E}from"./ButtonLink-v4Xigd-7.js";import{B as G}from"./Button-L2bFlQpT.js";import{L as H}from"./Loading--kz6pXtx.js";import{s as U}from"./default.css_vue_type_style_index_0_src_true_lang-HReR-_qN.js";import{D as Y}from"./DataTable-7BFAAARy.js";import{M as $}from"./Modal-GHy1jzT4.js";import{T as J}from"./TextArea-xXqy_h2u.js";import{T as K}from"./TextCurrency-sXabEbdO.js";import{S as W}from"./Stepper-uSaRgYgb.js";import"./Pagination-yU6GMoj9.js";M();F();V();O();j();Q();R();const v=z(),X={components:{TextCurrency:K,Default:k,Icon:B,MenuCard:q,ButtonLink:E,Button:G,Loading:H,InputField:A,DataTable:Y,Modal:$,Multiselect:U,TextArea:J,Stepper:W},data(){return{aprove:!1,stepper_menu:[{label:"QT",complete:!0,link:""},{label:"PL",complete:!0,link:""},{label:"SO",complete:!1,link:""},{label:"PO",complete:!1,link:""},{label:"RG",complete:!1,link:""},{label:"DO",complete:!1,link:""},{label:"INV",complete:!1,link:""}],file1:null,file2:null,dataInvoice:{},loading:!1}},methods:{formatDateTime(e){const n=new Date(e),f=n.getDate().toString().padStart(2,"0"),h=(n.getMonth()+1).toString().padStart(2,"0"),o=n.getFullYear().toString().slice(-2),d=n.getHours().toString().padStart(2,"0"),p=n.getMinutes().toString().padStart(2,"0"),u=n.getSeconds().toString().padStart(2,"0");return`${f}/${h}/${o} ${d}:${p}:${u}`},formatCurrency(e){return e?new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e):"Rp.0"},handleFileChange1(e){this.file1=e.target.files[0]},handleFileChange2(e){this.file2=e.target.files[0]}},async created(){this.loading=!0,await v.getById(this.$route.params.id),this.dataInvoice=await v.dataDetail,this.loading=!1,console.log(this.dataInvoice)}},a=e=>(N("data-v-4e0b01e1"),e=e(),P(),e),Z={class:"flex gap-5"},tt={class:"w-full px-10 py-10 bg-white rounded-xl mt-5"},et={class:"w-full flex justify-between"},ot={class:"w-full"},st={class:"font-bold text-lg mb-5"},at=a(()=>t("b",null,"Invoice Number #:",-1)),nt=a(()=>t("b",null,"Date #:",-1)),rt=a(()=>t("b",null,"SO Number #:",-1)),lt={class:"flex w-1/2 gap-5 justify-center items-center"},it=a(()=>t("hr",null,null,-1)),ct=a(()=>t("br",null,null,-1)),dt={class:"w-full mt-10"},pt={class:"relative overflow-x-auto"},ut=a(()=>t("div",{class:"w-full bg-gray-50 text-gray-700 px-5 py-3 font-semibold"}," Items ",-1)),_t={class:"w-full text-sm text-left rtl:text-right text-gray-500 mt-2"},mt=a(()=>t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"}," Part Number "),t("th",{scope:"col",class:"px-6 py-3"}," Description "),t("th",{scope:"col",class:"px-6 py-3"}," Qty "),t("th",{scope:"col",class:"px-6 py-3 text-center"}," Unit Price "),t("th",{scope:"col",class:"px-6 py-3 text-center"}," Total Price ")])],-1)),ft={class:"px-6 py-4 text-xs"},ht={class:"px-6 py-4 text-xs"},gt={class:"px-6 py-4"},xt={class:"px-6 py-4 text-right"},bt={class:"px-6 py-4 text-right"},yt={class:"bg-white border-b"},vt=a(()=>t("td",{colspan:"3",class:"px-6 py-4 text-right"},[t("b",null," Subtotal")],-1)),It={class:"px-6 py-4 text-right"},St={class:"bg-white border-b"},wt=a(()=>t("td",{colspan:"3",class:"px-6 py-4 text-right"},[t("b",null," PPN")],-1)),Dt={class:"px-6 py-4 text-right"},kt={class:"bg-white border-b"},Bt=a(()=>t("td",{colspan:"3",class:"px-6 py-4 text-right"},[t("b",null," Total")],-1)),Tt={class:"px-6 py-4 text-right"};function Ct(e,n,f,h,o,d){const p=l("Loading"),u=l("ButtonLink"),I=l("MenuCard"),S=l("Button"),w=l("Default");return o.loading?(i(),b(p,{key:0})):(i(),b(w,{key:1},{default:_(()=>{var g,x;return[m(I,{menuLabel:"Sales Order"},{default:_(()=>[t("div",Z,[m(u,{type:"secondary",size:"small",to:"/invoice/so/"+o.dataInvoice.so_id,icon_name:"ArrowLeft",icon_position:"left"},null,8,["to"])])]),_:1}),t("div",tt,[t("div",et,[t("div",ot,[t("h1",st,s((g=o.dataInvoice)==null?void 0:g.customer_name),1),t("h1",null,[at,c(" "+s(o.dataInvoice.invoice_number),1)]),t("h1",null,[nt,c(" "+s(d.formatDateTime(o.dataInvoice.invoice_date)),1)]),t("h1",null,[rt,c(" "+s((x=o.dataInvoice)==null?void 0:x.so_number),1)])]),t("div",lt,[m(S,{type:"secondary",class:"w-fit h-fit",c:"",onClick:e.submitForm,icon_position:"left",size:"small",icon_name:"Download"},{default:_(()=>[c(" Download Invoice ")]),_:1},8,["onClick"])])]),it,ct,t("div",dt,[t("div",pt,[ut,t("table",_t,[mt,t("tbody",null,[(i(!0),y(L,null,C(o.dataInvoice.invoice_order_items,(r,D)=>(i(),y("tr",{class:"bg-white border-b",key:D},[t("td",ft,s(r.product_number),1),t("td",ht,s(r.product_description),1),t("td",gt,s(r.quantity),1),t("td",xt,s(r.unit_price),1),t("td",bt,s(r.total_price),1)]))),128)),t("tr",yt,[vt,t("td",It,s(o.dataInvoice.subtotal),1)]),t("tr",St,[wt,t("td",Dt,s(o.dataInvoice.ppn_nilai),1)]),t("tr",kt,[Bt,t("td",Tt,s(o.dataInvoice.grandTotal),1)])])])])])])]}),_:1}))}const Zt=T(X,[["render",Ct],["__scopeId","data-v-4e0b01e1"]]);export{Zt as default};