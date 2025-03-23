import React from "react";

// importing custom components
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

// importing images
import logo from "@/assets/images/logo.png";
import profilePic from "@/assets/images/profile-pic.png";

function Navbar() {
    const routes = [
        {
            name: "Find Jobs",
            link: "#",
            isActive: true,
        },
        {
            name: "Top Companies",
            link: "#",
            isActive: false,
        },
        {
            name: "Job Tracker",
            link: "#",
            isActive: false,
        },
        {
            name: "My Calendar",
            link: "#",
            isActive: false,
        },
        {
            name: "Documents",
            link: "#",
            isActive: false,
        },
        {
            name: "Messages",
            link: "#",
            isActive: false,
        },
        {
            name: "Notifications",
            link: "#",
            isActive: false,
        },
    ];

    // function to handle click event
    const handleClick = () => {
        alert("Post a job");
    };

    // function to get links
    const getNavbarRoutes = () => {
        return (
            <ul className="navbar-nav">
                {routes &&
                    routes.map((route, index) => (
                        <li className="nav-item" key={index}>
                            <a
                                className={`${route.isActive ? "nav-link-coloured bold" : "nav-link"}`}
                                href={route.link}>
                                {route.name}
                            </a>
                        </li>
                    ))}
            </ul>
        );
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="row">
                    <div className="column-one">
                        <div>
                            <a className="navbar-brand" href="#">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                        <div>{getNavbarRoutes()}</div>
                    </div>

                    <div className="column-two">
                        {/* search bar */}

                        <div>
                            <CustomInput
                                type="text"
                                placeholder="Search"
                                CustomStylesForWrapper="input-wrapper"
                                CustomStyles="input"
                                value=""
                                onChange={() => {}}
                                isIcon={true}
                            />
                        </div>

                        {/* button */}

                        <div>
                            <CustomButton
                                text="Resume Builder"
                                CustomStyles="button"
                                CustomStylesForWrapper="button-wrapper"
                                onClick={() => {
                                    handleClick();
                                }}
                                type="button"
                            />
                        </div>

                        {/* profile */}
                        <div>
                            <img className="profile-pic" src={profilePic} alt="profile" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
