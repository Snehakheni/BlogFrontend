import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <Link to={ "/" }>
                        Logo
                    </Link>
                </div>
                <ul>
                    <li> <Link to={ "/" }>
                        Home
                    </Link></li>
                    <li>
                        <Link to={ "/about" }>
                            About US
                        </Link>
                    </li>
                    <li>
                        <Link to={ "/services" }>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to={ "/addblog" }>
                            + Add
                        </Link>
                    </li>
                    <li>
                        <Link to={ "/list" }>
                            List
                        </Link>
                    </li>

                </ul>
            </nav>
        </>
    )
}

export default Navbar