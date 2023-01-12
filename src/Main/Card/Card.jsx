import "./Card.scss";




const Card = (props) => {
  
  const {data, searchValue} = props



  const filteredCards = data.filter((beer) => {
    if (beer.name.includes(searchValue)) {
      return beer
    }
  });


  return (
    <>
    <div className="beerCard">
      <h1>{filteredCards[0].name}</h1>
      <h3>{filteredCards[0].tagline}</h3>
      <img src={filteredCards[0].image_url} alt='Beer Logo'></img>
      <h4>{filteredCards[0].description}</h4>
    </div>
    {/* <div className="beerCard">
      <h1>{filteredCards[1].name}</h1>
      <h3>{filteredCards[1].tagline}</h3>
      <img src={filteredCards[1].image_url} alt='Beer Logo'></img>
      <h4>{filteredCards[1].description}</h4>
    </div>
    <div className="beerCard">
      <h1>{filteredCards[2].name}</h1>
      <h3>{filteredCards[2].tagline}</h3>
      <img src={filteredCards[2].image_url} alt='Beer Logo'></img>
      <h4>{filteredCards[2].description}</h4>
    </div>
    <div className="beerCard">
      <h1>{filteredCards[3].name}</h1>
      <h3>{filteredCards[3].tagline}</h3>
      <img src={filteredCards[3].image_url} alt='Beer Logo'></img>
      <h4>{filteredCards[3].description}</h4>
    </div>
    <div className="beerCard">
      <h1>{filteredCards[4].name}</h1>
      <h3>{filteredCards[4].tagline}</h3>
      <img src={filteredCards[4].image_url} alt='Beer Logo'></img>
      <h4>{filteredCards[4].description}</h4>
    </div>
    <div className="beerCard">
      <h1>{filteredCards[5].name}</h1>
      <h3>{filteredCards[5].tagline}</h3>
      <img src={filteredCards[5].image_url} alt='Beer Logo'></img>
      <h4>{filteredCards[5].description}</h4>
    </div> */}
    </>
  )
}

export default Card