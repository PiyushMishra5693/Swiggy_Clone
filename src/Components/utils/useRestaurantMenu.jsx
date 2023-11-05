
import { useState } from "react";
import { REST_MENU } from "./constant";
import { useEffect } from "react";


const useRestaurantMenu = (resid)=>{

    const [resMenu,setResMenu]=useState(null);


    useEffect(()=>{
        fetch_menu();
    },[]);

    async function fetch_menu(){

        const data =await fetch(REST_MENU+resid)

        const json= await data.json();


        setResMenu(json);
    }

    return resMenu;

}

export default useRestaurantMenu;