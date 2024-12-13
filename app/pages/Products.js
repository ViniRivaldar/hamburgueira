'use client'
import { useState, useEffect } from 'react'

import axios from '../../utils/AxiosConfig'

export default function Products(){
    const[products,setProducts]= useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    useEffect(()=>{
        const fecthProdutos = async ()=> {
            const response = await axios.get('/products')
        
            setProducts(response.data)
            setFilteredProducts(response.data)
        }

        fecthProdutos()
    },[])

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);

        if (category === 'Todos') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) => product.category.name === category);
            setFilteredProducts(filtered);
        }
    };

    return(
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

            <section className="m-5">
                <h1 className="text-2xl font-bold mb-5">Produtos</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="p-4 border rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="text-sm text-gray-600">{product.description}</p>
                            <p className="text-[#9758A6] font-bold">R$ {product.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}