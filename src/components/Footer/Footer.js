import React from 'react'
import './footer.css'
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
const Footer = () => {
    return (
        <>
            <div className='footer-body'>
                <ul className="footer-list">
                    <li data-testid="connect">
                        <div className="quicklinks">
                            <h4 className="title">Connect with us</h4>
                            
                                    <div className="add-on reverse">
                                        
                                        <input type="text" className="formControl" placeholder="Enter Email ID"  />
                                        <ArrowForwardSharpIcon className='arro-icon-fa' />
                                    </div>
                            <ul className="social">
                                <li >
                                    <a href="/" className="youtube"><i className="fa-brands fa-youtube i-size "></i></a></li>
                                <li >
                                    <a href="/" className="facebook"><i className="fa-brands fa-facebook-f i-size"></i>
                                    </a></li>
                                <li >
                                    <a href="/" > <i className="fab fa-instagram i-size ins-icon" ></i></a></li>
                                <li >
                                    <a href="/" className="linkedin"><i className="fa-brands fa-youtube i-size"></i></a></li>
                                <li >
                                    <a href="/" className="twitter"><i className="fa-brands fa-twitter i-size"></i></a></li>
                                    </ul>
                            <span className="copywrite">© Copyright Bharat</span></div>
                     </li>





                    <li className="block-item " data-testid="Section"><div className="quicklinks">
                        <p className="title">Useful Links <i className="icon icon-chevron"></i></p>
                        <ul className="link-list" data-testid="section-list">
                            <li className="link-item" >
                                <a className="link" href="/about-croma">About Croma</a></li>
                            <li className="link-item" >
                                <a className="link" href="/helpAndSupport">Help And Support</a></li>
                            <li className="link-item" >
                                <a className="link" href="/faq">FAQs</a></li>
                            <li className="link-item" >
                                <a className="link" href="/lp-buying-guide">Buying Guide</a>
                            </li><li className="link-item" >
                                <a className="link" href="/cancellation-and-return">Return Policy</a></li>
                            <li className="link-item" >
                                <a className="link" href="/">Bulk Enquiry</a></li>
                            <li className="link-item" >
                                <a className="link" href="/store?location=default">Store Locator</a></li>
                            <li className="link-item" >

                                <a className="link" href="/">Delightful Programmes</a></li>
                            <li className="link-item" >
                                <a className="link" href="/lp-croma-e-care">E-Care</a></li>
                            <li className="link-item" >
                                <a className="link" href="/">Franchise Opportunity</a></li>
                            <li className="link-item" >
                                <a className="link" href="/site-map">Site Map</a></li>
                        </ul></div></li>
                    <li className="block-item " data-testid="Section"><div className="quicklinks">
                        <p className="title">Products </p>
                        <ul className="link-list" data-testid="section-list">
                            <li className="link-item" data-testid="section-list-item">
                                <a className="link" href="/">Televisions &amp; Accessories</a>
                            </li>
                            <li className="link-item" >
                                <a className="link" href="/">Home Appliances</a></li>
                            <li className="link-item" >
                                <a className="link" href="/">Phones &amp; Wearables</a></li>
                            <li className="link-item" >
                                <a className="link" href="/">Computers &amp; Tablets</a></li>
                            <li className="link-item" >
                                <a className="link" href="/">Kitchen Appliances</a></li>
                            <li className="link-item" >
                                <a className="link" href="/">Audio &amp; Video</a></li>
                            <li className="link-item" >
                                <a className="link" href="/">Health &amp; Fitness</a></li>
                            <li className="link-item" >
                                <a className="link" href="/">Grooming &amp; Personal Care</a></li>
                            <li className="link-item" >
                                <a className="link" href="/">Cameras &amp; Accessories</a></li>
                            <li className="link-item" >
                                <a className="link" href="/">Smart Devices</a></li>
                            <li className="link-item" >
                                <a className="link" href="/">Gaming</a></li>
                            <li className="link-item" >
                                <a className="link" href="/">Accessories</a></li>
                            <li className="link-item" >
                                <a className="link" href="/">Top Brands</a></li>
                                </ul>
                                </div></li>
                                
                 </ul>
            </div>
        </>
    )
}

export default Footer