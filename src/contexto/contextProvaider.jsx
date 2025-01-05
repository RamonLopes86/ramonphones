'use client'
import { context } from "./context"
import React , {useState , useEffect , useRef} from "react"

export default function ContextProvaider({children}){


    const [animaLogin , setAnimaLogin] = useState(true)
    const [animaCadastro,setAnimaCadastro] = useState(false)
    const[corLogin , setCorLogin] = useState(undefined)
    const[inputPesquisa , setInputPesquisa] = useState('')
    const [arrayML , setArrayML] = useState([])
    const [carrinho , setCarrinho] = useState([])
    const [modal , setModal] = useState(false)
    const [mostrarCard , setMostrarCard] = useState(false)


    const boxRef = useRef(null)
    const refModalCar = useRef(null)

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
      incrementarItem,
      boxRef,
      refModalCar,
      clickModalOut
     
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

                     const attCount = acao === 's' ? item.count + 1 : item.count <= 0 ? 0  : item.count - 1

                     return {...item , count:attCount}

                  }


                  return item

               }).filter((item)=> item.count !== 0)


            )


         })


   }

   


   const clickModalProdutos = ({target}) =>{

         
         if(boxRef.current && !boxRef.current.contains(target)){

            setMostrarCard(false)
            setInputPesquisa(atual => {

               if(atual.length >= 2){

                  return  setInputPesquisa('')
               }

               return atual;

            })
         }

      

   }

   
   const handleResize = () =>{

      if(window.innerWidth > 655){

         window.addEventListener('click' , clickModalProdutos)
      }else{

         window.removeEventListener('click' , clickModalProdutos)
      }

   }
   



   useEffect(()=>{

   
       window.addEventListener('resize' , handleResize)
      
       window.addEventListener('click' , clickModalProdutos)
       


       return ()=>{

         window.removeEventListener('click' , clickModalProdutos)
       }

   },[])
      

   function clickModalOut({target}){

      if(refModalCar.current && !refModalCar.current.contains(target)){

         setModal(false)
      }

   }
   
   

    return(

       <context.Provider
        
       value={value}
       
       >

                {children}

       </context.Provider>

    )

}