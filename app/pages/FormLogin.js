'use client'

import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter, usePathname } from 'next/navigation';
import * as authActions from '@/store/modules/auth/actions';

const inputClass = 'w-[391.416px] h-[30px] rounded-[5px] text-black';
const buttonClass = 'w-[182.81px] h-[36.129px] bg-[#9758A6] rounded-full mt-[50px] mr-[208.61px] text-white text-[16px]';

export default function FormLogin({ onLoginSuccess }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { loading, isLoggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    const path = pathname !== '/login' ? pathname : '/';
    
    if (isLoggedIn) {
      toast.success('Seja bem-vindo ao CodeBurguer!');
      onLoginSuccess?.();
      setTimeout(() => router.push(path), 2000);
    }

    Object.entries(errors).forEach(([_, error]) => error?.message && toast.error(error.message));
  }, [isLoggedIn, router, pathname, errors, onLoginSuccess]);

  const formFields = {
    username: { label: 'Username:', rules: { required: 'Username é obrigatório' } },
    password: {
      label: 'Senha:',
      type: 'password',
      rules: {
        required: 'Senha é obrigatória',
        minLength: { value: 5, message: 'Senha precisa ter pelo menos 5 caracteres' },
        maxLength: { value: 10, message: 'Senha atingiu o numero máximo' }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(data => dispatch(authActions.loginRequest(data)))} 
          className='flex flex-col items-center gap-4'>
      {Object.entries(formFields).map(([name, field]) => (
        <div key={name} className='text-white flex flex-col'>
          <span>{field.label}</span>
          <input
            type={field.type || 'text'}
            {...register(name, field.rules)}
            className={`${inputClass} ${errors[name] ? 'border-2 border-red-500' : ''}`}
          />
        </div>
      ))}
      
      <button
        type="submit"
        disabled={loading}
        className={`${buttonClass} ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#844C8C] hover:shadow-lg'} 
                   transition-all duration-300`}
      >
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
      <ToastContainer />
    </form>
  );
}