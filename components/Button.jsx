import React from "react";           
import t from "prop-types";
import "../styles/Button.styles.css";
/**
* Our Button Component have multiple parameters
* link: link to the site or route
* variant: background color of the button (hex color)
* color: font color
**/

const Button = ({ children, type, size, variant, link, color }) => {
  return (
    <a href={link}>
        <button
        style={{
            fontSize: size === "large" ? 25 : 15,
            backgroundColor: variant,
            color: color === 'dark' ? 'black' : "white",
        }}
        className="btn"
        type={type}
        >
        {children}
        </button>
    </a>
  );
};

Button.propTypes = {
  /**
   * This is a description for this prop.
   * Button type.
   */
  type: t.oneOf(["button", "submit", "reset"]),
};
Button.defaultProps = {
  type: "button",
};
export default Button;