'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

import axios from '../../utils/AxiosConfig';
import Carousel from '../components/CarrouselProducts';
import CarouselCategory from "../components/CarrouselCategory";
import Skeleton from '../components/SkeletonHome';

export default function Home() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading]= useState(true)

    useEffect(() => {
        const fetchCategories = async () => {
            const category = await axios.get('/category');
            setCategories(category.data);
            setLoading(false)
        };

        const fetchProducts = async () => {
            const produtos = await axios.get('/products');
            setProducts(produtos.data);
            setLoading(false)
        };

        fetchCategories();
        fetchProducts();
    }, []);

    return (
        <main className='flex items-center flex-col'>
            <section className='flex items-center flex-col'>
                <Image src='/CATEGORIAS.png' alt='categorias' width={412} height={71} className='my-14'/>
                {loading ? (
                    <Skeleton type="category" />
                ) : (
                    categories.length > 0 && <CarouselCategory items={categories} />
                )}
            </section>
            <section className='flex flex-col items-center bg-[#fff] w-full'>
                <Image src='/OFERTAS.png' alt='categorias' width={273} height={65} className='my-14'/> 
                {loading ? (
                    <Skeleton type="product" />
                ) : (
                    products.length > 0 && <Carousel items={products} />
                )}
            </section>
        </main>
    );
}
