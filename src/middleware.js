

import { NextResponse } from "next/server";


export function middleware(request){


    const token = request.cookies.get('auth_token')

    const token_comp = request.cookies.get('auth_token_comp')


    if(!token &&  request.nextUrl.pathname === '/logado'){

            return NextResponse.redirect(new URL('/' , request.url))

    }


    if(token && request.nextUrl.pathname === '/'){

            return NextResponse.redirect(new URL('/logado' , request.url))
    }


    if(token_comp && request.nextUrl.pathname === '/logado' || token_comp && request.nextUrl.pathname === '/'){

            return NextResponse.redirect(new URL('/comprar' , request.url))
    }


    if(!token_comp && request.nextUrl.pathname === '/comprar'){

        return NextResponse.redirect(new URL('/' , request.url))
    }



        return NextResponse.next()

    
    }



    export const config = {


        matcher:['/'  , '/logado/:path*' , '/comprar/:path*' ]
    
    };