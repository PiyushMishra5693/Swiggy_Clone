import { HEADER_URL } from "./utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import { useAuth0 } from "@auth0/auth0-react";
import {  useSelector } from "react-redux";








const Header= ()=>{

    // const [btn,setbutton]=useState("Login");

   
    const online = useOnlineStatus();
    const {user, loginWithRedirect,isAuthenticated } = useAuth0();
    const { logout } = useAuth0();

    const cartItems = useSelector((store)=> store.cart.items);


    return (
         <div className=" bg-fixed flex justify-between bg-orange-400 shadow-lg ">
 
             {/* <div className="w-40">
             <img className="logo" src={HEADER_URL}></img>
             </div> */}

             <div className="grid place-items-center">
                {
                    isAuthenticated ?( <div className="flex">
                        <img className=" w-[100px] rounded-full" src={user.picture} alt={user.name} />
                        <h2 className="p-5 text-lg text-white">{'Welcome, '+user.name}</h2>
                        <h2 className="pt-[50px] ml-[120px] absolute text-lg text-gray-800 hover:font-bold hover:text-violet-500">Email:    {user.email}</h2>
                      </div>)
                    :(
                        <div className="flex">
                            <img className="w-[100px] rounded-full" src="https://i.ibb.co/vcmKwkc/guest.png" />
                            <h1 className="p-5 text-lg text-white">Welcome Guest </h1>
                        </div>
                    )
                }
             </div>

            <div className="flex p-[30px]">
                <Link to="/">   <h1 className=" text-white font-bold text-4xl font-[cursive] "> Swiggy </h1> </Link>
            </div>
             
             <div className="flex items-center">
                 <ul className="flex p-4 m-4 ">

                    
                    <li></li>
                    <li className="">
                        Online Status:{online?"🟢":"🔴"}
                    </li>
                     <li className="px-4 hover:underline"> 
                        <Link to="/">Home</Link>
                    </li>
                     <li className="px-4 hover:underline"> 
                        <Link to="/about">About-us</Link>
                    </li>
                     <li className="px-4 hover:underline"> 
                            
                           <Link to="/contact">Contact</Link>
                    </li >
                     <li className="px-4 hover:underline text-bold text-lg"> 
                            
                            <Link to="/cart">🛒({cartItems.length})</Link>
                     </li>

                     <li className="px-4">  

                     {
                       isAuthenticated? (
                       <button className="p-[5px] bg-blue-400 hover:bg-red-400 font-bold text-white rounded"onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                        </button>):(<button className="p-[5px] bg-blue-400 hover:bg-green-400 font-bold text-white rounded"onClick={() => loginWithRedirect()}>Login</button>)
                     }
                        

                    </li>
                 </ul>

                
                    
             </div>

             
                       
            
             
         </div>
     )
 }

 export default Header;