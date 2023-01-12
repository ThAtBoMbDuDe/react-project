
import './App.scss';
import Card from './Main/CardList/Card/Card'
import Search from './Navbar/Search/Search'
import { useEffect, useState } from 'react';
import Filters from './Navbar/Filter/Filters';


const App =() => {

  const [dataArr, setData] = useState(null);
  const [searchValue, setValue] = useState("");
  const [filterABV, setABV] = useState(false)
  const [filterRange, setRange] = useState(false)
  const [filterAcid, setAcid] = useState(false)
  
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
      <Filters filterABV={filterABV} setABV={setABV} filterRange={filterRange} setRange={setRange} filterAcid={filterAcid} setAcid={setAcid}></Filters>
      {dataArr && <Search data={dataArr} searchValue={searchValue} setValue={setValue}></Search>}
    </div>
    <div className='cardBody'>
      {dataArr && <Card data={dataArr} searchValue={searchValue} filterABV={filterABV} filterAcid={filterAcid}/>}
    </div>
   </>
  );
}

export default App;
