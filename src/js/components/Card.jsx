import React from 'react'

const Card = ({ image, title, description }) => {
  return (
    <div className="card text-center"  style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={title} style={{ height: "200px", objectFit: "cover" }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  )
}

export default Card