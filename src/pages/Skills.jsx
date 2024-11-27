import SkillCards from "../components/SkillsCards";

const cardData = {
    "HTML": "../html.png",
    "CSS": "../css.png",
    "JAVSCRIPT": "../javascript.png",
    "PYTHON": "../python.png",
    "TAILWIND": "../tailwind.png",
    "REACT": "../react.png",
    "NODE": "../node.png",
    "MYSQL": "../mysql.png"
};

function Skills(){
    return(
        <>
            <h1 className="font-bold text-3xl mt-3 text-white text-center 2xl:text-6xl" id="skills">SKILLS</h1>
            <section className="columns-2 p-4">
                {
                    Object.entries(cardData).map(([key, value]) =>
                        <SkillCards key={key}>
                            <img src={value} alt={value} />
                            <div>{key}</div>
                        </SkillCards>
                    )
                }
            </section>
        </>
    )
}

export default Skills