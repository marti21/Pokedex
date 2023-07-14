import TypeGrid from "./TypeGrid";

export default function PokemonProfile({props}) {
    return (
    <>
        <div>
            <img src={props.sprites.other['official-artwork'].front_default}></img>
            <TypeGrid props={props}></TypeGrid>
        </div>

        <style jsx>
        {`
            img {
                width: 20em;
                border: 1px solid grey;
                border-radius: 5px;
            }
            div {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center; 
                gap: 20px;
                width: fit-content;
            }
        `}
        </style>
    </>)
}