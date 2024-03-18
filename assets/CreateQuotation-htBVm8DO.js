import{D as M}from"./Default-UzTWWqk9.js";import{_ as N}from"./Icon-rtOuHIS6.js";import{_ as T,f as z,c as v,w as V,r as m,o as s,b as c,a as l,t as _,h as I,q as D,d as u,l as x,F as w,n as O,j as A,z as q,g as R,p as E,k as K}from"./index-2Xl9qFv7.js";import{u as G}from"./projects-m_BtDv-_.js";import{u as H}from"./products-KWUgHVH5.js";import{u as J}from"./brands-phqYSftc.js";import{u as W}from"./quotations-DO3D_tSp.js";import{I as X}from"./InputField-eKlKr605.js";import{M as Y}from"./MenuCard-Cm1nNJYU.js";import{B as Z}from"./ButtonLink-xY7BTdTe.js";import{B as $}from"./Button-_saYDuqz.js";import{L as ee}from"./Loading-bud4hAA4.js";import{s as te}from"./default.css_vue_type_style_index_0_src_true_lang-U16oWYK-.js";import{D as oe}from"./DataTable-yeLKldhm.js";import{M as ae}from"./Modal-ZMIHFB3R.js";import{T as le}from"./TextArea-KW4ixcr0.js";import{T as re}from"./TextCurrency-fK0DUXJx.js";import"./Pagination-9Wn2p13Z.js";const b=G(),j=H(),S=J(),se=W(),ne={components:{TextCurrency:re,Default:M,Icon:N,MenuCard:Y,ButtonLink:Z,Button:$,Loading:ee,InputField:X,DataTable:oe,Modal:ae,Multiselect:te,TextArea:le},data(){return{inputValue:"",formFields:[],uomOpt:[{label:"pcs",value:"pcs"},{label:"pack",value:"pack"},{label:"unit",value:"unit"}],data:z(b.dataDetail),loading:!1,itemsLoading:!1,modelQuotation:{project_id:this.$route.params.id,customer_pic_id:"",customer_id:"",file_attachment:"jfsndjkvsndkj",ppn:"",fob:"",term_of_payment:"",item_lead_time:"",status:1,quotationItem:[]},term_opt:[],items_temp:[],items_toReserve:[],uom_opt:[{label:"pcs"},{label:"pack"},{label:"unit"}],items_model:{},label_head_item:[],leadtime_opt:[],modalLabel:"",isModalOpen:!1,modalProduct:!1,products:[],productModel:{},inputBrand:!1}},methods:{formatInput(e,o){console.log(e);let d=e.replace(/\D/g,"").replace(/^0+/,"");if(d===""){this.inputValue="";return}o.value="Rp "+new Intl.NumberFormat("id-ID").format(parseInt(d))},async submitForm(){if(await this.mappingData(),console.log(this.modelQuotation),se.PostData(this.modelQuotation))return window.location.href="/projects/detail/"+this.data.project_id},mappingData(){let e=this.formFields.map(a=>a.map(r=>({[r.name]:r.value}))),o=[];for(let a in e)for(let r in e[a])o.push(e[a][r]);const d=[];for(const a of o)for(const r in a){const k=r.match(/\d+/),y=k?k[0]:"",g=r.replace(/\d+$/,"");d[y]=d[y]||{},d[y][g]=a[r]}const h=d.filter(a=>Object.keys(a).length>=0);for(let a in h){let r=h[a].unit_price.replace(/[^\d]/g,"");h[a].unit_price=parseInt(r)}this.modelQuotation.quotationItem.push(...h)},addFormField(){const e=[{name:"product_number"+(this.formFields.length+1),label:"product number ",type:"product"},{name:"brand_name"+(this.formFields.length+1),label:"Select Product First ",type:"brand",disable:!0},{name:"description"+(this.formFields.length+1),label:"description ",type:"text"},{name:"quantity"+(this.formFields.length+1),label:"quantity ",type:"number"},{name:"uom"+(this.formFields.length+1),label:"uom ",type:"select",options:this.uomOpt},{name:"unit_price"+(this.formFields.length+1),label:"unit price ",type:"currency"},{name:"note"+(this.formFields.length+1),label:"Note ",type:"longtext"}];this.formFields.push(e)},deleteFormField(e){this.formFields.splice(e,1)},saveTotempItems(){this.itemsLoading=!0,this.items_temp.push(this.items_model),this.items_temp.forEach(e=>{let o=Object.keys(e);this.label_head_item=o}),setTimeout(()=>{this.items_model={},this.itemsLoading=!1,console.log(this.items_temp)},500)},async Product(e){return await j.Search(e),this.products=j.dataSearch,await j.dataSearch.map(o=>({value:o.product_number,label:o.product_number}))},async Brands(e){return await S.Search(e),await S.dataSearch.map(o=>({value:o.brand_name,label:o.brand_name}))},formatPrice(e){return(e/1).toFixed(2).replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},formatCurrency(e){return isNaN(this.items_model.unit_price)||(this.items_model.unit_price=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(this.items_model.unit_price)),""},async searchArray(e,o,d){return await e.find(h=>h[o]===d)},async fillDesc(e,o){console.log(this.formFields[e][o].value),console.log(this.products);let d=await this.searchArray(this.products,"product_number",this.formFields[e][o].value);console.log(d),d==null?(this.formFields[e][1].label="product not exist! need  select brand",this.formFields[e][1].disable=!1):(this.formFields[e][1].value="",this.formFields[e][2].value=d.product_description,this.formFields[e][1].label="product exist! not need brand",this.formFields[e][1].disable=!0),console.log(this.formFields[e][1])}},async created(){console.log(this.$route.params.id),this.loading=!0,await b.getById(this.$route.params.id),this.data=await b.dataDetail,this.modelQuotation.project_id=await b.dataDetail.project_id,this.modelQuotation.customer_id=await b.dataDetail.customer.customer_id,this.modelQuotation.customer_pic_id=await b.dataDetail.customer_pic_id,this.term_opt=await[{label:"CBD"},{label:"COD"},{label:"DP"}],this.leadtime_opt=await[{label:"Indent"},{label:"Ready"}],this.loading=!1}},f=e=>(E("data-v-0d62d715"),e=e(),K(),e),ie={class:"flex gap-5"},de={class:"mt-5 w-full pb-10"},ue={class:"grid grid-cols-3 gap-5"},ce={class:"px-5 py-5 bg-white rounded"},pe=f(()=>l("h1",{class:"border-b text-slate-700 pb-1"},"Project Name",-1)),me={class:"mt-3 text-center text-lg"},he={class:"px-5 py-5 bg-white rounded"},_e=f(()=>l("h1",{class:"border-b text-slate-700 pb-1"},"Project Customer",-1)),be={class:"mt-3 text-center text-lg"},fe={class:"px-5 py-5 bg-white rounded"},ye=f(()=>l("h1",{class:"border-b text-slate-700 pb-1"},"Project Customer PIC",-1)),ge={class:"mt-3 text-center text-lg"},ve={class:"w-full bg-white px-5 py-5 mt-10"},xe={class:"grid grid-cols-4 gap-3"},we={class:"relative rounded px-2 py-2 border"},ke=f(()=>l("label",{class:"absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 capitalize"},"Term Of payment",-1)),Fe=["value"],Ve={class:"relative rounded px-2 py-2 border"},Ie=f(()=>l("label",{class:"absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 capitalize"},"Item Lead Time",-1)),De=["value"],je={id:"vendor-pic",class:"mt-5"},Be={class:"px-5 text-slate-700 mt-5 py-4 rounded border"},Ce={class:"grid grid-cols-3 rounded-lg gap-3 px-2 border pb-3 mt-5"},Se={key:0,class:"px-5 py-3 border rounded-lg w-full h-fit"},Qe={key:1,class:"px-5 py-3 border rounded-lg w-full h-fit"},Pe={key:2,class:"relative rounded px-2 py-2 border"},Ue=f(()=>l("label",{class:"absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 capitalize"},"uom",-1)),Le=["onUpdate:modelValue","id"],Me=["value"],Ne={class:"flex justify-end mt-2"};function Te(e,o,d,h,a,r){const k=m("Loading"),y=m("ButtonLink"),g=m("Button"),Q=m("MenuCard"),F=m("InputField"),B=m("Multiselect"),P=m("TextArea"),U=m("Default");return a.loading?(s(),v(k,{key:0})):(s(),v(U,{key:1},{default:V(()=>[c(Q,{menuLabel:"New Quotation"},{default:V(()=>[l("div",ie,[c(y,{type:"secondary",size:"small",icon_name:"ArrowBigLeft",icon_position:"left",link:!0,to:"/projects/detail/"+a.data.project_id},null,8,["to"]),c(g,{type:"success",onClick:r.submitForm,icon_position:"center",size:"small",icon_name:"Save"},null,8,["onClick"])])]),_:1}),l("div",de,[l("div",ue,[l("div",ce,[pe,l("h1",me,_(a.data.project_name),1)]),l("div",he,[_e,l("h1",be,_(a.data.customer.customer_name),1)]),l("div",fe,[ye,l("h1",ge,_(a.data.customer_pic.contact_name),1)])]),l("div",ve,[l("div",xe,[c(F,{type:"number",class:"w-full",placeholder:"PPN",modelValue:a.modelQuotation.ppn,"onUpdate:modelValue":o[0]||(o[0]=i=>a.modelQuotation.ppn=i)},null,8,["modelValue"]),c(F,{type:"text",class:"w-full",placeholder:"FOB",modelValue:a.modelQuotation.fob,"onUpdate:modelValue":o[1]||(o[1]=i=>a.modelQuotation.fob=i)},null,8,["modelValue"]),l("div",we,[ke,I(l("select",{"onUpdate:modelValue":o[2]||(o[2]=i=>a.modelQuotation.term_of_payment=i),class:"block px-2.5 pb-2.5 pt-5 text-sm w-full text-sm text-gray-700 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" "},[(s(!0),u(w,null,x(a.term_opt,(i,p)=>(s(),u("option",{key:p,value:i.label},_(i.label),9,Fe))),128))],512),[[D,a.modelQuotation.term_of_payment]])]),l("div",Ve,[Ie,I(l("select",{"onUpdate:modelValue":o[3]||(o[3]=i=>a.modelQuotation.item_lead_time=i),class:"block px-2.5 pb-2.5 pt-5 text-sm w-full text-sm text-gray-700 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" "},[(s(!0),u(w,null,x(a.leadtime_opt,(i,p)=>(s(),u("option",{key:p,value:i.label},_(i.label),9,De))),128))],512),[[D,a.modelQuotation.item_lead_time]])])]),l("div",je,[l("form",{onSubmit:o[4]||(o[4]=O(()=>{},["prevent"]))},[(s(!0),u(w,null,x(a.formFields,(i,p)=>(s(),u("div",{key:p},[l("div",Be,[l("h1",null,"Item "+_(p+1),1)]),l("div",Ce,[(s(!0),u(w,null,x(i,(t,C)=>(s(),u("div",{key:C,class:q(["mt-5 w-full",t.type==="longtext"?"col-span-3":""])},[t.type==="product"?(s(),u("div",Se,[c(B,{placeholder:"Select Product",id:t.name,modelValue:t.value,"onUpdate:modelValue":n=>t.value=n,options:r.Product,"filter-results":!1,autocomplete:"false","resolve-on-load":!1,delay:4,searchable:!0,"create-option":!0,class:"multiselect-blue w-full",onSelect:n=>r.fillDesc(p,C)},null,8,["id","modelValue","onUpdate:modelValue","options","onSelect"])])):t.type==="brand"?(s(),u("div",Qe,[c(B,{placeholder:t.label,modelValue:t.value,"onUpdate:modelValue":n=>t.value=n,disabled:t.disable,options:r.Brands,"filter-results":!1,"resolve-on-load":!1,delay:0,searchable:!0,"create-option":!0,class:"multiselect-blue mt-10 w-full h-fit","close-on-select":!0},null,8,["placeholder","modelValue","onUpdate:modelValue","disabled","options"])])):t.type==="select"?(s(),u("div",Pe,[Ue,I(l("select",{"onUpdate:modelValue":n=>t.value=n,id:t.name,class:"block px-2.5 pb-2.5 pt-5 text-sm w-full text-sm text-gray-700 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" "},[(s(!0),u(w,null,x(t.options,(n,L)=>(s(),u("option",{key:L,value:n.value},_(n.label),9,Me))),128))],8,Le),[[D,t.value]])])):t.type=="number"||t.type=="text"?(s(),v(F,{key:3,type:t.type,class:"w-full",id:t.name,name:t.name,placeholder:t.label,modelValue:t.value,"onUpdate:modelValue":n=>t.value=n},null,8,["type","id","name","placeholder","modelValue","onUpdate:modelValue"])):t.type=="currency"?(s(),v(F,{key:4,type:"text",onInput:n=>r.formatInput(t.value,t),onKeydown:e.handleBackspace,class:"w-full",id:t.name,name:t.name,placeholder:t.label,modelValue:t.value,"onUpdate:modelValue":n=>t.value=n},null,8,["onInput","onKeydown","id","name","placeholder","modelValue","onUpdate:modelValue"])):t.type=="longtext"?(s(),v(P,{key:5,name:t.name,label:t.label,modelValue:t.value,"onUpdate:modelValue":n=>t.value=n,placeholder:"Enter your description here",rows:10},null,8,["name","label","modelValue","onUpdate:modelValue"])):R("",!0)],2))),128))]),l("div",Ne,[c(g,{type:"danger",icon_name:"Trash",class:"h-fit",icon_position:"center",onClick:t=>r.deleteFormField(p)},null,8,["onClick"])])]))),128))],32),c(g,{type:"success",class:"w-fit mt-10",size:"small",icon_name:"Plus",icon_position:"left",onClick:r.addFormField},{default:V(()=>[A(" Add Items")]),_:1},8,["onClick"])])])])]),_:1}))}const at=T(ne,[["render",Te],["__scopeId","data-v-0d62d715"]]);export{at as default};