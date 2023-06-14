import React from 'react'
import PropTypes from 'prop-types'

function NewsItems(props) {
  return (
    // <div>News Cards here</div>
    <>
      <div className="card" style={{width: "100%", margin: "auto",}}>
        <img src={props.imageURL? props.imageURL:"https://cdn.ndtv.com/common/images/ogndtv.png"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title?props.title:"..."}</h5>
            <p>{props.description?props.description:"..."}</p>
            <p className='card-text'><small className='text-muted'>By: {props.author?props.author:"anonymous"} <br/>At: {props.publishedDate}</small></p>
          </div>
          <div className="card-footer text-center">
          <a href={props.newsURL?props.newsURL:"/"} target="_blank" rel='noopener noreferrer' className="btn btn-dark" style={{width: "80%"}}>Read More...</a>            
          </div>
      </div>
    </>
  )
}

NewsItems.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.any,
  imageURL: PropTypes.string,
  newsURL: PropTypes.string.isRequired,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
}

NewsItems.defaultProps = {
  title: "Title here",
  description: "News description",
  author: "abc News",
}

export default NewsItems
