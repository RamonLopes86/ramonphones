'use client'
import hookcontext from '@/contexto/hookcontext';
import estiloModalCar from './modalCar.module.css';
import Image from 'next/image';
import { FaRegTrashAlt } from "react-icons/fa";
import dinheiro from '@/funcoes/funcoes';




export default function ModalCarrinho(){

    const {modal , carrinho , removeItemCarrinho} = hookcontext()

    const total = carrinho.reduce((acc , item)=> acc + item.price * item.count , 0)


   
   

    
    return(

        <section style={modal ? {transition:'all 200ms linear', transform:'translate(0)', opacity:'1', visibility:'visible'}: {transition:'all 200ms linear', transform:'translateY(100px)', opacity:'0' , visibility:'hidden' }}  className={estiloModalCar.boxModal}>
              

                <div className={estiloModalCar.boxFilhoModal}>

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
                                                    <p>{itens.title.slice(0 ,30)}...</p>
                                                    <p>{dinheiro(itens.price , "BRL")}</p>
                                                    </div>
                                                </div>

                                                <div className={estiloModalCar.boxMais}>
                                                <p onClick={()=> itens.count+=1}>+</p>
                                                    <p>{itens.count}</p>
                                                    <p onClick={()=> itens.count-=1}>-</p>
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