function ContactCard({children: icon}){
    return(
        <div className="text-white bg-black w-80 p-1 flex items-center justify-center my-2 text-sm">
            <div className="p-1 size-10">{icon[0]}</div>
            {icon[1]}
        </div>
    )
}

export default ContactCard