import hookcontext from '@/contexto/hookcontext';
import estiloLogin from './login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Login(){

    const router = useRouter()

    const {animaLogin} = hookcontext()

    const [inputLogMail , setInputLogMail] = useState('')
    const[inputLogSenha , setInputLogSenha] = useState('')


    const [msgLogado , setMsgLogado] = useState('')



    function cadastrarUser(){

        if(!inputLogMail || !inputLogSenha){

             setMsgLogado('preencha os campos')

            setTimeout(()=>{

                setMsgLogado('')

            }, 1000)
            

            return;
        }


        if(inputLogMail !== 'ramonlopes@gmail.com' && inputLogSenha !== 123 && inputLogMail !== 'maria@gmail.com' && inputLogSenha !== 123){

             setMsgLogado('usuário não existe')
            

             setTimeout(()=>{

                setMsgLogado('')

             },1000)

            return;

        }else{

            
        setMsgLogado('usuario  logado')
        localStorage.setItem('nome' , inputLogMail)

         setTimeout(()=>{

            router.push('/logado')
            setMsgLogado('')

         },1000)


        

        }






         
    }

    return(


        <form className={`${estiloLogin.formLogin} ${animaLogin ? estiloLogin.animaLoginOn : estiloLogin.animaLoginOff}`} action="">

                            <div className={estiloLogin.boxInput}>

                                <label htmlFor="idmail">E-mail</label>
                                <input value={inputLogMail} onChange={({target})=> setInputLogMail(target.value)} autoComplete='off' type="text" name="mail" id="idmail" />

                            </div>
                            <div className={estiloLogin.boxInput}>

                                <label htmlFor="idsenha">Senha</label>
                                <input value={inputLogSenha} onChange={({target})=> setInputLogSenha(target.value)} autoComplete='off' type="password" name="senha" id="idsenha" />

                            </div>

                            <div className={estiloLogin.boxCheck}>


                                <input type="checkbox" name="lembrar" id="idlembrar" />
                                <label htmlFor="idlembrar">lembrar de mim</label>


                            </div>

                                <p>{msgLogado}</p>


                            <button onClick={cadastrarUser} type='button'>Entrar</button>

                            <p>Esqueci a senha</p>

        </form>




    )


}