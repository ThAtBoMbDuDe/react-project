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

  



  return (
    <>
    {searchedCards[0] && <div className="beerCard">
      <h2>{searchedCards[0].name}</h2>
      <h4>{searchedCards[0].tagline}</h4>
      <img src={searchedCards[0].image_url} alt='Beer Logo'></img>
      <h6>{searchedCards[0].description}</h6>
    </div>}
    {searchedCards[1] && <div className="beerCard">
      <h2>{searchedCards[1].name}</h2>
      <h4>{searchedCards[1].tagline}</h4>
      <img src={searchedCards[1].image_url} alt='Beer Logo'></img>
      <h6>{searchedCards[1].description}</h6>
    </div>}
    {searchedCards[2] && <div className="beerCard">
      <h2>{searchedCards[2].name}</h2>
      <h4>{searchedCards[2].tagline}</h4>
      <img src={searchedCards[2].image_url} alt='Beer Logo'></img>
      <h6>{searchedCards[2].description}</h6>
    </div>}
    {searchedCards[3] && <div className="beerCard">
      <h2>{searchedCards[3].name}</h2>
      <h4>{searchedCards[3].tagline}</h4>
      <img src={searchedCards[3].image_url} alt='Beer Logo'></img>
      <h6>{searchedCards[3].description}</h6>
    </div>}
    {searchedCards[4] && <div className="beerCard">
      <h2>{searchedCards[4].name}</h2>
      <h4>{searchedCards[4].tagline}</h4>
      <img src={searchedCards[4].image_url} alt='Beer Logo'></img>
      <h6>{searchedCards[4].description}</h6>
    </div>}
    {searchedCards[5] && <div className="beerCard">
      <h2>{searchedCards[5].name}</h2>
      <h4>{searchedCards[5].tagline}</h4>
      <img src={searchedCards[5].image_url} alt='Beer Logo'></img>
      <h6>{searchedCards[5].description}</h6>
    </div>}


    </>
  )
}

export default Card