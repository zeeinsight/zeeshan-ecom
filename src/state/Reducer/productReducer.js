

const defaultProductData = {
 Product :[
     {
        description : "OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage",
        image : "Asset/OnePlusmobile.jpg",
        price : 70000,
        rating : 4,
        categoryId : 1,
        id: 1
     },
     {
        description: "ASUS TUF Gaming FX505DT 15.6-inch FHD 144Hz Laptop, Ryzen 7 3750H, GTX 1650 4GB GDDR5 Graphics (8GB RAM/1TB HDD + 256GB NVMe SSD/Windows 10/Stealth Black/2...",
        image : "Asset/Asuslaptop.jpg",
        price : 150000,
        rating: 5,
        categoryId: 1,
        id : 2
     },
     {
        description:"LG 108 cm (43 inches) 4K Ultra HD Smart LED TV 43UM7290PTF (Ceramic Black)",
        image: "Asset/Lgtv.jpg",
        price : 85000,
        rating : 5,
        categoryId: 1,
        id : 3
     },
     {
        description:"Canon EOS 200D II 24.1MP Digital SLR Camera + EF-S 18-55mm f4 is STM Lens (Black)",
        image : "Asset/Camera.jpg",
        price : 55000,
        rating : 4,
        categoryId :1,
        id : 4  
     },
     {
        description:"LG 260 L 3 Star Frost Free Double Door Refrigerator (GL-I292RPZL, Shiny Steel, Smart Inverter Compressor)",
        image : "Asset/Fridge.jpg",
        price : 25000,
        rating : 3,
        categoryId : 1,
        id : 5,
     },
     {
        description: "Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White, Hygiene Steam)",
        image : "Asset/washingmachine.jpg",
        price : 18000,
        rating : 4,
        categoryId : 1,
        id : 6
     },
     {
        description:"Crompton Optimus 100-Litre Desert Cooler (White)",
        image : "Asset/cooler.jpg",
        price : 10000,
        rating : 3,
        categoryId : 1,
        id : 7
     },
     {
        description:"Hamilton Beach Professional Juicer Mixer Grinder 58770-IN, 1400 Watt Rated Motor, Triple Overload Protection, 3 Stainless Steel Leakproof Jars, Triple",
        image : "Asset/Mixer.jpg",
        price : 22000,
        rating : 5,
        categoryId : 1,
        id: 7
     },
     {
        description:" Lloyd 1.5 Ton 5 Star WiFi Ready Inverter Split AC (Copper, Anti-Viral & PM 2.5 Filter, 2021 Model, GLS18I56WRBP, White)",
        image : "Asset/ac.jpg" ,
        price : 26000,
        rating : 4,
        categoryId: 1,
        id : 8
     },
     
     

 ],
 
 
};
console.table("checking====>",defaultProductData)

export const productReducer = (state=defaultProductData,action)=>{
    switch (action.type){
        case "SET_PRODUCT":
            return{
                ...state, Product:[...state.Product,action.item]
            }
            default:
                return state;
    }
}