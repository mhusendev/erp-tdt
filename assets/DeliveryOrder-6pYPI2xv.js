import{D as A}from"./Default-SnYXce0r.js";import{_ as F}from"./Icon-Jn8JfFO8.js";import{_ as Q,f as C,c as R,w as b,r as _,o as d,b as m,a as s,j as M,d as p,l as I,F as P,t as u,s as V,h as B,g as N,p as U,k as $}from"./index-zNN2oSXV.js";import{u as q}from"./projects-tobxMXGL.js";import{u as z}from"./progress-BH9j7L3D.js";import{u as E}from"./quotations-PJnJ-Ljd.js";import{u as J}from"./purchase-orders-GuxSbtAN.js";import{u as H}from"./profits-MG7iqzmv.js";import{u as Y}from"./sales-orders-QhQKUHa6.js";import{u as K}from"./receive-goods-wwosUj76.js";import{u as W}from"./delivery-order-v6aM_l6Z.js";import{I as X}from"./InputField-8O8zhtvs.js";import{M as Z}from"./MenuCard-si4DgcMV.js";import{B as ee}from"./ButtonLink-lOTu3OkL.js";import{B as te}from"./Button-Nlr5QnjH.js";import{L as se}from"./Loading-SVqbFMk-.js";import{s as oe}from"./default.css_vue_type_style_index_0_src_true_lang-mMztfpja.js";import{D as ae}from"./DataTable-YIr7e0Qr.js";import{M as ie}from"./Modal-Egd1_BWl.js";import{T as re}from"./TextArea-pgYTDawa.js";import{T as le}from"./TextCurrency-RLa14qax.js";import{S as ne}from"./Stepper-nks7oq9_.js";import"./Pagination-niETu5eI.js";const L=z();q();E();const de=J(),ce=H();Y();const G=K(),j=W();let c=[];const pe={components:{TextCurrency:le,Default:A,Icon:F,MenuCard:Z,ButtonLink:ee,Button:te,Loading:se,InputField:X,DataTable:ae,Modal:ie,Multiselect:oe,TextArea:re,Stepper:ne},data(){return{vendorDOModel:{},body:[],detailOrder:{},stock_out_temp:[],manualChecked:!0,aprove:!1,stepper_menu:[{label:"QT",complete:!1,link:"/quotation/detail/"},{label:"PL",complete:!1,link:"/profit-and-loss/detail/"},{label:"SO",complete:!1,link:"/sales-order/detail/"},{label:"PO",complete:!1,link:"/purchase-order/"},{label:"RG",complete:!1,link:"/receive-list/"},{label:"DO",complete:!1,link:"/delivery-order/"},{label:"IV",complete:!1,link:"/invoice/so/"}],file1:null,file2:null,dataPO:{},so_id:"",dataRG:[],loading:!1,isModalOpen:!1,formserial:C(""),indexSerial:"",dataSN:[],doModel:{stock_out_items:[]}}},methods:{async updateStepper(){var o;let e=JSON.parse(localStorage.getItem("progress"));await L.getData(e[0].idQT);let t=await L.data_progress;t&&(o=t[1])!=null&&o.status&&(this.isPLexist=!0),await localStorage.setItem("progress",JSON.stringify(t))},async setStepper(){var t,o,l,a,i,f,y,S,g,w,k,O,x,r;let e=await JSON.parse(localStorage.getItem("progress"));e&&(this.stepper_menu[0].complete=(t=e[0])==null?void 0:t.status,this.stepper_menu[0].link=this.stepper_menu[0].link+((o=e[0])==null?void 0:o.idQT),this.stepper_menu[1].complete=(l=e[1])==null?void 0:l.status,this.stepper_menu[1].link=this.stepper_menu[1].link+((a=e[1])==null?void 0:a.idQT),this.stepper_menu[2].complete=(i=e[2])==null?void 0:i.status,this.stepper_menu[2].link=this.stepper_menu[2].link+((f=e[2])==null?void 0:f.idPL),this.stepper_menu[3].complete=(y=e[3])==null?void 0:y.status,this.stepper_menu[3].link=this.stepper_menu[3].link+((S=e[3])==null?void 0:S.idQT),this.stepper_menu[4].complete=(g=e[4])==null?void 0:g.status,this.stepper_menu[4].link=this.stepper_menu[4].link+((w=e[4])==null?void 0:w.idQT),this.stepper_menu[5].complete=(k=e[5])==null?void 0:k.status,this.stepper_menu[5].link=this.stepper_menu[5].link+((O=e[5])==null?void 0:O.idSO),this.stepper_menu[6].complete=(x=e[6])==null?void 0:x.status,this.stepper_menu[6].link=this.stepper_menu[6].link+((r=e[6])==null?void 0:r.idSO))},formatDateTime(e){const t=new Date(e),o=t.getDate().toString().padStart(2,"0"),l=(t.getMonth()+1).toString().padStart(2,"0"),a=t.getFullYear().toString().slice(-2),i=t.getHours().toString().padStart(2,"0"),f=t.getMinutes().toString().padStart(2,"0"),y=t.getSeconds().toString().padStart(2,"0");return`${o}/${l}/${a} ${i}:${f}:${y}`},formatCurrency(e){return e?new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e):"Rp.0"},handleFileChange1(e){this.file1=e.target.files[0]},handleFileChange2(e){this.file2=e.target.files[0]},async CheckStepper(){this.aprove=!0,this.stepper_menu[2].complete=!0,this.stepper_menu[3].complete=!0,this.stepper_menu[4].complete=!0,this.stepper_menu[5].complete=!0,this.stepper_menu[2].link="/sales-order/detail/"+ce.data_profit.pl_id},async filterDataforTable(){const e=["createdAt","updatedAt","history","vendor_id","quotation_id","vendor_name","vendor_pic_name","vendor_pic_email","vendor_pic_id","inv_vendor_attachment","so_id","project_id","receive_type","po_id"],t=await de.data_po.map(o=>Object.fromEntries(Object.entries(o).filter(([a])=>!e.includes(a))));for(let o in t)t[o].total=this.formatCurrency(t[o].total);return t},ModalSerial(e){this.isModalOpen=!0,this.indexSerial=e,console.log(e),c=[],console.log(c)},ScanSerial(e){if(this.formserial!=="")if(this.dataPO.purchaseOrderItems[e].serial_numbers){c=this.dataPO.purchaseOrderItems[e].serial_numbers,c.push(this.formserial);let t=c;this.dataPO.purchaseOrderItems[e].serial_numbers=t}else{c.push(this.formserial);let t=c;this.dataPO.purchaseOrderItems[e].serial_numbers=t}this.formserial=C(""),console.log(this.dataPO)},removeItem(e,t){console.log(this.dataPO.purchaseOrderItems[this.indexSerial].serial_numbers),this.dataPO.purchaseOrderItems[this.indexSerial].serial_numbers=this.dataPO.purchaseOrderItems[this.indexSerial].serial_numbers.filter(o=>o!==e)},EnterSerial(e){if(this.formserial!=="")if(this.dataPO.purchaseOrderItems[e].serial_numbers){c=this.dataPO.purchaseOrderItems[e].serial_numbers,c.push(this.formserial);let t=c;this.dataPO.purchaseOrderItems[e].serial_numbers=t}else{c.push(this.formserial);let t=c;this.dataPO.purchaseOrderItems[e].serial_numbers=t}this.formserial=C(""),console.log(this.dataPO)},async SaveData(){let e=await this.mappingForSave(this.stock_out_temp);this.doModel.stock_out_items=await e,this.doModel.so_id=await this.$route.params.id,console.log(this.doModel),await j.PostData(this.doModel),await this.updateStepper(),await this.setStepper()},async mappingForSave(e){return(await e.map(o=>{const l=o.receive_items.filter(a=>a.receive_item_serials_json.some(i=>i.selected)).map(a=>({product_id:a.product_id,product_number:a.product_number,uom:a.uom,serial_numbers:a.receive_item_serials_json.filter(i=>i.selected).map(i=>i.serial)}));return{po_id:o.po_id,items_out:l}})).filter(function(o){return o.items_out.length>0})},ModalShow(e){console.log(e),this.isModalOpen=!0,this.detailOrder=e},closeModal(){this.isModalOpen=!1},async mappingData(){},handleSelectAll(e,t){if(console.log(e),e.selectedAll)for(let o in e.receive_item_serials_json)e.receive_item_serials_json[o].hasOwnProperty("selected")&&(e.receive_item_serials_json[o].selected=!0);else for(let o in e.receive_item_serials_json)e.receive_item_serials_json[o].hasOwnProperty("selected")&&(e.receive_item_serials_json[o].selected=!1)},selectedSingle(e,t,o,l){t.selected||(e.selectedAll=!1)},replaceObjectById(e,t,o){var l=!1,a=e.map(function(i){return i.rg_id===t?(l=!0,o):i});return l||a.push(o),a},SaveDataTotemp(){this.stock_out_temp.length!=0?this.stock_out_temp=this.replaceObjectById(this.stock_out_temp,this.detailOrder.rg_id,this.detailOrder):this.stock_out_temp.push(this.detailOrder),console.log(this.stock_out_temp),this.isModalOpen=!1}},async created(){this.loading=!0,await this.setStepper(),await G.listSO(this.$route.params.id),await j.CheckSerial(this.$route.params.id),this.dataSN=await j.dataSerial,this.dataRG=await G.lisBy_so;for(let e in this.dataRG)for(let t in this.dataRG[e].receive_items){this.dataRG[e].receive_items[t].selectedAll=!0,this.dataRG[e].receive_items[t].receive_item_serials_json=[];for(let o in this.dataRG[e].receive_items[t].receive_item_serials){let l=this.dataRG[e].receive_items[t].receive_item_serials[o],a;this.dataSN&&(this.dataSN.includes(l)?a={serial:l,disable:!0}:a={serial:l,disable:!1,selected:!0}),this.dataRG[e].receive_items[t].receive_item_serials_json.push(a)}}this.so_id=this.$route.params.id,this.loading=!1,console.log(this.dataRG)}},h=e=>(U("data-v-78398daf"),e=e(),$(),e),ue={class:"flex gap-5"},_e={class:"bg-white px-5 py-5 flex justify-between mr-10"},me=h(()=>s("div",null,[s("h1",{class:"font-bold text-lg"},"# Select Product items for Process to Delivery")],-1)),he={class:"h-[500px] px-10 py-10 w-[1000px] bg-slate-200 overflow-y-auto"},fe={class:"flex justify-center items-center gap-3"},ye={class:"w-full"},ge={class:"bg-white rounded px-5 py-5 shadow-md flex justify-between gap-5"},ve={class:"w-full bg-white py-3 shadow px-2 rounded"},be=h(()=>s("b",null,"Part Number #: ",-1)),Se={class:"w-full bg-white py-3 shadow px-2 rounded"},we=h(()=>s("b",null,"UOM #: ",-1)),ke={class:"px-5 py-2"},Oe={class:"bg-gray-100 px-5 py-2 flex gap-3"},xe=["onUpdate:modelValue","onChange"],De=h(()=>s("b",null,"Select All",-1)),Me=h(()=>s("div",{class:"border-b w-fit px-5 py-2 mt-1"},"Serial Number",-1)),Ie={class:"w-full h-[150px] overflow-y-scroll px-10"},Pe={class:"w-full grid grid-cols-3 gap-2 mt-5"},Ce=["onUpdate:modelValue","onChange","disabled"],je={class:"w-full"},Te={key:0,class:"border-t w-full"},Re=h(()=>s("div",{class:"flex mt-10 justify-end"},null,-1)),Ve={class:"px-20 py-10 w-full flex justify-center items-center"},Be={class:"w-full px-10 py-10 bg-white"},Ne={class:"w-full grid grid-cols-2 gap-5 mt-5 bg-white"},Le={class:"w-full flex justify-end"},Ge={class:"w-full mt-10"},Ae={class:"relative overflow-x-auto"},Fe={class:"w-full text-sm text-left rtl:text-right text-gray-500 mt-2"},Qe=h(()=>s("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50"},[s("tr",null,[s("th",{scope:"col",class:"px-6 py-3"}," Receive Date "),s("th",{scope:"col",class:"px-6 py-3"}," Vendor "),s("th",{scope:"col",class:"px-6 py-3"}," PO Number "),s("th",{scope:"col",class:"px-6 py-3"}," Vendor DO "),s("th",{scope:"col",class:"px-6 py-3"}," Total In "),s("th",{scope:"col",class:"px-6 py-3"}," # ")])],-1)),Ue={class:"px-6 py-4 text-xs"},$e={class:"mb-2"},qe={class:"px-6 py-4"},ze={class:"px-6 py-4"},Ee={class:"px-6 py-4"},Je={class:"px-6 py-4"},He={class:"px-6 py-4"};function Ye(e,t,o,l,a,i){const f=_("Loading"),y=_("ButtonLink"),S=_("MenuCard"),g=_("Button"),w=_("Modal"),k=_("Stepper"),O=_("InputField"),x=_("Default");return a.loading?(d(),R(f,{key:0})):(d(),R(x,{key:1},{default:b(()=>[m(S,{menuLabel:"Delivery Order"},{default:b(()=>[s("div",ue,[m(y,{type:"secondary",size:"small",icon_name:"Eye",icon_position:"left",to:"/list-delivery/"+a.so_id},{default:b(()=>[M(" List Delivery")]),_:1},8,["to"])])]),_:1}),m(w,{show:a.isModalOpen,modalType:"primary",modalLabel:"Received Product Items",onCloseModal:i.closeModal,closeModalIcon:!1},{default:b(()=>[s("div",_e,[me,m(g,{type:"success",onClick:t[0]||(t[0]=r=>i.SaveDataTotemp()),class:"w-fit h-fit",icon_position:"left",size:"small",icon_name:"Check"})]),s("div",he,[s("div",fe,[s("div",ye,[(d(!0),p(P,null,I(a.detailOrder.receive_items,(r,v)=>(d(),p("div",{class:"w-full bg-white shadow-md rounded-lg mb-5 pb-5",key:v},[s("div",ge,[s("div",ve,[be,M(" "+u(r.product_number),1)]),s("div",Se,[we,M(u(r.uom),1)])]),s("div",ke,[s("div",Oe,[B(s("input",{type:"checkbox","onUpdate:modelValue":n=>r.selectedAll=n,onChange:n=>i.handleSelectAll(r,v),class:"form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"},null,40,xe),[[V,r.selectedAll]]),De]),Me,s("div",Ie,[s("div",Pe,[(d(!0),p(P,null,I(r.receive_item_serials_json,(n,D)=>(d(),p("div",{class:"bg-white px-3 py-2 shadow-md flex gap-3",key:D},[n.hasOwnProperty("selected")?B((d(),p("input",{key:0,type:"checkbox","onUpdate:modelValue":T=>n.selected=T,onChange:T=>i.selectedSingle(r,n,v,D),class:"form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out",disabled:n.disable},null,40,Ce)),[[V,n.selected]]):N("",!0),s("div",je,[s("h1",null,u(n==null?void 0:n.serial),1),n.disable?(d(),p("h1",Te,"Delivered "+u(),1)):N("",!0)])]))),128))])])])]))),128))])]),Re])]),_:1},8,["show","onCloseModal"]),s("div",Ve,[m(k,{menu:a.stepper_menu},null,8,["menu"])]),s("div",Be,[s("div",Ne,[m(O,{type:"date",class:"w-full",placeholder:"Receive Date",modelValue:a.doModel.do_date,"onUpdate:modelValue":t[1]||(t[1]=r=>a.doModel.do_date=r)},null,8,["modelValue"]),s("div",Le,[m(g,{type:"success",onClick:t[2]||(t[2]=r=>i.SaveData()),class:"w-fit h-fit",icon_position:"left",size:"small",icon_name:"Truck"},{default:b(()=>[M(" Process To Delivery ")]),_:1})])]),s("div",Ge,[s("div",Ae,[s("table",Fe,[Qe,s("tbody",null,[(d(!0),p(P,null,I(a.dataRG,(r,v)=>(d(),p("tr",{class:"bg-white border-b",key:v},[s("td",Ue,[s("h1",$e,u(i.formatDateTime(r.receive_date)),1)]),s("td",qe,u(r.vendor_name),1),s("td",ze,u(r.po_number),1),s("td",Ee,u(r.vendor_do_number),1),s("td",Je,[(d(!0),p(P,null,I(r.total_quantity_in,(n,D)=>(d(),p("h1",{key:D},u(n.quantity+"   "+n.uom+"   "),1))),128))]),s("td",He,[m(g,{type:"secondary",onClick:n=>i.ModalShow(r),class:"w-fit h-fit",icon_position:"left",size:"small",icon_name:"SearchCheck"},null,8,["onClick"])])]))),128))])])])])])]),_:1}))}const vt=Q(pe,[["render",Ye],["__scopeId","data-v-78398daf"]]);export{vt as default};
