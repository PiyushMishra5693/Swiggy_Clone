import { clearCart } from "./utils/cardSlice";
import { IMAGE_URL } from "./utils/constant";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { removeItem } from "./utils/cardSlice";
import img from "./assets/Cart.png"

const Cart = ()=>{

    const cartItems = useSelector( (store)=> store.cart.items);

    const [totalAmount,setAmount]=useState(0);



    useEffect(() => {
        let totalAmount = 0;
        cartItems.forEach((c) => {
          totalAmount +=
            c.card.info.defaultPrice / 100 ||
            c.card.info.finalPrice / 100 ||
            c.card.info.price / 100;
        });
        setAmount(totalAmount);
      }, [cartItems]);

      if(cartItems.length===0){

        return (
        <div className="min-h-[70vh]">
                <img className="ml-[530px] mt-4" src={img}></img>
        </div>
        
        )
      }

   

    return (

        <div className=" flex  items-center flex-col bg-gray-800">

            <h1 className="my-4 text-4xl font-bold text-white font-[cursive]">Cart</h1>


            <div className="w-6/12 m-auto bg-stone-300">
                {   

                   

                    cartItems.map( c =>(
    
                        <div key={c.card.info.id} className="flex   py-2 my-2 border-b-2 justify-between">

                            <div className="w-7/12 m-4">

                                <span className=" text-m text-gray-800">{c.card.info.name}</span>
                                <p className=" text-bold text-green-600"> ₹ {c.card.info.defaultPrice/100 || c.card.info.finalPrice/100 ||c.card.info.price/100}</p>
                                <p className="  text-s text-stone-900">{c.card.info.description}</p>
                                
                            </div>

                            <div className="w-2/12 "> 
                                <button className="ml-8 absolute text- text-bold bg-black text-white hover:bg-green-500   p-1 rounded-md"> Buy Now</button>
                                <img className=" mr-16" src={IMAGE_URL+c.card.info.imageId}></img>
                            </div>

                        </div>
                     ))
                     
                }
            </div>
           
            <div>
                
                    {  cartItems.length!==0&&(
                            <div >

                                <div >
                                    <h2 className="mt-4 text-center text-bold bg-green text-green-500 text-xl">To Pay : ₹ {totalAmount}</h2>
                                    <button className="mt-4 p-4  bg-green-500 hover:bg-green-600 rounded-lg"><Link to="/payment">Procced Payment</Link></button>
                                </div>
                                
                            </div>
                            

                        )
                    }
            </div>
        </div>

        
    )
}

export default Cart;