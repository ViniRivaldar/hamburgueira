'use client'

import { useForm } from 'react-hook-form';
import { AxiosAuth } from '../../utils/AxiosConfig'
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';

export default function FormRegister() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const response = await AxiosAuth.post('/register', data);
            toast.success('Cadastro realizado com sucesso!');
            setTimeout(() => {
                router.push('/login');
            }, 2000);
        } catch (e) {
            if (e.response?.data?.errors) {
                e.response.data.errors.forEach(errorMessage => {
                    if (errorMessage.includes('Senha')) {
                        setError('password', {
                            type: 'manual',
                            message: errorMessage
                        });
                    }
                });
            } else {
                toast.error('Erro ao realizar o cadastro. Tente novamente.');
            }
        }
    }

    useEffect(() => {
        Object.keys(errors).forEach(key => {
            if (errors[key]?.message) {
                toast.error(errors[key].message);
            }
        });
    }, [errors]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-4'>
            <div className='text-white flex flex-col'>
                <span>Nome:</span>
                <input
                    type="text"
                    {...register('name', { required: 'Nome é obrigatório' })}
                    className={`w-[391.416px] h-[30px] rounded-[5px] text-black ${errors.name ? 'border-2 border-red-500 focus:border-red-500 focus:ring-red-500' : 'border border-gray-300'}`}
                />
            </div>

            <div className='text-white flex flex-col'>
                <span>Username:</span>
                <input
                    type="text"
                    {...register('username', { required: 'Username é obrigatório' })}
                    className={`w-[391.416px] h-[30px] rounded-[5px] text-black ${errors.username ? 'border-2 border-red-500' : ''}`}
                />
            </div>

            <div className='text-white flex flex-col'>
                <span>Email:</span>
                <input
                    type="email"
                    {...register('email', {
                        required: 'Email é obrigatório',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Formato de email inválido',
                        }
                    })}
                    className={`w-[391.416px] h-[30px] rounded-[5px] text-black ${errors.email ? 'border-2 border-red-500' : ''}`}
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

            <div className='text-white flex flex-col'>
                <span>WhatsApp:</span>
                <input
                    type="text"
                    {...register('phone_number', {
                        required: 'Telefone é obrigatório',
                        pattern: {
                            value: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
                            message: 'Formato de telefone inválido',
                        }
                    })}
                    className={`w-[391.416px] h-[30px] rounded-[5px] text-black ${errors.phone_number ? 'border-2 border-red-500' : ''}`}
                />
            </div>

            <button type="submit" className='w-[182.81px] h-[36.129px] bg-[#9758A6] rounded-full mt-[10] mr-[208.61px] text-white text-[16px]'>
                Sign Up
            </button>
            <ToastContainer />
        </form>
    )
}