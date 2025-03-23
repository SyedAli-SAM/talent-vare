import React from "react";

// importing images
import backgroundImage from "@/assets/images/side-bar-background.jpeg";
import profilePic from "@/assets/images/member-pic.png";

function MemberInfo({
    name = "Albert Flores",
    position = "Senior Product Designer | UI/UX Designer | Graphic Designer | Web...",
    bio = "Clinton, Maryland",
}) {
    return (
        <div className="rounded-container">
            <div className="member-info-wrapper">
                <div>
                    <img className="member-info-background-image" src={backgroundImage} alt="" />
                </div>
                <div className="member-info-profile-pic-wrapper">
                    <img className="member-info-profile-pic" src={profilePic} alt="" />
                </div>
                <div className="member-info-details">
                    <label className="heading">{name}</label>
                    <label className="sub-heading">{position}</label>
                    <label className="description">{bio}</label>
                </div>
            </div>
        </div>
    );
}

export default MemberInfo;
