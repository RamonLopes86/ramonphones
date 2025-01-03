'use client'
import hookcontext from '@/contexto/hookcontext';
import estiloML from './estiloML.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import Image from 'next/image';
import { FaCartPlus } from "react-icons/fa6";
import dinheiro from '@/funcoes/funcoes';


export default function ProdutosMl() {

    const { inputPesquisa, arrayML, setArrayML } = hookcontext()



    async function exibirProdutosMl() {


        try {

            const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${inputPesquisa}`)

            const { results } = response.data

            return setArrayML(results)

        } catch (error) {

            return console.log("erro", error.message)
        }


    }



    useEffect(() => {

        exibirProdutosMl()

    }, [inputPesquisa])




    return (

        <section className={estiloML.boxML}>



            <div className={estiloML.cardMl}>

                {

                    arrayML.map((itens) => {

                        {console.log(itens)}

                        return (

                            <div key={itens.id} className={estiloML.card}>


                                <div className={estiloML.conteudo}>

                                    <Image className={estiloML.imgProd} alt={itens.title} width={100} height={100} quality={100} src={itens.thumbnail} />

                                    <div className={estiloML.boxInfo}>
                                        <h4>{itens.title}</h4>
                                        <p>{dinheiro(itens.price , 'BRL')}</p>
                                    </div>

                                </div>


                                <FaCartPlus className={estiloML.iconCar} />
                            </div>

                        )


                    })


                }

            </div>


        </section>


    )




}