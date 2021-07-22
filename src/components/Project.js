import React from 'react'

function Project({user}) {
    return (
        <div className="container">

          <div className="card">
        <img
          className="card-img-top"
          src={`${user.image}`}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">{`${user.title}`}</h5>
        </div>
      </div>
    </div>
    )
}

export default Project
