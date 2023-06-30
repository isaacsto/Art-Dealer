import Navbar from "./mainpg.navabar"

function Navbar() {
    return (
        <header>
            <h3>Logo</h3>
            <nav>
                <a href="/#">Home</a>

                <button>Login</button>

                <button>Sign Up</button>
            </nav>
        </header>
    );    
}

export default Navbar;