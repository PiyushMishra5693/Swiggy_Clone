import ItemList from "./ItemList";

import { useState } from "react";
const RestaurantCategory = (data)=>{

  

    // console.log(data.resData.itemCards.length);

    const [showItems,setShowItems]=useState(false);

    const Accordion= ()=>{
        setShowItems(!showItems);
    }
    return (

        <div className="w-6/12  bg-gray-100 m-3 p-3 shadow-lg">
            
             
                    <div className=" flex justify-between cursor-pointer " onClick={Accordion}>
                        <span className="text-stone-800 text-xl text-bold">{data.resData.title}({data.resData.itemCards.length})</span>
                       
                        <span className="text-lg">{'˅'}</span>
                    </div>

                    <div className="">
                    { showItems && <ItemList items={data}></ItemList>}
                    </div>


                    

        </div>
    )

}

export default RestaurantCategory;