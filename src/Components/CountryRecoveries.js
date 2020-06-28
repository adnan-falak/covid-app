import React, {useContext} from 'react';
import {CountryContext} from './CountryStats'


function CountryRecoveries() {
    const {state} = useContext(CountryContext)
  return (
    <>
      <div className="col-lg-3 mx-3 my-1 card CountryTotalData">
                <div className="card-body">
                <h4 className="card-title">Recovered</h4>
                <p className="card-text">{state.TotalRecovered}</p>
                </div>
            </div>
    </>
  )
}

export default CountryRecoveries
