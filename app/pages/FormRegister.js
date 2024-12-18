'use client'

import { useForm } from 'react-hook-form';

import{AxiosAuth} from '../../utils/AxiosConfig'

export default function FormRegister(){
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await AxiosAuth.post('/register', data);
            console.log('Cadastro realizado com sucesso:', response.data);
        }catch(e){
            console.error('Erro ao realizar o cadastro:', e)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Cadastre-se</h1>

            <label> Nome:
                <input
                    type="text"
                    placeholder="digite o nome"
                    {...register('name', { required: 'Nome é obrigatório' })}
                />
                {errors.name && <span>{errors.name.message}</span>}
            </label>
            <label> Username:
                <input
                    type="text"
                    placeholder="digite o Username"
                    {...register('username', { required: 'Username é obrigatório' })}
                />
                {errors.username && <span>{errors.username.message}</span>}
            </label>
            <label> Email:
                <input
                    type="Email"
                    placeholder="digite o Email"
                    {...register('email', { 
                        required: 'Email é obrigatório', 
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: 'Formato de email inválido',
                        }
                    })}
                />
                 {errors.email && <span>{errors.email.message}</span>}
            </label>
            <label> Senha:
                <input
                    type="password"
                    placeholder="digite a senha"
                    {...register('password', { required: 'Senha é obrigatória' })}
                />
                {errors.password && <span>{errors.password.message}</span>}
            </label>
            <label> WhatsApp:
                <input
                    type="text"
                    placeholder="digite o telefone"
                    {...register('phone_number', { 
                        required: 'Telefone é obrigatório',
                        pattern: {
                          value: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
                          message: 'Formato de telefone inválido',
                        }
                    })}
                />
                {errors.phone_number && <span>{errors.phone_number.message}</span>}
            </label>

            <button type="submit">Cadastrar</button>
        </form>
    )
}