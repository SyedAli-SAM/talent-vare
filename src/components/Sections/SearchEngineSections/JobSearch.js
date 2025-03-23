import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import React from "react";

function JobSearch() {
    return (
        <div>
            <div className="column py-10 gap-10">
                <label className="heading">
                    Find Your Dream Job, <span className="special-word">Albert</span>{" "}
                </label>
                <label className="sub-heading">
                    Explore the latest job openings and apply for the best opportunities available today!
                </label>
            </div>

            <div className="search-engine">
                <CustomInput
                    type="text"
                    placeholder="Job Title, Keywords, or Company"
                    CustomStyles="job-search-input"
                    CustomStylesForWrapper="job-search-input-wrapper"
                    isIcon={false}
                    isSearchButton={true}
                    isLocation={true}
                    isJobType={true}
                />
            </div>

            <div className="search-engine-suggestions">
                <label className="sub-heading">Similiar:</label>
                <CustomButton
                    text="UI/UX Designer"
                    CustomStyles="transparent-button"
                    CustomStylesForWrapper="button-wrapper button-suggestion"
                    onClick={() => {}}
                    type="button"
                />
                <CustomButton
                    text="Graphic Designer"
                    CustomStyles="transparent-button"
                    CustomStylesForWrapper="button-wrapper button-suggestion"
                    onClick={() => {}}
                    type="button"
                />
                <CustomButton
                    text="Graphic Designer"
                    CustomStyles="transparent-button"
                    CustomStylesForWrapper="button-wrapper button-suggestion"
                    onClick={() => {}}
                    type="button"
                />
            </div>
        </div>
    );
}

export default JobSearch;
