import "./Card.scss";




const Card = (props) => {
  const dataArr = props



  return (
    <>
    <div className="beerCard">
      <h1>{dataArr.data[0].name}</h1>
      <h3>{dataArr.data[0].tagline}</h3>
      <img src={dataArr.data[0].image_url} alt='Beer Logo'></img>
      <h4>{dataArr.data[0].description}</h4>
    </div>
    <div className="beerCard">
      <h1>{dataArr.data[1].name}</h1>
      <h3>{dataArr.data[1].tagline}</h3>
      <img src={dataArr.data[1].image_url} alt='Beer Logo'></img>
      <h4>{dataArr.data[1].description}</h4>
    </div>
    <div className="beerCard">
      <h1>{dataArr.data[2].name}</h1>
      <h3>{dataArr.data[2].tagline}</h3>
      <img src={dataArr.data[2].image_url} alt='Beer Logo'></img>
      <h4>{dataArr.data[3].description}</h4>
    </div>
    <div className="beerCard">
      <h1>{dataArr.data[4].name}</h1>
      <h3>{dataArr.data[4].tagline}</h3>
      <img src={dataArr.data[4].image_url} alt='Beer Logo'></img>
      <h4>{dataArr.data[4].description}</h4>
    </div>
    <div className="beerCard">
      <h1>{dataArr.data[5].name}</h1>
      <h3>{dataArr.data[5].tagline}</h3>
      <img src={dataArr.data[5].image_url} alt='Beer Logo'></img>
      <h4>{dataArr.data[5].description}</h4>
    </div>
    <div className="beerCard">
      <h1>{dataArr.data[6].name}</h1>
      <h3>{dataArr.data[6].tagline}</h3>
      <img src={dataArr.data[6].image_url} alt='Beer Logo'></img>
      <h4>{dataArr.data[6].description}</h4>
    </div>
    </>
  )
}

export default Card