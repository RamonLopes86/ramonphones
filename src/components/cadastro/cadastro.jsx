import estiloSenha from './cadastro.module.css';
import hookcontext from '@/contexto/hookcontext';

export default function Senha() {

    const {animaCadastro} = hookcontext()


    return (


        <form className={`${estiloSenha.forCadastro} ${animaCadastro ? estiloSenha.animaCadastroOn : estiloSenha.animaCadastroOff} `} action="">

            <div className={estiloSenha.boxInput}>

                <label htmlFor="idnome">Nome</label>
                <input autoComplete='off' type="text" name="nome" id="idnome" />

            </div>

            <div className={estiloSenha.boxInput}>

                <label htmlFor="idcadmail">E-mail</label>
                <input autoComplete='off' type="text" name="mail" id="idcadmail" />

            </div>
            <div className={estiloSenha.boxInput}>

                <label htmlFor="idcadsenha">Senha</label>
                <input autoComplete='off' type="password" name="senha" id="idcadsenha" />

            </div>

            <div className={estiloSenha.boxInput}>

                <label htmlFor="idrepsenha">Repita Senha</label>
                <input autoComplete='off' type="password" name="repSenha" id="idrepsenha" />

            </div>

            <button type='button'>Cadastrar</button>

           

        </form>




    )

}