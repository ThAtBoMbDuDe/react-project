import "./Card.scss";




const Card = (props) => {
  
  const {data, searchValue, filterABV, filterRange, filterAcid} = props
console.log(data)

const filteredBeer = data.filter((beer) =>{
  if(filterABV && filterAcid && beer.abv < 6 && beer.ph < 4){
    return beer
  } if(filterABV && !filterAcid && beer.abv < 6){
    return beer
  } if(filterAcid && !filterABV && beer.ph < 4){
    return beer
  } if(!filterABV && !filterAcid){
    return beer
  }
})



  const searchedCards = filteredBeer.filter((beer) => {
    if (beer.name.toLowerCase().includes(searchValue.toLowerCase())) {
      return beer
    }
  });

  
console.log(searchedCards)


  return (
    <>
    {searchedCards[0] && <div className="beerCard">
      <h1>{searchedCards[0].name}</h1>
      <h3>{searchedCards[0].tagline}</h3>
      <img src={searchedCards[0].image_url} alt='Beer Logo'></img>
      <h4>{searchedCards[0].description}</h4>
    </div>}
    {searchedCards[1] && <div className="beerCard">
      <h1>{searchedCards[1].name}</h1>
      <h3>{searchedCards[1].tagline}</h3>
      <img src={searchedCards[1].image_url} alt='Beer Logo'></img>
      <h4>{searchedCards[1].description}</h4>
    </div>}
    {searchedCards[2] && <div className="beerCard">
      <h1>{searchedCards[2].name}</h1>
      <h3>{searchedCards[2].tagline}</h3>
      <img src={searchedCards[2].image_url} alt='Beer Logo'></img>
      <h4>{searchedCards[2].description}</h4>
    </div>}
    {searchedCards[3] && <div className="beerCard">
      <h1>{searchedCards[3].name}</h1>
      <h3>{searchedCards[3].tagline}</h3>
      <img src={searchedCards[3].image_url} alt='Beer Logo'></img>
      <h4>{searchedCards[3].description}</h4>
    </div>}
    {searchedCards[4] && <div className="beerCard">
      <h1>{searchedCards[4].name}</h1>
      <h3>{searchedCards[4].tagline}</h3>
      <img src={searchedCards[4].image_url} alt='Beer Logo'></img>
      <h4>{searchedCards[4].description}</h4>
    </div>}
    {searchedCards[5] && <div className="beerCard">
      <h1>{searchedCards[5].name}</h1>
      <h3>{searchedCards[5].tagline}</h3>
      <img src={searchedCards[5].image_url} alt='Beer Logo'></img>
      <h4>{searchedCards[5].description}</h4>
    </div>}


    </>
  )
}

export default Card