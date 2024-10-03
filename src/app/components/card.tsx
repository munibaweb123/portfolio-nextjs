import { CodeBracketIcon, EyeIcon } from "@heroicons/react/16/solid";
import Link from "next/link"
interface CardProps{
    title:string;
    description:string;
    image:string;
    // gitUrl:string;
    // previewUrl:string;
    
}

const Card:React.FC<CardProps>=({title,description,image, })=>{
    return(
        
        <div className="bg-[#121212] rounded-lg bg-opacity-50">
            <div className="h-52 md:h-72 rounded-t-xl relative group" style={{background:`url(${image})`,backgroundSize:"cover"}}>
            
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex  group-hover:bg-opacity-80 transition-all duration-500">
                <Link href="/" className="h-14 w-14 border-2 relative rounded-full border-pink-400 hover:border-white group/link">
                <CodeBracketIcon className="h-10 w-10 text-pink-400 hover:white absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"/>
                </Link>

                <Link href="/" className="h-14 w-14 border-2 relative rounded-full border-pink-400 hover:border-white group/link">
                <EyeIcon className="h-10 w-10 text-pink-400 hover:white absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"/>
                </Link>
            </div>
            </div>
            <div className="text-white rounded-b-xl mt-2 bg[#181818 py-6 px-4]">
            
            <h5 className="text-lg font-xl font-bold mb-3 text-pink-400">{title}</h5>
            <p className="text-pink-500 text-sm">{description}</p>
            </div>
           
        </div>
    )
}

export default Card;