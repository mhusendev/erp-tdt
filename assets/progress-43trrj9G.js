import{u as a,x as o,m as r,y as d}from"./index-TigB9G6n.js";var i={VITE_API_BASE_URL:"https://auth-erp-tdt.cws.co.id/erp-tdt/api",VITE_API_BASE_URL2:"https://backend-dani-erp-tdt.cws.co.id/erp-tdt/api",VITE_API_AUTH_URL:"https://backend-keycloak-erp-tdt.cws.co.id/keycloak/api",VITE_API_PDF:"https://report-erp-tdt.cws.co.id/erp-tdt/api",VITE_APP_MODE:"dev",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const e=a(),p=i,c={getAll:"/module-progress?quotation_id="},n={headers:{Authorization:`Bearer ${e.access_token}`}},E=o({id:"module-progress",state:()=>r({data_progress:[]}),getters:{},actions:{async getData(s){try{const t=await d.get(p.VITE_API_BASE_URL2+c.getAll+s,n);this.data_progress=t.data.data}catch(t){e.sessionFail(t.response.data.message),console.log(t)}}}});export{E as u};