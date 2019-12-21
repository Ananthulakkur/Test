import React from 'react';
import './footer.css';
import placeholder from '../../media/png/placeholder.png';

function Footer(){
    return (
        <div className="app-footer">
            <FooterLogo />
            {/* <div className="vl"/> */}
            <FooterListOne />
            <FooterListTwo />
            {/* <div className="vl"/>  */}
            <SocialMediList />
        </div>     
    );
}

export default Footer

function FooterLogo(){
        return (
            <div className='column'> 
                <img className="footer-logo" src={placeholder} alt="placeholder"/> 
            </div>
        );
}

const CreateFooterList = (props) => {
    const listItems = props.list.map((item, ind) =>
        <li key={`mklist-${ind}`}>{item}</li>
        );
        return(
            <div className='column'>
                <ul className="list-style">{listItems}</ul>
            </div>
        );
}

function FooterListOne() {
    const list = ["Current Board Agenda", "Family Resource Centers", "Agent Central", "Grievance Form", "Glossary of Terms", "Report Fraud, Waste or Abuse", "[+] Feedback"];
    return <CreateFooterList list={list}/>
}

function FooterListTwo() {
    const list = ["Privacy", "Terms & Conditions", "Nondiscrimination Notice", "Technical Information", "Doing Business with Us", "L.A. Care Websites", "Site Map"];
    return <CreateFooterList list={list}/>
}

function SocialMediList() {
    const list = ["Facebook" , "LinkedIn", "Twitter",  "YouTube"];
    return <CreateFooterList list={list}/>
}