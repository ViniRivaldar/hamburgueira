import Nav from "@/app/components/Nav"

export default function Produto({params}){
    const {id}= params

    return (
        <>
            <Nav/>
            <h1>produto: {id}</h1>
        </>
    )
}