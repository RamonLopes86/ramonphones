
import { NextResponse } from "next/server";


export function middleware(request){


    const token = request.cookies.get('auth_token')


    if(!token &&  request.nextUrl.pathname === '/logado'){

            return NextResponse.redirect(new URL('/' , request.url))

    }


    if(token && request.nextUrl.pathname === '/'){

            return NextResponse.redirect(new URL('/logado' , request.url))
    }


        return NextResponse.next()

    
    }



    export const config = {


        matcher:['/'  , '/logado/:path*']
    
    };