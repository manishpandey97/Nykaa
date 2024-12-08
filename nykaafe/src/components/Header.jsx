import React, { useState } from 'react'
import Navbar from './Navbar';
import { CiSearch } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import CartDrawer from './CartDrawer';
import { useNavigate } from 'react-router-dom';
import Tooltip from './Tooltip';
// import Cloth from '../tooltipscompo/Cloth';
// import Shoes from '../tooltipscompo/Skin';
// import Handbag from '../tooltipscompo/Handbag';
// import Sunglass from '../tooltipscompo/Appliances';
// import ACCESSORIES from '../tooltipscompo/Makeup';
// import JewelryAndWatch from '../tooltipscompo/JewelryAndWatch';
// import Designers from '../tooltipscompo/Hair';
import { RiLogoutBoxRFill } from "react-icons/ri";
import { LuAlignJustify } from "react-icons/lu";
import HomeDrawer from './HomeDrawer';
import Logo from '../images/logo.webp'
import HomeList from './HomeList';
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

                <div>
                    <HomeList />
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
                                onClick={() => logOut()} >Sign In</button>) :
                                (<button className='container_icon_person iconh'
                                    onClick={() => navigate('/login')} > Sign In</button>)
                        }
                    </div>
                    <div> <CartDrawer className='container_icon_cart iconh' />  </div>
                </div>

            </div>


            <div className='container_menu'>
                <ul >
                    <li>
                        <Tooltip text={<Makeup heading={heading} setHeading={setHeading} />} position="bottom">
                            Makeup <IoIosArrowDown />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip text={<Skin heading={heading} setHeading={setHeading} />} position="bottom">
                            Skin <IoIosArrowDown />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip text={<Hair heading={heading} setHeading={setHeading} />} position="bottom">
                            Hair <IoIosArrowDown />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip text={<Appliances heading={heading} setHeading={setHeading} />} position="bottom">
                            Appliances<IoIosArrowDown />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip text={<BathBody heading={heading} setHeading={setHeading} />} position="bottom">
                            Bath & Body<IoIosArrowDown />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip text={<Natural heading={heading} setHeading={setHeading} />} position="bottom">
                            Natural <IoIosArrowDown />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip text={<MomBaby heading={heading} setHeading={setHeading} />} position="bottom">
                            Mom & Baby<IoIosArrowDown />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip text={<HealthWellness heading={heading} setHeading={setHeading} />} position="bottom">
                            Health & Wellness <IoIosArrowDown />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip text={<Men heading={heading} setHeading={setHeading} />} position="bottom">
                            Men<IoIosArrowDown />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip text={<Fragrance heading={heading} setHeading={setHeading} />} position="bottom">
                            Fragrance<IoIosArrowDown />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip text={<LingerieAccessories heading={heading} setHeading={setHeading} />} position="bottom">
                            Lingerie & Accessories<IoIosArrowDown />
                        </Tooltip>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Header