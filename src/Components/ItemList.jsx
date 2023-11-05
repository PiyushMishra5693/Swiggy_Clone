import { IMAGE_URL } from "./utils/constant";

import { useDispatch } from "react-redux";
import { addItem } from "./utils/cardSlice";

const ItemList= (data)=>{

    // console.log(data);
    // console.log(data.items.resData.itemCards[0].card.info.description);

    let itemcard= data?.items?.resData?.itemCards
    

    if(itemcard===undefined){
        itemcard=data
    }

    const dispatch = useDispatch();

    function handleDispatch(item){
            dispatch(addItem(item));
            // console.log(item);
    }
    

    return(
        <div className="my-2">
            {      
            
                        itemcard.map( c =>(
                            <div key={c.card.info.id} className="flex py-2 my-2 border-b-2 justify-between ">

                                <div className="w-7/12">

                                    <span className="text-m text-gray-800">{c.card.info.name}</span>
                                    <p className="text-bold text-green-600"> ₹ {c.card.info.defaultPrice/100 || c.card.info.finalPrice/100 ||c.card.info.price/100}</p>
                                    <p className=" text-s text-stone-900">{c.card.info.description}</p>

                                </div>

                                <div className="w-2/12 ">   
                                    <button onClick={()=> handleDispatch(c)} className="text-white p-1 absolute   mx-10 rounded-m bg-black shadow-lg rounded-lg">Add+</button>
                                    <img src={IMAGE_URL+c.card.info.imageId}></img>
                                </div>
                                
                            
                            </div>
                         ))
                    }
                     
        </div>
    )


}

export default ItemList;