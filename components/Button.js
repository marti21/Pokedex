export default function Button( {onClick, src} ){

    return(<>
        <button onClick={onClick}>
            <img src={src}></img>
        </button>

        <style jsx>{`
            button {
                width: 50px;
                height: 50px;
                border-radius: 99px;
                border: 0.5px dotted;
                display: flex;
                justify-content: center;
                margin: 10px;    
                align-items: center;     
            }
            img {
                height: 23px;
                width: auto;
            }   
            button:hover {
                opacity: 0.65;
            }
        `}
        </style>
    </>)
}