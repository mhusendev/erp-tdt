import{u as d,x as c,m as p,y as s,S as o}from"./index-UcG7K48i.js";var l={VITE_API_BASE_URL:"https://auth-erp-tdt.cws.co.id/erp-tdt/api",VITE_API_BASE_URL2:"https://backend-dani-erp-tdt.cws.co.id/erp-tdt/api",VITE_API_AUTH_URL:"https://backend-keycloak-erp-tdt.cws.co.id/keycloak/api",VITE_APP_MODE:"dev",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const e=d(),n=l,i={getAll:"/quotations?project_id=",post:"/quotations",approveQt:"/quotations/approve/",search:"/quotations?search=",getbyid:"/quotations?quotation_id=",put:"/quotations/"},r={headers:{Authorization:`Bearer ${e.access_token}`}},u=c({id:"quotations",state:()=>p({data_quotations:[],loading:!1,headers:[],message:"",dataEdit:{},totalPage:0,currentPage:1,perPage:0,dataSearch:[],itemTemp:[],dataDetail:{}}),getters:{setValuedata(a){this.data_quotations=a}},actions:{setLoading(a){this.loading=a},approveQT(a){s.put(n.VITE_API_BASE_URL+i.approveQt+a,{},r).then(t=>{this.message="Quotation Status Success",new o({position:"top-end",html:'<p style="color:#ffff">Update Quotation Status Success !</p>',showConfirmButton:!1,background:"green",timer:1500}),window.location.reload()}).catch(t=>{console.error("Error:",t),e.sessionFail(t.response.data.message),this.message="gagal Approve PL",new o({position:"top-end",html:'<p style="color:#ffff">Update Quotation Status Failed!</p>',background:"red",showConfirmButton:!1,timer:1500})})},async getData(a){try{this.setLoading(!0);const t=await s.get(n.VITE_API_BASE_URL+i.getAll+a,r);this.data_quotations=t.data.data}catch(t){e.sessionFail(t.response.data.message),console.log(t)}finally{this.setLoading(!1)}},async getById(a){try{const t=await s.get(n.VITE_API_BASE_URL+i.getbyid+a,r);this.dataDetail=t.data.data,console.log(t.data.data)}catch(t){e.sessionFail(t.response.data.message),console.log(t)}},PostData(a){console.log(JSON.stringify(a)),s.post(n.VITE_API_BASE_URL+i.post,a,r).then(t=>{this.message="Berhasil Input Data",new o({position:"top-end",html:'<p style="color:#ffff">success save data!</p>',showConfirmButton:!1,background:"green",timer:1500}),window.location.href="/projects/detail/"+a.project_id}).catch(t=>{console.error("Error:",t),e.sessionFail(t.response.data.message),this.message="gagal Input Data",new o({position:"top-end",html:'<p style="color:#ffff">failed save data!</p>',background:"red",showConfirmButton:!1,timer:1500})})},async Search(a){try{this.setLoading(!0);const t=await s.get(n.VITE_API_BASE_URL+i.search+a,r);return this.dataSearch=t.data.data,t.data.data}catch(t){e.sessionFail(t.response.data.message),console.log(t)}finally{this.setLoading(!1)}},PutData(a){s.put(n.VITE_API_BASE_URL+i.put+a.brand_id,a,r).then(t=>{this.message="Berhasil Input Data",new o({text:"Berhasil",icon:"success"})}).catch(t=>{console.error("Error:",t),e.sessionFail(t.response.data.message),this.message="gagal Input Data",new o({text:"Gagal",icon:"warning"})})}}});export{u};
