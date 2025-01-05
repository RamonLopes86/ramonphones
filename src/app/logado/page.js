'use client'

import Header from "@/components/header/header"
import Slide from "@/components/sectionSlider/sectionSlide"
import hookcontext from "@/contexto/hookcontext"

export default function logado(){


    const {clickModalFora} = hookcontext()

    return(

        <section>

            <Header/>
            <Slide/>


        </section> 


    )

}