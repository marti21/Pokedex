import Stats from "@/components/Stats";
import TypeGrid from "@/components/TypeGrid";
import { userLogout } from "@/firebase/client";
import useUser from "@/hooks/useUser";
import Link from "next/link";
import { useState } from "react";

export default function Pokemon (props) {
    const user = useUser()

    const logoutUser = () => {
        userLogout()
    }
    console.log(props)

    return (
    <>
    <header>
      <nav>
        <ul>
          <li><Link href={'/home'}>INICIO</Link></li>  
          <li><Link href={'/perfil'}>{user && user.username}</Link></li>  
          <li><Link href={'/favoritos'}>FAVORITOS</Link></li>
          <li onClick={logoutUser}><a>LOGOUT</a></li>
        </ul>  
      </nav>
    </header>
    <main>

        <div className="gridStats">
            <img src={props.sprites.other['official-artwork'].front_default}></img>
            <Stats props={props}></Stats>
        </div>
        <div className="gridTypes">
            <TypeGrid props={props}></TypeGrid>
        </div>
    </main>

    <style jsx>{`
        .gridStats {
            padding-top: 180px;
            justify-content: center;
            align-items: center;
            display: flex;
            width: 100%;
        }
        .gridTypes {
            /*background: blue;*/
            display: flex;
            justify-content: center;
            padding-top: 2em;
        }
        img {
            margin-right: 100px;
            width: 20em;
            border: 1px solid;
            border-radius: 5px;
        }
        main {
            /*background: yellow;*/
        }
    `}
    </style>
    
    </>)
}

Pokemon.getInitialProps = (context) => {
    const { query,res } = context
    const { pokemon } = query
    console.log(pokemon)

    //console.log('CONSOLA DE SERVIDOR', id)
    //console.log(context)
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(apiResponse => {
        if(apiResponse.ok){
            return apiResponse.json()
        }
        //Si no encuentra el devit a la bd o hay error lo redirigimos
        if(res){
            res.writeHead(301, { Location: "/home" }).end()
        }
    })
}
