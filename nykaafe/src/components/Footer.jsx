import React from 'react'
import { CiCreditCard1, CiHeart } from 'react-icons/ci'
import { FaFacebookF, FaPinterest, FaFacebook, FaGooglePlay, FaAppStore } from 'react-icons/fa'
import { MdLocalShipping, MdOutlineEmail, MdVerified } from "react-icons/md";
import { CiInstagram, CiYoutube, CiMobile4 } from "react-icons/ci";
// import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { TbTruckReturn } from "react-icons/tb";
import { IoPricetags } from "react-icons/io5";
import './stylecompo/Footer.css'

function Footer() {
    const Nykaa = ["Who are we?", "Careers", "Authenticity", "Press", "Testimonials", "Nykaa CSR", "Responsible Disclosure", "Investor Relations"
        , "Link to Smart ODR"]

    const Help = ["Contact Us", "Frequently asked questions", "Store Locator", "Cancellation & Return", "Shipping & Delivery"
        , "Sell on Nykaa "]

    const InspireMe = ["Beauty Book", "Nykaa Network", "Buying Guides"]

    const QuickLinks = ["Offer Zone", "New Launches", "Nykaa Man", "Nykaa Fashion", "Nykaa Pro", "Sitemap"]

    const TopCategories = ["Makeup", "Skin", "Hair", "Bath & Body", "Appliances", "Mom and Baby", "Health & Wellness", "Fragrance"
        , "Natural", "Luxe"]

    return (
        <div className='footer'>

            <div className="footer-top top1">

                <div className="footer-block-social">
                    <h4 style={{ display: 'flex', alignItems: 'center' }}>
                        <MdOutlineEmail className='icon' /> Get special discount on your inbox</h4>
                    <form>
                        <span><input type="text" placeholder='Your Email' /> </span>
                        <span> <button> SEND</button> </span>
                    </form>
                </div>

                <div className="footer-block-social">
                    <h4 style={{ display: 'flex', alignItems: 'center' }}>
                        <CiMobile4 className='icon' /> experience the nykaa mobile app</h4>
                    <h4 style={{ display: 'flex', alignItems: 'center' }}>
                        <FaGooglePlay className='icon' />  <FaAppStore className='icon' /> </h4>

                </div>

                <div className="footer-block-social">
                    <h4 style={{ display: 'flex', alignItems: 'center' }}>
                         <IoIosCall className='icon' />
                         1 for any help, you may call us at 1800-267-4444</h4>
                    <h4>(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM) </h4>
                </div>

            </div>

            <div className="footer-top">

                <div className="footer-block-social">
                    <h4>Nykaa</h4>
                    <ul>
                        {Nykaa.map((e,index) => { return (<li key={index}>{e}</li>) })}
                    </ul>
                </div>

                <div className="footer-block-social">
                    <h4>Help</h4>
                    <ul>
                        {Help.map((e,index) => { return (<li key={index}>{e}</li>) })}
                    </ul>
                </div>

                <div className="footer-block-social">
                    <h4>Inspire Me</h4>
                    <ul>
                        {InspireMe.map((e,index) => { return (<li key={index}>{e}</li>) })}
                    </ul>
                </div>

                <div className="footer-block-social">
                    <h4>Quick Links </h4>
                    <ul>
                        {QuickLinks.map((e,index) => { return (<li key={index}>{e}</li>) })}
                    </ul>
                </div>

                <div className="footer-block-social">
                    <h4>Top Categories</h4>
                    <ul>
                        {TopCategories.map((e,index) => { return (<li key={index}>{e}</li>) })}
                    </ul>
                </div>
            </div>

            <div className="footer-top  middle">

                <div>
                    <div><MdLocalShipping className='icon' /> </div>
                    <div>
                        <div>Free Shipping</div>
                        <div>On Orders Above ₹299</div>
                    </div>
                </div>

                <div>
                    <div><TbTruckReturn className='icon' /> </div>
                    <div>
                        <div>Easy Returns</div>
                        <div>15-Day Return Policy</div>
                    </div>
                </div>

                <div>
                    <div><MdVerified className='icon' /> </div>
                    <div>
                        <div>100% Authentic</div>
                        <div>Products Sourced Directly</div>
                    </div>
                </div>

                <div>
                    <div><IoPricetags className='icon' /> </div>
                    <div>
                        <div>1900+ Brands</div>
                        <div>1.2 Lakh+ Products</div>
                    </div>
                </div>

                <div>
                    <div> </div>
                    <div>
                        <div>show us some love ❤ on social media</div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                            <CiInstagram className='icons' />
                            <FaFacebook className='icons' />
                            <CiYoutube className='icons' />
                            <AiFillTwitterCircle className='icons' />
                            <FaPinterest className='icons' /></div>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <div className='footer_services'>
                    <ul>
                        <li> Terms & Conditions </li>
                        <li>Shipping Policy</li>
                        <li>Cancellation Policy</li>
                        <li>Cancellation Policy</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer_copyright'>
                    <span>© 2024 NYKAA E-RETAIL LIMITED</span>
                    <span>All Rights Reserved.</span>
                </div>
            </div>

        </div>
    )
}

export default Footer