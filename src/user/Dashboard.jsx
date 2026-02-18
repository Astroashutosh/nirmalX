import React from 'react'
import Header from '../components/user/Header'

function Dashboard() {
  return (
  <>
  
<Header/>

    <div className="markets-capital pt20 pb40">
        <div className="container">
            
            <div className="wrapedStat gradient-border">
                <div className="row">
                    <div className="col-md-6">
                        <div className="grid-container">   
                            <div className="grid-item">
                                <span>Current Balance</span>
                                <br/>
                                <b className="fs-20 available_balance">Loading..</b>
                                <br/>
                                <b className="fs-10 available_balance_nrx">Loading..</b>
                            </div>                         
                            <div className="grid-item">
                                <span>Total Earning</span>
                                <br/>
                                <b className="fs-20 totalbalance">Loading..</b>
                                <br/>
                                <b className="fs-10 totalbalance_nrx">Loading..</b>
                            </div>
                            <div className="grid-item">
                                <span>Level Income</span>
                                <br/>
                                <b className="fs-20 totalMiningLevelIncome">Loading..</b>
                                <br/>
                                <b className="fs-10 totalMiningLevelIncome_nrx">Loading..</b>
                            </div>
                            <div className="grid-item">
                                <span>Direct Income</span>
                                <br/>
                                <b className="fs-20 totalDirectIncome">Loading..</b>
                                <br/>
                                <b className="fs-10 totalDirectIncome_nrx">Loading..</b>
                            </div>
                            <div className="grid-item">
                                <span>Rank Income</span>
                                <br/>
                                <b className="fs-20 totalRankIncome">Loading..</b>
                                <br/>
                                <b className="fs-10 totalRankIncome_nrx">Loading..</b>
                            </div>
                            <div className="grid-item rankDetails">
                                <span>Current Rank</span>
                                <br/>
                                <b className="fs-20 myRank">Loading..</b>
                            </div>
                            <div className="grid-item">
                                <span>Leader Income</span>
                                <br/>
                                <b className="fs-20 totalLeaderIncome">Loading..</b>
                                <br/>
                                <b className="fs-10 totalLeaderIncome_nrx">Loading..</b>
                            </div>
                            <div className="grid-item">
                                <span>Leadership Rank</span>
                                <br/>
                                <b className="fs-20 myLeaderRank">Loading..</b>
                            </div>
                            <div className="grid-item">
                                <span>Leadership Reward Income</span>
                                <br/>
                                <b className="fs-20 totalLeaderRewardIncome">Loading..</b>
                                <br/>
                                <b className="fs-10 totalLeaderRewardIncome_nrx">Loading..</b>
                            </div>
                            <div className="grid-item">
                                <span>Leadership Reward Rank</span>
                                <br/>
                                <b className="fs-20 leaderRewardRank">Loading..</b>
                            </div>
                       
                            <div className="grid-item">
                                <span>Total Staking Tokens</span>
                                <br/>
                                <b className="fs-20 staking_tokens">Loading..</b>
                                <br/>
                                <b className="fs-10 staking_nrx">Loading..</b>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3 className=" newFont">Earn Consistent Returns Every Day – Reliable Mining for Smarter Growth</h3>
                        <div className="row">
                         <div className="col-sm-6">
                            <div className="spaceBetween">
                                <div className="attr_text">Total Direct Referral <a href="partners.html" className=" bg nonselect" style={{ color: "#ffffff", fontSize: "10px", width: "19%" }}>View</a>:</div>
                                
                                <div className="attr_text partnerCount">-</div>
                            </div>
                            <div className="spaceBetween">
                                <div className="attr_text">Total Direct Business :</div>
                                <div className="attr_text DirectStaked">-
                                    
                                </div>
                                
                               
                            </div>
                    
                            
                         </div>

                         <div className="col-sm-6">
                            <div className="spaceBetween">
                                <div className="attr_text">Total Team Size <a href="all_level.html" className=" bg nonselect" style={{ color: "#ffffff", fontSize: "10px", width: "19%" }}>View</a>:</div>
                                <div className="attr_text myTeamCount">-</div>
                            </div>
                            <div className="spaceBetween">
                                <div className="attr_text">Total Team Business :</div>
                                <div className="attr_text totalTeambuisness">-</div>
                            </div>
                            <div className="spaceBetween">
                                <div className="attr_text">My ID :</div>
                                <div className="attr_text my_id">Loading..</div>
                            </div>
                           
                         </div>
                         <div className="col-sm-7">
                              <div className="spaceBetween">
                                <div className="attr_text" style={{fontSize: "12px"}}>Current Business :</div>
                                <div className="attr_text currentBusiness" style={{fontSize: "12px"}}>-</div>
                              </div>
                          </div>
                        </div>
                        
                         

                        <hr/>
                        <div className="spaceBetween">
                            <input className="baseInput referral-link refWidth " readonly=""/>
                            <span className="base_btn copy_ref">Copy</span>
                        </div>
                      
                        <div className="row">
                         <div className="col-sm-7">
                            <div className="coin-desc">
                                
                        
                            </div>
                         </div>
                        </div>

                        <hr/>
                        <div className="col-sm-12 d-flex justify-content-center">
                            <div className="coin-desc">
                                <div className="grid-container">   
                                    <div className="grid-item">
                                        

                                        <span className="fw-bold fs-5">
                                          <i className="fas fa-crown text-warning"></i> Leader's Reward
                                        </span>
                                        <br/>
                                        <b className="fs-20" id="leaders_reward">Loading...</b>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-sm-12 d-flex flex-column align-items-center justify-content-center grid-item">
                            <h3 className=" newFont"><i className="fas fa-lock locker-icon"></i> NRX Locker</h3>
                            <div className="d-flex align-items-center gap-4">
                                <h6 className="mb-0 p-2">Total NRX Locked :</h6>
                                <h6 className="mb-0 p-2 locked_nrx">Loading..</h6>
                            </div>
                            <div className="d-flex align-items-center gap-4">
                                <h6 className="mb-0 newFont">Contract Link:</h6>
                                <a className="mb-0 contract_link" target="_blank">Loading..</a>
                            </div>
                            
                            <div className="unlocks "  >
                                <a className='connect_btn unlockWallet' href="lock-history.html" style={{ textAlign: "center" }}>View</a>
                            </div>
                        </div>

                    </div>

                </div>
               
            </div>
            <div className="row"  style={{ marginTop: "45px" }}>
                <div className="col-lg-4 col-md-4">
                    <div className="farms-single-section gradient-border stakeBg" >
                        <div className="coin-desc">
                            <div className="coin-desc-left">
                                <img src="/images/logo.png" alt="NirmalX"/>
                            </div>
                            <div className="coin-desc-right newFont">
                                <h4><b id="duration0">Stake Now </b></h4>
                                <ul>
                                    <li className="bg history0 nonSelect" style={{float: "right"}}><a href="stake.html" style={{color:"#ffffff"}}>View History</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="calculat">
                         <div className="calculat-left">
                            <h6>Minimum :</h6>
                            <h6>Maximum :</h6>
                            <h6>Current Stake :</h6>
                         </div>
                         <div className="calculat-right">
                            <h6>$ 10</h6>
                            <h6>Unlimted</h6>
                            <h6 className="currentStake">Loading..</h6>
                         </div>                          
                        </div>
                        <label for="amount"style={{ marginTop: "0.5rem" }}>Select Package*</label>
                        <select id="stake_token" className="form-control" >
                            <option value="1">Staking Package</option>
                           
                        </select>
                        <label for="amount"style={{ marginTop: "0.5rem" }}>Amount*</label>
                        <input type="text" id="stake_amt"placeholder="Enter amount" className="form-control stakeAmount"/>
                        <h6 id="total_mtx" className="text mt-3"></h6>
                        <div className="unlocks" >
                            <a className="connect_btn unlockWallet" >Submit</a>
                        </div>
                        
                    </div>
                </div>


                <div className="col-lg-4 col-md-4">
                    <div className="farms-single-section gradient-border stakeBg" >
                        <div className="coin-desc">
                            <div className="coin-desc-left">
                                <img src="/images/logo.png" alt="NirmalX"/>
                            </div>
                            <div className="coin-desc-right newFont">
                                <h4><b id="duration0">ROI</b></h4>
                                <ul>
                                    <li className="bg history0 nonSelect" style={{float: "right"}}><a href="staking_calu.html" style={{color:"#ffffff"}}>View History</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="calculat">
                         <div className="calculat-left">
                            <h6>Total ROI :</h6>
                            <h6>Total Capital Return :</h6>
                         </div>
                         <div className="calculat-right">
                            <h6 className="totalROI">Loading..</h6>
                            <h6 className="totalCapitalReturn">Loading..</h6>
                         </div>  
                         
                         
                        </div>
                       
                        <div className="form-control stakeAmount" style={{ background: "none", border: "none" }}></div>
                      
                        <div className="unlocks "  style={{ marginTop: "9.9rem" }} id="mine_now">
                            <a className='connect_btn unlockWallet' id="calculate_roi_btn" style={{textAalign: "center"}}>Calculate ROI</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="farms-single-section gradient-border stakeBg" >
                        <div className="coin-desc">
                            <div className="coin-desc-left">
                                <img src="/images/logo.png" alt="NirmalX"/>
                            </div>
                            <div className="coin-desc-right newFont">
                                <h4><b id="duration0">Withdraw</b></h4>
                                <ul>
                                    <li className="bg history0 nonSelect" style={{float: "right"}}><a href="withdraw.html" style={{color:"#ffffff"}}>View History</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="calculat">
                         <div className="calculat-left">
                            
                            <h6>Withdrawable Amount:</h6>
                            <h6>Total Withdraw :</h6>

                         </div>
                         <div className="calculat-right">
                            
                            <h6 className="withdrawable_amount">Loading..</h6>
                            <h6 className="total_withdraw">Loading..</h6>
                         </div>
                        </div>
                     
                        <label for="amount" style={{marginTop:"7rem"}}>Amount*</label>
                        <input type="text" id="withdraw_amt"placeholder="Enter amount" className="form-control withdrawAmount" onkeyup="show_price('withdraw',this)"/>
                        <h6 id="total_bbt" className="text mt-3"></h6>
                       
                        <div className="unlocks " >
                            <a className='connect_btn unlockWallet' id="withdraw_btn"  style={{ textAlign: "center" }}> Withdraw </a>
                        </div>
                    </div>
                </div>
              
                    
                </div>
            </div>
        </div>


        {/* </div> */}
    {/* </div> */}

      <div id="Error" className="zoom-anim-dialog mfp-hide modal textBlack">
        <button className="modal__close" type="button" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z">
                </path>
            </svg>
        </button>
        <span className="modal__text" id="val_err"></span>
    </div>



  </>
  )
}

export default Dashboard