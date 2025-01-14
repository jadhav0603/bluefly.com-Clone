import Slider from "../components/Slider"
import HomePageCard from "../components/HomePageCard"


export default function Home(){
    return(
        <div className="">
            <Slider />
            <div className="border w-[93vw] m-[3vw] ">
                <h1 className="text-4xl py-[3vw]  flex justify-center">SHOP BY</h1>
                <div className="grid grid-cols-4 justify-center gap-y-20 px-[3vw] ">
                    <HomePageCard url={"./image/Home/img117.webp"} heading={"LUXE HANDBAGS"}/>
                    <HomePageCard url={"./image/Home/img118.webp"} heading={"DESIGNER SHOES"}/>
                    <HomePageCard url={"./image/Home/img119.webp"} heading={"ICONIC SUNGLASSES"}/>
                    <HomePageCard url={"./image/Home/img120.webp"} heading={"WOMEN'S BLAZERS"}/>
                    <HomePageCard url={"./image/Home/img121.webp"} heading={"TRENDING DRESSES"}/>
                    <HomePageCard url={"./image/Home/img122.webp"} heading={"MEN'S COATS & JACKETS"}/>
                    <HomePageCard url={"./image/Home/img123.webp"} heading={"Denim for Him & Her"}/>
                    <HomePageCard url={"./image/Home/img124.webp"} heading={"MEN'S SNEAKERS"}/>
                </div>
            </div>
            <div className="flex justify-center">
                <img className="w-[93vw]" src="./image/Home/img125.webp" alt="image" />
            </div>


            <div>
                <h1 className="text-4xl py-[3vw]  flex justify-center">NEW ARRIVALS</h1>

            </div>

            <div>
                <h1 className="text-4xl py-[3vw]  flex justify-center">RECOMMENDED PRODUCTS</h1>

            </div>

        </div>
    )
}