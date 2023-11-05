import Shimmer from "./utils/Shimmer";
import { IMAGE_URL } from "./utils/constant";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

import useRestaurantMenu   from "./utils/useRestaurantMenu"

const ReaustaurantMenu = ()=>{


    const {resid}=useParams();
    const resInfo= useRestaurantMenu(resid);


    if(resInfo===null){
        return <Shimmer></Shimmer>
    }

    const { name,city,cuisines,costForTwoMessage,avgRatingString,totalRatingsString,cloudinaryImageId}= resInfo?.data?.cards[0]?.card?.card?.info;

    const deliveryTime=resInfo?.data.cards[0].card.card.info.sla.deliveryTime;


    /************************************/

    const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=> c?.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    

    return (

        

         <div className=" h-auto flex items-center flex-col bg-gray-900">

           <div className="font-[cursive] w-6/12 flex justify-between p-5 m-5  bg-gray-300 ">
                
                    <div >

                    <img className=" w-[100px] h-[100px] " src={IMAGE_URL+cloudinaryImageId}></img>
                    <h1 className="text-3xl m-1 text-gray-800">{name}</h1> 
                    <h1 className="text-lg pt-1 m-1 text-stone-700 ">{cuisines.join(',')}</h1>
                    <p className="text-lg pt-1 m-1 text-blue-700">{city}</p>
                    <hr className="h-[2px] bg-gray-400 "></hr>
                    <h2 className="text-xl font-bold pt-2 m-1 text-gray-800">{deliveryTime+"Min  "+costForTwoMessage}</h2>
                    </div>


                    <div className=" h-[90px] w-[95px] bg-green-200 border border-solid border-black">
                    <h1 className=" text-green-600 p-1">{"★"+avgRatingString}</h1>
                    <hr className="h-[2px] bg-gray-400 "></hr>
                    <h1 className="p-1">{totalRatingsString}</h1>
                    </div>

            </div>

            

            <div className="pt-4 w-6/12">
                <hr className="border border-solid border-black"></hr>
                {/* <h1 className="font-serif mt-5 text-black-300  text-3xl">Recommended</h1> */}
            </div>
           
           
            
            {
               
               categories.map((category)=>(
                <RestaurantCategory key = {category.card.card.title} resData={category?.card?.card} /> 
                // console.log(category?.card?.card)
               ))
                
            }
        
           
        </div>          
    )
}

export default ReaustaurantMenu;