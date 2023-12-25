import ReaustauranCard from "./Reaustaurant-card";
import  {useState, useEffect} from "react";
import Shimmer from "./utils/Shimmer"
import { Link, json } from "react-router-dom";

import useOnlineStatus from "./utils/useOnlineStatus";


const Body = ()=>{

    // const [res_list,setres_list]=useState(json_obj);
    const online = useOnlineStatus();


    const [rest_array,set_rest_array]=useState([]);
    const [filter_rest_array,set_filter_rest_array]=useState([]);

   


    const [star_rating,set_star_rating]=useState("");

    

    const [searchText,setSearchText]=useState("");



    useEffect(()=>{
        fetchdata1();

    },[]);


    useEffect(() => {
        console.log(star_rating); // Log the updated value when it changes
      }, [star_rating]);


    // Conditional Rendring
    // if(rest_array.length===0){

    //     return(
    //         <Shimmer/>
    //     )
    // }


    
    



async function fetch_data_by_area(){
    
    const area= searchText.split(" ").join('%20');   

    try{
        const coor_data = await fetch(`https://www.mapquestapi.com/geocoding/v1/address?key=lVn1m098kcE2Ea5DWGcogz0jEEy68hFz&location=${area}`)
        const coor_json= await coor_data.json();

        const lat=coor_json.results[0].locations[0].latLng.lat.toString();
        const long=coor_json.results[0].locations[0].latLng.lng.toString();


        if(lat ===undefined && long ===undefined){
            alert('Invalid location');
            return;
        }
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        
        const json= await data.json();


        
         const rest_array=json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        
         console.log(rest_array);

         if(rest_array===undefined){
            alert('No location found in the Map');
         }
        
        if(rest_array.length>0){
                set_rest_array(rest_array);
                set_filter_rest_array(rest_array);
        }

    }

    catch(err){

        console.log(err);
    }

}


async function fetchdata1(){

        
        try{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4609559&lng=77.49693789999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json= await data.json();
            const rest_array=json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
     
             
            //   console.log(rest_array);
              
              if(rest_array===undefined){
                 alert('No location found in the Map');
              }
             
             if(rest_array.length>0){
                     set_rest_array(rest_array);
                     set_filter_rest_array(rest_array);
             }

        }

        catch(err){
            console.log(err);
        }
        


    }
       

     return  (online===false)?<h1>Look's like you are offline!!</h1>:(

        <div className=" h-auto bg-gray-800">
                    <div className="flex justify-center">
                        
                        <div className="p-4 m-4">
                            <input   className="w-64 p-2 rounded-l border border-gray-300" placeholder="Enter a place" type="text"  value={searchText} onChange={(e)=>{
                                setSearchText(e.target.value);
                            }} ></input>
                            <button className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600" onClick={()=>{
                                
                                // const filter_array = rest_array.filter((res)=> {
                                //     return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                                // });

                                // set_filter_rest_array(filter_array);
                                fetch_data_by_area();

                                if(searchText===""){
                                    alert("Enter a location to continue...");
                                }

                            }}>Search</button>
                        
                    </div>
                 
                    <div className="p-4 m-4">
                        
                        
                        <input placeholder="Search By Rating" className=" w-64 p-2 rounded-sm border border-gray-300 "type="text" value={star_rating} onChange={(e)=>{
                            set_star_rating(e.target.value);
                        }}></input>
                        
                        <button className=" p-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600" onClick={()=>{
                            
                            console.log(star_rating); 
                            const filter_res_list= rest_array.filter((res)=> res.info.avgRating >= star_rating);

                            set_filter_rest_array(filter_res_list);

                            if(filter_res_list.length===0){
                                alert('No Restaurant found')
                                // return <h1>No Restaurant of {start_rating} and above exist</h1>
                            }
                        }
                       }>Filter</button>

                       
                    </div>          
            </div>

                
              <div className=" flex flex-wrap pl-[100px]  justify-start">
                {
                    // res_list.map((res)=>(
                    //     <ReaustauranCard  key = {res.id} resData={res}/>
                    // ))
                    filter_rest_array.map((res)=>(
                       <Link key = {res.info.id} to={"/restaurant/"+res.info.id}>
                             <ReaustauranCard   resData={res}/>
                       </Link> 
                    ))
                       
                }
                
              </div>
          
           
        </div>
    )
}

export default Body;