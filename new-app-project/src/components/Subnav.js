import React from 'react'

const Subnav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" id="nav2">
                <div className="container">
                    {/* <a className="navbar-brand" href="#">Application</a> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" id="subnav-item" href="#">Item<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="subnav-item" href="#">Stuff</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="subnav-item" href="#">Things</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="subnav-item" href="#">More</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="subnav-item" href="#">This</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="subnav-item" href="#">That</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>    
            </nav>
        </div>
    )
}

export default Subnav
