import MemberAnalytics from "@/components/Sections/MemberDetailSections/MemberAnalytics";
import MemberInfo from "@/components/Sections/MemberDetailSections/MemberInfo";
import MemberUpcomingEvents from "@/components/Sections/MemberDetailSections/MemberUpcomingEvents";
import JobListing from "@/components/Sections/SearchEngineSections/JobListing";
import JobSearch from "@/components/Sections/SearchEngineSections/JobSearch";
import React from "react";

function LayoutOne() {
    const listingData = [
        {
            jobListingTitle: "Featured Jobs",
            jobListingLink: "See Featured Jobs",
            Jobs: [
                {
                    jobTitle: "UI/UX Designer",
                    companyName: "Teams",
                    jobLocation: "Seattle, USA (Remote)",
                    jobListed: "1 day ago",
                    jobApplicants: "22 applicants",
                },
                {
                    jobTitle: "UI/UX Designer",
                    companyName: "Teams",
                    jobLocation: "Seattle, USA (Remote)",
                    jobListed: "1 day ago",
                    jobApplicants: "22 applicants",
                },
                {
                    jobTitle: "UI/UX Designer",
                    companyName: "Teams",
                    jobLocation: "Seattle, USA (Remote)",
                    jobListed: "1 day ago",
                    jobApplicants: "22 applicants",
                },
                {
                    jobTitle: "UI/UX Designer",
                    companyName: "Teams",
                    jobLocation: "Seattle, USA (Remote)",
                    jobListed: "1 day ago",
                    jobApplicants: "22 applicants",
                },
                {
                    jobTitle: "UI/UX Designer",
                    companyName: "Teams",
                    jobLocation: "Seattle, USA (Remote)",
                    jobListed: "1 day ago",
                    jobApplicants: "22 applicants",
                },
            ],
        },

        {
            jobListingTitle: "Recomended Jobs",
            jobListingLink: "See Recomended Jobs",
            Jobs: [
                {
                    jobTitle: "UI/UX Designer",
                    companyName: "Teams",
                    jobLocation: "Seattle, USA (Remote)",
                    jobListed: "1 day ago",
                    jobApplicants: "22 applicants",
                },
                {
                    jobTitle: "UI/UX Designer",
                    companyName: "Teams",
                    jobLocation: "Seattle, USA (Remote)",
                    jobListed: "1 day ago",
                    jobApplicants: "22 applicants",
                },
                {
                    jobTitle: "UI/UX Designer",
                    companyName: "Teams",
                    jobLocation: "Seattle, USA (Remote)",
                    jobListed: "1 day ago",
                    jobApplicants: "22 applicants",
                },
                {
                    jobTitle: "UI/UX Designer",
                    companyName: "Teams",
                    jobLocation: "Seattle, USA (Remote)",
                    jobListed: "1 day ago",
                    jobApplicants: "22 applicants",
                },
                {
                    jobTitle: "UI/UX Designer",
                    companyName: "Teams",
                    jobLocation: "Seattle, USA (Remote)",
                    jobListed: "1 day ago",
                    jobApplicants: "22 applicants",
                },
            ],
        },
    ];
    return (
        <div className="container">
            <div className="row py-10">
                <div className="column-six" style={{ backgroundColor: "red" }}>
                    <div className="member-info-card">
                        <MemberInfo />
                        <MemberAnalytics />
                        <MemberUpcomingEvents />
                    </div>
                </div>
                <div className="column-seven" style={{ backgroundColor: "lightcyan" }}>
                    <JobSearch />
                    <hr />
                    {listingData.length > 0 &&
                        listingData.map((jobListings, index) => (
                            <JobListing jobListings={jobListings} index={index} />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default LayoutOne;
