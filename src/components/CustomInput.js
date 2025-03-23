import React from "react";
import { useState } from "react";

import search from "@/assets/images/search.png";
import search_white from "@/assets/images/search-white.png";
import CustomButton from "./CustomButton";

function CustomInput({
    type = "text",
    placeholder = "",
    value = "",
    onChange = () => {},
    isIcon = false,
    CustomStyles = "",
    CustomStylesForWrapper = "",
    isLocation = false,
    isJobType = false,
    isSearchButton = false,
}) {
    const [inputValue, setInputValue] = useState("");
    const handleInput = (value) => {
        setInputValue(value);
    };

    return (
        <div className={`${CustomStylesForWrapper}`}>
            {isIcon && <img src={search} className="icon" alt="search" />}
            <input
                className={`${CustomStyles}`}
                type={type}
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => handleInput(e.value)}
            />
            {isLocation && (
                <div className="location-dropdown-wrapper">
                    <select className="location-dropdown">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            )}

            {isJobType && (
                <div className="job-type-dropdown-wrapper">
                    <select className="job-type-dropdown">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            )}

            {isSearchButton && (
                // <button className="button button-wrapper button-with-icon">
                //     <img src={search_white} alt="search" />
                //     Search
                // </button>
                <CustomButton CustomStyles="button" CustomStylesForWrapper="button-wrapper" text="Search" isIcon={true} />
            )}
        </div>
    );
}

export default CustomInput;
