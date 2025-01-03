'use client'

import estiloHeader from './header.module.css';
import Image from 'next/image';
import logo from '../../../public/logo.png'
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header(){

    const router = useRouter()

    const [navAnima , setNavAnima] = useState(false)
    const[setaAnima , setSetaAnima] = useState(false)


    function mostrarNav(){


         setNavAnima(atual => !atual)
         setSetaAnima(atual => !atual)

    }


    function logout(){

        setTimeout(()=>{


            router.push('/')

        },1000)

    }


    return(

        <section className={estiloHeader.boxHeader}>


            <div className={estiloHeader.boxLogo}>
                <Image className={estiloHeader.logo} src={logo}/>

                <div onClick={mostrarNav} className={estiloHeader.boxProdutos}>
                    <span>Produtos</span>
                    <IoIosArrowDown style={setaAnima ? {transform:'rotate(180deg)', transition:'all 300ms linear'} : {transform:'rotate(0)' , transition:'all 300ms linear'}} className={estiloHeader.iconSeta}/>

                    <div className={estiloHeader.menuNav}>

                        <nav className={navAnima ? estiloHeader.animaNavOn : estiloHeader.animaNavOff}>
                            <ul>
                                <li>Iphones</li>
                                <li>Smartphones</li>
                                <li>ApplaWatch</li>
                                <li>Acessórios</li>
                            </ul>
                        </nav>

                    </div>
                
                </div>

            </div>


            <input className={estiloHeader.inputEscondido} placeholder='pesquisar...' type="text" name="pesquisaEscondido" id="idpesquisaescondido" />


            <div className={estiloHeader.boxBusca}>

                <div className={estiloHeader.boxCarrinho}>
                    
                    <p>0</p>
                    <MdOutlineShoppingCart className={estiloHeader.iconCar}/>
                </div>


              

                <div className={estiloHeader.boxInput}>
                    <input autoComplete='off' type="text" name="pesquisa" id="idpesquisa" placeholder='pesquisar...' />
                    
                    <button onClick={logout} type='button'>logout</button>
                    <p>ola , ramon lopes</p>
                </div>


                

            </div>


           

       


        </section>
        

    )

}