import Link from "next/link"
export default function notFound(){

    const style = {

        backgroundColor:'black',
        minHeight:'100vh',
        color:'white',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        fontFamily:'var(--mon)'


    }


    const styleDiv={

        textAlign:"center",
        padding:"10px 5px"
    }

    const linkStyle = {

        color:'white',
        display:'block',
        padding:"10px",
        textDecoration:'underline 2px solid white'
    }



    return(

        <section style={style}>

                <div style={styleDiv}>
                    <h1>Página nao encontrada</h1>
                    <p>404</p>
                    <Link style={linkStyle} href={'/logado'}>voltar</Link>

                </div>


        </section>

    )
}