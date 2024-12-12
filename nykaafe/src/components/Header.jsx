import React, { useState } from 'react'

// import Navbar from './Navbar';
// import { MdOutlineEmail } from "react-icons/md";
// import { IoPersonOutline } from "react-icons/io5";
// import { IoIosArrowDown } from "react-icons/io";
// import { RiLogoutBoxRFill } from "react-icons/ri";
// import { LuAlignJustify } from "react-icons/lu";

import CartDrawer from './CartDrawer';
import { useNavigate } from 'react-router-dom';
import Tooltip from './Tooltip';
import HomeDrawer from './HomeDrawer';
import Logo from '../images/logo.webp'
import Makeup from '../tooltipscompo/Makeup';
import Skin from '../tooltipscompo/Skin';
import Hair from '../tooltipscompo/Hair';
import Appliances from '../tooltipscompo/Appliances';
import BathBody from '../tooltipscompo/BathBody';
import Natural from '../tooltipscompo/Natural';
import MomBaby from '../tooltipscompo/MomBaby';
import HealthWellness from '../tooltipscompo/HealthWellness';
import Men from '../tooltipscompo/Men';
import LingerieAccessories from '../tooltipscompo/LingerieAccessories';
import Fragrance from '../tooltipscompo/Fragrance';
import Brands from '../tooltipscompo/Brands';
import Luxe from '../tooltipscompo/Luxe';
import NykaaFashion from '../tooltipscompo/NykaaFashion';
import BeautyAdvice from '../tooltipscompo/BeautyAdvice';
import { CiSearch } from 'react-icons/ci';


function Header({ heading, setHeading }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate('')
    const token = localStorage.getItem('token') || '';

    const updateHeading = (e) => {
        setHeading(e.target.textContent);
        localStorage.setItem('heading', JSON.stringify(heading));
        navigate('/sort');
    };

    const logOut = () => {
        if (token) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <div className='container'>

                <div >
                    <HomeDrawer heading={heading} setHeading={setHeading} className="LuAlignJustify iconm" />
                </div>


                <div className='container_logo'>
                    <img className='logo' onClick={() => navigate('/')}
                        src={Logo} alt='logo' />
                </div>

                <div className='container_menu_top'>
                    <ul >
                        <div>
                            Categories
                        </div>
                        <div>
                            <Tooltip text={<Brands heading={heading} setHeading={setHeading} />} position="bottom">
                                Brands
                            </Tooltip>
                        </div>
                        <div>
                            <Tooltip text={<Luxe heading={heading} setHeading={setHeading} />} position="bottom">
                                Luxe
                            </Tooltip>
                        </div>
                        <div>
                            <Tooltip text={<NykaaFashion heading={heading} setHeading={setHeading} />} position="bottom">
                                Nykaa Fashion
                            </Tooltip>
                        </div>
                        <div>
                            <Tooltip text={<BeautyAdvice heading={heading} setHeading={setHeading} />} position="bottom">
                                Beauty Advice
                            </Tooltip>

                        </div>

                    </ul>
                </div>

                <div className='container_icon_mobile'>
                    <div><CiSearch className='container_icon_mobile_search iconm' /></div>

                    <div> <CartDrawer className='container_icon_mobile_cart iconm' />  </div>
                </div>

                <div className='container_icon_search_div'><CiSearch className='container_icon_search icons' />
                    <input className='container_icon_search_input' type="search" placeholder='Search on Nykaa' />
                </div>

                <div className='container_icon'>
                    <div>
                        {
                            token !== '' ? (<button className='container_icon_logout iconh'
                                onClick={() => logOut()} >Sign Out</button>) :
                                (<button className='container_icon_person iconh'
                                    onClick={() => navigate('/login')} > Sign In</button>)
                        }
                    </div>
                    <div> <CartDrawer className='container_icon_cart iconh' />  </div>
                </div>

            </div>


            <div className='container_menu'>
                <ul >
                    <div>
                        <Tooltip text={<Makeup heading={heading} setHeading={setHeading} />} position="bottom">
                            Makeup
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip text={<Skin heading={heading} setHeading={setHeading} />} position="bottom">
                            Skin
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip text={<Hair heading={heading} setHeading={setHeading} />} position="bottom">
                            Hair
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip text={<Appliances heading={heading} setHeading={setHeading} />} position="bottom">
                            Appliances
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip text={<BathBody heading={heading} setHeading={setHeading} />} position="bottom">
                            Bath & Body
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip text={<Natural heading={heading} setHeading={setHeading} />} position="bottom">
                            Natural
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip text={<MomBaby heading={heading} setHeading={setHeading} />} position="bottom">
                            Mom & Baby
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip text={<HealthWellness heading={heading} setHeading={setHeading} />} position="bottom">
                            Health & Wellness
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip text={<Men heading={heading} setHeading={setHeading} />} position="bottom">
                            Men
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip text={<Fragrance heading={heading} setHeading={setHeading} />} position="bottom">
                            Fragrance
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip text={<LingerieAccessories heading={heading} setHeading={setHeading} />} position="bottom">
                            Lingerie & Accessories
                        </Tooltip>
                    </div>
                </ul>
            </div>

        </>
    )
}

export default Header