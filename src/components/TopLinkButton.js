import React from 'react';
import { Link } from 'gatsby';

const TopLinkButton = () => {

    const toText = window.location.pathname === "/contact" ? "Projects" : "Contact";
    const toPath = window.location.pathname === "/contact" ? "projects" : "contact";

    console.log("TO PATH: ", toPath);

    return <Link to={toPath} className="top-link-button">Go to {toText}</Link>
}

export default TopLinkButton;