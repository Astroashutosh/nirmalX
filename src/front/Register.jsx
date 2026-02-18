import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
   <>
   
      <section className="e ca ci di">
        <div className="a">
          <div className="ja qb _d">
            <div className="jc ng">
              <div className="wow fadeInUp la cd pe re gf kf mg yk gl vm" data-wow-delay="0s" style={{fontFamily: "math", letterSpacing: "1px", background: "linear-gradient(45deg, #103514, #1a3216)"}}>
                <h3 className="va fi mi pi yi vl gn">Create your account</h3>
                <p className="lb fi ii qi xi ul">  </p>
                <input name="baseurl" id="baseurl" type="HIDDEN" value="index.html"/>
                <div className="xa">
                  <input type="text" name="name" placeholder="Enter Sponcer ID" id="inviter-addr" value="" style={{borderRadius: "9px", backgroundColor: "#00800033"}} className="br cr jc oe re af if zg sg ii _i ej lj pk rk el ql" />
                </div>
                
                <div className="ta">
                  <button className="zq qb jc be de oe of rg jh ii qi zi rj sj tj jk" style={{borderRadius: "9px" ,backgroundColor: "#d0ab56 !important"}} onclick="registerNew()">SUBMIT
                  </button>
                </div>
                <p className="fi ii qi xi ul">
                  Already Member?
                  <Link to="/login" className="bj mk">
                    Login Here
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

export default Register