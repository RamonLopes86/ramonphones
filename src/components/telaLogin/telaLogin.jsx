'use client'

import estiloLogin from './telaLogin.module.css';
import Image from 'next/image';
import logo from '../../../public/logo.png'
import creative from '../../../public/creative.jpg'
import Login from '../login/login';
import Senha from '../cadastro/cadastro';
import hookcontext from '@/contexto/hookcontext';

export default function TelaLogin() {

    const {setAnimaCadastro , setAnimaLogin} = hookcontext()
    
    
    
    function animaLogin(param){


        if(param === 'login'){

            setAnimaCadastro(false)
            setAnimaLogin(true)

            return;
        }


        if(param === 'cadastro'){

            setAnimaCadastro(true)
            setAnimaLogin(false)
        }




    }


    return (

        <section className={estiloLogin.boxPai}>


            <section className={estiloLogin.boxLogin}>


                <div className={estiloLogin.boxLogo}>

                    <Image quality={100} className={estiloLogin.logo}  alt='log' src={logo} />

                   
                </div>

                <div className={estiloLogin.boxFormulario}>

                    <div className={estiloLogin.boxTx}>
                        <h1 onClick={()=> animaLogin('login')}>login</h1>
                        <h1 onClick={()=>animaLogin('cadastro')}>cadastro</h1>
                    </div>

                    <div className={estiloLogin.fomulario}> 


                        <Login/>

                        

                        <Senha/>

                    </div>

                </div>


            </section>




        </section>


    )

}