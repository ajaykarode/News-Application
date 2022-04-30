import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
      let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className='my-4'>
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:0
          }}>
        <span className="badge rounded-pill badge">{source}</span>
          </div>
            <img src={!imageUrl?"https://img.etimg.com/thumb/msid-89696113,width-1070,height-580,imgsize-102506,overlay-economictimes/photo.jpg":imageUrl} className="card-img-top size" alt="..."/>
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className='btn btn-sm bd-navbar black'>Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem