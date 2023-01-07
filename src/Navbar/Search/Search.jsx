import './Search.scss';

const Search = (props) => {
  const dataArr = props
  
  console.log(dataArr)



  return (
    <div className='navBar'>
      <div className='dropDown'></div>
      <input type='text' className='dropDownEvent'></input>
        <div className='dropDownContent'>
          <button>Howdy</button>
          <button>There</button>
          <button>Partner</button>         
        </div>
      <button className='searchButton'>Search</button>
    </div>
  )
}

export default Search