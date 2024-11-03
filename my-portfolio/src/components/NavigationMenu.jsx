function NavigationMenu(){
    return(
        <nav className="p-4">
            <div className="flex justify-between items-center">
                <div className="text-white text-4xl">PM</div>
                <button type="button" onClick={MenuOpen} id="menu-btn" className="bg-no-repeat bg-cover p-4"></button>
                <button type="button" onClick={MenuClose} id="close-btn" className="bg-no-repeat bg-cover p-4 hidden"></button>
            </div>
            <ul className="hidden absolute right-0 w-full" id="navigation-list">
                <li className="text-white text-2xl mt-2 text-right"><a href="#home">HOME</a></li>
                <li className="text-white text-2xl mt-2 text-right"><a href="#project">PROJECTS</a></li>
                <li className="text-white text-2xl mt-2 text-right"><a href="#skills">SKILLS</a></li>
                <li className="text-white text-2xl mt-2 text-right"><a href="#contact-info">CONTACT</a></li>
            </ul>
        </nav>
    )
}

export default NavigationMenu