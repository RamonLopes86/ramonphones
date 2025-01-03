import { useEffect, useState } from 'react';
import estiloSenha from './cadastro.module.css';
import hookcontext from '@/contexto/hookcontext';


export default function Senha() {

    const {animaCadastro} = hookcontext()

    const [inputNome , setInputNome] = useState('')
    const[inputMail , setInputMail] = useState('')
    const [inputSenha , setInputSenha] = useState('')
    const[inputRepSenha , setInputRepSenha] = useState('')

    

     
 

    return (


        <form className={`${estiloSenha.forCadastro} ${animaCadastro ? estiloSenha.animaCadastroOn : estiloSenha.animaCadastroOff} `} action="">

            <div className={estiloSenha.boxInput}>

                <label htmlFor="idnome">Nome</label>
                <input value={inputNome} onChange={({target})=> setInputNome(target.value)}  autoComplete='off' type="text" name="nome" id="idnome" />

            </div>

            <div className={estiloSenha.boxInput}>

                <label htmlFor="idcadmail">E-mail</label>
                <input value={inputMail} onChange={({target})=> setInputMail(target.value)} autoComplete='off' type="text" name="mail" id="idcadmail" />

            </div>
            <div className={estiloSenha.boxInput}>

                <label htmlFor="idcadsenha">Senha</label>
                <input value={inputSenha} onChange={({target})=> setInputSenha(target.value)} autoComplete='off' type="password" name="senha" id="idcadsenha" />

            </div>

            <div className={estiloSenha.boxInput}>

                <label htmlFor="idrepsenha">Repita Senha</label>
                <input value={inputRepSenha} onChange={({target})=> setInputRepSenha(target.value)} autoComplete='off' type="password" name="repSenha" id="idrepsenha" />

            </div>


            <button  type='button'>Cadastrar</button>

           

        </form>




    )

}