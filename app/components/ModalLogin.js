import Image from "next/image";
import FormLogin from "../pages/FormLogin";

export default function ModalLogin({ toggleModal }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative flex rounded-lg bg-[#373737] w-[1078px] h-[664px]">
                {/* Botão de fechar no canto superior direito */}
                <button
                    className="absolute top-2 right-2 text-white text-xl font-bold hover:text-gray-400 transition"
                    onClick={toggleModal}
                >
                    &times;
                </button>

                <Image src="/login.png" alt="login" width={539} height={664} />
                <div className="flex flex-col items-center w-[539px] h-[664px]">
                    <Image src="/logo.png" alt="logo" width={260} height={94} className="mt-14" />
                    <h1 className="mt-32 mb-10 text-white text-[24px]">Login</h1>
                    <FormLogin />
                    <p className="mr-[120px] text-white">
                        Não possui uma conta? <a href="/register" className="hover:border-b">Registrar-se</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
