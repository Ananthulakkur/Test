import React from 'react'
import PropTypes from 'prop-types';
import "./button.css"

const Button = (props) => {
    let { className = "", ...otherProps } = props;
    let buttonClassName = [className, "w_button"].join(" ");

    return (<button className={buttonClassName} {...otherProps}>{props.children}</button>);
};

Button.propTypes = {
    className: PropTypes.string
};
  
export default Button;