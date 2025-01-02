import hookcontext from '@/contexto/hookcontext';
import estiloLogin from './login.module.css';


export default function Login(){

    const {animaLogin} = hookcontext()

    return(


        <form className={`${estiloLogin.formLogin} ${animaLogin ? estiloLogin.animaLoginOn : estiloLogin.animaLoginOff}`} action="">

                            <div className={estiloLogin.boxInput}>

                                <label htmlFor="idmail">E-mail</label>
                                <input autoComplete='off' type="text" name="mail" id="idmail" />

                            </div>
                            <div className={estiloLogin.boxInput}>

                                <label htmlFor="idsenha">Senha</label>
                                <input autoComplete='off' type="password" name="senha" id="idsenha" />

                            </div>

                            <div className={estiloLogin.boxCheck}>


                                <input type="checkbox" name="lembrar" id="idlembrar" />
                                <label htmlFor="idlembrar">lembrar de mim</label>


                            </div>


                            <button type='button'>Entrar</button>

                            <p>Esqueci a senha</p>

        </form>




    )


}