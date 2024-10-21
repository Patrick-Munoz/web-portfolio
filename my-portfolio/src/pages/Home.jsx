function Home(){
    return(
        <section className="flex flex-col justify-content-center items-center">
            <div className="text-white text-center p-4">
                <div className="font-black text-2xl">Web Developer</div>
                <div className="font-black text-3xl">Welcome!</div>
                <div className="font-black text-4xl">I'm Patrick Munoz</div>
                <p>
                    I'm a recent Information Systems graduate with a passion for web development. 
                    I led the team and played a key role in developing the School of Exact Colleges of Asia website,
                    Let’s Talk!
                </p>
                <button type="button" className="bg-white text-black p-3 rounded font-bold mt-2" id="contact">Contact Me</button>
            </div>
            <img src="./src/assets/images/patrick-munoz.png" alt="My Profile" className="size-74"/>
        </section>
    )
}

export default Home