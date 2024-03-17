import{_ as z,f as v,c as l,w as c,r as n,o,b as B,a as t,j as M,g as d,t as e,d as r,l as P,F as N}from"./index-ZXAHIXJB.js";import{D as V}from"./Default-vLo-ryjW.js";import{M as I}from"./MenuCard-PiKD37ig.js";import{B as q}from"./ButtonLink-d1sIslZn.js";import{B as A}from"./Button-L62cJvwW.js";import{u as F}from"./projects-Q1HwCUmv.js";import{T as R}from"./TextArea-ksnhi9rg.js";import{I as S}from"./InputField-dPOzz2n0.js";import{M as T}from"./Modal-DPgTFCMj.js";import{u as k}from"./quotations-45aZL0RE.js";import{C as E}from"./CardIdentity-gPK6taMD.js";import{L as O}from"./Loading-_KMABdLz.js";import{_ as G}from"./Card-vLkzcva7.js";import"./Icon-gQmAwROU.js";const _=F(),u=k(),H={components:{Default:V,MenuCard:I,ButtonLink:q,Button:A,InputField:S,TextArea:R,Modal:T,CardIdentity:E,Loading:O,Card:G,useQuotationStore:k},data(){return{data:v(_.dataDetail),loading:!1,listQuotation:v(u.data_quotations),disableButton:!1}},async mounted(){},methods:{toProfitLoss(a){console.log(a),this.$router.push("/quotation/detail/"+a)},async disableButtonCR(){for(let a in this.listQuotation)this.listQuotation[a].status===2&&(this.disableButton=!0);console.log(this.disableButton)}},async created(){let a=await this.$route.params.id;console.log(this.$route.params.id),this.loading=!0,await _.$reset(),await _.getById(this.$route.params.id),u.$reset(),this.data=await _.dataDetail,await u.getData(a),this.listQuotation=await u.data_quotations,await this.disableButtonCR(),console.log(this.listQuotation),this.loading=!1}},J={class:"flex gap-5"},K={class:"w-full mt-10 bg-white shadow-lg rounded-lg px-5 py-5"},U={class:"grid grid-cols-3 gap-5"},W={class:"bg-white shadow-lg px-5 py-5 rounded-lg grid grid-rows-5 gap-1"},X=t("h1",{class:"border-b h-fit text-slate-700"},"Details",-1),Y={class:"flex"},Z=t("h1",{class:"capitalize w-32"},"customer name",-1),$={class:"flex"},tt=t("h1",{class:"capitalize w-32"},"phone",-1),st={class:"flex"},et=t("h1",{class:"capitalize w-32"},"Billing",-1),ot={class:"flex"},at=t("h1",{class:"capitalize w-32"},"shipping",-1),it={class:"bg-white shadow-lg px-5 py-5 rounded-lg grid grid-rows-5 gap-1"},nt=t("h1",{class:"border-b text-slate-700 h-fit"},"Contact",-1),lt={class:"flex"},ct=t("h1",{class:"capitalize w-32"},"contact name",-1),dt={class:"flex"},rt=t("h1",{class:"capitalize w-32"},"phone",-1),_t={class:"flex"},ut=t("h1",{class:"capitalize w-32"},"email",-1),ht=["href"],pt={class:"bg-white shadow-lg px-5 py-5 rounded-lg gap-1"},mt=t("h1",{class:"border-b h-fit text-slate-700 h-fit"},"Progress",-1),ft={class:"flex justify-center h-full items-center"},gt={class:"text-5xl text-center"},xt=t("div",{class:"w-full py-10 px-5"},[t("h1",{class:"border-b text-xl"},"Quotation List")],-1),wt={class:"w-full h-fit px-2 mt-10 grid grid-cols-3 gap-5"},bt=["onClick"],yt={class:"rounded-lg bg-transparent py-2"},vt=t("h1",{class:"text-slate-500 mb-2"},"Quotation",-1),Bt={class:"text-lg font-semibold text-slate-500"},kt={class:"mt-5"},Ct={class:"flex mb-1"},Lt=t("h1",{class:"text-slate-500 w-20"},"Date ",-1),jt={class:"text-slate-500"},Dt={class:"flex mb-1"},Qt=t("h1",{class:"text-slate-500 w-20"},"Validity ",-1),zt={class:"text-slate-500"},Mt={class:"flex w-full justify-end mt-10"},Pt={key:0,class:"bg-slate-200 px-2 py-1 rounded-full"},Nt={key:1,class:"bg-green-600 text-white px-2 py-1 rounded-full"},Vt={key:2,class:"bg-red-500 text-white px-2 py-1 rounded-full"};function It(a,qt,At,Ft,s,C){const L=n("Loading"),h=n("ButtonLink"),j=n("MenuCard"),D=n("Card"),Q=n("Default");return s.loading?(o(),l(L,{key:0})):(o(),l(Q,{key:1},{default:c(()=>{var p,m,f,g,x,w,b,y;return[B(j,{menuLabel:s.data.project_name},{default:c(()=>[t("div",J,[B(h,{type:"secondary",size:"small",icon_name:"ArrowBigLeft",icon_position:"left",link:!0,to:"/projects"}),s.disableButton?d("",!0):(o(),l(h,{key:0,type:"primary",icon_position:"left",size:"small",icon_name:"Plus",to:"/create-quotation/project-id/"+s.data.project_id},{default:c(()=>[M("New Quotation ")]),_:1},8,["to"]))])]),_:1},8,["menuLabel"]),t("div",K,[t("div",U,[t("div",W,[X,t("div",Y,[Z,t("p",null,":  "+e((p=s.data.customer)==null?void 0:p.customer_name),1)]),t("div",$,[tt,t("p",null,":  "+e((m=s.data.customer)==null?void 0:m.telephone),1)]),t("div",st,[et,t("p",null,":  "+e((f=s.data.customer)==null?void 0:f.customer_billing_address),1)]),t("div",ot,[at,t("p",null,":  "+e((g=s.data.customer)==null?void 0:g.customer_shipping_address),1)])]),t("div",it,[nt,t("div",lt,[ct,t("p",null,":  "+e((x=s.data.customer_pic)==null?void 0:x.contact_name),1)]),t("div",dt,[rt,t("p",null,":  "+e((w=s.data.customer_pic)==null?void 0:w.mobile_phone),1)]),t("div",_t,[ut,t("p",null,":  "+e((b=s.data.customer_pic)==null?void 0:b.email),1)]),t("a",{href:"https://wa.me/"+((y=s.data.customer_pic)==null?void 0:y.mobile_phone),target:"_blank",class:"bg-green-600 flex justify-center rounded-full items-center text-white py-2"},"open whatsapp",8,ht)]),t("div",pt,[mt,t("div",ft,[t("h1",gt,e(Math.ceil(s.data.progress/9*100)+"%"),1)])])]),xt,t("div",wt,[(o(!0),r(N,null,P(s.listQuotation,(i,Rt)=>(o(),l(D,{class:"cursor-pointer"},{default:c(()=>[t("div",{onClick:St=>C.toProfitLoss(i.quotation_id)},[t("div",yt,[vt,t("h1",Bt,e(i.quotation_number),1)]),t("div",kt,[t("div",Ct,[Lt,t("h1",jt,": "+e(i.quotation_date),1)]),t("div",Dt,[Qt,t("h1",zt,": "+e(i.quotation_date_validity),1)])]),t("div",Mt,[i.status==1?(o(),r("div",Pt," On progress ")):d("",!0),i.status==2?(o(),r("div",Nt," Approved ")):d("",!0),i.status==0?(o(),r("div",Vt," Rejected ")):d("",!0)])],8,bt)]),_:2},1024))),256))])])]}),_:1}))}const ss=z(H,[["render",It]]);export{ss as default};
