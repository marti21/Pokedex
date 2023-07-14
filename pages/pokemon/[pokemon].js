import Abilities from "@/components/Abilities";
import Moves from "@/components/Moves";
import Navigation from "@/components/Navigation";
import PokemonProfile from "@/components/PokemonProfile";
import Stats from "@/components/Stats";
import TypeGrid from "@/components/TypeGrid";
import useUser from "@/hooks/useUser";

export default function Pokemon (props) {
    const user = useUser()
    console.log(props)

    return (
    <>
        <link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Belanosima"></link>
        <Navigation></Navigation>
        <main>
            <div className="titlePokemon"><h1>{props.name}</h1></div>
            <div className="gridStats">
                <PokemonProfile props={props}></PokemonProfile>
                <Stats props={props}></Stats>
            </div>
            <div className="gridTypes">
                <Abilities props={props}></Abilities>
            </div>
            <div>
                <Moves props={props}></Moves>
            </div>
        </main>

        <style jsx>{`
            .titlePokemon {
                padding-top: 110px;
                display: flex;
                justify-content:center;
                font-family: 'Belanosima';
                font-size: 25px;
            }
            .gridStats {
                padding-top: 30px;
                justify-content: center;
                align-items: center;
                display: flex;
                width: 100%;
                flex-wrap: wrap;
                gap: 100px;
            }
            .gridTypes {    
                /*background: blue;*/
                display: flex;
                justify-content: center;
                padding-top: 2em;
                gap: 50px;
                flex-wrap: wrap;
                flex-direction: row;
            }
            img {
                width: 20em;
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
