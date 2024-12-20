'use client'

import Nav from "@/app/components/Nav"
import Header from "@/app/components/Header"
import Product from '@/app/pages/Product'
import { useEffect, useState } from "react"
import { use } from "react"

import {AxiosProducts} from "@/utils/AxiosConfig"
import SkeletonProduto from "@/app/components/loadings/SkeletonPronduto"

export default function Produto({params}){
    const [produto, setProduto] = useState([])
    const resolvedParams = use(params)
    const [loading, setLoading] = useState(true)
    const { id } = resolvedParams

    useEffect(()=>{
        const fetchProdutos = async ()=>{
            const response = await (AxiosProducts.get(`/products/${id}`))
            setProduto(response.data)
            setLoading(false)
            
        }

        fetchProdutos()
    },[id])

    return (
        <>
            <Nav/>
            <Header src='/burgerProduto.png' alt='header page produto'/>
            {loading ? (
                <div className="flex justify-center items-center mt-5">
                    {Array(3)
                        .fill(null)
                        .map((_, index) => (
                            <SkeletonProduto key={index} />
                        ))}
                </div>
            ) : (
                
                <Product items={produto} />
            )}
        </>
    )
}