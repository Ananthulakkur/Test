import React, {lazy} from "react";

const Header = lazy(() => import('../common/components/header/Header'));
const Footer = lazy(() => import('../common/components/footer/Footer'));

function Document(props) {
    return (
        <div className='page Document'>
            <Header />
                <h1>Document</h1>
            <Footer />
        </div>
    );
}

export default Document