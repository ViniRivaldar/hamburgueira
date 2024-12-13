'use client'
import { useState, useEffect } from 'react'

import axios from '../../utils/AxiosConfig'
import Image from 'next/image';
import Link from 'next/link';
import SkeletonProducts from '../components/skeletonProducts';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get('/products');
                setProducts(response.data);
                setFilteredProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProdutos();
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);

        if (category === 'Todos') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) => product.category.name === category);
            setFilteredProducts(filtered);
        }
    };

    if (isLoading) {
        return <SkeletonProducts />;
    }

    return (
        <main>
            <section className="m-5">
                <ul className="flex gap-20 justify-center">
                    <li
                        className={`cursor-pointer hover:text-[#9758A6] hover:border-b-2 hover:border-[#9758A6] ${
                            selectedCategory === 'Todos' ? 'text-[#9758A6] border-b-2 border-[#9758A6]' : 'text-[#9A9A9D]'
                        }`}
                        onClick={() => handleCategoryClick('Todos')}
                    >
                        Todos
                    </li>
                    {Array.from(new Set(products.map((product) => product.category.name))).map((category, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer hover:text-[#9758A6] hover:border-b-2 hover:border-[#9758A6] ${
                                selectedCategory === category ? 'text-[#9758A6] border-b-2 border-[#9758A6]' : 'text-[#9A9A9D]'
                            }`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="flex justify-center m-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="flex gap-3 w-[350px] h-[202px] p-5 rounded-[30px] bg-white shadow-[0px_30px_60px_0px_rgba(57,57,57,0.10)]"
                        >
                            <div className="w-1/2 flex items-center justify-center">
                                <Image
                                    src={product.foto_products[0].url}
                                    alt={product.name}
                                    width={300}
                                    height={200}
                                />
                            </div>
                            <div className="mt-5">
                                <p className="text-black font-roboto text-base font-normal">{product.name}</p>
                                <p className="mt-4 font-bold">R$ {product.price.toFixed(2)}</p>
                                <Link href={`/produto/${product.id}`}>
                                    <button className="w-[156px] h-[36px] bg-[#9758A6] hover:bg-[#804686] text-white rounded-full px-4 py-2 mt-4">Saiba mais</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
