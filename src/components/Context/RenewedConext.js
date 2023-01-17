import axios from "axios";
import { createContext, useContext, useState,useEffect } from "react";

import { toast } from "react-toastify";

const RenewedContext = createContext();

const RenewedProvider = ({ children }) => {

    const [vimlaSubscription, setvimlaSubscription] = useState([]);
    const [vimlaNonSubscription, setvimlaNonSubscription] = useState([]);
    const [evoilSubscription, seevoilSubscription] = useState([]);
    const RequestLog= []
    const requestLog=[]

    const VimlaSubscription = async () => {
        try {
            const response = await axios.post("http://localhost:4000/getVimlaSubscription");
         
            if (response.data.status) {
                setvimlaSubscription(response.data.data)
               
            } else {
                toast.error(response.data.messages)
            }
        } catch (error) {
            console.log(error);
        }
    }
    const VimlaNonSubscription = async () => {

        try {
            const response = await axios.post("http://localhost:4000/getVimlaNonSubscription");
            if (response.data.status) {
                setvimlaNonSubscription(response.data.data)
              
            } else {
                toast.error(response.data.messages)
            }
        } catch (error) {
            console.log(error);
        }
    }
    const EvoilSubscription = async () => {

        try {
            const response = await axios.post("http://localhost:4000/getEvoilSubscription");
            console.log(response.data.data);
            if (response.data.status) {
                seevoilSubscription(response.data.data)
               
            } else {
                toast.error(response.data.messages)
            }
        } catch (error) {
            console.log(error);
        }
    }

if(vimlaSubscription){
    vimlaSubscription.forEach(element => {
        requestLog.push((JSON.parse(element.request_logs)));   
    
    });
    for (let index = 0; index < requestLog.length; index++) {
        const element = requestLog[index];
      
        RequestLog.push(element)
    }
}

useEffect(() => {
    VimlaSubscription();
  
},[]);


    return (
        <RenewedContext.Provider value={{ RequestLog,VimlaSubscription,vimlaSubscription,VimlaNonSubscription,vimlaNonSubscription,EvoilSubscription,evoilSubscription}}>
            {children}
        </RenewedContext.Provider>
    )
}

const useRenewed = () => useContext(RenewedContext);
export { RenewedProvider, useRenewed }