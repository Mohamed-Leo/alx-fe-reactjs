import { Link } from "react-router-dom"


function Navbar() {
    return (
        <nav style={{backgroundColor : "#57606f", display : "flex", justifyContent : "center"}}>
            <Link style={{padding : '10px'}} to={"/"}>
                home
            </Link>
            <Link style={{padding : '10px'}} to={"services"}>
                services
            </Link>
            <Link style={{padding : '10px'}} to={"about"}>
                about
            </Link>
            <Link style={{padding : '10px'}}to={"contact"}>
                contact
            </Link>
        </nav>
    )
}

export default Navbar;