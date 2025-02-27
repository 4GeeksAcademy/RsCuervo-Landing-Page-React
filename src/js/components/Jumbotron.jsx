import React from 'react'

const Jumbotron = () => {
    return (
        <div className="card">
            <div className="card-body" style={{backgroundColor:"rgb(233, 236, 239"}}>
                <h1 className="card-title">A Warm Welcome</h1>
                <p className="card-text">With supporting text below as a natural lead-in to additional content. 
                    Todo este contenido es de relleno, es importante que tenga mucho texto. 
                    Aca estamos haciendo un Landing Page con React.</p>
                <a href="#" className="btn btn-primary">Call to action!</a>
            </div>
        </div>
    )
}

export default Jumbotron