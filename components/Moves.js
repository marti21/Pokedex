export default function Moves({props}){
    const movesList = props.moves
    console.log(movesList)

    return(
    <>
        {movesList.map((results) => (
            <h1 key={results.move.name}>{results.move.name}</h1>
        ))}
    </>)
}