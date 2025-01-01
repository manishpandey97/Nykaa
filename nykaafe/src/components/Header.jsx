import React, { useState } from 'react'
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
import { IoPersonOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import './stylecompo/Header.css'
import './stylecompo/HomeDrawer.css'


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
        <div className='container'>

            <div className='container_mobile'>

                <div className='container_mobile_top'>

                    <div className='container_mobile_top_left'>
                        <HomeDrawer heading={heading} setHeading={setHeading} className="LuAlignJustify iconm" />

                        <div className='container_logo'>
                            <img className='logo' onClick={() => navigate('/')} src={Logo} alt='logo' />
                        </div>
                    </div>

                    <div className='container_mobile_top_right'>
                       
                        <div className='container_icon'>
                        <div><CiSearch className='iconm' /> </div>
                            <div>
                                {
                                    token !== '' ? (<IoPerson className='iconm' style={{color:"#e40574"}}
                                        onClick={() => logOut()} />) :
                                        (<IoPersonOutline className='iconm'  style={{color:"#e40574"}}
                                            onClick={() => navigate('/login')} />)
                                }
                            </div>
                            <div> <CartDrawer className='iconm' />  </div>
                        </div>

                    </div>

                </div>
            </div>


            <div className='container_laptop'>

                <div className='container_laptop_top'>

                    <div className='container_laptop_top_left'>
                        <div className='container_logo'>
                            <img className='logo' onClick={() => navigate('/')} src={Logo} alt='logo' />
                        </div>

                        <div className='container_menu_top'>
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

                        </div>
                    </div>

                    <div className='container_laptop_top_right'>
                        <div className='container_icon_search_div'>
                            <CiSearch className='container_icon_search icons' />
                            <input className='container_icon_search_input' type="search" placeholder='Search on Nykaa' />
                        </div>

                        <div className='container_icon'>
                            <div>
                                {
                                    token !== '' ? (<button className='container_icon_logout iconh'
                                        onClick={() => logOut()} >sign out</button>) :
                                        (<button className='container_icon_person iconh'
                                            onClick={() => navigate('/login')} > sign in</button>)
                                }
                            </div>
                            <div> <CartDrawer className='container_icon_cart iconh' />  </div>
                        </div>

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

            </div>

        </div>
    )
}

export default Header