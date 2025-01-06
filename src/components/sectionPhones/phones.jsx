'use client'
import estiloPhone from './phones.module.css';
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import dinheiro from '@/funcoes/funcoes';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { MdOutlineKeyboardDoubleArrowRight , MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import hookcontext from '@/contexto/hookcontext';



export default function SectionPhones() {

    const [produtos, setProdutos] = useState([])

    const [swiper , setSwiper] = useState(null)

   const {setInputPesquisa , setMostrarCard , inputPesquisa} = hookcontext()

    const prevRef = useRef(null)
    const nextRef = useRef(null)

   useEffect(()=>{

    if(swiper){

        swiper.params.navigation.nextEl = nextRef.current
        swiper.params.navigation.prevEl = prevRef.current
        swiper.update()

    }



   },[swiper])


    useEffect(() => {

        const limite = {

            params: {

                limit: 8
            }
        }

        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=iphone`, limite)
            .then((response) => {

                const { results } = response.data

                
                setProdutos(results)


            })



    }, [])


   




    



 




    return (

        <section className={estiloPhone.boxPai}>



            <section className={estiloPhone.boxOverFlow}>

              

                <h1>Iphones</h1>
              


                <Swiper
                
                modules={[Pagination , Navigation , Autoplay]}
                slidesPerView={4}
                slidesPerGroup={4}
                speed={1500}
                loop={true}
                spaceBetween={50}
                navigation={{
                    clickable:true,
                    nextEl:nextRef.current,
                    prevEl:prevRef.current
                    
                    
              }}
              simulateTouch={false}
              onSwiper={setSwiper}
              breakpoints={{

                1200:{

                    slidesPerGroup:4,
                    slidesPerView:4,
                    simulateTouch:false,
                    grabCursor:false
                },

                1000:{
                    
                    slidesPerView:3,
                    slidesPerGroup:4,
                    simulateTouch:false,
                    grabCursor:false

                },

                800:{
                    
                    slidesPerView:2,
                    slidesPerGroup:2,
                    simulateTouch:true,
                    grabCursor:true

                },

                500:{
                    
                    slidesPerView:1,
                    slidesPerGroup:1,
                    simulateTouch:true,
                    grabCursor:true

                },
                320:{
                    
                    slidesPerView:1,
                    slidesPerGroup:1,
                    simulateTouch:true,
                    grabCursor:true

                },

                

                

              }}
                
             
                
                >

                    {

                        produtos.map((item) => {


                            return (

                                <SwiperSlide key={item.id}>

                                    <div  className={estiloPhone.cardPhones}>
                                        <h1>{item.title.slice(0, 15)}</h1>
                                        
                                            <Image className={estiloPhone.img} alt={item.title} width={100} height={100} quality={100} src={item.thumbnail} />
                                       
                                        <div className={estiloPhone.boxStar}>
                                            <FaStar className={estiloPhone.iconStar} />
                                            <FaStar className={estiloPhone.iconStar} />
                                            <FaStar className={estiloPhone.iconStar} />
                                            <FaStar className={estiloPhone.iconStar} />
                                            <FaStar className={estiloPhone.iconStar} />
                                        </div>
                                        <div className={estiloPhone.boxTx}>
                                            <p><span>{dinheiro(item.price, "BRL")}</span> à vista </p>
                                            <p>ou em ate 12x de : {dinheiro(item.price / 12, "BRL")}</p>
                                            <p>o {item.title.slice(5, 15)} , O iPhone 16 Pro Max traz tela Super Retina XDR de 6,9 polegadas, chip A18 Pro, câmeras avançadas de 48 MP, gravação em 4K a 120 fps</p>
                                        </div>

                                        <button type='button'>Pesquisar</button>
                                    </div>

                                </SwiperSlide>


                            )
                        })


                        

                    }
                </Swiper>

                        <button ref={prevRef} type='button'><MdOutlineKeyboardDoubleArrowLeft className={estiloPhone.iconSeta}/></button>
                        <button ref={nextRef} type='button'><MdOutlineKeyboardDoubleArrowRight className={estiloPhone.iconSeta}/></button>

            </section>

        </section>


    )
}