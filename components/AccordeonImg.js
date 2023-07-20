export default function AccordionImg() {
    return(
    <>
        <div className="container">
            <div className="box"><img src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f8/latest/20200428203046/Gengar.png/800px-Gengar.png"></img></div>
            <div className="box"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/150_f2.png"></img></div>
            <div className="box"><img src="https://areajugones.sport.es/wp-content/uploads/2022/12/mega-salamence.png"></img></div>
            <div className="box"><img src="https://areajugones.sport.es/wp-content/uploads/2022/12/mega-rayquaza.png"></img></div>
            <div className="box"><img src="https://cdn.ligadegamers.com/imagenes/mega-evoluciones-de-pokemon-go-mega-charizard-x.jpg"></img></div>
        </div>

        <style jsx>
        {`
            .container{
                display: flex;
                max-width: 960px;
                gap: 1px;
            }
            .box {
                display: flex;
                flex: 1;
                transition: 0.5s;
            }

            .box img {
                transition: 0.5s;
                width:100%;
                height: 420px;
                object-fit: cover;
                filter: grayscale(0.8);
                border-radius: 5px;
            }
            .box:hover{
                flex: 7;
            }
            .box:hover img {
                filter: grayscale(0);
            }
        `}
        </style>
    </>
    )
}