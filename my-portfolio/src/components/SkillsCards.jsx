function SkillCards({children: elements}){
    return(
        <div className="bg-slate-800 text-white flex items-center justify-center mb-2 p-3 2xl:text-3xl">
                <div className="mr-1">
                    {elements[0]}
                </div>
                <div>
                    {elements[1]}
                </div>
        </div>
    )
}

export default SkillCards