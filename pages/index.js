import Button from "@/components/Button"
import { loginWithGitHub, loginWithGoogle } from "@/firebase/client"
import useUser from "@/hooks/useUser"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Home()  {
    const user = useUser()
    const router = useRouter()
    const [urls, setUrls] = useState()
    const [img, setImg] = useState()

    useEffect(() => {
        user && router.replace('/home')
    },[user])
        
    const handleButtonGoogleLogin = () => {
        loginWithGoogle()
    }

    const handleButtonGitHubLogin = () => {
        loginWithGitHub()
    }

    const setImageFunction = async(results) => {
        const randomNumber = Math.floor(Math.random() * results.length);
        const pokemon = results[randomNumber];
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonJson = await pokemonResponse.json();
        setImg(pokemonJson.sprites.other['official-artwork'].front_default);
    }

    useEffect(() => {
        const fetchAllImg = async() => {
            try{
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=&offset=0');
                const json = await response.json()
                if(json.results.length > 0){
                    setUrls(json.results)
                    setImageFunction(json.results)
                }
            }
            catch (error){
                console.log(error)
            }
        }
        fetchAllImg()
    },[])

    useEffect(() => {
        const fetchRandomImg = async() => {
            if(urls && urls.length > 0){
                setImageFunction(urls)
            }
        }

        const intervalId = setInterval(fetchRandomImg, 3500);
        return () => clearInterval(intervalId);
    },[urls])

    return (
    <>
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Caprasimo"></link>
        <div className="container">
            <div className="divTitle">
                <h1>PAGINA PRINCIPAL</h1> 
            </div>
            <div className="imgDiv">
                <img src={img} alt="imagen" />
            </div>

            <div className="divPokeballImg">
                <img className="pokeballImg" src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-transparent-png-2.png"></img>
            </div>
    
            <div className="footerDiv">
                <Button onClick={handleButtonGoogleLogin} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" />
                <Button onClick={handleButtonGitHubLogin} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
            </div>
        </div>

    <style jsx>{`
        .container {
            margin: 0;
            padding: 0;
            border-radius: 30px;
            margin: 3em 7em 3em 7em;
            height: 50em;
            position:relative;
            box-shadow: 30px 30px 5em;
            border: 2px solid;
        }
        .divTitle {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 50px;
        }
        .imgDiv {
            justify-content: center;
            align-items: center;
            display: flex;
            padding-top: 4em;
        }
        .footerDiv {
            display: flex;
            padding: 10px 0;
            margin-top: auto;
            bottom: 0;
            left: 0;
            position: absolute;
            width: 100%;
            padding-bottom: 4em;
            justify-content: center;
            margin-bottom: 2em;
        }
        .divPokeballImg {
            margin-top: auto;
            display: flex;
            width: 100%;
            bottom: 0;
            left: 0;
            position: absolute;
            width: 100%;
            padding: 1em;
        }
        .pokeballImg{
            width: auto;
            height: 4em;
            animation-name: desplazamientoPokeball;
            animation-duration: 8s;
            animation-iteration-count: infinite;
        }
        img {
            width: auto;
            height: 320px;
        }
        h1{
            font-family: 'Caprasimo', serif;
        }

        @keyframes desplazamientoPokeball {
            0% {
                transform: translate(0px) rotate(0deg);
            }

            50% {
                transform: translate(5em) rotate(360deg);
            }

            100% {
                transform: translate(0px) rotate(0deg);
            }
        }

    `}</style>
    </>
    )
}

