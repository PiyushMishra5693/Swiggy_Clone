import { useState,useEffect } from "react"

const useOnlineStatus= ()=>{
    
    const [status,set_status]=useState(true);
    

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            set_status(false);
        })
    
        window.addEventListener("online",()=>{
            set_status(true);
        })
    },[])
   

    return status;
}

export default useOnlineStatus;