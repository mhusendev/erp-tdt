import{u as d,x as c,m as p,y as s,S as n}from"./index-zNN2oSXV.js";var l={VITE_API_BASE_URL:"https://auth-erp-tdt.cws.co.id/erp-tdt/api",VITE_API_BASE_URL2:"https://backend-dani-erp-tdt.cws.co.id/erp-tdt/api",VITE_API_AUTH_URL:"https://backend-keycloak-erp-tdt.cws.co.id/keycloak/api",VITE_API_PDF:"https://pdf-service.cws.co.id/erp-tdt/api",VITE_APP_MODE:"dev",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const e=d(),o=l,r={getAll:"/products?page=",post:"/products",search:"/products?search="},i={headers:{Authorization:`Bearer ${e.access_token}`}},h=c({id:"products",state:()=>p({data_products:[],loading:!1,headers:[],message:"",dataEdit:{},totalPage:0,currentPage:1,perPage:0,dataSearch:[]}),getters:{setValuedata(a){this.data_products=a}},actions:{setLoading(a){this.loading=a},async getData(a){a&&(this.currentPage=a);try{this.setLoading(!0);const t=await s.get(o.VITE_API_BASE_URL+r.getAll+this.currentPage,i);this.currentPage=parseInt(t.data.metadata.current_page),this.totalPage=parseInt(t.data.metadata.total_pages),this.perPage=parseInt(t.data.metadata.per_page),this.data_products=t.data.data}catch(t){e.sessionFail(t.response.data.message),console.log(t)}finally{this.setLoading(!1)}},async Search(a){try{this.setLoading(!0);const t=await s.get(o.VITE_API_BASE_URL+r.search+a,i);return this.dataSearch=t.data.data,t.data.data}catch(t){e.sessionFail(t.response.data.message),console.log(t)}finally{this.setLoading(!1)}},PostData(a){console.log(JSON.stringify(a)),s.post(o.VITE_API_BASE_URL+r.post,a,i).then(t=>{this.message="Berhasil Input Data",new n({position:"top-end",html:'<p style="color:#ffff">success save data!</p>',showConfirmButton:!1,background:"green",timer:1500})}).catch(t=>{console.error("Error:",t),e.sessionFail(t.response.data.message),this.message="gagal Input Data",new n({position:"top-end",html:'<p style="color:#ffff">failed save data!</p>',background:"red",showConfirmButton:!1,timer:1500})})}}});export{h as u};