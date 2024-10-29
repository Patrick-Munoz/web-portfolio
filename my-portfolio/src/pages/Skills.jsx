import SkillCards from "../components/SkillsCards";

const cardData = {
    "HTML": "../src/assets/icons/html.png",
    "CSS": "../src/assets/icons/css.png",
    "JAVSCRIPT": "../src/assets/icons/javascript.png",
    "PYTHON": "../src/assets/icons/python.png",
    "TAILWIND": "../src/assets/icons/tailwind.png",
    "REACT": "../src/assets/icons/react.png",
    "NODE": "../src/assets/icons/node.png",
    "MYSQL": "../src/assets/icons/mysql.png"
};

function Skills(){
    return(
        <>
            <h1 className="font-bold text-3xl mt-2 text-white text-center">SKILLS</h1>
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