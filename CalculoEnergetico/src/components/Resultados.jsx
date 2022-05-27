const Resultados = ({ persona }) => {

    return (
        <div className='bg-[#4a5759] text-center mx-3 mb-2 rounded-md p-3 md:w-1/2 lg:w-3/5 h-fit'>
            <h2 className=' font-bold p-2 text-3xl text-center bg-[#dedbd2]  rounded-md text-black uppercase'>Resultados</h2>
            <div className="mt-5 shadow-md bg-[#adb5bd] py-10 rounded-md uppercase mb-3 text-xl p-10 text-neutral-50">
                <p className="font-bold">GEB: <span className=" text-xl text-black">{persona.geb} kcal</span></p>
                <p className="font-bold">FA: <span className="text-xl text-black">{persona.fa}</span></p>
                <p className="font-bold">GET: <span className="text-xl text-black">{persona.get} kcal</span></p>
                <div className="flex justify-evenly gap-1">
                </div>
            </div>
        </div>

    )
}

export default Resultados