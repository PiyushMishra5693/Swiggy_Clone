import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About"
import Error  from "./Components/Error";
import Contact from "./Components/Contact";
import ReaustaurantMenu from "./Components/ReaustaurantMenu";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import Contact from "./Components/Contact";

import { Provider } from "react-redux";
import appstore from "./Components/utils/Appstore";

// Authentication
import { Auth0Provider } from '@auth0/auth0-react';
import Cart from "./Components/Cart";

import Payment from "./Components/Payment";
import Footer from "./Components/Footer";





/* 
    Header 
        . Logo
        . Nav bar
    Body
        . Search
        . Card

    Footer
        . Contact-US
        . Copyright
 */



const Applayout =()=>{

    return (
       
        <Provider store={appstore}>
        <div className="App">
                <Header></Header>
                <Outlet/>
                <Footer></Footer>
        </div>
        </Provider>
    )
}


const jsx = <h1> This is a JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));


const approuter= createBrowserRouter([
    {
        path:'/',
        element:<Applayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/restaurant/:resid',
                element:<ReaustaurantMenu/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/payment',
                element:<Payment/>
            }

        ],
        errorElement:<Error/>
    },
   
])


root.render(<Auth0Provider
    domain="dev-e0ead3j4xd0gdnhw.us.auth0.com"
    clientId="QzQKfddDRVnmsr0vVT5QjOjb0Yh5umPJ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={approuter}/>
  </Auth0Provider>)


