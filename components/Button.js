export default function Button( {onClick, src, width, height} ){

    return(<>
        <button onClick={onClick}>
            <img src={src}></img>
        </button>

        <style jsx>{`
            button {
                width: ${width}px;
                height: ${height}px;
                border-radius: 50px;
                border: 0.5px dotted;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
            img {
                height: 21px;
                width: auto;
            }   
            button:hover {
                opacity: 0.75;
                background: red;
            }
        `}
        </style>
    </>)
}