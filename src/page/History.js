import React, {lazy} from "react";

const Header = lazy(() => import('../common/components/header/Header'));
const Footer = lazy(() => import('../common/components/footer/Footer'));

function History(props) {
    return (
        <div className='page History'>
            <Header />
                <h1>History</h1>
            <Footer />
        </div>
    );
}

export default History