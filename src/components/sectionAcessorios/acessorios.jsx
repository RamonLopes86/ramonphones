'use client'

import estiloAcess from './acessorios.module.css'
import axios from 'axios'
import { useState , useEffect } from 'react'
import { Swiper , SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import dinheiro from '@/funcoes/funcoes'






export default function Acessorios(){

    const [arrayAcessorios , setArrayAcessorios] = useState([])
    const [tx , setTx] = useState('acessorios de celular')
    const [load , setLoad] = useState(true)
    const [btnActive , setBtnActive] = useState('')


    useEffect(()=>{


     setLoad(true)   

    const limite = {

        params:{

            limit:8
        }

    }

    axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${tx}`, limite)
    .then((response)=>{


        const {results} = response.data

      

           
            setArrayAcessorios(results)
            setLoad(false)
         
      

       


    })


    },[tx])


    function clikCategorias(param){

        if(param === 'acessorios'){

               setTx('acessorios de celular')
               setBtnActive('acessorios')
               return;
        }

        if(param === 'cabos'){

             setTx('cabos para celular')
             setBtnActive('cabos')
             return;
            
        }
        
        if(param === 'peliculas'){

             setTx('peliulas de celular')
             setBtnActive('peliculas')
        }

        if(param === 'capas'){

             setTx('capas de celular')
             setBtnActive('capas')
             return;
        }

        if(param === 'fontes'){

            setTx('fontes para celular')
            setBtnActive('fontes')
            return;
        }
    }




    return(


       <section id='idacessorios' className={estiloAcess.boxAcessorios}>

                <h1>Acessórios</h1>

                <div className={estiloAcess.categorias}>

                    <button style={btnActive === 'acessorios' ? {backgroundColor:'#05E5FA'} : null }  onClick={()=>clikCategorias('acessorios')} type="button">Acessórios</button>
                    <button style={btnActive === 'cabos' ? {backgroundColor:'#05E5FA'} : null }   onClick={()=>clikCategorias('cabos')} type="button">Cabos</button>
                    <button style={btnActive === 'peliculas' ? {backgroundColor:'#05E5FA'} : null }   onClick={()=>clikCategorias('peliculas')} type="button">Películas</button>
                    <button style={btnActive === 'capas' ? {backgroundColor:'#05E5FA'} : null }   onClick={()=>clikCategorias('capas')} type="button">Capas</button>
                    <button style={btnActive === 'fontes' ? {backgroundColor:'#05E5FA'} : null }   onClick={()=>clikCategorias('fontes')} type="button">Fonte</button>

                </div>


              

              
                <section className={estiloAcess.boxOverFlowAcessorios}>

                    {

                        load ? (

                            <div className={estiloAcess.boxLoad}>

                                <h1>carregando...</h1>

                            </div>

                        ):(

                            <Swiper
                            spaceBetween={20}
                            loop={true}
                            slidesPerView={4}
                            slidesPerGroup={4}
                            grabCursor={true}
                            breakpoints={{
        
                                1400:{
        
                                    slidesPerView:4,
                                    slidesPerGroup:4
                                },
        
                                1000:{
        
                                    slidesPerView:3,
                                    slidesPerGroup:4
        
                                },
        
                                730:{
        
                                    slidesPerView:2,
                                    slidesPerGroup:2
        
                                },
        
                                300:{
        
                                    slidesPerView:1,
                                    slidesPerGroup:1
        
                                }
        
                            }}
        
                            
        
                            
                            
                            >
        
                                    {
        
                                        arrayAcessorios.map((produto)=>{
        
                                            return(
        
                                                <SwiperSlide key={produto.id}>
                                                    
                                                <div className={estiloAcess.cardAcessorios}>
                                                         
                                                         <h1>{produto.title.slice(0, 15)}</h1>
                                                
                                                    <div className={estiloAcess.boxImage}>
                                                        <Image className={estiloAcess.img} alt={produto.title} width={1000} height={1000} quality={100} src={produto.thumbnail.replace( /\.(jpg|jpeg|png|gif|bmp|webp|tiff)/i, "W$&")}  />
                                                    </div>
        
                                                    <p>{dinheiro(produto.price , 'BRL')}</p>
                                                    <p>{produto.title}</p>
        
                                                </div>
                                                </SwiperSlide>
        
        
                                            )
        
                                        })
                                    }
        
                            </Swiper>
        

                        )


                    }


                </section>
       </section>
        


    )
}


