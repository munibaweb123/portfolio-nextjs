const ContactSection = ()=>{
    return(
        <section className="bg-[#121212] h-full w-full">
            <div className="flex justify-center items-center">
                <h2 className="text-pink-400 text-4xl px-4 py-2 font-bold">Contact Me</h2>
            <form >  
                <label className="text-pink-400 font-bold text-2xl">Name:
                    
                </label><br/>
                <input></input><br/>
                <label className="text-pink-400 font-bold text-2xl">Your Message</label><br/>
                <textarea className="" rows={5}></textarea>
                <button >Send Message</button>
            </form>
            </div>
        </section>
    )
}
export default ContactSection