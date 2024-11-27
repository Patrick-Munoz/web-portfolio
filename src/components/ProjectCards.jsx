import { useState } from "react";

const buttonDesign = "bg-neutral-800 rounded m-2";

function ProjectCards({children: slides}){
    const [curr, setCurr] = useState(0);

    const prev = ()=> setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    return(
        <div className="m-2 rounded shadow shadow-white drop-shadow text-white overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>{slides}</div>
            <div className="absolute inset-0 flex items-center justify-between">
                <button type="button" onClick={prev} className={buttonDesign}>
                    <img src="../left.png" alt="Previous" className="size-8 p-2"/>
                </button>
                <button type="button" onClick={next} className={buttonDesign}> 
                    <img src="../right.png" alt="Next" className="size-8 p-2"/>
                </button>
            </div>
        </div>
    )
}

export default ProjectCards
