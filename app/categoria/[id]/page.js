'use client'

import Nav from "@/app/components/Nav"
import Axios from "@/utils/AxiosConfig"
import { useState, useEffect } from "react"
import { useParams } from 'next/navigation'
import Image from "next/image"
import SkeletonPageCategoria from "@/app/components/loadings/SkeletonPageCategoria"
import Link from "next/link"

export default function Categoria() {
    const { id } = useParams()
    const [products, setProducts] = useState([])
    const [categorias, setCategorias] = useState([])
    const [categoria, setCategoria] = useState('')
    const [produtosFiltrados, setProdutosFiltrados] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCategory = async () => {
            const response = await Axios.get('/category')
            setCategorias(response.data)

            const categoriaEncontrada = response.data.find(categoria => categoria.id === id)
            
            if (categoriaEncontrada) {
                setCategoria(categoriaEncontrada.name)
                fetchData()
            }
        }

        const fetchData = async () => {
            const response = await Axios.get('/products')
            setProducts(response.data)
            setLoading(false)
        }

        fetchCategory()
    }, [id])

    useEffect(() => {
        if (products.length > 0) {
            const produtosFiltrados = products.filter(produto => produto.category_id === id)
            setProdutosFiltrados(produtosFiltrados)
        }
    }, [id, products])

    const formatPrice = (price) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(price);
    };

    return (
        <>
            <Nav />
            {loading ? <SkeletonPageCategoria /> : (
                <>
                    <header>
                        <div className="flex justify-center"><h1 className="m-10 text-4xl font-bold text-[#9758A6]">{categoria}</h1></div>
                    </header>
                    <main className="flex justify-center">
                        <section>
                            {produtosFiltrados.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                                    {produtosFiltrados.map(produto => (
                                        <div key={produto.id} className="bg-white rounded-lg p-4">
                                            <Image
                                                src={produto.foto_products[0].url}
                                                alt={produto.name}
                                                width={200}
                                                height={200}
                                                className="w-full h-auto object-cover"
                                            />
                                            <h2>{produto.name}</h2>
                                            <p className="font-bold">{formatPrice(produto.price)}</p>
                                            <div className="flex justify-center">
                                                <Link href={`/produto/${produto.id}`}>
                                                    <button className='w-[160px] h-[60px] bg-[#9758A6] hover:bg-[#804686] text-white rounded-full text-[20px] font-bold px-4 py-2 mt-4'> Saiba mais </button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>Sem produtos para esta categoria.</p>
                            )}
                        </section>
                    </main>
                </>
            )}
        </>
    )
}
