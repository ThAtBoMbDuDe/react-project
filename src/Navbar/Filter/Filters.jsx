import './Filters.scss';

const Filters = (props) => {

  const { filterABV, setABV, filterRange, setRange, filterAcid, setAcid} = props


  const abvChange = () => {
    setABV(!filterABV)
  }

  const rangeChange = () => {
    setRange(!filterRange)
  }

  const acidChange = () => {
    setAcid(!filterAcid)
  }






  return (

  <div className='filterBar'>
    <div className="filterTitle">Filter:</div>
    <div className="listContainer">
      <div className='listItem'>
        <input type="checkbox" onChange={abvChange}></input>
        <span className='something'>High ABV</span>
      </div>
      {/* <div className='listItem'>
        <input type="checkbox" onChange={rangeChange}></input>
        <span className='something'>Classic Range</span>
      </div> */}
      <div className='listItem'>
        <input type="checkbox" onChange={acidChange}></input>
        <span className='something'>Acidic</span>
      </div>
    </div>
  </div>

  )
}

export default Filters