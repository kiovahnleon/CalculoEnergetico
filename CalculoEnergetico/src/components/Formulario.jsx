import { useState } from 'react';

const Formulario = ({ setPersona }) => {
    const [edad, setEdad] = useState(0)
    const [peso, setPeso] = useState(0)
    const [sexo, setSexo] = useState('')
    const [fa, setFa] = useState(0)
    const [error, setError] = useState(false)


    const validaFormulario = e => {
        e.preventDefault();
        if ([edad, peso, sexo, fa].includes('' || 0)) {
            setError(true);
            return
        }
        setError(false)

        const gastoBasal = () => {
            if (sexo == 'masculino') {
                if (edad >= 18 && edad <= 29) {
                    return ((13.37 * peso) + 747)
                } if (edad >= 30 && edad <= 59) {
                    return ((13.08 * peso) + 693)
                } if (edad > 60) {
                    return ((14.21 * peso) + 429)
                }
            } else {
                if (edad >= 18 && edad <= 29) {
                    return ((11.02 * peso) + 679)
                } if (edad >= 30 && edad <= 59) {
                    return ((10.92 * peso) + 677)
                } if (edad > 60) {
                    return ((10.92 * peso) + 520)
                }

            }
        }
        const caloriasFinal = () => {
            return (gastoBasal() * fa)
        }

        const objetoPersona = {
            /*             edad,
                        peso,
                        sexo, */
            fa,
            geb: gastoBasal(),
            get: caloriasFinal().toFixed(2)
        }
        setPersona(objetoPersona)
    }



    return (
        <div className='bg-[#4a5759] mx-3 rounded-md p-3 mb-2 md:w-1/2 lg:w-2/5 h-fit'>
            <h1 className='bg-[#dedbd2] p-2 text-center font-bold text-3xl mb-3 rounded-md text-black uppercase'>Datos</h1>
            <form className='' onSubmit={validaFormulario}>
                {error && <p className='p-2 m-2 rounded-md text-center font-bold bg-[#03045E] text-white'>Debes llenar todos los campos!</p>}
                <div className='mb-3 mt-5'>
                    <label htmlFor="edad" className='text-white'>Edad </label>
                    <input type="number" id='edad' placeholder=' edad' className='p-2 block rounded-md w-full mb-1' value={edad} onChange={(e) => setEdad(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="peso" className='text-white'>Peso </label>
                    <input type="number" id='peso' placeholder=' Peso' className='p-2 block rounded-md w-full mb-1' value={peso} onChange={(e) => setPeso(e.target.value)} />
                </div>
                <div>

                    <select className='w-full text-center p-2 mb-3 rounded-md' name="" id="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}>
                        <option value="">-Selecciona tu sexo-</option>
                        <option value={'masculino'}>Masculino</option>
                        <option value={'femenino'}>Femenino</option>
                    </select>

                </div>
                <div>

                    <select className='w-full text-center p-2 mb-2 rounded-md' name="" id="fa" value={fa} onChange={(e) => setFa(e.target.value)}>
                        <option value="">-¿Que tan activo eres?-</option>
                        <option value="1.2">Sedentario</option>
                        <option value="1.3">Ligero</option>
                        <option value="1.5">Moderado</option>
                        <option value="1.7">Activo</option>
                        <option value="1.9">Vigoroso</option>
                    </select>

                </div>
                <div className='my-3 '>
                    <input type="submit" id='submit' className='bg-[#7ebc89] hover:bg-[#6ca977] p-2 rounded-md font-extrabold text-white block w-full'></input>
                </div>


            </form>
        </div>
    )
}

export default Formulario