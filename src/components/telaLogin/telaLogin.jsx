'use client'

import estiloLogin from './telaLogin.module.css';
import Image from 'next/image';
import logo from '../../../public/logo.png'
import Login from '../login/login';
import Senha from '../cadastro/cadastro';
import hookcontext from '@/contexto/hookcontext';
import { useEffect } from 'react';


export default function TelaLogin() {

    const {setAnimaCadastro , setAnimaLogin , corLogin , setCorLogin} = hookcontext()
    
    
    
    function animaLogin(param){


        if(param === 'login'){

            setAnimaCadastro(false)
            setAnimaLogin(true)
            setCorLogin('login')

            return;
        }


        if(param === 'cadastro'){

            setAnimaCadastro(true)
            setAnimaLogin(false)
            setCorLogin('cadastro')

            return;
            
        }




    }


    useEffect(()=>{

        setCorLogin('login')

    },[])


    return (

        <section className={estiloLogin.boxPai}>


            <section className={estiloLogin.boxLogin}>


                <div className={estiloLogin.boxLogo}>

                    <Image quality={100} className={estiloLogin.logo}  alt='log' src={logo} />

                   
                </div>

                <div className={estiloLogin.boxFormulario}>

                    <div className={estiloLogin.boxTx}>
                        <h1 style={corLogin === 'login' ? {color:"#46EEFE"} : null}  onClick={()=> animaLogin('login')}>login</h1>
                        <h1 style={corLogin === 'cadastro' ? {color:"#46EEFE"} : null} onClick={()=>animaLogin('cadastro')}>cadastro</h1>
                    </div>

                    <div className={estiloLogin.fomulario}> 


                        <Login/>

                        
                        <Senha/>


                    </div>

                </div>


            </section>


          
                <section className={estiloLogin.boxInformacoes}>
                    <div className={estiloLogin.info}>
                        <h4>Informações</h4>
                        <p>© 2024 Todos os direitos reservados RamonPhones.</p>
                        <p>O lugar ideal para adquirir seu novo smartphone!</p>
                        <div className={estiloLogin.redes}>
                        </div>
                    </div>
                    <div className={estiloLogin.boxLinks}>
                        <h4>Links Úteis</h4>
                        <p>Inico</p>
                        <p>Iohones</p>
                        <p>Smatphons</p>
                        <p>SmartWatch</p>
                        <p>Acessórios</p>
                    </div>
                    <div className={estiloLogin.institucional}>
                        <h4>Institucional</h4>
                        <p>CNPJ: XX.XXX.XXX/0001-XX</p>
                        <p>Rua da Animésia 1148</p>
                        <p>Política de privacidade</p>
                        <p>Dúvidas frequentes</p>
                        <p>Ajuda</p>
                    </div>
                </section>
           




        </section>


    )

}