import { IMAGE_URL } from "./utils/constant";
import { BsFillClockFill } from "react-icons/bs";
const ReaustauranCard=(props)=>{

    const {resData}=props;

            
    return (
      
           
            <div className=" font-sans m-4 p-4 w-[300px] h-[400px]  bg-gray-300 hover:bg-blue-200 shadow-lg rounded-md">
            <img className=" w-[300px] h-[200px] rounded-lg" src={IMAGE_URL+resData.info.cloudinaryImageId}></img>
            <h1 className="font-bold text-lg">{resData.info.name}</h1>
            <h3 className="font-[cursive]">{resData.info.cuisines.slice(0,4).join(',')}</h3>
            <div className="flex justify-between">
                <h4 className="font-bold text-md">{resData.info.costForTwo}</h4>
                <h4 className="bg-green-400 rounded-md py-2 px-1">{resData.info.avgRating} 🌟</h4>
            </div>
            
            <div className="flex">
                < BsFillClockFill  className="mt-4 text-orange-400"/>
                <h4 className="mt-2 text-bold text-lg ml-2"> {resData.info.sla.deliveryTime} Min</h4>
            </div>
            
            

            </div>
       
    )
}

export default ReaustauranCard;