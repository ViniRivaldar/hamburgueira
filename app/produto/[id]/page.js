import Nav from "@/app/components/Nav"
import Header from "@/app/components/Header"

export default function Produto({params}){
    const {id}= params

    return (
        <>
            <Nav/>
            <Header src='/burgerProduto.png' alt='header page produto'/>
            <h1>produto: {id}</h1>
        </>
    )
}