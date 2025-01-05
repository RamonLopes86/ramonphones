'use client'
import hookcontext from '@/contexto/hookcontext';
import estiloModalCar from './modalCar.module.css';
import Image from 'next/image';
import { FaRegTrashAlt } from "react-icons/fa";
import dinheiro from '@/funcoes/funcoes';
import { useEffect, useState } from 'react';
import { FaX } from 'react-icons/fa6';





export default function ModalCarrinho(){

    const {modal , carrinho , removeItemCarrinho , incrementarItem , setModal , refModalCar} = hookcontext()

    const total = carrinho.reduce((acc , item)=> acc + item.price * item.count , 0)

  



  

    
    return(

        <section ref={refModalCar} style={modal ? {transition:'all 200ms linear', transform:'translate(0)', opacity:'1', visibility:'visible'}: {transition:'all 200ms linear', transform:'translateY(100px)', opacity:'0' , visibility:'hidden' }}  className={estiloModalCar.boxModal}>
              

                <div className={estiloModalCar.boxFilhoModal}>

                    <FaX onClick={()=> setModal(false)} className={estiloModalCar.iconX}/>

                    {
                        carrinho.length === 0 ? (

                            <div className={estiloModalCar.boxMsgModal}>

                                    <h1>Carrinho vazio :(</h1>

                            </div>

                        ):(

                            

                                carrinho.map((itens)=>{


                               
                                    
        
                                    return(
        
                                        
                                            
                                            <div className={estiloModalCar.boxCard} key={itens.id}>




                                                <div className={estiloModalCar.boxInfo}>
                                                    <Image alt={itens.title} className={estiloModalCar.imageProduto} width={100} height={100} quality={100} src={itens.thumbnail}/>
                                                    <div className={estiloModalCar.boxTx}>
                                                    <p>{itens.title.slice(0 ,50)}...</p>
                                                    <p>{dinheiro(itens.price , "BRL")}</p>
                                                    </div>
                                                </div>

                                                <div className={estiloModalCar.boxFlexMais}>
                                                    <div className={estiloModalCar.boxMais}>
                                                        <p onClick={()=>incrementarItem(itens.id , 's')} >+</p>
                                                        <p>{itens.count}</p>
                                                        <p onClick={()=> incrementarItem(itens.id , 'd')}>-</p>
                                                    </div>
                                                </div>

                                                <FaRegTrashAlt onClick={()=>removeItemCarrinho(itens.id)} className={estiloModalCar.iconTrash}/>
                                            </div>

                                           
                                      
        
                                    )
        
                                })  
                              


                                
                            )
                            

                    }
                </div>


                    <div style={carrinho.length === 0 ? {opacity:'0'} : {opacity:'1'}  } className={estiloModalCar.boxTotal}>

                        <p>Total: {dinheiro(total  , "BRL") } </p>

                    </div>
                
        </section>
    )
}