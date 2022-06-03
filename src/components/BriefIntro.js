import React from 'react'


function BriefIntro() {
let styling={
  border : '1px solid black',
  height : '90vh',
  textAlign : 'center',
  margin : 'auto'

}


  return (

    <div style={styling}>
        <div>
            <h1 style={{fontSize : '50px' , marginTop:'70px'}}>HI</h1>
            <h2 style={{fontSize : '40px'}}>I AM LAKSHAY SHARMA</h2>
            <h4 style={{fontSize : '30px'}}>FRONT END WEB DEVELOPER</h4>
            <img src='./image/lak.png' alt="" style={{height : '220px', width :"220px", borderRadius : '50%', }}/>
        </div>
    </div>
  )
}

export default BriefIntro