import React, {lazy} from "react";

const Header = lazy(() => import('../common/components/header/Header'));
const Footer = lazy(() => import('../common/components/footer/Footer'));

function ContactUs(props) {
    return (
        <div className='page ContactUs'>
            <Header />
                <h1>ContactUs</h1>
            <Footer />
        </div>
    );
}

export default ContactUs