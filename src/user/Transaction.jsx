import React from 'react'

function Transaction() {
  return (
   <>
   
       
    <div className="transaction-container">
      <div className="float-left">
        <h2>All Transactions</h2>
      </div>
   
        <table className="table  transaction-table" id="transactionsTable" style={{color:"#ffffff"}}        >
                       <thead>
                         
                          <tr>
                            <th>S/No.</th>
                            <th>From Address</th>
                         
                            <th>Date Time</th>
                            <th>Type</th>
                           
                          </tr>
                        </thead>
                        <tbody className="processing">
                          
                        </tbody>
                      </table>
                    
    </div>

   
   </>
  )
}

export default Transaction