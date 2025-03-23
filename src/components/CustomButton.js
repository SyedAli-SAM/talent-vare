import React from "react";
import search from "@/assets/images/search-white.png";

function CustomButton({
    type = "button",
    text = "Button",
    onClick = () => {},
    CustomStyles = "",
    CustomStylesForWrapper = "",
    isIcon = false,
}) {
    return (
        <div className={`${CustomStylesForWrapper}`} onClick={onClick}>
            {isIcon && <img className="icon" src={search} alt="icon" />}
            <button type={type} className={`${CustomStyles}`}>{text}</button>
        </div>
    );
}

export default CustomButton;
