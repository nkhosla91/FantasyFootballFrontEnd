import React from 'react'


const NavBar = (props) => {

            return (
                <div className="navButtons">
                    <header className="header">
                        <h1 className="logo"><a href="#">Fantasy Tracker</a></h1>
                            <ul className="main-nav">
                                <li><a href="#" onClick={props.handleNavBar} name="See All Your Teams">See All Your Teams</a></li>
                                <li><a href="#" onClick={props.handleNavBar} name="Create a New Team">Create a New Team</a></li>
                                <li><a href="#" onClick={props.handleNavBar} name="Compare Teams">Compare Teams</a></li>
                                <li><a href="#" onClick={props.handleNavBar} name="Edit Teams">Edit Teams</a></li>
                            </ul>
                    </header>
                </div>
            )//end of return
                                        
}

export default NavBar