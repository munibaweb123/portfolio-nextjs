
interface TabButtonProps {
    active: boolean;
    selectTab: () => void; // Assuming selectTab is a function that takes no arguments
    children: React.ReactNode; // This allows for any React children, like strings, elements, etc.
}
const TabButton:React.FC<TabButtonProps> =({active, selectTab, children}) =>{
    const buttonClasses = active ? 'text-orange-400 border-b border-orange-400':'text-orange-300 border-b border-orange-400'
    return(
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-pink-500 ${buttonClasses}`}> 
            {children}
            </p>
        </button>
    )
}

export default TabButton;