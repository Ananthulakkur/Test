// import React from 'react';
// import box from './box.css';
//  const CheckBox = () =>{
//   return(
//     <div>
//     <form>
//     <div><label class="container">Check1<input type="checkbox"  ></input><span class="checkmark"></span></label></div>
//     <div><label class="container">Check2<input type="checkbox"  ></input><span class="checkmark"></span></label></div>
//     <div><label class="container">Check3<input type="checkbox"  ></input><span class="checkmark"></span></label></div>
//     </form>
// </div>
//   );
//  }

//  export default CheckBox;

import React from 'react'
import PropTypes from 'prop-types';
import "./checkbox.css"

const Checkbox = (props) => {
    let { className = "", ...otherProps } = props;
    let checkboxClassName = [className, 'container'].join(" ");

    return (<label class={checkboxClassName}{...otherProps}><input type="checkbox"></input>{props.children}<span class="checkmark"></span></label>);
};

Checkbox.propTypes = {
    className: PropTypes.string
};
  
export default Checkbox;