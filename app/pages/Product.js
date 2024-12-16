import Image from "next/image"
import Link from "next/link"

export default function Product({items}){

    if (!Array.isArray(items)) {
        items = [items]; 
    }
    
    const formatarPreco= preco =>{
        return preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    }

    return (
        <main className="flex justify-center items-center mt-5">
            {items.map(produto=>(
                <div key={produto.id} className="flex gap-4 mt-5 mb-5 bg-white p-3 rounded">
                    <Image src={produto.foto_products[0].url} alt={produto.name} width={300} height={200}/>

                    <div className="flex flex-col">
                        <p className="font-bold">{produto.name}</p>
                        <span className="font-bold mt-10">Descrição: </span>
                        <p className="mt-3">{produto.description}</p>
                        <div className="mt-32">
                            <p className="font-bold mb-5 ml-3">{formatarPreco(produto.price)}</p>
                            <button className="mt-1 w-[200px] h-[50px] bg-[#9758A6] hover:bg-[#804686] text-white rounded-full px-4 py-2">Adicionar ao carrinho</button>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    )
}