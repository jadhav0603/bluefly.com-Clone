import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"


export default function SelectedProduct() {
    const location = useLocation()
    const data = [location.state]

    const [image, setImage] = useState(data[0].image1)
    const [isBorder1active, setIsBorder1active] = useState(true)
    const [isBorder2active, setIsBorder2active] = useState(false)

    const Navigate = useNavigate()

    console.log("selected product = ", data)

    function handleImageBorder(value) {
        setImage(value)
        setIsBorder1active((prev) => !prev)
        setIsBorder2active((prev) => !prev)
    }

    function handleBuy(){
        Navigate('/Payment')
    }

    return (

        <div className="flex flex-wrap gap-8 p-6 justify-center ">

            <div className="w-[7vw] flex flex-col gap-4">
                <img
                    className={`w-full cursor-pointer ${isBorder1active ? "border-2 border-black" : ""
                        }`}
                    src={data[0].image1}
                    onClick={() => handleImageBorder(data[0].image1)}
                />
                <img
                    className={`w-full cursor-pointer ${isBorder2active ? "border-2 border-black" : ""
                        }`}
                    src={data[0].image2}
                    onClick={() => handleImageBorder(data[0].image2)}
                />
            </div>

            <div className="flex items-center">
                <img className="w-[40vw] object-cover" src={image} />
            </div>

            <div className="w-full md:w-[30vw] space-y-6">

                <h1 className="text-[2.5vw] font-semibold">{data[0].productName}</h1>
                <p className="text-[1.5vw] text-gray-500">
                    SKU: {data[0].prefix}
                    {data[0].numericID}
                    {data[0].suffix}
                </p>


                <div className="flex items-center gap-4 text-lg font-semibold">
                    <span className="line-through text-gray-500">${data[0].orignalPrice}</span>
                    <span className="text-green-600">${data[0].sellingPrice}</span>
                    <span className="text-white bg-red-500 text-sm px-[5px] rounded ">
                        SAVE {data[0].discount}%
                    </span>
                </div>
                <p className="text-[2vw] font-medium text-red-600">
                    Extra 15% Off in Cart
                </p>


                <p className="text-sm text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, eveniet!
                    Recusandae soluta in, aliquid repellat sed maxime!
                </p>


                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between border-b border-black px-[5px] my-[10px]">
                        <p className="font-medium">SIZE</p>
                        <p className="text-gray-600">{data[0].size}</p>
                    </div>
                    <div className="flex items-center justify-between border-b border-black px-[5px] my-[10px]">
                        <p className="font-medium">COLOR</p>
                        <p className="text-gray-600">{data[0].color}</p>
                    </div>
                </div>

                <p className="font-[1vw] text-gray-700">SHIPPING FREE</p>


                <button 
                    className="w-[100%] bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition"
                    onClick={()=>handleBuy()}
                >
                    BUY NOW
                </button>


                <div className="uppercase text-sm text-gray-700 space-y-1">
                    <p>Save an Extra 15% off in Cart</p>
                    <p>FREE STANDARD SHIPPING ON ALL ORDERS OVER $99</p>
                    <p>NOTE: This item is Pre-Owned</p>
                    <p>The Condition is Pristine Inspect Images</p>
                </div>


                <div className="text-gray-600 text-sm">{data[0].description}</div>


                <div className="space-y-2">
                    <p className="font-medium">QUANTITY</p>
                    <div>
                        <span className="flex items-center gap-4 text-gray-600 pb-[5px]">
                            <button className="px-2 py-1 bg-gray-200 rounded">-</button>
                            <span className="font-semibold">1</span>
                            <button className="px-2 py-1 bg-gray-200 rounded">+</button>
                        </span>
                        <p className="text-sm text-red-500">ONLY 1 LEFT IN STOCK</p>
                    </div>
                </div>
            </div>
        </div>

    )
}