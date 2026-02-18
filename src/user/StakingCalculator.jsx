import React from 'react'
import Header from '../components/user/Header'

function StakingCalculator() {
  return (
    <>
    <Header/>
    <div className="markets-capital pt20 pb40">
    <div className="container">

        <h2 align='center' style={{fontFamily: "Aquire"}}><b id="duration0">STAKING CALCULATOR</b></h2>
        <div className="row justify-content-center">



            <div className="col-lg-4 col-md-4">
                <div className="farms-single-section gradient-border stakeBg">

                    <div className='row mb-5'>
                        <div className='col-md-6 col-6' align='left'><i>Daily Capital : <span id='daily_capital'>$0</span></i></div>
                        <div className='col-md-6 col-6' align='right'><i>ROI : 1.5%</i></div>
                    </div>



                    <label for="amount">Invest Amount*</label>
                    <input type="text" id="amount" placeholder="Enter amount" className="form-control"/>

                    <label for="days" className='mt-4'>No of days*</label>
                    <input type="number" max='365' min='1' id="days" placeholder="Enter No of days" className="form-control"/>
                    <h6 id="total_bbt" className="text mt-3" align='center'></h6>

                    <div className="unlocks ">
                        <a className='connect_btn unlockWallet' id="calculate"  style={{textAlign: "center"}}> Calculate </a>
                    </div>
                </div>
            </div>


        </div>
    </div>
</div>



    </>
  )
}

export default StakingCalculator