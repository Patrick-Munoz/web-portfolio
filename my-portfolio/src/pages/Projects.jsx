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
            <main className="text-white flex flex-col items-center">
                <h1 className="font-bold text-3xl mt-2">Projects</h1>
                <h2 className="text-2xl mt-2">Library Management Project</h2>
                <div className="max-w-lg">
                    <ProjectCards>
                        {
                            libraryManagement.map((url) =>
                                <img src={url} className="size-full"/>
                            )
                        }
                    </ProjectCards>
                </div>
                <h2 className="text-2xl mt-2">Exact Landing Page</h2>
                <div className="max-w-lg">
                    <ProjectCards>
                        {
                            landingPage.map((url) =>
                                <img src={url} className="size-full"/>
                            )
                        }
                    </ProjectCards>
                </div>
                <h2 className="text-2xl mt-2">Exact System</h2>
                <div className="max-w-lg">
                    <ProjectCards>
                        {
                            exactSystem.map((url) =>
                                <img src={url} className="size-full"/>
                            )
                        }
                    </ProjectCards>
                </div>
                <h2 className="text-2xl mt-2">Mobile Exact Landing Page</h2>
                <div className="max-w-lg mx-3">
                    <ProjectCards>
                        {
                            mobileLandingPage.map((url) =>
                                <img src={url} className="size-full"/>
                            )
                        }
                    </ProjectCards>
                </div>
                <h2 className="text-2xl mt-2">Mobile Exact System</h2>
                <div className="max-w-lg mx-3">
                    <ProjectCards>
                        {
                            mobileExactSystem.map((url) =>
                                <img src={url} className="size-full"/>
                            )
                        }
                    </ProjectCards>
                </div>
            </main>
        </>
    )
}

export default Projects