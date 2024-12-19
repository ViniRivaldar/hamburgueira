'use client'

import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"

import FormRegister from "../pages/FormRegister"

export default function Register(){
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)

    return(
        <main className="w-full flex flex-col justify-center items-center"
            style={{
                backgroundImage: "url('/background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: '100vw',
                height: "100vh",
            }}
        >
            <section className="flex rounded-lg bg-[#373737] w-[1078px] h-[664px]">
                <Image src='/register.png' alt='' width={539} height={664}/>
                <div className="flex flex-col items-center w-[539px] h-[664px]">
                    <Image src='/logo.png' alt="" width={260} height={94} className="mt-5"/>
                    {isLoggedIn ? (
                        <>
                            <h1 className="mt-5 mb-5 text-white text-[24px]">Seu Perfil</h1>
                            <FormRegister/>
                            <p className='mr-[325px] text-white'><Link href='/login' className="hover:border-b">Home</Link></p>
                            
                        </>
                    ):(
                        <>
                            <h1 className="mt-5 mb-5 text-white text-[24px]">Cadastre-se</h1>
                            <FormRegister/>
                            <p className='mr-52 text-white'>Já possui conta? <Link href='/login' className="hover:border-b">Entrar</Link></p>
                        </>
                    )

                    }
                   
                </div>
            </section>
        </main>
    )
}