import { context } from "./context";
import { useContext } from "react";

export default function hookcontext(){

    const contexto = useContext(context)


    if(contexto === undefined){


       return console.log('foa de contexto')
    }


    return contexto


}