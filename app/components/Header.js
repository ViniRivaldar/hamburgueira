import Image from "next/image";

export default function Header({src, alt}){
    return(
        <header className="relative w-full h-[557px]">
            <Image 
                src={src} 
                alt={alt}
                fill 
                style={{ objectFit: "cover" }} 
            />
        </header>
    )
}