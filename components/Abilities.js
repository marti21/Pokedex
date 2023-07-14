export default function Abilities({props}) {
    console.log(props.abilities)
    return (
        <>
        <div>
            <h1>ABILITY 1: {props.abilities[0].ability.name}</h1>
            <h1>{props.abilities.length > 1 && 'ABILITY 2:' + props.abilities[1].ability.name}</h1>
        </div>
        <style jsx> 
        {`
            div {
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                width: fit-content;
                font-size: 0.5em;
            }
        `}
        </style>
        </>
    )
    
}