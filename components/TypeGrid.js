export default function TypeGrid({props}) {
    return(
    <>
        <div className="grid">
            <div className="one"><p>TYPE:</p></div>
            <div className="two"><p>{props.types[0].type.name}</p></div>
            <div className="third"><p>{props.types.length > 1 && props.types[1].type.name}</p></div>
        </div>

        <style jsx>
        {`
            .grid {
                display: flex;
            }
            .one {
                padding-right: 40px;
            }
            .two {
                padding-right: 40px;
            }
        `}
        </style>

    </>)
}