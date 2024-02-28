import img1 from "./assets/technology.png"
import img2 from "./assets/Bussiness.png"
import img3 from "./assets/Cloud_Kitchen.png"
import img4 from "./assets/Customer_Care.png"
import img5 from "./assets/Campus.png"
import img6 from "./assets/Corporate.png"

// Technology   Business  Cloud Kitchen
// Explore
// Customer Care Campus   Corporate Support Functions
About=()=>{

    return (

        <div className="h-[87vh] bg-[rgb(31,41,55)]">



                 <div className="flex justify-between">
                    <div className="mt-10 ml-[80px]">   
                            <img src={img1}></img>
                            <h1 className="font-[cursive] text-2xl">TECHNOLOGY</h1> 
                            <button className="bg-white border-[3px] border-solid border-orange-500 px-4 py-[10px] mt-4 ml-8 hover:bg-orange-500">Explore</button>   
                    </div> 
                    <div className="mt-10 ml-10">   
                            <img src={img2}></img>
                            <h1 className="font-[cursive] text-2xl">BUSSINESS</h1> 
                            <button className="bg-white border-[3px]  border-solid border-orange-500 px-4 py-[10px] mt-4 ml-8 hover:bg-orange-500">Explore</button>   
                    </div> 
                    <div className="mt-10 mr-[80px]">   
                            <img src={img3}></img>
                            <h1 className="font-[cursive] text-2xl">CLOUD KITCHEN</h1> 
                            <button className="bg-white border-[3px] border-solid border-orange-500 px-4 mt-4 py-[10px] ml-8 hover:bg-orange-500">Explore</button>   
                    </div>

                </div>


                <div className="flex justify-between">
                    <div className="mt-8 ml-[80px]">   
                            <img src={img4}></img>
                            <h1 className="font-[cursive] text-2xl">CUSTOMER CARE</h1> 
                            <button className="bg-white border-[3px] border-solid border-orange-500 px-4 py-[10px] mt-4 ml-8 hover:bg-orange-500">Explore</button>   
                    </div> 
                    <div className="mt-8 ml-10">   
                            <img src={img5}></img>
                            <h1 className="font-[cursive] text-2xl ml-[30px]">CAMPUS</h1> 
                            <button className="bg-white border-[3px] border-solid border-orange-500 px-4 py-[10px] mt-4 ml-[50px] hover:bg-orange-500">Explore</button>   
                    </div> 
                    <div className="mt-8 mr-[25px]">   
                            <img src={img6}></img>
                            <h1 className="font-[cursive] text-2xl ">CORPORATE SUPPORT </h1> 
                            <button className="bg-white border-[3px] border-solid border-orange-500 px-4 py-[10px] mt-4 ml-[50px] hover:bg-orange-500">Explore</button>   
                    </div>

                </div> 
                       
       
        </div>

    )
}

export default About;

