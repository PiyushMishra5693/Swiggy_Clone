


(async function fetchdata(){

    const text = "Knowledge Park 2";
    const area= text.split(" ").join('%20');   

    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4609559&lng=77.49693789999999&restaurantId=78041&catalog_qa=undefined&submitAction=ENTER`)
    const json= await data.json();

    const path =json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2];


    const filter= json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c?.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log(filter);


})();