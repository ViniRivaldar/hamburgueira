'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Carousel from "../components/Carrousel"

export default function Home(){
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchCategories = async () => {

        }
        const fetchProducts = async () => {

        }

        fetchCategories()
        fetchProducts()
    },[])

    return(
        <main className='flex items-center flex-col'>
            <section className='flex items-center flex-col'>
                <Image src='/CATEGORIAS.png' alt='categorias' width={412} height={71}/>
                <h1>categorias</h1>
            </section>
            <section className='flex flex-col items-center'>
                <Image src='/OFERTAS.png' alt='categorias' width={273} height={65}/> 
                <h1>ofertas</h1>
            </section>
        </main>
    )
}