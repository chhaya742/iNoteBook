import React,{useEffect}  from "react";

import DataTable from "react-data-table-component";
import { useRenewed } from "../Context/RenewedConext";
import NavBar from "../NavBar/NavBar";




const EvoilSubscription=()=>{
const {EvoilSubscription,evoilSubscription}=useRenewed();

const column=[
    {
        name:"Order Id",
        selector:row=>row.orderId,
        sortable:true
    },
    {
        name:"Status",
        selector:row=>row.status,
        sortable:true
    },
    {
        name:"Request Log",
        selector:row=>row.request_logs,
        sortable:true,
      
    },
    {
        name:"Response Log",
        selector:row=>row.response_logs,
        sortable:true,
    },
   
    {
        name:"Created At",
        selector:row=>(row.created_at).slice(0,10),
        sortable:true
    },
    {
      name:"Updated At",
      selector:row=>(row.updated_at).slice(0,10),
      sortable:true
  }
]

useEffect(() => {
  EvoilSubscription();
}, [])

    return(
        <div>
      <NavBar/>
            <DataTable 
            columns={column}
            data={evoilSubscription}
            pagination
            />
        </div>
    )
}
export default EvoilSubscription;