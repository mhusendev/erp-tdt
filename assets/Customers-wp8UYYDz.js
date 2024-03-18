import{D as C}from"./Default-AVgVSg84.js";import{_ as M}from"./Icon-kP6R3z7U.js";import{f as m,r as c,o as i,b as x,w as p,a as d,d as t,j as u,t as s,c as _,l as E,F as B}from"./index-HpA5oPRI.js";import{D as L}from"./DataTable-wprUM1Wh.js";import{B as O}from"./ButtonLink-JhhLJAK9.js";import{_ as T}from"./Card-GuhodX7m.js";import{u as A}from"./customers-xhrb2XEs.js";import{L as j}from"./Loading-OmTAJ6kg.js";import{M as I}from"./Modal-eYmnpBdS.js";import{P as N}from"./Pagination-Rl8xDIw_.js";import{_ as z}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./Button-M_HFa4Rq.js";const o=A(),S={name:"customer",components:{Icon:M,Default:C,ButtonLink:O,DataTable:L,Loading:j,Pagination:N,Modal:I,Card:T},data(){return{label_head:m(o.headers),body:m(o.data_customers),loading:!1,currentPage:m(o.currentPage),totalPages:m(o.totalPage),dataView:{},isModalViewOpen:!1}},methods:{handleEdit(l){let n=o.data_customers.find(a=>a.customer_code===l.customer_code);o.$patch(a=>{a.dataEdit=n}),this.$router.push("/master/customers/edit")},handleView(l,n){this.dataView=o.data_customers.find(a=>a.customer_code===n.customer_code),console.log(this.dataView),this.isModalViewOpen=!0},closeModalView(){this.isModalViewOpen=!1},async handlePageChange(l){this.currentPage=await l,o.getData(this.currentPage),this.getData()},async getData(l){this.loading=!0,await o.getData(this.currentPage),this.currentPage=await o.currentPage,this.totalPages=await o.totalPage,console.log(o.totalPage),this.body=await this.filterDataforTable(),await this.body.forEach(n=>{let a=Object.keys(n);this.label_head=a}),this.loading=!1},async filterDataforTable(){const l=["customer_id","npwp","history","customer_pic","is_deleted","createdAt","updatedAt","customer_shipping_address","customer_billing_address","fax"];return await o.data_customers.map(a=>Object.fromEntries(Object.entries(a).filter(([e])=>!l.includes(e))))}},mounted:function(){console.log(o.data_customers),this.getData()},computed(){},created:function(){}},F={class:"w-[1000px] h-[700px] pb-10 overflow-y-scroll"},R={class:"grid grid-cols-2"},W={class:"font-bold text-2xl flex"},X={class:"text-sm ml-2"},q={class:"flex justify-end"},G=t("b",null,"created at",-1),H=t("hr",null,null,-1),J=t("br",null,null,-1),K={class:"relative overflow-x-auto"},Q={class:"w-full text-sm text-left rtl:text-right text-slate-700"},U=t("thead",{class:"text-xs text-slate-700 uppercase bg-gray-200"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"}," npwp "),t("th",{scope:"col",class:"px-6 py-3"}," building "),t("th",{scope:"col",class:"px-6 py-3"}," city "),t("th",{scope:"col",class:"px-6 py-3"}," fax "),t("th",{scope:"col",class:"px-6 py-3"}," telephone ")])],-1),Y={class:"bg-white border-b bg-gray-200"},Z={scope:"row",class:"px-6 py-4"},$={class:"px-6 py-4"},tt={class:"px-6 py-4"},et={class:"px-6 py-4"},st={class:"px-6 py-4"},ot={class:"w-full text-sm text-left rtl:text-right text-slate-700"},at=t("thead",{class:"text-xs text-slate-700 uppercase bg-gray-200"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-center"}," Billing address "),t("th",{scope:"col",class:"px-6 py-3 text-center"}," Shipping address ")])],-1),lt={class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},ct={scope:"row",class:"px-6 py-4 font-medium whitespace-nowrap text-center"},nt={class:"px-6 py-4 text-center"},rt=t("br",null,null,-1),it={class:"px-10"},dt=t("p",{class:"border-b mb-10 text-xl font-semibold"},"Contact",-1),pt={class:"relative overflow-x-auto sm:rounded-lg"},_t={class:"w-full text-sm text-left border rtl:text-right text-gray-500"},ht=t("thead",{class:"text-xs text-gray-700 uppercase"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 bg-gray-50"}," name "),t("th",{scope:"col",class:"px-6 py-3"}," position "),t("th",{scope:"col",class:"px-6 py-3 bg-gray-50"}," phone "),t("th",{scope:"col",class:"px-6 py-3"}," email "),t("th",{scope:"col",class:"px-6 py-3"}," W.A ")])],-1),mt={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"},ut={class:"px-6 py-4"},gt={class:"px-6 py-4 bg-gray-50 d"},xt={class:"px-6 py-4"},ft={class:"px-6 py-4"},yt=["href"],bt={key:1},wt={class:"col-span-12 mt-3 px-10 py-5"},Vt=t("h1",{class:"text-lg border-b border-slate-900 font-semibold w-fit pr-6 mb-10"},"Customers",-1),Pt=t("div",{class:"intro-y block sm:flex items-center h-10"},null,-1),kt={key:1};function vt(l,n,a,f,e,h){const y=c("Card"),g=c("Icon"),b=c("Modal"),w=c("Loading"),V=c("ButtonLink"),P=c("DataTable"),k=c("Pagination"),v=c("Default");return i(),x(v,null,{default:p(()=>[d(b,{show:e.isModalViewOpen,modalLabel:"Detail Customer",modalType:"primary",onCloseModal:h.closeModalView},{default:p(()=>[t("div",F,[d(y,null,{default:p(()=>[t("div",R,[t("h1",W,[u(s(e.dataView.customer_name),1),t("p",X,s(" ("+e.dataView.customer_code+")"),1)]),t("div",q,[t("div",null,[t("p",null,[G,u(": "+s(e.dataView.createdAt),1)])])])]),H,J,t("div",K,[t("table",Q,[U,t("tbody",null,[t("tr",Y,[t("th",Z,s(e.dataView.npwp),1),t("td",$,s(e.dataView.customer_building),1),t("td",tt,s(e.dataView.city),1),t("td",et,s(e.dataView.fax),1),t("td",st,s(e.dataView.telephone),1)])])]),t("table",ot,[at,t("tbody",null,[t("tr",lt,[t("th",ct,s(e.dataView.customer_billing_address),1),t("td",nt,s(e.dataView.customer_shipping_address),1)])])])])]),_:1}),rt,t("div",it,[dt,t("div",pt,[t("table",_t,[ht,t("tbody",null,[(i(!0),_(B,null,E(e.dataView.customer_pic,(r,D)=>(i(),_("tr",{class:"",key:D},[t("th",mt,s(r.title+"."+r.contact_name),1),t("td",ut,s(r.position),1),t("td",gt,s(r.mobile_phone),1),t("td",xt,s(r.email),1),t("td",ft,[r.is_whatsapp?(i(),_("a",{key:0,href:"https://wa.me/"+r.mobile_phone,target:"_blank"},[d(g,{name:"ArrowRight",size:20,class:"bg-green-500 text-white rounded"})],8,yt)):(i(),_("span",bt,[d(g,{name:"XOctagon",size:20,class:"bg-gray-500 text-white rounded"})]))])]))),128))])])])])])]),_:1},8,["show","onCloseModal"]),t("div",wt,[Vt,Pt,e.loading?(i(),x(w,{key:0})):(i(),_("div",kt,[d(P,{theads:e.label_head,items:e.body,btnDelete:!0,btnView:!0,btnEdit:!0,onView:h.handleView,onEdit:h.handleEdit},{default:p(()=>[d(V,{type:"primary",size:"small",icon_name:"Plus",to:"/master/customers/add"},{default:p(()=>[u("New Customer ")]),_:1})]),_:1},8,["theads","items","onView","onEdit"]),d(k,{"current-page":e.currentPage,"total-pages":e.totalPages,"visible-page-count":5,onPageChange:h.handlePageChange},null,8,["current-page","total-pages","onPageChange"])]))])]),_:1})}const zt=z(S,[["render",vt]]);export{zt as default};
