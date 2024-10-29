import ContactCard from "../components/ContactCards"

function Contact(){
    return(
        <>
            <footer className="max-w-lg">
                <h1 className="font-bold text-3xl mt-2 text-white text-center mb-1">Contact</h1>
                <div className="bg-slate-800 p-1 flex flex-col items-center border-t border-b">
                    <ContactCard>
                        <img src="../src/assets/icons/email.png" alt="email" />
                        <div>munozpatrickpenullar@gmail.com</div>
                    </ContactCard>
                    <ContactCard>
                        <img src="../src/assets/icons/phone.png" alt="phone" />
                        <div>+63 9760829432</div>
                    </ContactCard>
                    <ContactCard>
                        <img src="../src/assets/icons/address.png" alt="address" />
                        <div>San Agustin Sur Arayat Pampanga</div>
                    </ContactCard>
                    <div className="flex">
                        <div className="size-10">
                            <a href="https://www.facebook.com/patrick.munoz.315"><img src="../src/assets/icons/facebook.png" alt="facebook" /></a>
                        </div>
                        <div className="size-10">
                            <a href="https://www.instagram.com/patrickstarr26_/?hl=en"><img src="../src/assets/icons/instagram.png" alt="instagram" /></a>
                        </div>
                        <div className="size-10">
                            <a href="https://x.com/Smile_2426"><img src="../src/assets/icons/x.png" alt="X" /></a>
                        </div>
                        <div className="size-10">
                            <a href="https://www.linkedin.com/in/patrick-mu%C3%B1oz-039997274/"><img src="../src/assets/icons/linked-in.png" alt="Linked In" /></a>
                        </div>
                        <div className="size-10">
                            <a href="https://github.com/Patrick-Munoz"><img src="../src/assets/icons/github.png" alt="Github" /></a>
                        </div>
                    </div>
                </div>
                <h1 className="font-bold text-3xl mt-2 text-white text-center mb-1">Thank You!</h1>
            </footer>
        </>
    )
}

export default Contact