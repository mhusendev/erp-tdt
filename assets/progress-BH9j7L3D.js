import{u as a,x as o,m as r,y as d}from"./index-zNN2oSXV.js";var i={VITE_API_BASE_URL:"https://auth-erp-tdt.cws.co.id/erp-tdt/api",VITE_API_BASE_URL2:"https://backend-dani-erp-tdt.cws.co.id/erp-tdt/api",VITE_API_AUTH_URL:"https://backend-keycloak-erp-tdt.cws.co.id/keycloak/api",VITE_API_PDF:"https://pdf-service.cws.co.id/erp-tdt/api",VITE_APP_MODE:"dev",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const e=a(),c=i,p={getAll:"/module-progress?quotation_id="},n={headers:{Authorization:`Bearer ${e.access_token}`}},E=o({id:"module-progress",state:()=>r({data_progress:[]}),getters:{},actions:{async getData(s){try{const t=await d.get(c.VITE_API_BASE_URL2+p.getAll+s,n);this.data_progress=t.data.data}catch(t){e.sessionFail(t.response.data.message),console.log(t)}}}});export{E as u};
