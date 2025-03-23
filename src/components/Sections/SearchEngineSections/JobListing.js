import React from "react";

import JobListingCard from "@/components/JobListingCard";

function JobListing({ jobListings = {} }) {
    const { jobListingTitle = "", jobListingLink = "", Jobs = [] } = jobListings;

    return (
        <div className="py-10">
            <div className="job-listing-header">
                <label className="font-size-18 pr-10">{jobListingTitle}</label>
                <a href="#" className="link">
                    {jobListingLink}
                </a>
            </div>

            <div className="flex gap-16">
                {Jobs.length > 0 && Jobs.map((job, index) => <JobListingCard job={job} key={index} />)}
            </div>
        </div>
    );
}

export default JobListing;
