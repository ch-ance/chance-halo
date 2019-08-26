import React from 'react';
import { Link } from 'gatsby';

const style = {
    width: "30%",
    minHeight: '50px',
    borderRadius: '5px',
    backgroundImage: "linear-gradient(to bottom right, #FA5A55, #FA55A3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold"
}

const Button = (
    { to }
) => (
    <Link to={to} style={style}>{to.toUpperCase()}</Link>
)

export default Button;