import Link from "next/link";
import { useEffect, useState } from "react";
import { listaColores }  from "@/hooks/colorTypePokemon";

export default function PokemonImg({ url, name }) {
    const [urlOfficialImg, setUrlOfficialImg] = useState()
    const [color1, setColor1] = useState()
    const [color2, setColor2] = useState()
    const listColors = listaColores
        
    useEffect(() => {
        const fetchImg = async() => {
            try{
                const response = await fetch(url)
                const jsonData = await response.json();
                const imgUrl = jsonData.sprites.other["official-artwork"].front_default;
                setUrlOfficialImg(imgUrl)

                const type1 = jsonData.types[0].type.name;
                setColor1(listColors[`${type1}`])

                if(jsonData.types.length > 1){
                    const type2 = jsonData.types[1].type.name;
                    setColor2(listColors[`${type2}`])
                }
                else {
                    setColor2(listColors[`${type1}`])
                }
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchImg()
    },[])
    
    return (
        <>
            <link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Belanosima"></link>
            {urlOfficialImg &&<div className="container">
                <div className="divContainer">
                    <div className="imgDiv">
                        <img className="officialImg" src={urlOfficialImg}></img>
                    </div>
                    <div className="linkDiv">
                        <Link href={`/pokemon/${name}`} style={{ textDecoration: 'none', color: 'black', }}><h2>{name}</h2></Link>
                    </div>
                </div>
            </div>}

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
                    height: 330px;
                    border: 1px solid #526D82;
                    border-radius: 5px;
                    background: linear-gradient(50deg, ${color2} 48%, ${color1} 52%);
                    -webkit-transition:  box-shadow .4s ease-out;
                    box-shadow: 6px 6px 7px grey;
                    /*background: linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);*/
                    display: flex;
                    padding: 30px;
                    justify-content: center;
                    min-width: 200px;
                    
                    /*Para que se ponga debajo del nav que tiene un valor mas alto*/
                    z-index: 1;
                }      
                .container:hover{
                    /*background: white;*/
                    cursor:pointer;
                    box-shadow: 15px 10px 1em grey;
                    -webkit-transition:  transform 0.2s ease-out;
                    transform: scale(1.05);
                }
                .linkDiv{
                    height: fit-content;
                    justify-content: center;
                    display: flex;
                    margin-top: 20px;
                }
                .imgDiv {
                    display: block;
                    margin-top: 15px;
                }
                .divContainer {
                    display: block;
                }

                .linkDiv h2 {
                    font-family: 'Belanosima', serif;
                }

                `}
            </style>
        </>
      );
}