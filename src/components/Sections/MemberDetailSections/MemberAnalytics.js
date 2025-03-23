import React from "react";

function MemberAnalytics() {
    const analytics = [
        {
            name: "Profile Visitors",
            value: "140",
        },
        {
            name: "Resume Viewers",
            value: "20",
        },
        {
            name: "My Jobs",
            value: "88",
        },
    ];
    const getAnalytics = () => {
        return (
            <>
                {analytics &&
                    analytics.map((analytic, index) => (
                        <>
                            <div className="row" key={index}>
                                <div>
                                    <label>{analytic.name}</label>
                                </div>
                                <div>
                                    <label className="analytics-count">{analytic.value}</label>
                                </div>
                            </div>
                            {index !== analytics.length - 1 && <hr />}
                        </>
                    ))}
            </>
        );
    };

    return (
        <div className="rounded-container">
            <div className="member-analytics-wrapper">{getAnalytics()}</div>
        </div>
    );
}

export default MemberAnalytics;
