import {  useSelector } from "react-redux";
import { clearCart } from "./utils/cardSlice";
import { IMAGE_URL } from "./utils/constant";
import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


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

    return (

        <div className="flex m-4 p-4 items-center flex-col">

            <h1 className=" text-2xl font-bold ">Cart</h1>

            <button onClick={handleClearCart} className="p-2 m-2 bg-black text-white rounded-lg text-center">Clear Cart</button>

            <div className="w-6/12 m-auto bg-stone-300">
                {   
                    cartItems.map( c =>(
    
                        <div key={c.card.info.id} className="flex py-2 my-2 border-b-2 justify-between ">

                            <div className="w-7/12">

                                <span className=" text-m text-gray-800">{c.card.info.name}</span>
                                <p className=" text-bold text-green-600"> ₹ {c.card.info.defaultPrice/100 || c.card.info.finalPrice/100 ||c.card.info.price/100}</p>
                                <p className="  text-s text-stone-900">{c.card.info.description}</p>
                                
                            </div>

                            <div className="w-2/12 ">   
                                <button className=" absolute bg-green-500 font-white hover:bg-green-600"> Buy Now</button>
                                <img src={IMAGE_URL+c.card.info.imageId}></img>
                            </div>

                            
                            
                        
                        </div>
                     ))

                    

                }
            </div>
           
            <div>
                
                    {  cartItems.length!==0&&(
                            <div>
                                <h2 className="text-center text-bold bg-green text-green-500 text-xl">To Pay : ₹ {totalAmount}</h2>
                                <button className="m-4 p-4  bg-green-500 hover:bg-green-600 rounded-lg"><Link to="/payment">Procced Payment</Link></button>
                            </div>
                            

                        )
                    }
            </div>
        </div>

        
    )
}

export default Cart;