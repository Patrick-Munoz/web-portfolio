import ContactCard from "../components/ContactCards"

function Contact(){
    return(
        <>
            <footer className="max-w-full" id="contact-info">
                <h1 className="font-bold text-3xl mt-2 text-white text-center mb-1 2xl:text-6xl">Contact</h1>
                <div className="bg-slate-800 p-3 flex flex-col items-center border-t border-b">
                    <ContactCard>
                        <img src="../email.png" alt="email" />
                        <div>munozpatrickpenullar@gmail.com</div>
                    </ContactCard>
                    <ContactCard>
                        <img src="../phone.png" alt="phone" />
                        <div>+63 9760829432</div>
                    </ContactCard>
                    <ContactCard>
                        <img src="../address.png" alt="address" />
                        <div>San Agustin Sur Arayat Pampanga</div>
                    </ContactCard>
                    <div className="flex my-2">
                        <div className="size-12">
                            <a href="https://www.facebook.com/patrick.munoz.315"><img src="../facebook.png" alt="facebook" /></a>
                        </div>
                        <div className="size-12">
                            <a href="https://www.instagram.com/patrickstarr26_/?hl=en"><img src="../instagram.png" alt="instagram" /></a>
                        </div>
                        <div className="size-12">
                            <a href="https://x.com/Smile_2426"><img src="../x.png" alt="X" /></a>
                        </div>
                        <div className="size-12">
                            <a href="https://www.linkedin.com/in/patrick-mu%C3%B1oz-039997274/"><img src="../linked-in.png" alt="Linked In" /></a>
                        </div>
                        <div className="size-12">
                            <a href="https://github.com/Patrick-Munoz"><img src="../github.png" alt="Github" /></a>
                        </div>
                    </div>
                </div>
                <h1 className="font-bold text-3xl mt-2 text-white text-center mb-1 2xl:text-6xl">Thank You!</h1>
            </footer>
        </>
    )
}

export default Contact