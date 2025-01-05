'use client'
import styles from "./page.module.css";
import ContextProvaider from "@/contexto/contextProvaider";
import TelaLogin from "@/components/telaLogin/telaLogin";











export default function Home() {



  return (

    <ContextProvaider>


      <div style={{overflow:'hidden'}}>



          <TelaLogin/>
          

    
      </div>

    </ContextProvaider>




  );
}
