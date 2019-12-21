import React from 'react'
import PropTypes from 'prop-types';
import "./style.css"
const SelectBox = (props) => {
   
    let { className = "", ...otherProps } = props;
    let selectboxClassName = [className, 'arrows'].join(" ");
    let optionList;
     const stateList = ["hawai" ,"london"];
     const accountType = ['savings','current'];
     console.log('otherProps.id',otherProps.type);
     otherProps.type == 'state' ? optionList = stateList : optionList = accountType; 
     const MakeItem = function(X) {
        return <option>{X}</option>;
    };
     return  (
    <label class={selectboxClassName}{...otherProps}>
                <select name="SelectBox" class ="arrows" >
               {optionList.map(MakeItem)}
               </select>
            
                 </label>
                  );
   };
SelectBox.propTypes = {
    className: PropTypes.string
};
export default SelectBox;