import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
  <>
    <section className="e ca ci di">
      <div className="a">
        <div className="ja qb _d">
          <div className="jc ng">
            <div className="wow fadeInUp la cd pe re gf kf mg yk gl vm" data-wow-delay="0s" style={{
  fontFamily: "math",
  letterSpacing: "1px",
  background: "linear-gradient(45deg, #103514, #1a3216)"
}}>
              <h3 className="va fi mi pi yi vl gn" >
              Login to your account
              </h3>
              <p className="lb fi ii qi _i">
              </p>
              <input name="baseurl" id="baseurl" type="HIDDEN" value="index.html"/>
              <div className="ta">
                <button id="button" className="zq qb jc be de oe of rg jh ii qi zi rj sj tj jk" onclick="logintoaccount()" style={{ borderRadius: "9px", backgroundColor: "#d0ab56" }}>
                WALLET AUTHORIZATION
                </button>
              </div>
              <p className="fi ii qi xi ul">
                Don't have an account?
                <Link to="/register" className="bj mk">
                  Create Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

    
  </section>
  
  </>
  )
}

export default Login