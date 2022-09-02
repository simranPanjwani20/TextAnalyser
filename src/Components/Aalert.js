import React from 'react'

export default function Aalert(props) {
  return (
    <div style={{height:'50px'}}>
   {props.aalert && <div className="alert alert-success alert-dismissible fade show" role="alert"> 
  <strong>{props.aalert.type}</strong>; {props.aalert.msg} 
</div>}
</div>
  )
}
// props.aalert && is like a if else statement :
// if props.aalert true then next statement will run 
// it is bcoz jsx is eventually cponvereted to js