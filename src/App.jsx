
import './App.scss';
import Card from './Main/Card/Card'
import Search from './Navbar/Search/Search'
import { useEffect, useState } from 'react';
// import { searchValue } from './Navbar/Search/Search';

const App =() => {

  const [dataArr, setData] = useState(null);
  const [searchValue, setValue] = useState("");
  // const [filteredCards, setCards] = useState(null);
  
  
  useEffect(() => {
    const fetchData = async () => {
       const res = await fetch("https://api.punkapi.com/v2/beers");
      
       const json = await res.json();

       setData(json)
    }
    fetchData()
    
  }, []);
 

  

  return (
   <>
    <div className='navBody'>
      {dataArr && <Search data={dataArr} searchValue={searchValue} setValue={setValue}></Search>}
    </div>
    <div className='cardBody'>
      {dataArr && <Card data={dataArr} searchValue={searchValue}/>}
    </div>
   </>
  );
}

export default App;
