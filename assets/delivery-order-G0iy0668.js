import{u as d,x as p,m as c,y as t,S as o}from"./index-TigB9G6n.js";var g={VITE_API_BASE_URL:"https://auth-erp-tdt.cws.co.id/erp-tdt/api",VITE_API_BASE_URL2:"https://backend-dani-erp-tdt.cws.co.id/erp-tdt/api",VITE_API_AUTH_URL:"https://backend-keycloak-erp-tdt.cws.co.id/keycloak/api",VITE_API_PDF:"https://report-erp-tdt.cws.co.id/erp-tdt/api",VITE_APP_MODE:"dev",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const a=d(),r=g,n={getByPO:"/delivery-order/?po_id=",post:"/delivery-order/so/",search:"/delivery-order?search=",getbyid:"/delivery-order/",checkSerial:"/delivery-order/serial/so/",put:"/delivery-order/",listByPO:"/delivery-order/po/",listBySO:"/delivery-order/?so_id=",uploadCustPO:"/delivery-order/upload-cust-po/",uploadVendQT:"/delivery-order/upload-vendor-quotation/",approvePl:"/delivery-order/approve/"},i={headers:{Authorization:`Bearer ${a.access_token}`}},h=p({id:"delivery-order",state:()=>c({data_rg:[],list_rg:[],lisBy_so:[],loading:!1,headers:[],message:"",dataEdit:{},totalPage:0,currentPage:1,perPage:0,dataSearch:[],itemTemp:[],dataSerial:[],dataDetail:{}}),getters:{setValuedata(s){this.data_rg=s}},actions:{async CheckSerial(s){try{this.setLoading(!0);const e=await t.get(r.VITE_API_BASE_URL2+n.checkSerial+s,i);this.dataSerial=e.data.data}catch(e){console.log(e.response.data.message),a.sessionFail(e.response.data.message),console.log(e)}finally{this.setLoading(!1)}},approvePL(s){t.put(r.VITE_API_BASE_URL2+n.approvePl+s,{},i).then(e=>{this.message="Berhasil Approve PL",new o({position:"top-end",html:'<p style="color:#ffff">success save data!</p>',showConfirmButton:!1,background:"green",timer:1500})}).catch(e=>{console.error("Error:",e),a.sessionFail(e.response.data.message),this.message="gagal Approve PL",new o({position:"top-end",html:'<p style="color:#ffff">failed save data!</p>',background:"red",showConfirmButton:!1,timer:1500})})},setLoading(s){this.loading=s},async UploadCustPO(s,e){try{(await t.put(r.VITE_API_BASE_URL2+n.uploadCustPO+s,e,i)).status!==200&&new o({position:"top-end",html:'<p style="color:#ffff">failed upload file customer po!</p>',background:"red",showConfirmButton:!1,timer:1500}),new o({position:"top-end",html:'<p style="color:#ffff">success upload file customer po!</p>',showConfirmButton:!1,background:"green",timer:1500})}catch(l){a.sessionFail(l.response.data.message),console.log(l)}},async UploadVendQT(s,e){try{(await t.put(r.VITE_API_BASE_URL2+n.uploadVendQT+s,e,i)).status!==200&&new o({position:"top-end",html:'<p style="color:#ffff">failed upload file vendor QT!</p>',background:"red",showConfirmButton:!1,timer:1500}),new o({position:"top-end",html:'<p style="color:#ffff">success upload file vendor QT!</p>',showConfirmButton:!1,background:"green",timer:1500})}catch(l){a.sessionFail(l.response.data.message),console.log(l)}},async listSO(s){try{this.setLoading(!0);const e=await t.get(r.VITE_API_BASE_URL2+n.listBySO+s,i);this.lisBy_so=e.data.data,console.log(e.data)}catch(e){console.log(e.response.data.message),a.sessionFail(e.response.data.message),console.log(e)}finally{this.setLoading(!1)}},async listByPO(s){try{this.setLoading(!0);const e=await t.get(r.VITE_API_BASE_URL2+n.listByPO+s,i);this.list_rg=e.data.data}catch(e){console.log(e.response.data.message),a.sessionFail(e.response.data.message),console.log(e)}finally{this.setLoading(!1)}},async getData(s){try{this.setLoading(!0);const e=await t.get(r.VITE_API_BASE_URL2+n.getByPO+s,i);this.data_rg=e.data.data}catch(e){console.log(e.response.data.message),a.sessionFail(e.response.data.message),console.log(e)}finally{this.setLoading(!1)}},async getById(s){try{const e=await t.get(r.VITE_API_BASE_URL2+n.getbyid+s,i);this.dataDetail=e.data.data}catch(e){a.sessionFail(e.response.data.message),console.log(e)}},async PostData(s){console.log(JSON.stringify(s)),t.post(r.VITE_API_BASE_URL2+n.post+s.so_id,s,i).then(e=>{this.message="Berhasil Input Data",new o({position:"top-end",html:'<p style="color:#ffff">success save data!</p>',showConfirmButton:!1,background:"green",timer:1500}),window.location.reload()}).catch(e=>{new o({position:"top-end",html:'<p style="color:#ffff">failed save data!</p>',background:"red",showConfirmButton:!1,timer:1500}),console.error("Error:",e),a.sessionFail(e.response.data.message),this.message="gagal Input Data",new o({position:"top-end",html:'<p style="color:#ffff">failed save data!</p>',background:"red",showConfirmButton:!1,timer:1500})})},async Search(s){try{this.setLoading(!0);const e=await t.get(r.VITE_API_BASE_URL2+n.search+s,i);return this.dataSearch=e.data.data,e.data.data}catch(e){a.sessionFail(e.response.data.message),console.log(e)}finally{this.setLoading(!1)}},PutData(s){t.put(r.VITE_API_BASE_URL2+n.put+s.brand_id,s,i).then(e=>{this.message="Berhasil Input Data",new o({text:"Berhasil",icon:"success"})}).catch(e=>{console.error("Error:",e),a.sessionFail(e.response.data.message),this.message="gagal Input Data",new o({text:"Gagal",icon:"warning"})})}}});export{h as u};
