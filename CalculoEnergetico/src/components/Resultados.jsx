const Resultados = ({ persona }) => {

    return (
        <div className='bg-[#8EBED2] text-center mx-3 mb-2 rounded-md p-3 overflow-y-scroll md:w-1/2 lg:w-3/5 h-fit'>
            <h2 className=' font-bold p-2 text-3xl text-center bg-[#2E86AB]  rounded-md text-white'>Listado de Pacientes</h2>
            <div className="mt-5 shadow-md bg-[#adb5bd] py-10 rounded-md uppercase mb-3 text-xs p-10 text-neutral-50">
                <p className="font-bold">GEB: <span className="font-normal">{persona.geb}</span></p>
                <p className="font-bold">FA: <span className="font-normal">{persona.fa}</span></p>
                <p className="font-bold">GET: <span className="font-normal">{persona.get}</span></p>
                <div className="flex justify-evenly gap-1">
                </div>
            </div>
        </div>

    )
}

export default Resultados