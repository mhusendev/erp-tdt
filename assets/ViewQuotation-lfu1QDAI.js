import{D as A}from"./Default-SnYXce0r.js";import{_ as V}from"./Icon-Jn8JfFO8.js";import{_ as M,f as z,c as C,w as d,r as m,o as l,b as h,a as e,d as p,j as x,t as a,g as R,l as J,F as E,p as G,k as U}from"./index-zNN2oSXV.js";import{u as H}from"./projects-tobxMXGL.js";import{u as K}from"./products-_h_tSk5h.js";import{u as W}from"./brands-8PIUYuJO.js";import{u as X}from"./quotations-PJnJ-Ljd.js";import{u as Y}from"./profits-MG7iqzmv.js";import{u as Z}from"./progress-BH9j7L3D.js";import{I as $}from"./InputField-8O8zhtvs.js";import{M as tt}from"./MenuCard-si4DgcMV.js";import{B as et}from"./ButtonLink-lOTu3OkL.js";import{B as st}from"./Button-Nlr5QnjH.js";import{L as ot}from"./Loading-SVqbFMk-.js";import{s as at}from"./default.css_vue_type_style_index_0_src_true_lang-mMztfpja.js";import{D as it}from"./DataTable-YIr7e0Qr.js";import{M as lt}from"./Modal-Egd1_BWl.js";import{T as rt}from"./TextArea-pgYTDawa.js";import{T as nt}from"./TextCurrency-RLa14qax.js";import{S as ct}from"./Stepper-nks7oq9_.js";import"./Pagination-niETu5eI.js";H();const P=K(),O=W(),w=X();Y();const j=Z(),dt={components:{TextCurrency:nt,Default:A,Icon:V,MenuCard:tt,ButtonLink:et,Button:st,Loading:ot,InputField:$,DataTable:it,Modal:lt,Multiselect:at,TextArea:rt,Stepper:ct},data(){return{data:z(w.dataDetail),loading:!1,isPLexist:!1,stepper_menu:[{label:"QT",complete:!1,link:"/quotation/detail/"},{label:"PL",complete:!1,link:"/profit-and-loss/detail/"},{label:"SO",complete:!1,link:"/sales-order/detail/"},{label:"PO",complete:!1,link:"/purchase-order/"},{label:"RG",complete:!1,link:"/receive-list/"},{label:"DO",complete:!1,link:"/delivery-order/"},{label:"IV",complete:!1,link:"/invoice/so/"}],listQuotation:z(w.data_quotations),modelQuotation:{},uomOpt:[{label:"pcs",value:"pcs"},{label:"pack",value:"pack"},{label:"unit",value:"unit"}],term_opt:[{label:"--pilih--"},{label:"CBD"},{label:"COD"},{label:"DP"}],leadtime_opt:[{label:"--pilih--"},{label:"Indent"},{label:"Ready"}],formFields:[]}},methods:{async checkStepper(){var o;await j.getData(this.$route.params.id);let t=await j.data_progress;t&&(o=t[1])!=null&&o.status&&(this.isPLexist=!0),await localStorage.setItem("progress",JSON.stringify(t))},async setStepper(){var o,n,f,s,c,v,u,_,k,F,S,g,b,y;let t=await JSON.parse(localStorage.getItem("progress"));t&&(this.stepper_menu[0].complete=(o=t[0])==null?void 0:o.status,this.stepper_menu[0].link=this.stepper_menu[0].link+((n=t[0])==null?void 0:n.idQT),this.stepper_menu[1].complete=(f=t[1])==null?void 0:f.status,this.stepper_menu[1].link=this.stepper_menu[1].link+((s=t[1])==null?void 0:s.idQT),this.stepper_menu[2].complete=(c=t[2])==null?void 0:c.status,this.stepper_menu[2].link=this.stepper_menu[2].link+((v=t[2])==null?void 0:v.idPL),this.stepper_menu[3].complete=(u=t[3])==null?void 0:u.status,this.stepper_menu[3].link=this.stepper_menu[3].link+((_=t[3])==null?void 0:_.idQT),this.stepper_menu[4].complete=(k=t[4])==null?void 0:k.status,this.stepper_menu[4].link=this.stepper_menu[4].link+((F=t[4])==null?void 0:F.idQT),this.stepper_menu[5].complete=(S=t[5])==null?void 0:S.status,this.stepper_menu[5].link=this.stepper_menu[5].link+((g=t[5])==null?void 0:g.idSO),this.stepper_menu[6].complete=(b=t[6])==null?void 0:b.status,this.stepper_menu[6].link=this.stepper_menu[6].link+((y=t[6])==null?void 0:y.idSO))},async Product(t){return await P.Search(t),this.products=P.dataSearch,await P.dataSearch.map(o=>({value:o.product_number,label:o.product_number}))},async Brands(t){return await O.Search(t),await O.dataSearch.map(o=>({value:o.brand_name,label:o.brand_name}))},formatPrice(t){return(t/1).toFixed(2).replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},formatCurrency(t){return t?new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t):"Rp.0"},async searchArray(t,o,n){return await t.find(f=>f[o]===n)},async fillDesc(t,o){console.log(this.formFields[t][o].value),console.log(this.products);let n=await this.searchArray(this.products,"product_number",this.formFields[t][o].value);console.log(n),n==null?(this.formFields[t][1].label="product not exist! need  select brand",this.formFields[t][1].disable=!1):(this.formFields[t][1].value="",this.formFields[t][2].value=n.product_descriptionAa,this.formFields[t][1].label="product exist! not need brand",this.formFields[t][1].disable=!0),console.log(this.formFields[t][1])},addFormField(){const t=[{name:"product_number"+(this.formFields.length+1),label:"product number ",type:"product",value:""},{name:"brand_name"+(this.formFields.length+1),label:"Select Product First ",type:"brand",value:"",disable:!0},{name:"description"+(this.formFields.length+1),label:"description ",type:"text",value:""},{name:"quantity"+(this.formFields.length+1),label:"quantity ",type:"number",value:""},{name:"uom"+(this.formFields.length+1),label:"uom ",type:"select",options:this.uomOpt,value:""},{name:"unit_price"+(this.formFields.length+1),label:"unit price ",type:"currency",value:""}];this.formFields.push(t)},exitingItems(){for(let t in this.data.quotation_items)this.addFormField(),this.formFields[t][0].value={value:this.data.quotation_items[t].product.product_number,label:this.data.quotation_items[t].product.product_number},this.formFields[t][1].disable=!0,this.formFields[t][2].value=this.data.quotation_items[t].description,this.formFields[t][3].value=this.data.quotation_items[t].quantity,this.formFields[t][4].value=this.data.quotation_items[t].uom,this.formFields[t][5].value=this.data.quotation_items[t].unit_price},async ApproveQT(){await w.approveQT(this.data.quotation_id)}},async mounted(){},async created(){this.loading=!0;let t=await this.$route.params.id;await this.checkStepper(),await this.setStepper(),console.log(t),await w.getById(t),this.data=await w.dataDetail,console.log(this.data),this.modelQuotation=await this.data,this.exitingItems(),this.loading=!1}},i=t=>(G("data-v-83d5c91a"),t=t(),U(),t),pt={class:"flex gap-5"},ut={key:0,class:"flex gap-3"},_t={key:1},mt={class:"px-20 py-10 w-full flex justify-center items-center"},ht={class:"w-full mt-10 bg-white shadow-lg rounded-lg px-5 py-5"},ft={class:"grid grid-cols-3 gap-5"},gt={class:"bg-white shadow-lg px-5 py-5 rounded-lg grid grid-rows-5 gap-1"},bt=i(()=>e("h1",{class:"border-b h-fit text-slate-700"},"Details",-1)),yt={class:"flex"},xt=i(()=>e("h1",{class:"capitalize w-32"},"customer name",-1)),wt={class:"flex"},vt=i(()=>e("h1",{class:"capitalize w-32"},"phone",-1)),kt={class:"flex"},Ft=i(()=>e("h1",{class:"capitalize w-32"},"Billing",-1)),St={class:"flex"},Ct=i(()=>e("h1",{class:"capitalize w-32"},"shipping",-1)),Pt={class:"bg-white shadow-lg px-5 py-5 rounded-lg grid grid-rows-5 gap-1"},qt=i(()=>e("h1",{class:"border-b text-slate-700 h-fit"},"Contact",-1)),Bt={class:"flex"},Dt=i(()=>e("h1",{class:"capitalize w-32"},"contact name",-1)),Lt={class:"flex"},It=i(()=>e("h1",{class:"capitalize w-32"},"phone",-1)),Tt={class:"flex"},Qt=i(()=>e("h1",{class:"capitalize w-32"},"email",-1)),zt=["href"],Ot={class:"bg-white shadow-lg px-5 py-5 rounded-lg gap-1"},jt=i(()=>e("h1",{class:"border-b h-fit text-slate-700 h-fit"},"Status",-1)),Nt={class:"flex justify-center h-full items-center"},At={key:0,class:"text-5xl text-center text-xl"},Vt={key:1,class:"text-5xl text-center bg-red-600 text-white px-3 py-2 rounded"},Mt={key:2,class:"text-3xl text-center bg-green-600 text-white px-3 py-2 rounded"},Rt={class:"w-full bg-white px-5 py-5 mt-10"},Jt={class:"w-full flex justify-end"},Et={class:"w-full mt-10"},Gt={class:"relative overflow-x-auto"},Ut=i(()=>e("div",{class:"w-full bg-gray-50 text-gray-700 px-5 py-3 font-semibold"}," List Items ",-1)),Ht={class:"w-full text-sm text-left rtl:text-right text-gray-500 mt-2"},Kt=i(()=>e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," Product "),e("th",{scope:"col",class:"px-6 py-3"}," Qty "),e("th",{scope:"col",class:"px-6 py-3 text-center"}," Unit Price "),e("th",{scope:"col",class:"px-6 py-3 text-center"}," Total Price ")])],-1)),Wt={class:"px-6 py-4 text-xs"},Xt={class:"mb-2"},Yt={class:""},Zt={class:"px-6 py-4"},$t={class:"px-6 py-4 text-right"},te={class:"px-6 py-4 text-right"},ee={class:"bg-white border-b"},se=i(()=>e("td",{colspan:"3",class:"px-6 py-4 text-right"},[e("b",null," Subtotal")],-1)),oe={class:"px-6 py-4 text-right"},ae={class:"bg-white border-b"},ie=i(()=>e("td",{colspan:"3",class:"px-6 py-4 text-right"},[e("b",null," PPN")],-1)),le={class:"px-6 py-4 text-right"},re={class:"bg-white border-b"},ne=i(()=>e("td",{colspan:"3",class:"px-6 py-4 text-right"},[e("b",null," Total")],-1)),ce={class:"px-6 py-4 text-right"};function de(t,o,n,f,s,c){const v=m("Loading"),u=m("ButtonLink"),_=m("Button"),k=m("MenuCard"),F=m("Stepper"),S=m("Default");return s.loading?(l(),C(v,{key:0})):(l(),C(S,{key:1},{default:d(()=>{var g,b,y,q,B,D,L,I;return[h(k,{menuLabel:s.data.quotation_number},{default:d(()=>[e("div",pt,[h(u,{type:"secondary",size:"small",icon_name:"ArrowBigLeft",icon_position:"left",link:!0,to:"/projects/detail/"+s.data.project_id},null,8,["to"]),s.data.status==1?(l(),p("div",ut,[h(_,{type:"success",onClick:c.ApproveQT,icon_position:"left",size:"small",icon_name:"Check"},{default:d(()=>[x(" Success ")]),_:1},8,["onClick"]),h(_,{type:"danger",onClick:t.submitForm,icon_position:"left",size:"small",icon_name:"Ban"},{default:d(()=>[x(" Cancel ")]),_:1},8,["onClick"])])):(l(),p("div",_t,[s.isPLexist?(l(),C(u,{key:0,type:"secondary",to:"/profit-and-loss/detail/"+s.data.quotation_id},{default:d(()=>[x(" Profit & Loss ")]),_:1},8,["to"])):(l(),C(u,{key:1,type:"primary",icon_position:"left",size:"small",icon_name:"Plus",to:"/quotation/pl/"+s.data.quotation_id},{default:d(()=>[x("New Profit & Loss ")]),_:1},8,["to"]))]))])]),_:1},8,["menuLabel"]),e("div",mt,[h(F,{menu:s.stepper_menu},null,8,["menu"])]),e("div",ht,[e("div",ft,[e("div",gt,[bt,e("div",yt,[xt,e("p",null,":  "+a((g=s.data.customer)==null?void 0:g.customer_name),1)]),e("div",wt,[vt,e("p",null,":  "+a((b=s.data.customer)==null?void 0:b.telephone),1)]),e("div",kt,[Ft,e("p",null,":  "+a((y=s.data.customer)==null?void 0:y.customer_billing_address),1)]),e("div",St,[Ct,e("p",null,":  "+a((q=s.data.customer)==null?void 0:q.customer_shipping_address),1)])]),e("div",Pt,[qt,e("div",Bt,[Dt,e("p",null,":  "+a((B=s.data.customer_pic)==null?void 0:B.contact_name),1)]),e("div",Lt,[It,e("p",null,":  "+a((D=s.data.customer_pic)==null?void 0:D.mobile_phone),1)]),e("div",Tt,[Qt,e("p",null,":  "+a((L=s.data.customer_pic)==null?void 0:L.email),1)]),e("a",{href:"https://wa.me/"+((I=s.data.customer_pic)==null?void 0:I.mobile_phone),target:"_blank",class:"bg-green-600 flex justify-center rounded-full items-center text-white py-2"},"open whatsapp",8,zt)]),e("div",Ot,[jt,e("div",Nt,[s.data.status==1?(l(),p("h1",At,"On Submission")):s.data.status==0?(l(),p("h1",Vt,"Rejected")):s.data.status==2?(l(),p("h1",Mt," Approved ")):R("",!0)])])])]),e("div",Rt,[e("div",Jt,[e("div",null,[h(_,{type:"secondary",class:"w-fit h-fit",onClick:t.submitForm,icon_position:"left",size:"small",icon_name:"Download"},{default:d(()=>[x(" Download Quotation ")]),_:1},8,["onClick"])])]),e("div",Et,[e("div",Gt,[Ut,e("table",Ht,[Kt,e("tbody",null,[(l(!0),p(E,null,J(s.data.quotation_items,(r,N)=>{var T,Q;return l(),p("tr",{class:"bg-white border-b",key:N},[e("td",Wt,[e("h1",Xt,a((T=r.product)==null?void 0:T.product_number),1),e("h1",Yt,a((Q=r.product)==null?void 0:Q.product_description),1)]),e("td",Zt,a(r.quantity+" "+r.uom),1),e("td",$t,a(c.formatCurrency(r==null?void 0:r.unit_price)),1),e("td",te,a(c.formatCurrency(r==null?void 0:r.total_price)),1)])}),128)),e("tr",ee,[se,e("td",oe,a(c.formatCurrency(s.data.grand_total)),1)]),e("tr",ae,[ie,e("td",le,a(c.formatCurrency(s.data.grand_total*s.data.ppn/100)),1)]),e("tr",re,[ne,e("td",ce,a(c.formatCurrency(s.data.grand_total*s.data.ppn/100+s.data.grand_total)),1)])])])])])])]}),_:1}))}const Ie=M(dt,[["render",de],["__scopeId","data-v-83d5c91a"]]);export{Ie as default};
