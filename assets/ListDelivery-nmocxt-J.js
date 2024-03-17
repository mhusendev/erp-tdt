import{D as U}from"./Default-vLo-ryjW.js";import{_ as N}from"./Icon-gQmAwROU.js";import{u as Q,x as $,m as z,y as c,S as p,_ as G,f as B,c as C,w as S,r as y,o as h,b as v,a as s,d as b,l as D,F as A,t as f,j as O,s as q,h as H,p as J,k as Y}from"./index-ZXAHIXJB.js";import{u as K}from"./projects-Q1HwCUmv.js";import{u as W}from"./quotations-45aZL0RE.js";import{u as X}from"./purchase-orders-pdNMJOzq.js";import{u as Z}from"./profits-5ioKMry-.js";import{u as ee}from"./sales-orders-uo69e2Qp.js";import{u as te}from"./receive-goods-xGACJ5K_.js";import{u as se}from"./delivery-order-vGV_jgNc.js";import{I as oe}from"./InputField-dPOzz2n0.js";import{M as ae}from"./MenuCard-PiKD37ig.js";import{B as ie}from"./ButtonLink-d1sIslZn.js";import{B as re}from"./Button-L62cJvwW.js";import{L as le}from"./Loading-_KMABdLz.js";import{s as ne}from"./default.css_vue_type_style_index_0_src_true_lang-z7wFf1h1.js";import{D as de}from"./DataTable-Tl8Fs48C.js";import{M as ce}from"./Modal-DPgTFCMj.js";import{T as pe}from"./TextArea-ksnhi9rg.js";import{T as _e}from"./TextCurrency-QJtIun8F.js";import{S as ue}from"./Stepper-07h0EuT2.js";import"./Pagination-kq5k-6sy.js";var me={VITE_API_BASE_URL:"https://auth-erp-tdt.cws.co.id/erp-tdt/api",VITE_API_BASE_URL2:"https://backend-dani-erp-tdt.cws.co.id/erp-tdt/api",VITE_API_AUTH_URL:"https://backend-keycloak-erp-tdt.cws.co.id/keycloak/api",VITE_APP_MODE:"dev",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const d=Q(),_=me,u={getByPO:"/invoice-order/?po_id=",post:"/invoice-order/so/",search:"/invoice-order?search=",getbyid:"/invoice-order/",checkSerial:"/invoice-order/serial/so/",put:"/invoice-order/",listByPO:"/invoice-order/po/",listBySO:"/invoice-order/?so_id=",uploadCustPO:"/invoice-order/upload-cust-po/",uploadVendQT:"/invoice-order/upload-vendor-quotation/",approvePl:"/invoice-order/approve/"},m={headers:{Authorization:`Bearer ${d.access_token}`}},he=$({id:"invoice-order",state:()=>z({data_rg:[],list_rg:[],lisBy_so:[],loading:!1,headers:[],message:"",dataEdit:{},totalPage:0,currentPage:1,perPage:0,dataSearch:[],itemTemp:[],dataSerial:[],dataDetail:{}}),getters:{setValuedata(t){this.data_rg=t}},actions:{async CheckSerial(t){try{this.setLoading(!0);const e=await c.get(_.VITE_API_BASE_URL2+u.checkSerial+t,m);this.dataSerial=e.data.data}catch(e){console.log(e.response.data.message),d.sessionFail(e.response.data.message),console.log(e)}finally{this.setLoading(!1)}},approvePL(t){c.put(_.VITE_API_BASE_URL2+u.approvePl+t,{},m).then(e=>{this.message="Berhasil Approve PL",new p({position:"top-end",html:'<p style="color:#ffff">success save data!</p>',showConfirmButton:!1,background:"green",timer:1500})}).catch(e=>{console.error("Error:",e),d.sessionFail(e.response.data.message),this.message="gagal Approve PL",new p({position:"top-end",html:'<p style="color:#ffff">failed save data!</p>',background:"red",showConfirmButton:!1,timer:1500})})},setLoading(t){this.loading=t},async UploadCustPO(t,e){try{(await c.put(_.VITE_API_BASE_URL2+u.uploadCustPO+t,e,m)).status!==200&&new p({position:"top-end",html:'<p style="color:#ffff">failed upload file customer po!</p>',background:"red",showConfirmButton:!1,timer:1500}),new p({position:"top-end",html:'<p style="color:#ffff">success upload file customer po!</p>',showConfirmButton:!1,background:"green",timer:1500})}catch(o){d.sessionFail(o.response.data.message),console.log(o)}},async UploadVendQT(t,e){try{(await c.put(_.VITE_API_BASE_URL2+u.uploadVendQT+t,e,m)).status!==200&&new p({position:"top-end",html:'<p style="color:#ffff">failed upload file vendor QT!</p>',background:"red",showConfirmButton:!1,timer:1500}),new p({position:"top-end",html:'<p style="color:#ffff">success upload file vendor QT!</p>',showConfirmButton:!1,background:"green",timer:1500})}catch(o){d.sessionFail(o.response.data.message),console.log(o)}},async listSO(t){try{this.setLoading(!0);const e=await c.get(_.VITE_API_BASE_URL2+u.listBySO+t,m);this.lisBy_so=e.data.data,console.log(e.data)}catch(e){console.log(e.response.data.message),d.sessionFail(e.response.data.message),console.log(e)}finally{this.setLoading(!1)}},async listByPO(t){try{this.setLoading(!0);const e=await c.get(_.VITE_API_BASE_URL2+u.listByPO+t,m);this.list_rg=e.data.data}catch(e){console.log(e.response.data.message),d.sessionFail(e.response.data.message),console.log(e)}finally{this.setLoading(!1)}},async getData(t){try{this.setLoading(!0);const e=await c.get(_.VITE_API_BASE_URL2+u.getByPO+t,m);this.data_rg=e.data.data}catch(e){console.log(e.response.data.message),d.sessionFail(e.response.data.message),console.log(e)}finally{this.setLoading(!1)}},async getById(t){try{const e=await c.get(_.VITE_API_BASE_URL2+u.getbyid+t,m);this.dataDetail=e.data.data}catch(e){d.sessionFail(e.response.data.message),console.log(e)}},async PostData(t){console.log(JSON.stringify(t)),c.post(_.VITE_API_BASE_URL2+u.post+t.so_id,t,m).then(e=>{this.message="Invoice Created",new p({position:"top-end",html:'<p style="color:#ffff">Invoice Created</p>',showConfirmButton:!1,background:"green",timer:1500}),window.location.reload()}).catch(e=>{new p({position:"top-end",html:'<p style="color:#ffff">Failed to Create Invoice</p>',background:"red",showConfirmButton:!1,timer:1500}),console.error("Error:",e),d.sessionFail(e.response.data.message),this.message="gagal Input Data",new p({position:"top-end",html:'<p style="color:#ffff">failed save data!</p>',background:"red",showConfirmButton:!1,timer:1500})})},async Search(t){try{this.setLoading(!0);const e=await c.get(_.VITE_API_BASE_URL2+u.search+t,m);return this.dataSearch=e.data.data,e.data.data}catch(e){d.sessionFail(e.response.data.message),console.log(e)}finally{this.setLoading(!1)}},PutData(t){c.put(_.VITE_API_BASE_URL2+u.put+t.brand_id,t,m).then(e=>{this.message="Berhasil Input Data",new p({text:"Berhasil",icon:"success"})}).catch(e=>{console.error("Error:",e),d.sessionFail(e.response.data.message),this.message="gagal Input Data",new p({text:"Gagal",icon:"warning"})})}}});K();W();const fe=X(),ge=Z();ee();te();const T=se(),ye=he();let n=[];const ve={components:{TextCurrency:_e,Default:U,Icon:N,MenuCard:ae,ButtonLink:ie,Button:re,Loading:le,InputField:oe,DataTable:de,Modal:ce,Multiselect:ne,TextArea:pe,Stepper:ue},data(){return{vendorDOModel:{},body:[],detailOrder:{},temp_data_invoice:[],manualChecked:!0,aprove:!1,stepper_menu:[{label:"QT",complete:!0,link:""},{label:"PL",complete:!0,link:""},{label:"SO",complete:!1,link:""},{label:"PO",complete:!1,link:""},{label:"RG",complete:!1,link:""},{label:"DO",complete:!1,link:""},{label:"INV",complete:!1,link:""}],file1:null,file2:null,dataPO:{},dataDO:[],loading:!1,isModalOpen:!1,so_id:"",formserial:B(""),indexSerial:"",dataSN:[],doModel:{stock_out_items:[]}}},methods:{formatDateTime(t){const e=new Date(t),o=e.getDate().toString().padStart(2,"0"),l=(e.getMonth()+1).toString().padStart(2,"0"),a=e.getFullYear().toString().slice(-2),i=e.getHours().toString().padStart(2,"0"),x=e.getMinutes().toString().padStart(2,"0"),P=e.getSeconds().toString().padStart(2,"0");return`${o}/${l}/${a} ${i}:${x}:${P}`},formatCurrency(t){return t?new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t):"Rp.0"},handleFileChange1(t){this.file1=t.target.files[0]},handleFileChange2(t){this.file2=t.target.files[0]},async CheckStepper(){this.aprove=!0,this.stepper_menu[2].complete=!0,this.stepper_menu[3].complete=!0,this.stepper_menu[4].complete=!0,this.stepper_menu[5].complete=!0,this.stepper_menu[2].link="/sales-order/detail/"+ge.data_profit.pl_id},async filterDataforTable(){const t=["createdAt","updatedAt","history","vendor_id","quotation_id","vendor_name","vendor_pic_name","vendor_pic_email","vendor_pic_id","inv_vendor_attachment","so_id","project_id","receive_type","po_id"],e=await fe.data_po.map(o=>Object.fromEntries(Object.entries(o).filter(([a])=>!t.includes(a))));for(let o in e)e[o].total=this.formatCurrency(e[o].total);return e},ModalSerial(t){this.isModalOpen=!0,this.indexSerial=t,console.log(t),n=[],console.log(n)},ScanSerial(t){if(this.formserial!=="")if(this.dataPO.purchaseOrderItems[t].serial_numbers){n=this.dataPO.purchaseOrderItems[t].serial_numbers,n.push(this.formserial);let e=n;this.dataPO.purchaseOrderItems[t].serial_numbers=e}else{n.push(this.formserial);let e=n;this.dataPO.purchaseOrderItems[t].serial_numbers=e}this.formserial=B(""),console.log(this.dataPO)},removeItem(t,e){console.log(this.dataPO.purchaseOrderItems[this.indexSerial].serial_numbers),this.dataPO.purchaseOrderItems[this.indexSerial].serial_numbers=this.dataPO.purchaseOrderItems[this.indexSerial].serial_numbers.filter(o=>o!==t)},EnterSerial(t){if(this.formserial!=="")if(this.dataPO.purchaseOrderItems[t].serial_numbers){n=this.dataPO.purchaseOrderItems[t].serial_numbers,n.push(this.formserial);let e=n;this.dataPO.purchaseOrderItems[t].serial_numbers=e}else{n.push(this.formserial);let e=n;this.dataPO.purchaseOrderItems[t].serial_numbers=e}this.formserial=B(""),console.log(this.dataPO)},async SaveData(){let t=[];for(let o in this.temp_data_invoice)for(let l in this.temp_data_invoice[o].delivery_items)this.temp_data_invoice[o].delivery_items[l].selectedAll&&t.push(this.temp_data_invoice[o].delivery_items[l].doItem_id);let e={doItems_id:t,so_id:this.$route.params.id};ye.PostData(e)},async mappingForSave(t){return(await t.map(o=>{const l=o.receive_items.filter(a=>a.receive_item_serials_json.some(i=>i.selected)).map(a=>({product_id:a.product_id,product_number:a.product_number,uom:a.uom,serial_numbers:a.receive_item_serials_json.filter(i=>i.selected).map(i=>i.serial)}));return{po_id:o.po_id,items_out:l}})).filter(function(o){return o.items_out.length>0})},ModalShow(t){console.log(t),this.isModalOpen=!0,this.detailOrder=t},closeModal(){this.isModalOpen=!1},async mappingData(){},handleSelectAll(t,e){if(console.log(t),t.selectedAll)for(let o in t.receive_item_serials_json)t.receive_item_serials_json[o].selected=!0;else for(let o in t.receive_item_serials_json)t.receive_item_serials_json[o].selected=!1},selectedSingle(t,e,o,l){e.selected||(t.selectedAll=!1)},replaceObjectById(t,e,o){var l=!1,a=t.map(function(i){return i.rg_id===e?(l=!0,o):i});return l||a.push(o),a},SaveDataTotemp(){this.temp_data_invoice.length!=0?this.temp_data_invoice=this.replaceObjectById(this.temp_data_invoice,this.detailOrder.rg_id,this.detailOrder):this.temp_data_invoice.push(this.detailOrder),console.log(this.temp_data_invoice),this.isModalOpen=!1}},async created(){this.loading=!0,await this.CheckStepper(),await T.listSO(this.$route.params.id),this.dataDO=await T.lisBy_so;for(let t in this.dataDO)for(let e in this.dataDO[t].delivery_items)this.dataDO[t].delivery_items[e].selectedAll=!1;this.so_id=this.$route.params.id,this.loading=!1,console.log(this.dataDO)}},g=t=>(J("data-v-b9bc110e"),t=t(),Y(),t),be={class:"flex gap-5"},we={class:"bg-white px-5 py-5 flex justify-between mr-10"},Se=g(()=>s("div",null,[s("h1",{class:"font-bold text-lg"},"# Select Product items for Invoice")],-1)),Oe={class:"h-[700px] px-10 py-10 w-[1000px] bg-slate-200 overflow-y-auto"},Ie={class:"flex justify-center items-center gap-3"},xe={class:"w-full"},Pe={class:"bg-gray-100 px-5 py-2 flex gap-3"},ke=["onUpdate:modelValue","onChange"],Be=g(()=>s("b",null,"#",-1)),De={class:"bg-white rounded px-5 py-5 shadow-md flex justify-between gap-5"},Ae={class:"w-full bg-white py-3 shadow px-2 rounded"},Le=g(()=>s("b",null,"Part Number #: ",-1)),Ee={class:"w-full bg-white py-3 shadow px-2 rounded"},Ce=g(()=>s("b",null,"UOM #: ",-1)),Te={class:"px-5 py-2"},Me=g(()=>s("div",{class:"border-b w-fit px-5 py-2 mt-1"},"Serial Number",-1)),Ve={class:"w-full h-[150px] overflow-y-scroll px-10"},je={class:"w-full grid grid-cols-3 gap-2 mt-5"},Re=g(()=>s("div",{class:"flex mt-10 justify-end"},null,-1)),Fe={class:"px-20 py-10 w-full flex justify-center items-center"},Ue={class:"w-full px-10 py-10 bg-white"},Ne={class:"w-full grid grid-cols-2 gap-5 mt-5 bg-white"},Qe={class:"w-full"},$e={class:"font-semibold text-lg px-5"},ze={class:"text-md px-5"},Ge=g(()=>s("b",null,"SO Number #:",-1)),qe={class:"w-full mt-10"},He={class:"flex justify-end"},Je={class:"relative overflow-x-auto"},Ye={class:"w-full text-sm text-left rtl:text-right text-gray-500 mt-2"},Ke=g(()=>s("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50"},[s("tr",null,[s("th",{scope:"col",class:"px-6 py-3"}," PO Number "),s("th",{scope:"col",class:"px-6 py-3"}," DO Number "),s("th",{scope:"col",class:"px-6 py-3"}," Status "),s("th",{scope:"col",class:"px-6 py-3"}," # ")])],-1)),We={class:"px-6 py-4 text-xs"},Xe={class:"mb-2"},Ze={class:"px-6 py-4"},et={class:"px-6 py-4"},tt={class:"px-6 py-4 flex justify-center"};function st(t,e,o,l,a,i){const x=y("Loading"),P=y("ButtonLink"),M=y("MenuCard"),k=y("Button"),V=y("Modal"),j=y("Stepper"),R=y("Default");return a.loading?(h(),C(x,{key:0})):(h(),C(R,{key:1},{default:S(()=>{var L,E;return[v(M,{menuLabel:"List Delivery"},{default:S(()=>[s("div",be,[v(P,{type:"secondary",size:"small",icon_name:"ArrowLeft",icon_position:"left",to:"/delivery-order/"+a.so_id},null,8,["to"])])]),_:1}),v(V,{show:a.isModalOpen,modalType:"primary",modalLabel:"Product Items ",onCloseModal:i.closeModal,closeModalIcon:!1},{default:S(()=>[s("div",we,[Se,v(k,{type:"success",onClick:e[0]||(e[0]=r=>i.SaveDataTotemp()),class:"w-fit h-fit",icon_position:"left",size:"small",icon_name:"Check"})]),s("div",Oe,[s("div",Ie,[s("div",xe,[(h(!0),b(A,null,D(a.detailOrder.delivery_items,(r,I)=>(h(),b("div",{class:"w-full bg-white shadow-md rounded-lg mb-5",key:I},[s("div",Pe,[H(s("input",{type:"checkbox","onUpdate:modelValue":w=>r.selectedAll=w,onChange:w=>i.handleSelectAll(r,I),class:"form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"},null,40,ke),[[q,r.selectedAll]]),Be]),s("div",De,[s("div",Ae,[Le,O(" "+f(r.product_number),1)]),s("div",Ee,[Ce,O(f(r.uom),1)])]),s("div",Te,[Me,s("div",Ve,[s("div",je,[(h(!0),b(A,null,D(r.delivery_item_serials,(w,F)=>(h(),b("div",{class:"bg-gray-200 px-3 py-2 shadow-md flex gap-3",key:F},f(w),1))),128))])])])]))),128))])]),Re])]),_:1},8,["show","onCloseModal"]),s("div",Fe,[v(j,{menu:a.stepper_menu},null,8,["menu"])]),s("div",Ue,[s("div",Ne,[s("div",Qe,[s("h1",$e,f((L=a.dataDO[0])==null?void 0:L.customer_name),1),s("h1",ze,[Ge,O(" "+f((E=a.dataDO[0])==null?void 0:E.so_number),1)])])]),s("div",qe,[s("div",He,[v(k,{type:"success",onClick:e[1]||(e[1]=r=>i.SaveData()),class:"w-fit h-fit",icon_position:"left",size:"small",icon_name:"NotepadText"},{default:S(()=>[O(" Make Invoice ")]),_:1})]),s("div",Je,[s("table",Ye,[Ke,s("tbody",null,[(h(!0),b(A,null,D(a.dataDO,(r,I)=>(h(),b("tr",{class:"bg-white border-b",key:I},[s("td",We,[s("h1",Xe,f(r.po_number),1)]),s("td",Ze,f(r.do_number),1),s("td",et,f(r.doInfo_status),1),s("td",tt,[v(k,{type:"primary",onClick:w=>i.ModalShow(r),class:"w-fit h-fit",icon_position:"left",size:"small",icon_name:"Eye"},{default:S(()=>[O(" Product Items ")]),_:2},1032,["onClick"])])]))),128))])])])])])]}),_:1}))}const xt=G(ve,[["render",st],["__scopeId","data-v-b9bc110e"]]);export{xt as default};