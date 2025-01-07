'use client'
import dinheiro from '@/funcoes/funcoes';
import estiloFinal from './alert.module.css';
import hookcontext from '@/contexto/hookcontext';
import { useRouter } from 'next/navigation';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from 'react';



export default function Alert() {

    const router = useRouter()

    const { alertFinalCompra , setAlertFinalCompra , carrinho } = hookcontext()

    const [ballAnima , setBallAnima]= useState(false)

    const total = carrinho.reduce((acc , item)=> acc + item.price * item.count , 0)



    function goComprar(){

        setBallAnima(true)

        setTimeout(()=>{

            router.push('/comprar')

        },2000)

    }

    return (

        alertFinalCompra && (

            <section className={estiloFinal.boxFinalizar}>

                <div className={estiloFinal.alert}>

                    <h2>Deseja finalizar sua compra ?</h2>

                    <p>{dinheiro(total , "BRL")}</p>

                    <div style={ballAnima ? {opacity:'1' , visibility:'visible' , display:"block"} : {opacity:'0' , visibility:'hidden' , display:'none'} } className={estiloFinal.boxBall}>
                        <p>Aguarde...</p>
                        <AiOutlineLoading3Quarters className={estiloFinal.iconBall}/>
                    </div>

                    <div className={estiloFinal.boxBtn}>

                        <button onClick={goComprar} type="button">Sim</button>
                        <button onClick={()=> setAlertFinalCompra(false)} type="button">Não</button>

                    </div>


                </div>


            </section>

        )

    )


}

