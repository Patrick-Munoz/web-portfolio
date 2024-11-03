import ProjectCards from "../components/ProjectCards";

const libraryManagement = [
    "../src/assets/images/library-management-1.png",
    "../src/assets/images/library-management-2.png",
    "../src/assets/images/library-management-3.png",
    "../src/assets/images/library-management-4.png",
]

const landingPage = [
    "../src/assets/images/landing-page-1.png",
    "../src/assets/images/landing-page-2.png",
    "../src/assets/images/landing-page-3.png",
    "../src/assets/images/landing-page-4.png",
    "../src/assets/images/landing-page-5.png",
    "../src/assets/images/landing-page-6.png",
]

const mobileLandingPage = [
    "../src/assets/images/mobile-landing-page-1.png",
    "../src/assets/images/mobile-landing-page-2.png",
    "../src/assets/images/mobile-landing-page-3.png",
    "../src/assets/images/mobile-landing-page-4.png",
    "../src/assets/images/mobile-landing-page-5.png",
]

const exactSystem = [
    "../src/assets/images/exact-system-1.png",
    "../src/assets/images/exact-system-2.png",
    "../src/assets/images/exact-system-3.png",
    "../src/assets/images/exact-system-4.png",
]

const mobileExactSystem = [
    "../src/assets/images/mobile-exact-system-1.png",
    "../src/assets/images/mobile-exact-system-3.png",
    "../src/assets/images/mobile-exact-system-4.png",
    "../src/assets/images/mobile-exact-system-5.png",
]


function Projects(){
    return(
        <>
            <main className="text-white text-center" id="project">
                <h1 className="font-bold text-3xl mt-3 2xl:text-6xl">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 md-grid-rows-3">
                    <div className="max-w-lg md:row-start-1 md:mx-auto">
                        <h2 className="text-2xl mt-2 2xl:text-4xl">Exact System</h2>
                        <ProjectCards>
                            {
                                exactSystem.map((url) =>
                                    <img src={url} className="size-full"/>
                                )
                            }
                        </ProjectCards>
                    </div>
                    <div className="max-w-lg md:row-start-1 md:mx-auto">
                        <h2 className="text-2xl mt-2 2xl:text-4xl">Exact Landing Page</h2>
                        <ProjectCards>
                            {
                                landingPage.map((url) =>
                                    <img src={url} className="size-full"/>
                                )
                            }
                        </ProjectCards>
                    </div>
                    <div className="max-w-lg md:row-start-2 md:col-span-2 md:mx-auto">
                        <h2 className="text-2xl mt-2 2xl:text-4xl">Library Management Project</h2>
                        <ProjectCards>
                            {
                                libraryManagement.map((url) =>
                                    <img src={url} className="size-full"/>
                                )
                            }
                        </ProjectCards>
                    </div>
                    <div className="max-w-lg mx-3 md:row-start-3 md:max-w-sm md:mx-auto">
                        <h2 className="text-2xl mt-2 2xl:text-4xl">Mobile Exact Landing Page</h2>
                        <ProjectCards>
                            {
                                mobileLandingPage.map((url) =>
                                    <img src={url} className="size-full"/>
                                )
                            }
                        </ProjectCards>
                    </div>
                    <div className="max-w-lg mx-3 md:row-start-3 md:max-w-sm md:mx-auto">
                        <h2 className="text-2xl mt-2 2xl:text-4xl">Mobile Exact System</h2>
                        <ProjectCards>
                            {
                                mobileExactSystem.map((url) =>
                                    <img src={url} className="size-full"/>
                                )
                            }
                        </ProjectCards>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Projects