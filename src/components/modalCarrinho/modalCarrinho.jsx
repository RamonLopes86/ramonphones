'use client'
import hookcontext from '@/contexto/hookcontext';
import estiloModalCar from './modalCar.module.css';
import Image from 'next/image';
import { FaRegTrashAlt } from "react-icons/fa";
import dinheiro from '@/funcoes/funcoes';




export default function ModalCarrinho(){

    const {modal , carrinho} = hookcontext()


    
    return(

        <section style={modal ? {display:'block'}: {display:'block'}}  className={estiloModalCar.boxModal}>
              

                <div>
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
                                                <Image className={estiloModalCar.imageProduto} width={100} height={100} quality={100} src={itens.thumbnail}/>

                                                <div className={estiloModalCar.boxTx}>
                                                <p>{itens.title.slice(0 ,30)}...</p>
                                                <p>{dinheiro(itens.price , "BRL")}</p>
                                                </div>

                                            </div>


                                            <FaRegTrashAlt className={estiloModalCar.iconTrash}/>
        
                                        </div>
        
                                    )
        
                                })  
                              
                                
                            

                        )
                    }
                </div>
        </section>
    )
}