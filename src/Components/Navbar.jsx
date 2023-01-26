import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <div className="mb-5">
        {/* <div> */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">WASAC</a> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/water-request">Water Connection Request</Link></li>
                            <li><a className="dropdown-item" href="#">Water Disconnection Report</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to="/billing">Others</Link></li>
                        </ul>
                        </li>
                        
                    </ul>
                    <div className="d-flex">
                        <Link className="btn btn-outline-primary mx-2" to="/login">Login</Link>
                        <Link className="btn btn-primary" to="/sign-up">Sign Up</Link>
                    </div>
                    </div>
                </div>
            </nav> 
        </div>
    )
}