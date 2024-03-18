import{D as V}from"./Default-LfTR1VjV.js";import{_ as j}from"./Icon-aDk_KqCg.js";import{r as p,o as d,b as I,w as _,a as m,d as t,j as l,t as a,c as P,l as J,F as R,p as z,k as Y}from"./index-3VIsnPTN.js";import{u as A}from"./projects-bfIeDXOj.js";import{u as E}from"./products-ORnGpjZz.js";import{u as G}from"./brands-VEDJ9MM6.js";import{u as H}from"./quotations-DKV3vdtf.js";import{u as U}from"./vendors-2swXhNKH.js";import{u as K}from"./profits-CfWhkcUx.js";import{u as W}from"./sales-orders-tqon6XcB.js";import{I as X}from"./InputField-7BnCext7.js";import{u as Z}from"./progress-McAvhHuN.js";import{M as $}from"./MenuCard-iMsFtknn.js";import{B as tt}from"./ButtonLink-9IpDKwVO.js";import{B as et}from"./Button-fTGUJeva.js";import{L as st}from"./Loading-sJ64mZn0.js";import{s as ot}from"./default.css_vue_type_style_index_0_src_true_lang-7xlbMjmG.js";import{D as at}from"./DataTable-aefNwkh5.js";import{M as rt}from"./Modal-eH2qysXC.js";import{T as nt}from"./TextArea-Y7UasRCk.js";import{T as it}from"./TextCurrency-KJDE1gIN.js";import{S as lt}from"./Stepper-DyQ-U5va.js";import{_ as pt}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./Pagination-pdYa9xhx.js";const L=Z();A();E();G();H();U();const g=K(),B=W(),ct={components:{TextCurrency:it,Default:V,Icon:j,MenuCard:$,ButtonLink:tt,Button:et,Loading:st,InputField:X,DataTable:at,Modal:rt,Multiselect:ot,TextArea:nt,Stepper:lt},data(){return{aprove:!1,stepper_menu:[{label:"QT",complete:!1,link:"/quotation/detail/"},{label:"PL",complete:!1,link:"/profit-and-loss/detail/"},{label:"SO",complete:!1,link:"/sales-order/detail/"},{label:"PO",complete:!1,link:"/purchase-order/"},{label:"RG",complete:!1,link:"/receive-list/"},{label:"DO",complete:!1,link:"/delivery-order/"},{label:"IV",complete:!1,link:"/invoice/so/"}],file1:null,file2:null,dataSO:{},loading:!1}},methods:{async updateStepper(){var c;let e=JSON.parse(localStorage.getItem("progress"));await L.getData(e[0].idQT);let o=await L.data_progress;o&&(c=o[1])!=null&&c.status&&(this.isPLexist=!0),await localStorage.setItem("progress",JSON.stringify(o))},formatDateTime(e){const o=new Date(e),c=o.getDate().toString().padStart(2,"0"),S=(o.getMonth()+1).toString().padStart(2,"0"),s=o.getFullYear().toString().slice(-2),n=o.getHours().toString().padStart(2,"0"),h=o.getMinutes().toString().padStart(2,"0"),f=o.getSeconds().toString().padStart(2,"0");return`${c}/${S}/${s} ${n}:${h}:${f}`},formatCurrency(e){return e?new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e):"Rp.0"},handleFileChange1(e){this.file1=e.target.files[0]},handleFileChange2(e){this.file2=e.target.files[0]},async checkPL(){var e,o;await g.getData((o=(e=this.dataSO.profit_and_loss)==null?void 0:e.quotation)==null?void 0:o.quotation_id),console.log("ini data",g.data_profit),g.data_profit.status!==1&&(this.aprove=!0)},async setStepper(){let e=await JSON.parse(localStorage.getItem("progress"));this.stepper_menu[0].complete=e[0].status,this.stepper_menu[0].link=this.stepper_menu[0].link+e[0].idQT,this.stepper_menu[1].complete=e[1].status,this.stepper_menu[1].link=this.stepper_menu[1].link+e[1].idQT,this.stepper_menu[2].complete=e[2].status,this.stepper_menu[2].link=this.stepper_menu[2].link+e[2].idPL,this.stepper_menu[3].complete=e[3].status,this.stepper_menu[3].link=this.stepper_menu[3].link+e[3].idQT,this.stepper_menu[4].complete=e[4].status,this.stepper_menu[4].link=this.stepper_menu[4].link+e[4].idQT,this.stepper_menu[5].complete=e[5].status,this.stepper_menu[5].link=this.stepper_menu[5].link+e[5].idSO,this.stepper_menu[6].complete=e[6].status,this.stepper_menu[6].link=this.stepper_menu[6].link+e[6].idSO}},async created(){this.loading=!0,await this.updateStepper(),await B.getById(this.$route.params.id),this.dataSO=await B.dataDetail,await this.checkPL(),await this.setStepper(),this.loading=!1,console.log(this.dataSO)}},r=e=>(z("data-v-17d7efd4"),e=e(),Y(),e),ut={class:"flex gap-5"},dt={class:"px-20 py-10 w-full flex justify-center items-center"},_t={class:"w-full px-10 py-10 bg-white rounded-xl mt-5"},mt={class:"w-full flex justify-between"},ht={class:"w-full"},ft={class:"font-bold text-lg mb-5"},gt=r(()=>t("b",null,"SO Number #:",-1)),St=r(()=>t("b",null,"SO Date #:",-1)),yt=r(()=>t("b",null,"Quotation #:",-1)),xt=r(()=>t("b",null,"Quotation Date #:",-1)),bt=r(()=>t("b",null,"Customer PO Number #:",-1)),kt=r(()=>t("br",null,null,-1)),wt={class:"flex w-1/2 gap-5 justify-center items-center"},Ot=r(()=>t("hr",null,null,-1)),Dt=r(()=>t("br",null,null,-1)),Tt={class:"w-full mt-10"},vt={class:"relative overflow-x-auto"},Ct=r(()=>t("div",{class:"w-full bg-gray-50 text-gray-700 px-5 py-3 font-semibold"}," List Items ",-1)),qt={class:"w-full text-sm text-left rtl:text-right text-gray-500 mt-2"},It=r(()=>t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"}," Product "),t("th",{scope:"col",class:"px-6 py-3"}," QTY "),t("th",{scope:"col",class:"px-6 py-3 text-center"}," Unit Price "),t("th",{scope:"col",class:"px-6 py-3 text-center"}," Total Price ")])],-1)),Pt={class:"px-6 py-4 text-xs"},Lt={class:"mb-2"},Bt={class:""},Nt={class:"px-6 py-4"},Qt={class:"px-6 py-4 text-right"},Mt={class:"px-6 py-4 text-right"},Ft={class:"bg-white border-b"},Vt=r(()=>t("td",{colspan:"3",class:"px-6 py-4 text-right"},[t("b",null," Subtotal")],-1)),jt={class:"px-6 py-4 text-right"},Jt={class:"bg-white border-b"},Rt=r(()=>t("td",{colspan:"3",class:"px-6 py-4 text-right"},[t("b",null," PPN")],-1)),zt={class:"px-6 py-4 text-right"},Yt={class:"bg-white border-b"},At=r(()=>t("td",{colspan:"3",class:"px-6 py-4 text-right"},[t("b",null," Total")],-1)),Et={class:"px-6 py-4 text-right"};function Gt(e,o,c,S,s,n){const h=p("Loading"),f=p("ButtonLink"),N=p("MenuCard"),Q=p("Stepper"),M=p("Button"),F=p("Default");return s.loading?(d(),I(h,{key:0})):(d(),I(F,{key:1},{default:_(()=>{var y,x,b,k,w,O,D,T,v,C,q;return[m(N,{menuLabel:"Sales Order"},{default:_(()=>{var i,u;return[t("div",ut,[m(f,{type:"secondary",size:"small",to:"/purchase-order/"+((u=(i=s.dataSO.profit_and_loss)==null?void 0:i.quotation)==null?void 0:u.quotation_id)},{default:_(()=>[l(" Next")]),_:1},8,["to"])])]}),_:1}),t("div",dt,[m(Q,{menu:s.stepper_menu},null,8,["menu"])]),t("div",_t,[t("div",mt,[t("div",ht,[t("h1",ft,a((b=(x=(y=s.dataSO)==null?void 0:y.profit_and_loss)==null?void 0:x.customer)==null?void 0:b.customer_name),1),t("h1",null,[gt,l(" "+a(s.dataSO.so_number),1)]),t("h1",null,[St,l(" "+a(n.formatDateTime(s.dataSO.so_date)),1)]),t("h1",null,[yt,l(" "+a((O=(w=(k=s.dataSO)==null?void 0:k.profit_and_loss)==null?void 0:w.quotation)==null?void 0:O.quotation_number),1)]),t("h1",null,[xt,l(" "+a(n.formatDateTime((v=(T=(D=s.dataSO)==null?void 0:D.profit_and_loss)==null?void 0:T.quotation)==null?void 0:v.quotation_date))+" ",1),t("h1",null,[bt,l(" "+a((q=(C=s.dataSO)==null?void 0:C.profit_and_loss)==null?void 0:q.cust_po_number),1)])]),kt]),t("div",wt,[m(M,{type:"secondary",class:"w-fit h-fit",c:"",onClick:e.submitForm,icon_position:"left",size:"small",icon_name:"Download"},{default:_(()=>[l(" Download SO ")]),_:1},8,["onClick"])])]),Ot,Dt,t("div",Tt,[t("div",vt,[Ct,t("table",qt,[It,t("tbody",null,[(d(!0),P(R,null,J(s.dataSO.sales_order_items,(i,u)=>(d(),P("tr",{class:"bg-white border-b",key:u},[t("td",Pt,[t("h1",Lt,a(i.quotation_item.product.product_number),1),t("h1",Bt,a(i.quotation_item.product.product_description),1)]),t("td",Nt,a(i.quotation_item.quantity+" "+i.quotation_item.uom),1),t("td",Qt,a(n.formatCurrency(i.quotation_item.unit_price)),1),t("td",Mt,a(n.formatCurrency(i.quotation_item.total_price)),1)]))),128)),t("tr",Ft,[Vt,t("td",jt,a(n.formatCurrency(s.dataSO.grand_total)),1)]),t("tr",Jt,[Rt,t("td",zt,a(n.formatCurrency(s.dataSO.grand_total*s.dataSO.ppn/100)),1)]),t("tr",Yt,[At,t("td",Et,a(n.formatCurrency(s.dataSO.grand_total*s.dataSO.ppn/100+s.dataSO.grand_total)),1)])])])])])])]}),_:1}))}const ge=pt(ct,[["render",Gt],["__scopeId","data-v-17d7efd4"]]);export{ge as default};