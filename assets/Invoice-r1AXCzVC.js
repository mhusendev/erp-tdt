import{D as L}from"./Default-SnYXce0r.js";import{_ as A}from"./Icon-Jn8JfFO8.js";import{_ as N,f as M,c as T,w as I,r as m,o as d,b as u,a as t,d as f,l as P,F as j,t as c,j as D,s as F,h as V,p as Q,k as R}from"./index-zNN2oSXV.js";import{u as z}from"./projects-tobxMXGL.js";import{u as E}from"./quotations-PJnJ-Ljd.js";import{u as $}from"./purchase-orders-GuxSbtAN.js";import{u as U}from"./profits-MG7iqzmv.js";import{u as q}from"./sales-orders-QhQKUHa6.js";import{u as G}from"./receive-goods-wwosUj76.js";import{u as H}from"./delivery-order-v6aM_l6Z.js";import{u as J}from"./invoice-ntijyz4O.js";import{I as Y}from"./InputField-8O8zhtvs.js";import{M as K}from"./MenuCard-si4DgcMV.js";import{B as W}from"./ButtonLink-lOTu3OkL.js";import{B as X}from"./Button-Nlr5QnjH.js";import{L as Z}from"./Loading-SVqbFMk-.js";import{s as ee}from"./default.css_vue_type_style_index_0_src_true_lang-mMztfpja.js";import{D as te}from"./DataTable-YIr7e0Qr.js";import{M as se}from"./Modal-Egd1_BWl.js";import{T as oe}from"./TextArea-pgYTDawa.js";import{T as ie}from"./TextCurrency-RLa14qax.js";import{S as ae}from"./Stepper-nks7oq9_.js";import"./Pagination-niETu5eI.js";z();E();const re=$();U();q();G();H();const C=J();let n=[];const le={components:{TextCurrency:ie,Default:L,Icon:A,MenuCard:K,ButtonLink:W,Button:X,Loading:Z,InputField:Y,DataTable:te,Modal:se,Multiselect:ee,TextArea:oe,Stepper:ae},data(){return{vendorDOModel:{},body:[],detailOrder:{},temp_data_invoice:[],manualChecked:!0,aprove:!1,stepper_menu:[{label:"QT",complete:!1,link:"/quotation/detail/"},{label:"PL",complete:!1,link:"/profit-and-loss/detail/"},{label:"SO",complete:!1,link:"/sales-order/detail/"},{label:"PO",complete:!1,link:"/purchase-order/"},{label:"RG",complete:!1,link:"/receive-list/"},{label:"DO",complete:!1,link:"/delivery-order/"},{label:"IV",complete:!1,link:"/invoice/so/"}],file1:null,file2:null,dataPO:{},dataInvoice:[],loading:!1,isModalOpen:!1,so_id:"",formserial:M(""),indexSerial:"",dataSN:[],doModel:{stock_out_items:[]}}},methods:{async setStepper(){var s,o,r,i,a,h,_,b,v,x,O,S,y,g;let e=await JSON.parse(localStorage.getItem("progress"));e&&(this.stepper_menu[0].complete=(s=e[0])==null?void 0:s.status,this.stepper_menu[0].link=this.stepper_menu[0].link+((o=e[0])==null?void 0:o.idQT),this.stepper_menu[1].complete=(r=e[1])==null?void 0:r.status,this.stepper_menu[1].link=this.stepper_menu[1].link+((i=e[1])==null?void 0:i.idQT),this.stepper_menu[2].complete=(a=e[2])==null?void 0:a.status,this.stepper_menu[2].link=this.stepper_menu[2].link+((h=e[2])==null?void 0:h.idPL),this.stepper_menu[3].complete=(_=e[3])==null?void 0:_.status,this.stepper_menu[3].link=this.stepper_menu[3].link+((b=e[3])==null?void 0:b.idQT),this.stepper_menu[4].complete=(v=e[4])==null?void 0:v.status,this.stepper_menu[4].link=this.stepper_menu[4].link+((x=e[4])==null?void 0:x.idQT),this.stepper_menu[5].complete=(O=e[5])==null?void 0:O.status,this.stepper_menu[5].link=this.stepper_menu[5].link+((S=e[5])==null?void 0:S.idSO),this.stepper_menu[6].complete=(y=e[6])==null?void 0:y.status,this.stepper_menu[6].link=this.stepper_menu[6].link+((g=e[6])==null?void 0:g.idSO))},formatDateTime(e){const s=new Date(e),o=s.getDate().toString().padStart(2,"0"),r=(s.getMonth()+1).toString().padStart(2,"0"),i=s.getFullYear().toString().slice(-2),a=s.getHours().toString().padStart(2,"0"),h=s.getMinutes().toString().padStart(2,"0"),_=s.getSeconds().toString().padStart(2,"0");return`${o}/${r}/${i} ${a}:${h}:${_}`},formatCurrency(e){return e?new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e):"Rp.0"},handleFileChange1(e){this.file1=e.target.files[0]},handleFileChange2(e){this.file2=e.target.files[0]},async filterDataforTable(){const e=["createdAt","updatedAt","history","vendor_id","quotation_id","vendor_name","vendor_pic_name","vendor_pic_email","vendor_pic_id","inv_vendor_attachment","so_id","project_id","receive_type","po_id"],s=await re.data_po.map(o=>Object.fromEntries(Object.entries(o).filter(([i])=>!e.includes(i))));for(let o in s)s[o].total=this.formatCurrency(s[o].total);return s},ModalSerial(e){this.isModalOpen=!0,this.indexSerial=e,console.log(e),n=[],console.log(n)},ScanSerial(e){if(this.formserial!=="")if(this.dataPO.purchaseOrderItems[e].serial_numbers){n=this.dataPO.purchaseOrderItems[e].serial_numbers,n.push(this.formserial);let s=n;this.dataPO.purchaseOrderItems[e].serial_numbers=s}else{n.push(this.formserial);let s=n;this.dataPO.purchaseOrderItems[e].serial_numbers=s}this.formserial=M(""),console.log(this.dataPO)},removeItem(e,s){console.log(this.dataPO.purchaseOrderItems[this.indexSerial].serial_numbers),this.dataPO.purchaseOrderItems[this.indexSerial].serial_numbers=this.dataPO.purchaseOrderItems[this.indexSerial].serial_numbers.filter(o=>o!==e)},EnterSerial(e){if(this.formserial!=="")if(this.dataPO.purchaseOrderItems[e].serial_numbers){n=this.dataPO.purchaseOrderItems[e].serial_numbers,n.push(this.formserial);let s=n;this.dataPO.purchaseOrderItems[e].serial_numbers=s}else{n.push(this.formserial);let s=n;this.dataPO.purchaseOrderItems[e].serial_numbers=s}this.formserial=M(""),console.log(this.dataPO)},async SaveData(){let e=[];for(let o in this.temp_data_invoice)for(let r in this.temp_data_invoice[o].delivery_items)this.temp_data_invoice[o].delivery_items[r].selectedAll&&e.push(this.temp_data_invoice[o].delivery_items[r].doItem_id);let s={doItems_id:e,so_id:this.$route.params.id};C.PostData(s)},async mappingForSave(e){return(await e.map(o=>{const r=o.receive_items.filter(i=>i.receive_item_serials_json.some(a=>a.selected)).map(i=>({product_id:i.product_id,product_number:i.product_number,uom:i.uom,serial_numbers:i.receive_item_serials_json.filter(a=>a.selected).map(a=>a.serial)}));return{po_id:o.po_id,items_out:r}})).filter(function(o){return o.items_out.length>0})},ModalShow(e){console.log(e),this.isModalOpen=!0,this.detailOrder=e},closeModal(){this.isModalOpen=!1},async mappingData(){},handleSelectAll(e,s){if(console.log(e),e.selectedAll)for(let o in e.receive_item_serials_json)e.receive_item_serials_json[o].selected=!0;else for(let o in e.receive_item_serials_json)e.receive_item_serials_json[o].selected=!1},selectedSingle(e,s,o,r){s.selected||(e.selectedAll=!1)},replaceObjectById(e,s,o){var r=!1,i=e.map(function(a){return a.rg_id===s?(r=!0,o):a});return r||i.push(o),i},SaveDataTotemp(){this.temp_data_invoice.length!=0?this.temp_data_invoice=this.replaceObjectById(this.temp_data_invoice,this.detailOrder.rg_id,this.detailOrder):this.temp_data_invoice.push(this.detailOrder),console.log(this.temp_data_invoice),this.isModalOpen=!1}},async created(){this.loading=!0,await this.setStepper(),await C.listBySO(this.$route.params.id),this.dataInvoice=await C.lisBy_so,this.so_id=this.$route.params.id,this.loading=!1,console.log(this.dataInvoice)}},p=e=>(Q("data-v-5ede6a12"),e=e(),R(),e),ne={class:"flex gap-5"},de={class:"bg-white px-5 py-5 flex justify-between mr-10"},ce=p(()=>t("div",null,[t("h1",{class:"font-bold text-lg"},"# Select Product items for Invoice")],-1)),pe={class:"h-[700px] px-10 py-10 w-[1000px] bg-slate-200 overflow-y-auto"},_e={class:"flex justify-center items-center gap-3"},me={class:"w-full"},ue={class:"bg-gray-100 px-5 py-2 flex gap-3"},he=["onUpdate:modelValue","onChange"],fe=p(()=>t("b",null,"#",-1)),ve={class:"bg-white rounded px-5 py-5 shadow-md flex justify-between gap-5"},ye={class:"w-full bg-white py-3 shadow px-2 rounded"},ge=p(()=>t("b",null,"Part Number #: ",-1)),be={class:"w-full bg-white py-3 shadow px-2 rounded"},xe=p(()=>t("b",null,"UOM #: ",-1)),Oe={class:"px-5 py-2"},Se=p(()=>t("div",{class:"border-b w-fit px-5 py-2 mt-1"},"Serial Number",-1)),we={class:"w-full h-[150px] overflow-y-scroll px-10"},ke={class:"w-full grid grid-cols-3 gap-2 mt-5"},Ie=p(()=>t("div",{class:"flex mt-10 justify-end"},null,-1)),De={class:"px-20 py-10 w-full flex justify-center items-center"},Me={class:"w-full px-10 py-10 bg-white"},Pe={class:"w-full grid grid-cols-2 gap-5 mt-5 bg-white"},je={class:"w-full"},Ce={class:"font-semibold text-lg px-5"},Te={class:"text-md px-5"},Be=p(()=>t("b",null,"SO Number #:",-1)),Le={class:"w-full mt-10"},Ae={class:"flex justify-end"},Ne={class:"relative overflow-x-auto"},Fe={class:"w-full text-sm text-left rtl:text-right text-gray-500 mt-2"},Ve=p(()=>t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"}," Customer "),t("th",{scope:"col",class:"px-6 py-3"}," Invoice Number "),t("th",{scope:"col",class:"px-6 py-3"}," Date "),t("th",{scope:"col",class:"px-6 py-3"}," # ")])],-1)),Qe={class:"px-6 py-4 text-xs"},Re={class:"mb-2"},ze={class:"px-6 py-4"},Ee={class:"px-6 py-4"},$e={class:"px-6 py-4 flex justify-center"};function Ue(e,s,o,r,i,a){const h=m("Loading"),_=m("ButtonLink"),b=m("MenuCard"),v=m("Button"),x=m("Modal"),O=m("Stepper"),S=m("Default");return i.loading?(d(),T(h,{key:0})):(d(),T(S,{key:1},{default:I(()=>{var y,g;return[u(b,{menuLabel:"List Invoice"},{default:I(()=>[t("div",ne,[u(_,{type:"secondary",size:"small",icon_name:"ArrowLeft",icon_position:"left",to:"/list-delivery/"+i.so_id},null,8,["to"])])]),_:1}),u(x,{show:i.isModalOpen,modalType:"primary",modalLabel:"Product Items ",onCloseModal:a.closeModal,closeModalIcon:!1},{default:I(()=>[t("div",de,[ce,u(v,{type:"success",onClick:s[0]||(s[0]=l=>a.SaveDataTotemp()),class:"w-fit h-fit",icon_position:"left",size:"small",icon_name:"Check"})]),t("div",pe,[t("div",_e,[t("div",me,[(d(!0),f(j,null,P(i.detailOrder.delivery_items,(l,w)=>(d(),f("div",{class:"w-full bg-white shadow-md rounded-lg mb-5",key:w},[t("div",ue,[V(t("input",{type:"checkbox","onUpdate:modelValue":k=>l.selectedAll=k,onChange:k=>a.handleSelectAll(l,w),class:"form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"},null,40,he),[[F,l.selectedAll]]),fe]),t("div",ve,[t("div",ye,[ge,D(" "+c(l.product_number),1)]),t("div",be,[xe,D(c(l.uom),1)])]),t("div",Oe,[Se,t("div",we,[t("div",ke,[(d(!0),f(j,null,P(l.delivery_item_serials,(k,B)=>(d(),f("div",{class:"bg-gray-200 px-3 py-2 shadow-md flex gap-3",key:B},c(k),1))),128))])])])]))),128))])]),Ie])]),_:1},8,["show","onCloseModal"]),t("div",De,[u(O,{menu:i.stepper_menu},null,8,["menu"])]),t("div",Me,[t("div",Pe,[t("div",je,[t("h1",Ce,c((y=i.dataInvoice[0])==null?void 0:y.customer_name),1),t("h1",Te,[Be,D(" "+c((g=i.dataInvoice[0])==null?void 0:g.so_number),1)])])]),t("div",Le,[t("div",Ae,[u(v,{type:"success",onClick:s[1]||(s[1]=l=>a.SaveData()),class:"w-fit h-fit",icon_position:"left",size:"small",icon_name:"Check"},{default:I(()=>[D(" Project Complete ")]),_:1})]),t("div",Ne,[t("table",Fe,[Ve,t("tbody",null,[(d(!0),f(j,null,P(i.dataInvoice,(l,w)=>(d(),f("tr",{class:"bg-white border-b",key:w},[t("td",Qe,[t("h1",Re,c(l.customer_name),1)]),t("td",ze,c(l.invoice_number),1),t("td",Ee,c(a.formatDateTime(l.invoice_date)),1),t("td",$e,[u(_,{type:"secondary",size:"small",icon_name:"Eye",icon_position:"left",to:"/invoice/detail/"+l.inv_info_id},null,8,["to"])])]))),128))])])])])])]}),_:1}))}const ut=N(le,[["render",Ue],["__scopeId","data-v-5ede6a12"]]);export{ut as default};
