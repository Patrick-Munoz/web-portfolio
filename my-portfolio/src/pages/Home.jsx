function Home(){
    return(
        <section className="flex flex-col md:flex-row md:justify-around 2xl:px-5" id="home">
            <div className="text-white text-center p-4 md:text-start md:flex md:flex-col md:justify-center">
                <div className="font-black text-2xl md:text-3xl 2xl:text-6xl">Web Developer</div>
                <div className="font-black text-3xl md:text-4xl 2xl:text-7xl">Welcome!</div>
                <div className="font-black text-4xl md:text-5xl 2xl:text-8xl">I'm Patrick Munoz</div>
                <p className="2xl:text-3xl">
                    I'm a recent Information Systems graduate with a passion for web development. 
                    I led the team and played a key role in developing the School of Exact Colleges of Asia website,
                    Let’s Talk!
                </p>    
                <button type="button" className="bg-white text-black p-3 rounded font-bold mt-2 md:w-1/4" id="contact"><a href="#contact-info">Contact Me</a></button>
            </div>
            <img src="./src/assets/images/patrick-munoz.png" alt="My Profile" className="size-74 md:size-2/5"/>
        </section>
    )
}

export default Home