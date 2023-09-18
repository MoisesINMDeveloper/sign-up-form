import { useState } from "react"
import Success from "../Success/Index"
import Mobileimg from "/assets/illustration-sign-up-mobile.svg"
import Desktopimg from "/assets/illustration-sign-up-desktop.svg"
import IconList from "/assets/icon-list.svg"

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    // const [successMessage, setSuccessMessage] = useState("");
    const [showSuccessComponent, setShowSuccessComponent] = useState(false);

    function handleSubmit(e) {
        e.preventDefault(); // Evita que se envíe el formulario por defecto

        let errorMessage = "";

        if (email === "") {
            errorMessage = "Valid email required";
        } else if (!isValidEmail(email)) {
            errorMessage = "Valid email required";
        }

        if (errorMessage !== "") {
            setErrorMessage(errorMessage);
            return;
        }

        // Aquí puedes enviar los datos del formulario
        // setSuccessMessage("¡Formulario enviado con éxito!");

        // Restablece el mensaje de error después de enviar correctamente
        setErrorMessage("");

        // Muestra el componente Success después del envío exitoso
        setShowSuccessComponent(true);
    }

    function isValidEmail(email) {
        // Verifica si la dirección de correo electrónico tiene el formato correcto
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    }

    return (
        <main className="md:w-screen md:h-[100vh] md:grid place-content-center bg-[#36384e]" >
            {!showSuccessComponent ? (
                <div className="flex flex-col items-center md:flex-row-reverse  md:p-4 bg-[#ffffff] w-[100vw] h-[100vh] md:w-[40rem] md:h-[27rem] md:rounded-2xl md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <span className=" w-[100vw] h-[16rem] md:h-[25rem] md:w-[18rem] md:ml-[2rem]">
                        <img className=" w-[100%] h-[16rem] object-cover rounded-b-2xl  md:h-[auto] md:w-[15rem] md:ml-[2rem] md:hidden" src={Mobileimg} alt="Mobile image" />
                        <img className=" w-[auto] h-[16rem] md:h-[25rem] md:w-[18rem] hidden md:block md:object-container rounded-2xl" src={Desktopimg} alt="Desktop image" />
                    </span>
                    <article className="md:w-[20rem] px-4 md:py-4 md:px-4 ">
                        <h1 className="text-[2.55rem] mt-3 md:mt-[-1rem] md:mb-2 font-bold font-roboto text-[#242742] ml-1">Stay update!</h1>
                        <p className="font-medium md:text-[11px] ml-1">Join 60,600+ product managers receiving monthly updates on:</p>
                        <ul className="flex flex-col mt-4 md:my-6 md:mb-[9rem]">
                            <li className="flex items-center pr-[1rem] md:pr-0"><img className=" md:w-4 md:h-4 ml-1 mr-2 mt-[-24px] md:mt-1" src={IconList} alt="Icon list" /><p className="font-medium md:text-[11px]">Product discovery and building what matters</p> </li>
                            <li className="flex items-center center pr-[2rem] md:pr-0"><img className=" md:w-4 md:h-4 ml-1 mr-2 mt-[-24px] md:mt-1" src={IconList} alt="Icon list" /><p className="font-medium md:text-[11px]">Measuring to ensure updates are a success</p> </li>
                            <li className="flex items-center"><img className=" md:w-4 md:h-4 ml-1 mr-2 my-1" src={IconList} alt="Icon list" /><p className="font-medium md:text-[11px]">And much more!</p> </li>
                        </ul>
                        <div className="mt-6 md:mt-[-8rem]">
                            <div className="flex justify-between ml-[.5rem] mr-[.5rem]  ">
                                <p className="font-bold text-[10px] ml-1 text-[#242742]">Email address</p>
                                {errorMessage && <p className=" relative font-bold text-[8px] text-[#FF6155] md:absolute mr-[0.3rem] md:ml-[11.5rem]">{errorMessage}</p>}
                                {/* {successMessage && <p>{successMessage}</p>} */}
                            </div>
                            <div className="ml-[.5rem] mr-[.5rem] ">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        className={`px-5 text-xs font-medium w-[85vw] md:w-[16rem] border-[1px] h-[2.3rem] rounded-md m-1 mb-3 hover:border-[#9294a0] focus:outline-none placeholder:pl-4 placeholder:font-roboto placeholder:text-sm placeholder:font-medium pb-1 ${errorMessage ? 'bg-[#ffdcdcc2] border-[#ff9d96] hover:border-[#ff8b83] text-[#ff8b83]' : ''}`} type="text"
                                        placeholder="email@company.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <button className="focus:from-[#242742] focus:to-[#242742] bg-gradient-to-r from-[#fd155bce] to-[#FF6155] focus:shadow-none shadow-[5px_15px_20px_-10px_#ff6257c9] h-[2.3rem] w-[85vw]  md:w-[16rem] rounded-md m-1 " type="submit">
                                        <p className="text-white font-roboto font-extrabold text-[11px]">Subscribe to monthly newsletter</p>
                                    </button>

                                </form>
                            </div>
                        </div>
                    </article>

                </div>) : (
                <>
                    {/* {successMessage && (<p>{successMessage}</p>)} */}
                    {/* Renderiza aquí tu componente Success */}
                    {showSuccessComponent && (<Success />)}
                </>
            )}
        </main>
    )

}

