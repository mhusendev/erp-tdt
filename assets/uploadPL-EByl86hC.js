import{D as g}from"./Default-vLo-ryjW.js";import{_ as C}from"./Icon-gQmAwROU.js";import{_ as y,c as p,w as s,r as e,o as c,b as a,a as t,j as i}from"./index-ZXAHIXJB.js";import{u as x}from"./projects-Q1HwCUmv.js";import{u as w}from"./products-VY_ed68S.js";import{u as B}from"./brands-9VSxmgBx.js";import{u as D}from"./quotations-45aZL0RE.js";import{u as k}from"./vendors-cSUi9ECP.js";import{u as F}from"./profits-5ioKMry-.js";import{I as L}from"./InputField-dPOzz2n0.js";import{M as v}from"./MenuCard-PiKD37ig.js";import{B as S}from"./ButtonLink-d1sIslZn.js";import{B as T}from"./Button-L62cJvwW.js";import{L as I}from"./Loading-_KMABdLz.js";import{s as M}from"./default.css_vue_type_style_index_0_src_true_lang-z7wFf1h1.js";import{D as P}from"./DataTable-Tl8Fs48C.js";import{M as U}from"./Modal-DPgTFCMj.js";import{T as b}from"./TextArea-ksnhi9rg.js";import{T as V}from"./TextCurrency-QJtIun8F.js";import{S as N}from"./Stepper-07h0EuT2.js";import"./Pagination-kq5k-6sy.js";x();w();B();D();k();const n=F(),z={components:{TextCurrency:V,Default:g,Icon:C,MenuCard:v,ButtonLink:S,Button:T,Loading:I,InputField:L,DataTable:P,Modal:U,Multiselect:M,TextArea:b,Stepper:N},data(){return{file1:null,file2:null,data:{}}},methods:{handleFileChange1(o){this.file1=o.target.files[0]},handleFileChange2(o){this.file2=o.target.files[0]},upload1(){const o=new FormData;o.append("file",this.file1),n.UploadCustPO(this.$route.params.id,o)},upload2(){const o=new FormData;o.append("file",this.file2),n.UploadVendQT(this.$route.params.id,o)}},async created(){await n.getById(this.$route.params.id),this.data=await n.dataDetail,console.log(this.data)}},Q={class:"flex gap-5"},$={class:"w-full px-10 py-10 bg-white rounded-xl mt-10"},j={class:"w-full grid grid-cols-2 gap-5"},O={class:"w-full border px-3"},q={class:"py-3 flex"},A={class:"w-full border px-3"},E={class:"py-3 flex"};function G(o,H,J,K,m,l){const u=e("Loading"),f=e("ButtonLink"),_=e("MenuCard"),r=e("InputField"),d=e("Button"),h=e("Default");return o.loading?(c(),p(u,{key:0})):(c(),p(h,{key:1},{default:s(()=>[a(_,{menuLabel:"Upload Document PL"},{default:s(()=>[t("div",Q,[a(f,{type:"secondary",size:"small",to:"/profit-and-loss/detail/"+m.data.quotation_id},{default:s(()=>[i(" Next")]),_:1},8,["to"])])]),_:1}),t("div",$,[t("div",j,[t("div",O,[a(r,{type:"file",class:"w-full",placeholder:"Customer PO File",onChange:l.handleFileChange1},null,8,["onChange"]),t("div",q,[a(d,{type:"primary",onClick:l.upload1,icon_position:"left",size:"small",icon_name:"Upload"},{default:s(()=>[i(" Upload ")]),_:1},8,["onClick"])])]),t("div",A,[a(r,{type:"file",class:"w-full",placeholder:"Vendor QT File",onChange:l.handleFileChange2},null,8,["onChange"]),t("div",E,[a(d,{type:"primary",onClick:l.upload2,icon_position:"left",size:"small",icon_name:"Upload"},{default:s(()=>[i(" Upload ")]),_:1},8,["onClick"])])])])])]),_:1}))}const go=y(z,[["render",G],["__scopeId","data-v-51ff1e20"]]);export{go as default};