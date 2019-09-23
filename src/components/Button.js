import React from 'react';
import { Link } from 'gatsby';

const Button = (
    { to }
) => (
    // <Link to={to} style={style}>{to.toUpperCase()}</Link>
    <Link to={to} className="landing-button">Explore</Link>
    )

export default Button;