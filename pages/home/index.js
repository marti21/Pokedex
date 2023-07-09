import PokemonImg from "@/components/PokemonImg";
import { userLogout } from "@/firebase/client";
import useUser from "@/hooks/useUser";
import Link from "next/link";
import { useEffect, useState } from "react";
import LastButton from "@/components/LastButton";
import NextButton from "@/components/NextButton";
import { listPokemons } from "@/hooks/pokemonList";
import SelectComponent from "@/components/SelectComponent";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [pokemonSelected, setPokemonSelected] = useState()
  const [timestamp, setTimestamp] = useState()
  const user = useUser()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit='+ limit +'&offset=' + offset)
            const jsonData = await response.json()
            setData(jsonData.results)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
  
        if(user){
          fetchData();
        }
    }, [user,offset,limit,timestamp])

    useEffect(() => {
      if(user && pokemonSelected){
        console.log(pokemonSelected.value)
        const newPokemonSelected = pokemonSelected.value.toString().toLowerCase()

        try {
          const url = 'https://pokeapi.co/api/v2/pokemon/' + newPokemonSelected + '/';
          const newData = {
            name: newPokemonSelected,
            url: url
          }
          const listaArrays = [
            newData
          ];
          setData(listaArrays)
        }
        catch(error) {
          console.log(error)
        }
      }
    }, [pokemonSelected])
    
    const logoutUser = () => {
      userLogout()
    }

    const hendleNextImgs = () =>{
      if(offset != 1500){
        const newOffset = parseInt(offset, 10) + parseInt(limit, 10);
        setOffset(newOffset)
      }
    }

    const hendleBackImgs = () =>{
      if(offset != 0){
        let newOffset = parseInt(offset, 10) - parseInt(limit, 10);
        if(newOffset < 0){
          newOffset = 0
        }
        setOffset(newOffset)
      }
    }

    const handleButtonChangeLimit = (event) => {
      let newLlimit = event.target.value;
      if(newLlimit === ""){
        newLlimit = "10"
      }
      setLimit(newLlimit)
    }

  return (
    <>
    <link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Belanosima"></link>
    <header>
      <nav>
        <ul>
          <li><Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Belanosima' }} href={'/home'}>INICIO</Link></li>  
          <li><Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Belanosima' }} href={'/perfil'}>{user && user.username}</Link></li>  
          <li><Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Belanosima' }} href={'/favoritos'}>FAVORITOS</Link></li>
          <li onClick={logoutUser}><a>LOGOUT</a></li>
        </ul>  
      </nav>
    </header>

    <main>

      <div className="clear"></div>

      <div className="divTitleImg">
        <img className="titleImg" src="https://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png"></img>
      </div>

      <div className="inputsContent">
        
        <div className="selectContainer"><SelectComponent setPokemonSelected={setPokemonSelected} setTimestamp={setTimestamp}></SelectComponent></div>

        <div className="inputDiv"><h5>Limit: </h5><input onChange={handleButtonChangeLimit}></input></div>

        <div className="pageButtons">
          {offset > 0 && <div className="buttons"><LastButton onClick={hendleBackImgs} /></div>}
          <div className="buttons"><NextButton onClick={hendleNextImgs} /></div>        
        </div>
      </div>
        
      <div className="content-section">
          {data.map((results) => (
            <div className="pokemonCard" key={results.name} >
              <PokemonImg url={results.url} name={results.name}></PokemonImg>
            </div>
          ))}
      </div>
    </main>
    
      <style jsx>{`
        main {
        }
        .titleImg {
          width: 650px;
          height: auto;
        }
        .divTitleImg {
          display: flex;
          margin: 150px 0 0px 0;
          justify-content: center;
        }
        .clear {
          height: 1px;
        }
        .content-section {
          display: inline-block;
          display: flex;
          flex-wrap :wrap;
          justify-content: center;
          margin-bottom: 100px;
        }
        .pokemonCard {
          padding: 5px;
          padding: 20px;
          width: fit-content;
        }
        .pageButtons {
          display: flex;
          height: 100px;
          justify-content: center;
          align-items: center;
        }
        .buttons {
          cursor: pointer;
          margin: 10px;
          border: 1px solid;
          border-radius: 10px;
          background: #0079FF;
        }
        .inputDiv {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-right: 100px;
        }
        .inputDiv input {
          width: 50px;
        }
        .inputDiv h5 {
          padding-right: 10px;
        }
        .inputsContent {
          display: flex;
          justify-content: center;
        }
        .listPokemon {
          width: 100%;
          background: red;
        }
        .selectContainer {
          display: flex;
          align-items: center;
          margin-right: 50px;
        }

        `}
      </style>
    </>
  )
}
