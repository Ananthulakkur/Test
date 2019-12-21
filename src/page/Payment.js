import React, { lazy } from "react";
import Button from "../common/components/button/Button";

const Header = lazy(() => import('../common/components/header/Header'));
const Footer = lazy(() => import('../common/components/footer/Footer'));

function Payment(props) {
        return (
            <div className='page Payment'>
                <Header />
                    <h1>Payment</h1>
                    <Button className='button_primary'>Make Payment</Button>
                    <Button className='button_secondary'>Update Payment</Button>
                    <Button className='button_plain'>Add Account</Button>
                <Footer />
            </div>
        );
}

export default Payment