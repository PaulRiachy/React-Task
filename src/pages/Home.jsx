import { useState } from "react";
import { useNavigate } from "react-router-dom";

import APNavbar from "../components/APNavBar";
import APAlert from "../components/APAlert";
import APParagraph from "../components/APParagraph";

function Home() {
    const navigate = useNavigate();

    const [showLogoutAlert, setShowLogoutAlert] = useState(false);

    const handleLogout = () => {
        setShowLogoutAlert(true);
    };

    const confirmLogout = () => {
        setShowLogoutAlert(false);
        navigate("/");
    };

    const cancelLogout = () => {
        setShowLogoutAlert(false);
    };

    return ( 
        <div className="home-page"> 
            <APNavbar onLogout={handleLogout} />

            <main className="home-content">
                <h1>Welcome Home!</h1>

                <APParagraph>
                    You have successfully registered and logged in.
                </APParagraph>
            </main>

            {showLogoutAlert && (
                <APAlert
                message="Are you sure you want to sign out?"
                onYes={confirmLogout}
                onNo={cancelLogout}
                />
            )}
        </div>


    );
}

export default Home;
