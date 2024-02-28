import img1 from "./assets/Google_Play-Badge-Logo.wine.png"
import img2 from "./assets/Apple_store.png";

const  Footer = ()=> {
  return (
    <div className="bg-black flex justify-center">

        
        <div className="flex flex-col">

              <p className="text-white mt-11 text-3xl font-bold font-Raleway"> For better experience, Download</p>
              
              <p className="text-white text-3xl font-bold font-Raleway">the Swiggy app now</p>
        </div>
        
        <div className="flex">
            <img className="my-4 w-[200px] "src={img1} alt="" />
            <img className="my-14 w-[150px] h-[50px] "src={img2}></img>
       </div>
       

    </div>
  )
}

export default Footer