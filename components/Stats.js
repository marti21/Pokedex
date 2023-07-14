export default function Stats({props}) {
    return(
    <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Belanosima"></link>
        <div className="content">
            <div className="title"><h3>BASE STATS (LVL50)</h3></div>
            <div className="grid">
                <div className="one"><p>HP: {props.stats[0].base_stat}</p></div>
                <div className="one"><p>ATTACK: {props.stats[1].base_stat}</p></div>
                <div className="one"><p>DEFENSE: {props.stats[2].base_stat}</p></div>
                <div className="one"><p>SPECIAL ATTACK: {props.stats[3].base_stat}</p></div>
                <div className="one"><p>SPECIAL DEFENSE: {props.stats[4].base_stat}</p></div>
                <div className="one"><p>SPEED: {props.stats[5].base_stat}</p></div>
            </div>
        </div>
        

        <style jsx>
        {`
            .grid{
                display: flex;
                gap: 5px;
                /*grid-template-columns: repeat(2, 3fr);*/
                /*grid-template-columns: repeat(2, 10em);*/
                font-size: 13px;
                flex-direction: row;
                width: 30em;
                flex-wrap: wrap;
                justify-content: center;
                padding: 8px 8px;
            }
            .one {
                display: flex;
                width: 14em;
                border: 1px solid grey;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
            }
            .content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-family: 'Belanosima';
            }
            .title {
                display: flex;
                border-radius: 4px;
                justify-content: center;
                width: 91%;
                border: 1px solid grey;
                font-size: 13px;
            }
        `}
        </style>

    </>)
}