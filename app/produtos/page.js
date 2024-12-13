import Nav from "../components/Nav";
import Header from "../components/Header";
import Products from "../pages/Products";

export default function Produtos() {
    return (
        <>
            <Nav/>
            <Header src='/burgerProdutos.png' alt='header page produtos'/>
            <Products/>
        </>
    )
}