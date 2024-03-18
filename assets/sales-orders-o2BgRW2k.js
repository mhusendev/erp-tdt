import{u as l,x as p,m as c,y as o,S as a}from"./index-2Xl9qFv7.js";var f={VITE_API_BASE_URL:"https://auth-erp-tdt.cws.co.id/erp-tdt/api",VITE_API_BASE_URL2:"https://backend-dani-erp-tdt.cws.co.id/erp-tdt/api",VITE_API_AUTH_URL:"https://backend-keycloak-erp-tdt.cws.co.id/keycloak/api",VITE_APP_MODE:"dev",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const t=l(),r=f,n={getByQuotation:"/sales-order?quotation_id=",post:"/sales-order",search:"/sales-order?search=",getbyid:"/sales-order?pl_id=",put:"/sales-order/",uploadCustPO:"/sales-order/upload-cust-po/",uploadVendQT:"/sales-order/upload-vendor-quotation/",approvePl:"/sales-order/approve/"},i={headers:{Authorization:`Bearer ${t.access_token}`}},g=p({id:"sales-order",state:()=>c({data_so:[],loading:!1,headers:[],message:"",dataEdit:{},totalPage:0,currentPage:1,perPage:0,dataSearch:[],itemTemp:[],dataDetail:{}}),getters:{setValuedata(s){this.data_so=s}},actions:{approvePL(s){o.put(r.VITE_API_BASE_URL+n.approvePl+s,{},i).then(e=>{this.message="Berhasil Approve PL",new a({position:"top-end",html:'<p style="color:#ffff">success save data!</p>',showConfirmButton:!1,background:"green",timer:1500})}).catch(e=>{console.error("Error:",e),t.sessionFail(e.response.data.message),this.message="gagal Approve PL",new a({position:"top-end",html:'<p style="color:#ffff">failed save data!</p>',background:"red",showConfirmButton:!1,timer:1500})})},setLoading(s){this.loading=s},async UploadCustPO(s,e){try{(await o.put(r.VITE_API_BASE_URL+n.uploadCustPO+s,e,i)).status!==200&&new a({position:"top-end",html:'<p style="color:#ffff">failed upload file customer po!</p>',background:"red",showConfirmButton:!1,timer:1500}),new a({position:"top-end",html:'<p style="color:#ffff">success upload file customer po!</p>',showConfirmButton:!1,background:"green",timer:1500})}catch(d){t.sessionFail(d.response.data.message),console.log(d)}},async UploadVendQT(s,e){try{(await o.put(r.VITE_API_BASE_URL+n.uploadVendQT+s,e,i)).status!==200&&new a({position:"top-end",html:'<p style="color:#ffff">failed upload file vendor QT!</p>',background:"red",showConfirmButton:!1,timer:1500}),new a({position:"top-end",html:'<p style="color:#ffff">success upload file vendor QT!</p>',showConfirmButton:!1,background:"green",timer:1500})}catch(d){t.sessionFail(d.response.data.message),console.log(d)}},async getIdPL(s){try{return await(await o.get(r.VITE_API_BASE_URL+n.getByQuotation+s,i)).data.data.pl_id}catch(e){t.sessionFail(e.response.data.message),console.log(e)}},async getData(s){try{this.setLoading(!0);const e=await o.get(r.VITE_API_BASE_URL+n.getByQuotation+s,i);this.data_so=e.data.data}catch(e){t.sessionFail(e.response.data.message),console.log(e)}finally{this.setLoading(!1)}},async getById(s){try{const e=await o.get(r.VITE_API_BASE_URL+n.getbyid+s,i);this.dataDetail=e.data.data}catch(e){t.sessionFail(e.response.data.message),console.log(e)}},async PostData(s){console.log(JSON.stringify(s)),o.post(r.VITE_API_BASE_URL+n.post,s,i).then(e=>{this.message="Berhasil Input Data",new a({position:"top-end",html:'<p style="color:#ffff">success save data!</p>',showConfirmButton:!1,background:"green",timer:1500}),window.location.href="/sales-order/upload/"+e.data.data.pl_id}).catch(e=>{console.error("Error:",e),t.sessionFail(e.response.data.message),this.message="gagal Input Data",new a({position:"top-end",html:'<p style="color:#ffff">failed save data!</p>',background:"red",showConfirmButton:!1,timer:1500})})},async Search(s){try{this.setLoading(!0);const e=await o.get(r.VITE_API_BASE_URL+n.search+s,i);return this.dataSearch=e.data.data,e.data.data}catch(e){t.sessionFail(e.response.data.message),console.log(e)}finally{this.setLoading(!1)}},PutData(s){o.put(r.VITE_API_BASE_URL+n.put+s.brand_id,s,i).then(e=>{this.message="Berhasil Input Data",new a({text:"Berhasil",icon:"success"})}).catch(e=>{console.error("Error:",e),t.sessionFail(e.response.data.message),this.message="gagal Input Data",new a({text:"Gagal",icon:"warning"})})}}});export{g as u};