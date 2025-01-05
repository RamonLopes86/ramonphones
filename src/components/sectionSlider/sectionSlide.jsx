'use client'
import estiloSlode from './slide.module.css';
import { FaCartPlus, FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import celdados from '@/dadosSlideCel/dados';
import dinheiro from '@/funcoes/funcoes';
import hookcontext from '@/contexto/hookcontext';








export default function Slide() {


    const {clickModalOut} = hookcontext()


    const prevRef = useRef(null)
    const nextRef = useRef(null)

    const [swiper, setSwiper] = useState(null)

    useEffect(() => {

        if (swiper) {

            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.update()

        }

    }, [swiper])


    return (

        <section onClick={clickModalOut} className={estiloSlode.boxPaiSlide}>

            <section className={estiloSlode.sliders}>
                <Swiper

                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    speed={1000}
                    pagination={{
                        clickable: true
                    }}
                    navigation={{
                        clickable: true,
                        nextEl: nextRef.current,
                        prevEl: prevRef.current

                    }}
                    slidesPerView={1}
                    spaceBetween={40}
                    grabCursor={true}
                    onSwiper={setSwiper}







                >

                    {
                        celdados.map((itens, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className={estiloSlode.card}>
                                        <div className={estiloSlode.slideTx}>
                                            <p>promoções do dia</p>
                                            <h1>{itens.tit}</h1>
                                            <p><span>{dinheiro(itens.antigo, "BRL")}</span> , por apenas :</p>
                                            <p><span>{dinheiro(itens.preco, "BRL")}</span> à vista</p>
                                            <p>ou em ate 12x de {dinheiro((itens.antigo) / 12, "BRL")}</p>
                                            <button type='button'>
                                                <span>Adicionar ao carrinho</span>
                                                <FaCartPlus className={estiloSlode.iconCar} />
                                            </button>
                                        </div>
                                        <div className={estiloSlode.boxImage}>
                                            <Image className={estiloSlode.image} alt={itens.tit} quality={100} src={itens.img} />
                                        </div>




                                    </div>





                                </SwiperSlide>


                            )
                        })


                    }


                </Swiper>


                    <p ref={prevRef}><FaLongArrowAltLeft className={estiloSlode.iconSeta} /></p>
                    <p ref={nextRef}><FaLongArrowAltRight className={estiloSlode.iconSeta} /></p>
                   
               

            </section>


        </section>


    )

}