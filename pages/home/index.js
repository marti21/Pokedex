import Grid from "@/components/Grid";
import PokemonImg from "@/components/PokemonImg";
import { userLogout } from "@/firebase/client";
import useUser from "@/hooks/useUser";
import Link from "next/link";
import { useEffect, useState } from "react";
import LastButton from "@/components/LastButton";
import NextButton from "@/components/NextButton";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
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
    }, [user,offset,limit])
    
    const logoutUser = () => {
      userLogout()
    }

    const hendleNextImgs = () =>{
      if(offset != 1500){
        const newOffset = parseInt(offset, 10) + parseInt(limit, 10);
        console.log(newOffset)
        setOffset(newOffset)
      }
    }

    const hendleBackImgs = () =>{
      if(offset != 0){
        let newOffset = parseInt(offset, 10) - parseInt(limit, 10);
        if(newOffset < 0){
          newOffset = 0
        }
        console.log(newOffset)
        setOffset(newOffset)
      }
    }

    const handleButtonChangeLimit = (event) => {
      const newLlimit = event.target.value;
      setLimit(newLlimit)
    }

  return (
    <>
    <main>
      <nav>
        <ul>
          <li><Link href={'/home'}>INICIO</Link></li>  
          <li><Link href={'/perfil'}>{user && user.username}</Link></li>  
          <li><Link href={'/favoritos'}>FAVOITOS</Link></li>
          <li onClick={logoutUser}><a>LOGOUT</a></li>
        </ul>  
      </nav>

      <div className="clear"></div>

      <div className="inputDiv"><h5>Limit: </h5><input onChange={handleButtonChangeLimit}></input></div>

      <div className="pageButtons">
        {offset > 0 && <div className="buttons"><LastButton onClick={hendleBackImgs} /></div>}
        <div className="buttons"><NextButton onClick={hendleNextImgs} /></div>        
      </div>
      
      <div className="content-section">
          {data.map((results) => (
            <div className="pokemonCard" key={results.name} >
              <Grid name={results.name}></Grid>
              <PokemonImg url={results.url}></PokemonImg>
            </div>
          ))}
      </div>
    </main>
    
      <style jsx>{`
        main {

        }
        .clear {
          background: green;
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
          justify-content: center;
          margin-top: 150px;
          align-items: center;
        }
        .inputDiv input {
          width: 50px;
        }
        .inputDiv h5 {
          padding-right: 10px;
        }
        `}
      </style>
    </>
  )
}
