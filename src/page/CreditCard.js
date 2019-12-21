import React, { lazy } from "react";
import Button from "../common/components/button/Button";

const Header = lazy(() => import('../common/components/header/Header'));
const Footer = lazy(() => import('../common/components/footer/Footer'));

function Payment(props) {
        return (
            <div className='page CreditCard'>
                <Header />
                    <h1>Pay by CreditCard</h1>

                <Footer />
            </div>
        );
}

export default Payment