export default function Stats({props}) {
    return(
    <>
        <div className="grid">
            <div className="one"><h3>BASE STATS (LVL50)</h3></div>
            <div className="two"><p>HP: {props.stats[0].base_stat}</p></div>
            <div className="third"><p>ATTACK: {props.stats[1].base_stat}</p></div>
            <div className="four"><p>DEFENSE: {props.stats[2].base_stat}</p></div>
            <div className="five"><p>SPECIAL ATTACK: {props.stats[3].base_stat}</p></div>
            <div className="six"><p>SPECIAL DEFENSE: {props.stats[4].base_stat}</p></div>
            <div className="seven"><p>SPEED: {props.stats[5].base_stat}</p></div>
        </div>

        <style jsx>
        {`
            .grid{
                display: grid;
                gap: 5px;
                width: fit-content;
                font-size: 13px;
            }
            .one {
                grid-column: 1;
                grid-row: 1;
                padding: 1em;
            }
            .two {
                grid-column: 1 / 2;
                grid-row: 2;
                border: 1px solid;
                border-radius: 10px;
                text-align: center;
            }
            .third {
                grid-column: 2 / 2;
                grid-row: 2;
                border: 1px solid;
                border-radius: 10px;
                text-align: center;
            }
            .four{
                grid-column: 1 / 2;
                grid-row: 3;                
                border: 1px solid;
                border-radius: 10px;
                text-align: center;
            }
            .five {
                grid-column: 2 / 2;
                grid-row: 3;                
                border: 1px solid;
                border-radius: 10px;
                text-align: center;
                padding: 0 1em 0 1em;
            }
            .six {
                grid-column: 1 / 2;
                grid-row: 4;                
                border: 1px solid;
                border-radius: 10px;
                text-align: center;
            }
            .seven {
                grid-column: 2 / 2;
                grid-row: 4;                
                border: 1px solid;
                border-radius: 10px;
                text-align: center;
            }
        `}
        </style>

    </>)
}