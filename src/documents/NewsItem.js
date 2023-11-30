import React, { Component } from 'react'

export default class  extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
    <div class="card" >
  <img src={!imageUrl?"https://static.toiimg.com/thumb/msid-99644812,width-1070,height-580,imgsize-390538,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":imageUrl} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}... <span class="badge text-bg-danger">{source}</span></h5>
    <p class="card-text">{description}...</p>
    <p className='card-text'><small className='text-muted'>By {!author?"unknown":author} on {date}</small></p>
    <a href={newsUrl} target="blank" class="btn ntn-sm btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}
