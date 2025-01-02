'use client'
import { context } from "./context"
import React , {useState , useEffect} from "react"

export default function ContextProvaider({children}){


    const [animaLogin , setAnimaLogin] = useState(true)
    const [animaCadastro,setAnimaCadastro] = useState(false)
    const[corLogin , setCorLogin] = useState(undefined)



    const value = {

       animaCadastro,
       animaLogin,
       setAnimaCadastro,
       setAnimaLogin,
       corLogin,
       setCorLogin
    }
        




    return(

       <context.Provider
        
       value={value}
       
       >

                {children}

       </context.Provider>

    )

}