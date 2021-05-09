import React from 'react'

import {CURRENT_YEAR} from '../../config';
import FooterCol4 from '../widgets/footercol4';
import SocialMedia from '../widgets/socialmediaicon';

const Footer = (props) => {

    return (
        <div className="Footer">
            <div className="socialmedia">
                <SocialMedia />
            </div>
            <div  className="info-column">
                <FooterCol4
                    title="Our Site "
                    name="Ecommerce Site"
                    email="info@eao.com"
                />
                <FooterCol4
                    title="Our Hours"
                    day="Monday - Friday"
                    time="09:00 - 17:00"
                />
                <FooterCol4
                    title="Our Office"
                    area="G-7/2, Islamabad"
                    phone="+92 300 1234567"
                />
            </div>
            <div className="site-title">
                <hr />
                <p>Ecommerce Site {CURRENT_YEAR} All right reserved.  @anees </p>
            </div>
        </div>
    );
};

export default Footer;
