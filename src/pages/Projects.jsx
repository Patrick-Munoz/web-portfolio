import ProjectCards from "../components/ProjectCards";

const libraryManagement = [
    "../library-management-1.png",
    "../library-management-2.png",
    "../library-management-3.png",
    "../library-management-4.png",
]

const landingPage = [
    "../landing-page-1.png",
    "../landing-page-2.png",
    "../landing-page-3.png",
    "../landing-page-4.png",
    "../landing-page-5.png",
    "../landing-page-6.png",
]

const mobileLandingPage = [
    "../mobile-landing-page-1.png",
    "../mobile-landing-page-2.png",
    "../mobile-landing-page-3.png",
    "../mobile-landing-page-4.png",
    "../mobile-landing-page-5.png",
]

const exactSystem = [
    "../exact-system-1.png",
    "../exact-system-2.png",
    "../exact-system-3.png",
    "../exact-system-4.png",
]

const mobileExactSystem = [
    "../mobile-exact-system-1.png",
    "../mobile-exact-system-3.png",
    "../mobile-exact-system-4.png",
    "../mobile-exact-system-5.png",
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