import React, { useEffect, useState } from "react";

import DataTable from "react-data-table-component";
import { useNavigate } from "react-router";
import { useRenewed } from "../Context/RenewedConext";
import NavBar from "../NavBar/NavBar";
import RequestLog from "./RequestLog";
import Popup from 'reactjs-popup';
import ResponseLog from "./ResponseLog";

const VimlaSubscription = () => {
    const [resactiveRow, setResActiveRow] = useState({});
    const [reqactiveRow, setReqActiveRow] = useState({});
    const { requestLog, vimlaSubscription, VimlaSubscription } = useRenewed();
  
    const column = [
        {
            name: "Id",
            selector: row => row.id,
            sortable: true,
            width: "150px",
            cell: (row) => <div>{row.id}</div>
        },
        {
            name: "Order Id",
            selector: row => row.orderId,
            sortable: true,
            width: "200px"
        },
        {
            name: "Status",
            selector: row => row.status,
            sortable: true,
            width: "200px"
        },
        {
            name: "Request Log",

            sortable: true,
            width: "200px",
            cell: (row) => (
                <Popup trigger={<button data-tag="allowRowEvents" onClick={ setReqActiveRow((row.request_logs))}> view </button>}
                    position="right center">
                    <div>{<RequestLog activeRow={reqactiveRow} />}</div>
                </Popup>
              )
        },
        {
            name: "Response Log",
            selector: row => row.response_logs,
            sortable: true,
            width: "200px",
            cell: (row) => (
                <Popup trigger={<button data-tag="allowRowEvents" onClick={ setResActiveRow((row.response_logs))}> view </button>}
                    position="right center">
                    <div>{<ResponseLog activeRow={resactiveRow} />}</div>
                </Popup>
                
              )
        },

        {
            name: "Created At",
            selector: row => (row.created_at).slice(0, 10),
            sortable: true,
            width: "200px"
        },
        {
            name: "Updated At",
            selector: row => (row.updated_at).slice(0, 10),
            sortable: true,
            width: "200px"
        }
    ]


    useEffect(() => {
        VimlaSubscription();
    }, []);

    return (
        <div>
            <NavBar />

            <div style={{ marginTop: "62px" }}>
                <DataTable
              
                    columns={column}
                    data={vimlaSubscription}
                    highlightOnHover
                    pagination
                />
            </div>
        </div>
    )
}
export default VimlaSubscription;