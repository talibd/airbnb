'use client';

import { signIn } from 'next-auth/react'; 
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai'; 
import { FcGoogle } from 'react-icons/fc'; 
import { useCallback, useState } from 'react'; 
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import { useRouter } from 'next/navigation';

const LoginModal = () => {

    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit,formState: {
        errors,
    } 
} = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        
        signIn('credentials', {
            ...data,
            redirect: false,
        })
        .then((callback) => {
            setIsLoading(false);

            if (callback?.ok) {
                toast.success('logged in');
                router.refresh();
                loginModal.onClose();
            }

            if (callback?.error) {
                toast.error(callback.error);
            }
        })
    }

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading title='Welcome to Back' subtitle='login to your account!' center />
            <Input 
            id='email' 
            label='Email' 
            disabled={isLoading} 
            register={register} 
            errors={errors} 
            required />

            <Input 
            id='password' 
            label='Password' 
            type='password'
            disabled={isLoading} 
            register={register} 
            errors={errors} 
            required />
        </div>
    );

    const footerContent = (
        <div className='flex flex-col gap-4 '>
            <div className='flex flex-row gap-4 mt-4'>
            <Button 
            outline
            label='Continue with Google'
            icon={FcGoogle}
            onClick={()=>{}}  />
            <Button 
            outline
            label='Continue with Github'
            icon={AiFillGithub}
            onClick={()=>{}}  />
           </div>
           <div className='text-neutral-500 text-center mt-4 font-light'>
            <div className='flex justify-center flex-row items-center gap-2'>
                <div>Already have an account ?</div>
                <div className=' text-rose-500 hover:text-rose-800 cursor-pointer hover:underline'>Log in</div>
            </div>
           </div>
        </div>
    )

    return ( 
       <Modal
       disabled={isLoading}
       isOpen={loginModal.isOpen}
       title='Login'
       actionLabel='Login'
       onClose={loginModal.onClose}
       onSubmit={handleSubmit(onSubmit)}
       body={bodyContent}
       footer={footerContent}
       />
     );
}
 
export default LoginModal;