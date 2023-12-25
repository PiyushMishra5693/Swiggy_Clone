import UserClass from "./UserClass";

About=()=>{

    return (

        <div className="h-[87vh]  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

        
        <div className="flex flex-wrap justify-center">
           
           <div className="p-4 m-4 w-3/12   border border-black  bg-sky-200">
                    <h1 >This is about us Page</h1>
                    <UserClass className="flex" name="Piyush" email='pm455567@gmail.com' phone='8318064062'/>
           </div>
           <div className="p-4 m-4 w-3/12 border border-black bg-sky-200">
                    <h1>This is about us Page</h1>
                    <UserClass name="Piyush" email='pm455567@gmail.com' phone='8318064062'/>
            </div>
           <div className="p-4 m-4 w-3/12 border border-black  bg-sky-200">
                    <h1>This is about us Page</h1>
                    <UserClass name="Piyush" email='pm455567@gmail.com' phone='8318064062'/>
            </div>
        </div>
        
        <div className="flex  justify-center ">
            <div className="p-4 m-4  w-3/12 border border-black  bg-sky-200">
                    <h1>This is about us Page</h1>
                    <UserClass name="Piyush" email='pm455567@gmail.com' phone='8318064062'/>
            </div>
            <div className="p-4 m-4 w-3/12 border border-black  bg-sky-200">
                    <h1>This is about us Page</h1>
                    <UserClass name="Piyush" email='pm455567@gmail.com' phone='8318064062'/>
            </div>
            </div>
        </div>

    )
}

export default About;

