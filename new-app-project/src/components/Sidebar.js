import React from 'react'

const Sidebar = () => {
    return (
        <div className="wrapper">
            <nav className="" id="sidebar">
                <div className="sidebar-header container">
                    <h3>Bootstrap Sidebar</h3>
                </div>
                <ul className="container list-unstyled components">
                    <p>Dummy Heading</p>
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">Item</a>
                            </li>
                            <li>
                                <a href="#">Item</a>
                            </li>
                            <li>
                                <a href="#">Item</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#">Page1</a>
                            </li>
                            <li>
                                <a href="#">Page2</a>
                            </li>
                            <li>
                                <a href="#">Page3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
            <div id="content">

            </div>
            
        </div>
    )
}

export default Sidebar
