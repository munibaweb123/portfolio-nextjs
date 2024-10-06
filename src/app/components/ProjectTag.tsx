import React from "react";



const ProjectTag = ({name1, onClick, isSelected}) => {
    
    const buttonStyles = isSelected ? 
    "text-orange-300 bg-pink-400 ":"text-white border-pink-400 hover:border-white";
    return(
        <button className={`${buttonStyles} rounded-full border-2 border-pink-400 px-6 py-3 text-xl cursor-pointer`} 
        onClick={()=>onClick(name1)}
        >
            {name1}
        </button>
        
    )
}

export default ProjectTag;