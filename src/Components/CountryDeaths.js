import React, {useContext} from 'react';
import {CountryContext} from './CountryStats';


function CountryDeaths(props) {
    const {state} = useContext(CountryContext)
  return (
    <>
      <div className="col-lg-3 mx-3 my-1 card CountryTotalData">
                <div className="card-body">
                <h4 className="card-title">Deaths</h4>
                <p className="card-text">{state.TotalDeaths}</p>
                </div>
            </div>
    </>
  )
}

export default CountryDeaths
