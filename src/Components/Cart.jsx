import {  useSelector } from "react-redux";
import { clearCart } from "./utils/cardSlice";
import { IMAGE_URL } from "./utils/constant";
import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { removeItem } from "./utils/cardSlice";

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


    const dispatch = useDispatch();
    function handleClearCart(){
            dispatch(clearCart())

    }

    const dispatch2= useDispatch();
    function handleRemoveItem(card){
        dispatch2(removeItem(card))
    }

    return (

        <div className="flex m-4 p-4 items-center flex-col">

            <h1 className=" text-2xl font-bold ">Cart</h1>

            <button onClick={handleClearCart} className="p-2 m-2 bg-black text-white rounded-lg text-center">Clear Cart</button>

            <div className="w-6/12 m-auto bg-stone-300 ">
                {   
                    cartItems.map( c =>(
    
                        <div key={c.card.info.id} className="flex py-2 my-2 border-b-2 justify-between">

                            <div className="w-7/12 m-4">

                                <span className=" text-m text-gray-800">{c.card.info.name}</span>
                                <p className=" text-bold text-green-600"> ₹ {c.card.info.defaultPrice/100 || c.card.info.finalPrice/100 ||c.card.info.price/100}</p>
                                <p className="  text-s text-stone-900">{c.card.info.description}</p>
                                
                            </div>

                            <div className="w-3/12 "> 
                                <button className="w-1/12 absolute text- text-bold bg-green-400 text-black hover:bg-green-500  ml-4 p-2 rounded-md"> Buy Now</button>
                                {/* < button className="absolute mt-16 bg-red-400" onClick={handleRemoveItem(c)}> Remove item</button> */}
                                <img className=" mr-4" src={IMAGE_URL+c.card.info.imageId}></img>
                            </div>

                            
                            
                        
                        </div>
                     ))

                    

                }
            </div>
           
            <div>
                
                    {  cartItems.length!==0&&(
                            <div className="perspective-800">

                                <div className="transform rotate-y-30">
                                    <h2 className="text-center text-bold bg-green text-green-500 text-xl">To Pay : ₹ {totalAmount}</h2>
                                    <button className="m-4 p-4  bg-green-500 hover:bg-green-600 rounded-lg"><Link to="/payment">Procced Payment</Link></button>
                                </div>
                                
                            </div>
                            

                        )
                    }
            </div>
        </div>

        
    )
}

export default Cart;