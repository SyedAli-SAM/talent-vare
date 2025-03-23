import React from "react";
import chevronDown from "@/assets/images/chevron-down.png";

function MemberUpcomingEvents() {
    return (
        <div className="rounded-container">
            <div className="member-upcoming-events-wrapper">
                <div className="row align-items-center">
                    <div className="column">
                        <label className="font-size-16 font-black bold">My calendar</label>
                        <label className="sub-heading">Upcoming Events</label>
                    </div>
                    <div className="pr-10">
                      <img src={chevronDown} alt="calendar" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemberUpcomingEvents;
