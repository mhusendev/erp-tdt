import{u as i,x as c,m as p,y as s,S as d}from"./index-H1euUr_g.js";var g={VITE_API_BASE_URL:"https://auth-erp-tdt.cws.co.id/erp-tdt/api",VITE_API_BASE_URL2:"https://backend-dani-erp-tdt.cws.co.id/erp-tdt/api",VITE_API_AUTH_URL:"https://backend-keycloak-erp-tdt.cws.co.id/keycloak/api",VITE_API_PDF:"https://report-erp-tdt.cws.co.id/erp-tdt/api",VITE_APP_MODE:"dev",VITE_APP_:"",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const t=i(),o=g,r={getAll:"/vendors?page=",post:"/vendors",search:"/vendors?search=",getPICbyidVendor:"/vendor-pic?vendor_id=",search_pic:"/vendors-pic?search="},n={headers:{Authorization:`Bearer ${t.access_token}`}},h=c({id:"vendors",state:()=>p({data_vendors:[],loading:!1,headers:[],message:"",dataEdit:{},totalPage:0,currentPage:1,perPage:0,dataSearchPIC:[],dataPICByid:[]}),getters:{setValuedata(e){this.data_vendors=e}},actions:{setLoading(e){this.loading=e},async getData(e){e&&(this.currentPage=e);try{this.setLoading(!0);const a=await s.get(o.VITE_API_BASE_URL+r.getAll+this.currentPage,n);this.currentPage=parseInt(a.data.metadata.current_page?a.data.metadata.current_page:0),this.totalPage=parseInt(a.data.metadata.total_pages?a.data.metadata.total_pages:0),this.perPage=parseInt(a.data.metadata.per_page?a.data.metadata.per_page:0),this.data_vendors=a.data.data}catch(a){if(Object.hasOwn(a,"response"))return t.sessionFail(a.response.data.message);console.log(a)}finally{this.setLoading(!1)}},async getPICById(e){try{const a=await s.get(o.VITE_API_BASE_URL+r.getPICbyidVendor+e,n);this.dataPICByid=a.data.data}catch(a){t.sessionFail(a.response.data.message),console.log(a)}},async Search(e){try{this.setLoading(!0);const a=await s.get(o.VITE_API_BASE_URL+r.search+e,n);return this.dataSearch=a.data.data,a.data.data}catch(a){t.sessionFail(a.response.data.message),console.log(a)}finally{this.setLoading(!1)}},async SearchPIC(e){try{this.setLoading(!0);const a=await s.get(o.VITE_API_BASE_URL+r.search_pic+e,n);return this.dataSearchPIC=a.data.data,a.data.data}catch(a){t.sessionFail(a.response.data.message),console.log(a)}finally{this.setLoading(!1)}},PostData(e){console.log(JSON.stringify(e)),s.post(o.VITE_API_BASE_URL+r.post,e,n).then(a=>{this.message="Berhasil Input Data",new d({position:"top-end",html:'<p style="color:#ffff">success save data!</p>',showConfirmButton:!1,background:"green",timer:1500})}).catch(a=>{console.error("Error:",a),t.sessionFail(a.response.data.message),this.message="gagal Input Data",new d({position:"top-end",html:'<p style="color:#ffff">failed save data!</p>',background:"red",showConfirmButton:!1,timer:1500})})}}});export{h as u};
