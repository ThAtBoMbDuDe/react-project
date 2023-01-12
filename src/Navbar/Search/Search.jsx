import './Search.scss';



const Search = (props) => {
 
  const {data, searchValue, setValue} = props
  
 

  

  const updateValue = (event) => {
    setValue(event.target.value)
  };


  const beerNames = data.map((beer) => {
    return beer.name
  });



  const filteredNames = beerNames.filter((beer) => {
    return beer.includes(searchValue)
  });




  return (
    <div className='searchBar'>
      <div className='dropDown'>
      </div>
      <input type='text' value={searchValue} onChange={updateValue} className='dropDownEvent' placeholder="Search Beers..."></input>
      <button className='searchButton'>1. {filteredNames[0]}</button>
    </div>
  )
}


export default Search