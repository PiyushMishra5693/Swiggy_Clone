import { IMAGE_URL } from "./utils/constant";
const ReaustauranCard=(props)=>{

    const {resData}=props;

    return (
      
            // <div className="res-card">
            // <img className="res-img" src={resData.image_url}></img>
            // <h3>{resData.restaurant_name}</h3>
            // <h4>{resData.cuisine}</h4>
            // <h4>{resData.avg_rating} 🌟</h4>
            // <h4>{resData.delivery_time} Min</h4>
            // </div>

           
            <div className=" font-[cursive] m-4 p-4 w-[300px] h-[400px]  bg-gray-200 hover:bg-blue-200">
            <img className=" w-[300px] h-[200px]" src={IMAGE_URL+resData.info.cloudinaryImageId}></img>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.avgRating} 🌟</h4>
            <h4>{resData.info.sla.deliveryTime} Min</h4>
            </div>
       
    )
}

export default ReaustauranCard;