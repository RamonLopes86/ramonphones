'use client'

import estiloHeader from './header.module.css';
import Image from 'next/image';
import logo from '../../../public/logo.png'
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProdutosMl from '../sectionItensML/itensML';
import hookcontext from '@/contexto/hookcontext';
import ModalCarrinho from '../modalCarrinho/modalCarrinho';



export default function Header(){

    const router = useRouter()

    const {inputPesquisa , setInputPesquisa , setModal , carrinho} = hookcontext()
   

    const [navAnima , setNavAnima] = useState(false)
    const[setaAnima , setSetaAnima] = useState(false)

    const count = carrinho.reduce((acc , item)=> acc + item.count , 0)


    


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
                <Image alt='image da logo' quality={100} className={estiloHeader.logo} src={logo}/>

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


            <input value={inputPesquisa} onChange={({target})=> setInputPesquisa(target.value)} className={estiloHeader.inputEscondido} placeholder='pesquisar...' type="text" name="pesquisaEscondido" id="idpesquisaescondido" />


            <div className={estiloHeader.boxBusca}>

                <div onClick={()=> setModal(atual => !atual)}  className={estiloHeader.boxCarrinho}>
                    
                    <p className={estiloHeader.qtd}>{count}</p>

                    <MdOutlineShoppingCart className={estiloHeader.iconCar}/>

                </div>
                   


                <ModalCarrinho/>
              

                <div className={estiloHeader.boxInput}>
                    <input value={inputPesquisa} onChange={({target})=> setInputPesquisa(target.value)} autoComplete='off' type="text" name="pesquisa" id="idpesquisa" placeholder='pesquisar...' />
                    
                    <button onClick={logout} type='button'>logout</button>
                    
                    <p>Ola , Ramon Lopes</p>
                </div>


                

            </div>


           
             <ProdutosMl/>
       


        </section>
        

    )

}