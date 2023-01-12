import './Filters.scss';

const Filters = () => {










  return (

  <div className='filterBar'>
    <div className="filterTitle">Filter:</div>
    <div className="listContainer">
      <div className='listItem'>
        <input type="checkbox"></input>
        <span className='something'>High ABV (greater than 6%)</span>
      </div>
      <div className='listItem'>
        <input type="checkbox"></input>
        <span className='something'>Classic Range</span>
      </div>
      <div className='listItem'>
        <input type="checkbox"></input>
        <span className='something'>Acidic (ph less than 4)</span>
      </div>
    </div>
  </div>

  )
}

export default Filters