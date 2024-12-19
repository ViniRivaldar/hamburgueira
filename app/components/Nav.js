'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { FaUser,FaShoppingCart,FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

import * as authActions from '../../store/modules/auth/actions'

export default function Nav() {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const user = useSelector(state=> state.auth.user)

    const handleLogout = () => {
        dispatch(authActions.logout());
    };

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
            {isLoggedIn ? (
                    <>
                        <div className='flex items-center gap-3'>
                            <FaShoppingCart className="text-[#9758A6] cursor-pointer w-[30px]" />
                            <button onClick={handleLogout} className="text-[#9758A6] cursor-pointer">
                                <FaSignOutAlt className="w-[30px]" />
                            </button>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[#555]'>{`Seja bem vindo ${user.username}`}</span>
                            <Link href='/register' className='text-[#9758A6]'>Perfil</Link>
                        </div>
                    </>
                ) : (
                    <Link
                        href="/login"
                        className={`text-[#9758A6]`}
                    >
                        <FaUser className="w-[30px]" />
                    </Link>
                )}
            </div>
        </nav>

    );
}
