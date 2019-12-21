import React from 'react';
import PropTypes from 'prop-types';
import "./radio_style.css";
const Radio=(props)=>
{
let { className="", ...moreProps }=props;
let radioClassName = [className, 'radio'].join(" ");
return (
<label class={radioClassName}{...moreProps}><input type="radio"></input>{props.children}<span class="click"></span></label>
);
}  
export default Radio;