import React, { useRef, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { LuAlignJustify } from 'react-icons/lu';
import { MdCancel } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './stylecompo/Header.css'


function HomeDrawer({ heading, setHeading }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [home, sethome] = useState(JSON.parse(localStorage.getItem('homeproduct')) || [])
    const btnRef = useRef();
    const navigate = useNavigate('')
    const token = localStorage.getItem('token') || '';
    const [expandedBrands, setExpandedBrands] = useState({});


    const toggleDrawer = () => setIsOpen(!isOpen);
    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const brands = ["Categories", "Brands", "Luxe", "Nykaa Fashion", "Beauty Advice"];

    const womenCloth = ["Makeup",
        "Skin",
        "Hair",
        "Appliances",
        "Bath & Body",
        "Natural",
        "Mom & Baby",
        "Health & Wellness",
        "Men",
        "Fragrance",
        "Lingerie & Accessories"]

    return (
        <div className='homedrawer' ref={btnRef}>
            <LuAlignJustify onClick={toggleDrawer} className="LuAlignJustify iconm"
                style={{ cursor: 'pointer', fontSize: '30px', fontWeight: 500 }}
            />

            {isOpen && (
                <div className='drawer-home'>

                    <div className='drawer-body-header'>
                        <div>
                            <button className='close-btn' onClick={toggleDrawer}> <MdCancel /> </button>
                        </div>

                    </div>

                    <div className='drawer-body-body'>

                        <div className='container_menu_mobile'>

                            <div className="brand-container">
                                <div className="brand-header" onClick={toggleDropdown}>
                                    Brands {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                                {isDropdownOpen && brands.map((brand) => (
                                    <div
                                        key={brand}
                                        className={`brand ${expandedBrands[brand] ? 'expanded' : ''}`}
                                        onClick={() => toggleBrand(brand)}>
                                        <label htmlFor={brand}>{brand}</label>
                                    </div>
                                ))}

                                <div className="brand-header" onClick={toggleDropdown}>
                                    Category {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                                {isDropdownOpen && womenCloth.map((brand) => (
                                    <div
                                        key={brand}
                                        className={`brand ${expandedBrands[brand] ? 'expanded' : ''}`}
                                        onClick={() => toggleBrand(brand)}>
                                        <label htmlFor={brand}>{brand}</label>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>

                </div>
            )}
        </div>
    )
}

export default HomeDrawer