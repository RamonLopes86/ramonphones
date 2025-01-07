'use client'
import dinheiro from '@/funcoes/funcoes'
import estiloComp from './comprar.module.css'
import { useRouter } from 'next/navigation'

import Image from 'next/image'
import Cookies from 'js-cookie'
import { useState } from 'react'





export default function Comprar(){

    const router = useRouter()

    const carro = JSON.parse(localStorage.getItem('car'))

    const total = carro.reduce((acc , it)=> (it.price * it.count) + acc  , 0)

  

    function cenelarCarrinho(){

        Cookies.remove('auth_token_comp')

        setTimeout(()=>{

            
            router.push('/logado')
            console.log('teste')
            
           


        },1000)



    }
    

    return(

        <section className={estiloComp.boxPai}>

                <h1> Revise e clique em pagar para redirecionarmos ao pagamento </h1>

                <div className={estiloComp.boxFilho}>

                    {

                        carro.map((itens)=>{

                            return(

                                <div className={estiloComp.card} key={itens.id}>

                                    <div className={estiloComp.boxImg}>
                                    <Image alt={itens.title} width={200} height={200} quality={100} className={estiloComp.img} src={itens.thumbnail.replace( /\.(jpg|jpeg|png|gif|bmp|webp|tiff)/i, "W$&")} />
                                    <p>{itens.title.slice(5,25)}...</p>

                                    </div>


                                    <div className={estiloComp.boxPreco}>

                                        <p>x {itens.count}</p>
                                        <p>{dinheiro(itens.price , "BRL")}</p>

                                    </div>

                                    
                                  
                                </div>

                            )

                        })
                    }

                </div>

                <div style={carro.length === 0 ? {display:'none'}:{display:'flex'}} className={estiloComp.boxTotal}>

                    <p>Total : <span>{dinheiro(total , "BRL")}</span></p>
                    <div className={estiloComp.boxBtn}>
                        <button type="button">gerar pix</button>
                        <button onClick={cenelarCarrinho} type="button">cancelar</button>
                    </div>

                </div>

        </section>

    )
}