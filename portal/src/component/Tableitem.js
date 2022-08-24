import React, { Component } from 'react'


export class Tableitem extends Component {

  render() {
    let {title,description,imageUrl,subject} = this.props;
    return (
        <>
      <div className="my-3">
        <div className="card" style={{width:"18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text">{subject}</p>
 
  </div>
</div>
      </div>
    
      
      </>
    )
  }
}

export default Tableitem