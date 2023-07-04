import Link from "next/link";
import { useEffect, useState } from "react";

export default function PokemonImg({ url }) {
    const [urlOfficialImg, setUrlOfficialImg] = useState()
    const [urlUnofficialImg, setUrlUnofficialImg] = useState()
        
    useEffect(() => {
        const fetchImg = async() => {
            try{
                const response = await fetch(url)
                const jsonData = await response.json();
                const imgUrl = jsonData.sprites.other["official-artwork"].front_default;
                setUrlOfficialImg(imgUrl)
                setUrlUnofficialImg(jsonData.sprites.other["dream_world"].front_default)
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchImg()
    },[])
    
    return (
        <>
            <div className="container">
                <img className="officialImg" src={urlOfficialImg}></img>
                <img className="unnofficialImg" src={urlUnofficialImg}></img>
            </div> 

            <style jsx>{`
                .officialImg {
                    height: 230px;
                    width: 230px;
                }
                .unnofficialImg {
                    height: 230px;
                    width: 230px;
                    display: none;
                }
                .container {
                    width: fit-content;
                    height: auto;
                    border: 1px solid;
                    border-radius: 10px;
                    background: black;
                    display: flex;
                    align-items: center;
                    padding: 30px;
                    justify-content: center;
                    min-width: 200px;
                }      
                .container:hover{
                    background: white;
                    cursor:pointer;
                    animation-name: rotateCard;
                    animation-duration: 1s;
                    animation-iteration-count: 1;
                }
                .container:hover .officialImg{
                    display: none;
                }
                .container:hover .unnofficialImg{
                    display: flex;
                }

                @keyframes rotateCard {
                    0% {
                        transform: rotateX(0deg);
                    }

                    100%{
                        transform: rotateX(360deg);
                    }
                }

                `}
            </style>
        </>
      );
}