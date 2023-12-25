import React  from 'react'
import { FaCreditCard } from "react-icons/fa";
import { FaIdeal } from "react-icons/fa";
import { SiKlarna } from "react-icons/si";




const Payment = ()=>{

    return(
    
        <div className="h-[87vh] bg-gray-800 flex justify-center items-center">

                <div className="w-[500px] h-[500px] p-5 rounded-lg border-[10px]  border-blue-600  bg-gray-300">
                            
                            <h1 className='font-bold font-[cursive] text-3xl text-stone-900 ' >Payment Detail</h1>
                            
                            
                                <div className='flex mt-8 justify-between' >
                                    
                                    <div className="w-[120px] h-[100px]  border-[5px] border-blue-500 rounded-lg grid place-items-center" >
                                            <FaCreditCard  color='gray' size='30px'/>
                                            <h3 className='font-bold'>Card</h3>
                                            
                                    </div>
                                    <div className="w-[120px] h-[100px]  border-[5px] border-gray-500 rounded-lg grid place-items-center" >
                                            <FaIdeal  color='black' size='30px'/>
                                            <h3 className='font-mono font-bold'>iDeal</h3>
                                            
                                    </div>
                                    <div className="w-[120px] h-[100px]  border-[5px] border-gray-500 rounded-lg grid place-items-center" >
                                            <SiKlarna   size='30px'/>
                                            <h3 className='font-bold'>Klarna</h3>
                                            
                                    </div>
                                    

                </div>
                        <div className='mt-10'>
                        <h1 className='font-[cursive] text-black text-bold text-2xl' >Card Number</h1> 
                        <input type="text" className='p-4 h-10 mt-3 border-[3px] border-gray-400' size='50' placeholder='4242 4242 4242 4242'/>
                        </div> 


                        <div className='flex'>
                            <div className='mt-16 '>
                            <h1 className=' font-[cursive] text-black text-bold text-2xl' >Expiration Date</h1> 
                            <input type="text" className='p-4 h-10 mt-3 w-[200px] border-[3px] border-gray-400 'placeholder='MM/YY'/>
                            </div> 

                            <div className='mt-16 ml-[50px] font-[cursive] '>
                            <h1 className='font-[cursive] text-black text-bold text-2xl' >Security Code</h1> 
                            <input type="text" className='p-4 h-10  w-[200px] mt-3 border-[3px] border-gray-400' placeholder='CVV'/>
                            </div> 

                        </div>

                        



                </div>

                
                
        </div>
    )
}

export default Payment;
