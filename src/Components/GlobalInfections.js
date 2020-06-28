import React from 'react'

function GlobalInfections(props) {
  const {infected} = props;
  return (
    <>
        <div className="col-lg my-3 card totalData animated bounce infinte">
                <div className="card-body">
                <h4 className="card-title">Total Infected</h4>
                <p className="card-text">{infected} </p>
                </div>
            </div>
            </>
  )
}

export default GlobalInfections
