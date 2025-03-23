import React from "react";

import teams from "@/assets/images/team-icon.png";
import location from "@/assets/images/location.png";
import clock from "@/assets/images/clock.png";
import bookmark from "@/assets/images/bookmark.png";
import CustomButton from "@/components/CustomButton";

function JobListingCard({ job }) {
    const { jobTitle = "", companyName = "", jobLocation = "", jobListed = "", jobApplicants = "" } = job;
    return (
        <div className="job-listing-card">
            <label className="display-block short-text bold mb-5">Promoted</label>
            <div className="flex">
                <div className="column-six">
                    <img src={teams} alt="teams" />
                </div>
                <div className="column">
                    <label className="font-size-14">{jobTitle}</label>
                    <label className="font-size-12">{companyName}</label>
                </div>
            </div>
            <div className="flex pt-5">
                <div className="column-eight">
                    <img src={location} alt="location" />
                </div>
                <div className="column-seven">
                    <label className="font-size-12">{jobLocation}</label>
                </div>
            </div>

            <div className="flex">
                <div className="column-eight">
                    <img src={clock} alt="clock" />
                </div>
                <div className="column-seven">
                    <label className="font-size-12">
                        {jobListed} | {jobApplicants}
                    </label>
                </div>
            </div>

            <div className="flex align-items-center pt-15">
                <div className="column-seven ">
                    <CustomButton
                        text="Apply Now"
                        CustomStyles="button"
                        CustomStylesForWrapper="button-wrapper"
                    />
                </div>
                <div className="column-six ">
                    <img className="float-right" src={bookmark} alt="bookmark" />
                </div>
            </div>
        </div>
    );
}

export default JobListingCard;
