import React, { useEffect, useState } from 'react';
import { listPokemons } from '@/hooks/pokemonList';

/*ESTO ES PARA QUE SE RENDERIZE EL COMPONENTO SOLO EN EL LADO DEL CLIENTE Y QUE NO DE PROBLEMAS CON ID, ETC... */
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const customStyles = {
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'white',
    color: 'white',
    overflowY: 'auto',
    maxHeight: '300px',
    fontFamily: 'Belanosima',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'blue' : 'white',
    color: state.isSelected ? 'white' : 'black',
    paddingTop: '10px',
    marginTop: '10px',
    '&:hover': {
      backgroundColor: 'red',
      color: 'black'
    }
  })
};
  
export default function SelectComponent({ setPokemonSelected, setTimestamp }) {

    const [selectedOption, setSelectedOption] = useState(listPokemons[0]);

    useEffect(() => {
      if(selectedOption.value.toString() === "NoPokemon"){
        setTimestamp(Date.now())
      }
      else {
        setPokemonSelected(selectedOption)
      }
    },[selectedOption])

    return (
      <>
        <link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Belanosima"></link>
        <div className="container">
          <Select className='selectComponent'
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={listPokemons}
            styles={customStyles}
            /*components={{ DropdownIndicator }}*/
          />
        </div>
        <style jsx>{`
          .container {
            width: 220px;
          }
        `}
        </style>

      </>
    );
}