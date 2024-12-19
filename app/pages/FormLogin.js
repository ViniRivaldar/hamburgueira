'use client'

import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import * as authActions from '@/store/modules/auth/actions';

export default function FormLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const dispatch = useDispatch();
    
    const { loading, error, isLoggedIn } = useSelector(state => state.auth);

    useEffect(() => {
        if (isLoggedIn) {
            toast.success('Seja bem-vindo ao CodeBurguer!');
            setTimeout(() => {
                router.push('/');
            }, 2000);
        }
    }, [isLoggedIn, router]);

    useEffect(() => {
        Object.keys(errors).forEach(key => {
            if (errors[key]?.message) {
                toast.error(errors[key].message);
            }
        });
    }, [errors]);

    const onSubmit = async (data) => {
        try {
            dispatch(authActions.loginRequest(data));
            console.log('Tentativa de login iniciada:', data);
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            toast.error('Erro ao tentar fazer login');
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-4'>
            <div className='text-white flex flex-col'>
                <span>Username:</span>
                <input
                    type="text"
                    {...register('username', { required: 'Username é obrigatório' })}
                    className={`w-[391.416px] h-[30px] rounded-[5px] text-black ${errors.username ? 'border-2 border-red-500' : ''}`}
                />
            </div>

            <div className='text-white flex flex-col'>
                <span>Senha:</span>
                <input
                    type="password"
                    {...register('password', { 
                        required: 'Senha é obrigatória',
                        minLength: {
                            value: 5,
                            message: 'Senha precisa ter pelo menos 5 caracteres'
                        }, 
                        maxLength:{
                            value: 10,
                            message: 'Senha atingiu o numero máximo'
                        }
                    })}
                    className={`w-[391.416px] h-[30px] rounded-[5px] text-black ${errors.password ? 'border-2 border-red-500' : ''}`}
                />
            </div>

            <button 
                type="submit" 
                disabled={loading}
                className={`w-[182.81px] h-[36.129px] bg-[#9758A6] rounded-full mt-[50px] mr-[208.61px] text-white text-[16px] 
                    ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#844C8C] hover:shadow-lg'} 
                    transition-all duration-300`}
            >
                {loading ? 'Entrando...' : 'Entrar'}
            </button>
            
            <ToastContainer />
        </form>
    )
}