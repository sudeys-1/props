function Body ({title , des , price , src}){
    return <div>
    
        
        <div className="flex mt-[50px]  ml-[100px]">
            <div className="">
                <img className="h-[150px]" src= {src} />
            </div>
            <div className="ml-[20px]">
                    <h1 className="font-bold ">{title}</h1>
                    <h1>{price}</h1>
                    <p className="text-[17px] text-gray-600 mt-[10px]">{des}</p>
                <button className="mt-[20px] bg-yellow-400 p-[10px] rounded-[10px]">order Now</button>
            </div>
        </div>
      
    </div>
}
export default Body