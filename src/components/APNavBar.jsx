import APButton from "./APButton";

function APNavbar({ onLogout }) {
    return ( 
        <nav className="navbar"> 

            <div className="navbar-logo"> 

                <img src="/logo.svg" alt="Logo" />

                <span>React Task</span> 
                
            </div>

            <APButton onClick={onLogout}>Logout</APButton>
        </nav>
    );
}

export default APNavbar;
