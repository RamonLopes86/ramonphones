'use client'
import hookcontext from '@/contexto/hookcontext';
import estiloML from './estiloML.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaCartPlus } from "react-icons/fa6";
import dinheiro from '@/funcoes/funcoes';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdClose } from "react-icons/md";


export default function ProdutosMl() {

    const { inputPesquisa, arrayML, setArrayML, addCarrinho, mostrarCard, setMostrarCard, setInputPesquisa , boxRef , carrinho } = hookcontext()



    const [loading, setLoading] = useState(true)
    const [msg, setMsg] = useState('')
    const [mostraCircle, setMostrarCircle] = useState(false)

    
    

    async function exibirProdutosMl() {


        const limite = {

            params: {

                limit: 10
            }
        }


        try {

            const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${inputPesquisa}`, limite)



            const { results } = response.data

            if (results.length === 0) {

                setLoading(true)

                setMsg('nenhum iten encontrado :(')
                setMostrarCircle(false)

                return;

            }

            const ArrayCount = results.map((it) => { return { ...it, count: 0 } })


            setArrayML(ArrayCount)

            setLoading(false)

            return;

        } catch (error) {

            return console.log("erro", error.message)
        }


    }




    useEffect(() => {

        if (inputPesquisa && inputPesquisa.length > 1 && /^(?!\s*$).+/.test(inputPesquisa) && inputPesquisa !== " ") {

            setMostrarCard(true)

        } else {

            setMostrarCard(false)




        }

        setLoading(true)
        setMsg('carregando itens...')
        setMostrarCircle(true)

        const timeout = setTimeout(() => { exibirProdutosMl() }, 1400)

        return () => {

            clearTimeout(timeout)

        }


    }, [inputPesquisa])




    return (



        <section ref={boxRef} className={`${estiloML.boxML} ${mostrarCard ? estiloML.cardOn : estiloML.cardOff}`}>

            <div className={estiloML.boxIconClose}>

                <MdClose onClick={() => { setMostrarCard(false); setInputPesquisa('') }} className={estiloML.iconClose} />

            </div>

            <div className={estiloML.cardMl}>

                {

                    loading ? (

                        <div style={inputPesquisa.length === 0 ? { display: 'none' } : { display: 'block' }} className={estiloML.boxLoading}>
                            <h1 className={estiloML.msgCarrega}>{msg}</h1>
                            <AiOutlineLoading3Quarters style={mostraCircle ? { opacity: '1' } : { opacity: '0' }} className={estiloML.iconCircle} />
                        </div>

                    ) : (

                        arrayML.map((itens) => {

                            
                            const carOn = carrinho.some((it)=> it.id === itens.id)
                            const novoStyle = carOn ? { backgroundColor: 'var(--azul)' } : null;
                            
                        
                            return (

                                <div style={novoStyle} key={itens.id}  className={estiloML.card}>


                                    <div className={estiloML.conteudo}>

                                        <Image className={estiloML.imgProd} alt={itens.title} width={100} height={100} quality={100} src={itens.thumbnail} />

                                        <div className={estiloML.boxInfo}>
                                            <h4>{itens.title.slice(0, 30)}...</h4>
                                            <p>{dinheiro(itens.price, 'BRL')}</p>
                                        </div>

                                    </div>


                                    <FaCartPlus onClick={() => addCarrinho(itens)} className={estiloML.iconCar} />

                                </div>

                            )


                        })

                    )




                }

            </div>


        </section>








    )




}