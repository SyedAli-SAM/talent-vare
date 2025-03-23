import Navbar from "@/components/Navbar";
import MemberInfo from "@/components/Sections/MemberDetailSections/MemberInfo";
import LayoutOne from "@/layouts/LayoutOne";
import React from "react";

function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <LayoutOne />
            </div>
        </div>
    );
}

export default Home;
