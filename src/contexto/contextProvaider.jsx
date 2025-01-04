'use client'
import { context } from "./context"
import React , {useState , useEffect} from "react"

export default function ContextProvaider({children}){


    const [animaLogin , setAnimaLogin] = useState(true)
    const [animaCadastro,setAnimaCadastro] = useState(false)
    const[corLogin , setCorLogin] = useState(undefined)
    const[inputPesquisa , setInputPesquisa] = useState('')
    const [arrayML , setArrayML] = useState([])
    const [carrinho , setCarrinho] = useState([])
    const [modal , setModal] = useState(false)
    const [mostrarCard , setMostrarCard] = useState(false)




    const value = {

       animaCadastro,
       animaLogin,
       setAnimaCadastro,
       setAnimaLogin,
       corLogin,
       setCorLogin,
       inputPesquisa,
       setInputPesquisa,
       arrayML,
       setArrayML,
      modal,
      addCarrinho,
      carrinho,
      setModal,
      removeItemCarrinho,
      mostrarCard,
      setMostrarCard,
      incrementarItem
    }
        


  

    function addCarrinho(itemCarrinhoInical){


     

   
      setCarrinho((carrinho)=>{


            const itemCarrinho = carrinho.find((produtos)=> produtos.id === itemCarrinhoInical.id)

            if(itemCarrinho){

               return(

                  carrinho.map((produtos)=>{

                     if(produtos.id === itemCarrinhoInical.id){


                        return{

                              ...produtos,
                              count:produtos.count + 1
                        }
                     }


                     return produtos;

                  })


               )


            }else{

                  if(itemCarrinhoInical.count === 0){

                     return [
                        ...carrinho,
                        {...itemCarrinhoInical , count:1}
                     ]

                  }else{


                    return[...carrinho]
                  }



            }
         
      })





   }



            
            
   function removeItemCarrinho(id){


      const filtrado = carrinho.filter((item)=> item.id !== id)


        setCarrinho(filtrado)

   }

      

   function incrementarItem(id , acao){

         setCarrinho((carrinho)=>{

            return(

               carrinho.map((item)=>{

                  if(item.id === id){

                     const attCount = acao === 's' ? item.count + 1 : item.count === 0 ? 0 : item.count - 1

                     return {...item , count:attCount}

                  }


                  return item

               })


            )


         })


   }

        




    


    return(

       <context.Provider
        
       value={value}
       
       >

                {children}

       </context.Provider>

    )

}