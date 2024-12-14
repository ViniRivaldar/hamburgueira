import Nav from "@/app/components/Nav"


export default function Categoria({params}){
    const {id}= params
    return(
        <>
            <Nav/>
            <h1>categoria: {id}</h1>
        
        </>
    )
}