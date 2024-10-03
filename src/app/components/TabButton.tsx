
const TabButton =({active, selectTab, children}) =>{
    const buttonClasses = active ? 'text-white border-b border-orange-400':'text-orange-300 border-b border-orange-400'
    return(
        <button onClick={selectTab}>
            <p className="mr-3 font-semibold hover:text-pink-400 ${buttonClasses}"> 
            {children}
            </p>
        </button>
    )
}

export default TabButton;