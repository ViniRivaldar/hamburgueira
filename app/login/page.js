import Image from "next/image"
import Link from "next/link"

import FormLogin from "../pages/FormLogin"

export default function Login(){
    return(
        <main
            className="w-full flex flex-col justify-center items-center"
            style={{
                backgroundImage: "url('/background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: '100vw',
                height: "100vh",
            }}
        >
            <section className="flex rounded-lg bg-[#373737] w-[1078px] h-[664px]">
                <Image src='/login.png' alt='login' width={539} height={664}/>
                <div className="flex flex-col items-center w-[539px] h-[664px]">
                    <Image src='/logo.png' alt='' width={260} height={94} className="mt-14"/>
                    <h1 className="mt-32 mb-10 text-white text-[24px]">Login</h1>
                    <FormLogin/>
                    <p className='mr-[120px]  text-white'>Não possui uma conta? <Link href='/register' className="hover:border-b">Registrar-se</Link></p>
                </div>
            </section>
        </main>
    )
}