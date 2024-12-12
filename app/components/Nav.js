'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { FaUser,FaShoppingCart } from 'react-icons/fa';

export default function Nav() {

    const pathname = usePathname();

    return (
        <nav className="flex justify-between items-center px-4 w-full h-[72px] bg-white">
            <div className="flex space-x-4 ml-14 pl-14">
                <Link 
                    href="/" 
                    className={`text-[#555] hover:text-[#9758A6] ${pathname === '/' ? 'text-[#9758A6]' : ''}`}
                >
                    Home
                </Link>
                <Link 
                    href="/produtos" 
                    className={`text-[#555] hover:text-[#9758A6] ${pathname === '/produtos' ? 'text-[#9758A6]' : ''}`}
                >
                    Produtos
                </Link>
            </div>
            
            <div className="flex space-x-4 mr-14 pr-14">
                
                <FaShoppingCart className=' text-[#9758A6] cursor-pointer w-[30px]'/>
                <Link 
                    href="/login" 
                    className={`text-[#9758A6]`}
                >
                    <FaUser className='w-[30px]'/>
                </Link>
            </div>
        </nav>

    );
}
