import React from 'react'

function Level() {
  return (
   <>
     <div className="transaction-container">
   
        <h2>Get Level</h2>
    
      	

        <table className="table  transaction-table" id="data-table5" style={{color:"#ffffff"}}        >
                       <thead>
                         <tr>
                         	<th colspan="4"></th>
                            <th className="text-right"> Select Level</th>
                            <th>
                              
                                <form action="http://localhost/sky/admin/trip-offer-report">
                            <div className="input-group">
							<select className="form-control" name="id" id="selected_level" tabindex="-1" aria-hidden="true">
                                                            <option value="1">Level-1</option>
                                                            <option value="2">Level-2</option>
                                                            <option value="3">Level-3</option>
                                                            <option value="4">Level-4</option>
                                                            <option value="5">Level-5</option>
                                                            <option value="6">Level-6</option>
                                                            <option value="7">Level-7</option>
                                                            <option value="8">Level-8</option>
                                                            <option value="9">Level-9</option>
                                                            <option value="10">Level-10</option>
                                                           </select>
							
                            </div>
                        </form>
                           
                            </th>
                         </tr>
                          <tr>
                            <th>S/No.</th>
                            <th>Partner ID</th>
                            <th>Amount</th>
                            <th>From Address</th>
                            <th> Team Business</th>
                            <th>Rank</th>
                            <th>Level</th>
                            <th>Status</th>
                           
                          </tr>
                        </thead>
                        <tbody>
                          
                        </tbody>
                      </table>
    </div>

   
   </>
  )
}

export default Level