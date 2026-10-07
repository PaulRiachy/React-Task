import { useState } from "react";
import { useNavigate } from "react-router-dom";

import APTextBox from "../components/APTextBox";
import APButton from "../components/APButton";
import APAlert from "../components/APAlert";

function Registration() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({...previous, [name]: value,}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        setShowSuccessAlert(true);
    };

    const handleSuccessOK = () => {
        setShowSuccessAlert(false);
        navigate("/home");
    };

    return ( 
        <div className="page-container"> 
            <div className="registration-card"> 
                <img
                src="/logo.svg"
                alt="Logo"
                className="registration-logo"
                />

                <h1>Registration</h1>

                <form onSubmit={handleSubmit}>
                    <APTextBox
                        label="First Name"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />

                    <APTextBox
                        label="Last Name"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />

                    <APTextBox
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <APTextBox
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <APTextBox
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <APTextBox
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    <APButton type="submit">
                        Sign Up
                    </APButton>
                </form>
            </div>

            {showSuccessAlert && (
                <APAlert
                message="You are successfully registered."
                onYes={handleSuccessOK}
                singleButton
                buttonText="OK"
                />
            )}
        </div>


    );
}

export default Registration;
