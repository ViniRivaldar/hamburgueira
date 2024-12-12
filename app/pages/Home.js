'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

import axios from '../../utils/AxiosConfig'
import CarouselCategory from "../components/CarrouselCategory"

export default function Home(){
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchCategories = async () => {
            const category = await axios.get('/category')
            setCategories(category.data)

        }

        const fetchProducts = async () => {

        }

        fetchCategories()
        fetchProducts()
    },[])

    return(
        <main className='flex items-center flex-col'>
            <section className='flex items-center flex-col'>
                <Image src='/CATEGORIAS.png' alt='categorias' width={412} height={71} className='mt-14'/>
                {categories.length > 0 && (
                    <CarouselCategory items={categories} />
                )}
            </section>
            <section className='flex flex-col items-center bg-[#fff] w-full'>
                <Image src='/OFERTAS.png' alt='categorias' width={273} height={65}/> 
                <h1>ofertas</h1>
            </section>
        </main>
    )
}