import { useState,useEffect } from "react"

const useOnlineStatus= ()=>{
    
    const [status,set_status]=useState(true);
    

    useEffect(()=>{
        window.addEventListener("offline",(e)=>{
            set_status(false);
        })
    
        window.addEventListener("online",(e)=>{
            set_status(true);
        })
    },[])
   

    return status;
}

export default useOnlineStatus;