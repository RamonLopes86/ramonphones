'use client'
import { context } from "./context"
import React , {useState , useEffect} from "react"

export default function ContextProvaider({children}){


    const [animaLogin , setAnimaLogin] = useState(true)
    const [animaCadastro,setAnimaCadastro] = useState(false)



    const value = {

       animaCadastro,
       animaLogin,
       setAnimaCadastro,
       setAnimaLogin 
    }
        

    


    return(

       <context.Provider
        
       value={value}
       
       >

                {children}

       </context.Provider>

    )

}