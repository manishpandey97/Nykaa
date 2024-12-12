import React from 'react'
import { useNavigate } from 'react-router-dom';

function Natural({ heading, setHeading }) {
    const navigate = useNavigate('')
    const updateHeading = (e) => {
        setHeading(e.target.textContent);
        localStorage.setItem('heading', JSON.stringify(heading));
        navigate('/sort');
    };
    return (
        <div>

            <div>
                <h1>Skin</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Face Wash</li>
                        <li>Cleanser</li>
                        <li>Moisturizer</li>
                        <li>Face Cream</li>
                        <li>Face Mist</li>
                        <li>Facial Kits</li>
                        <li>Face Oils</li>
                        <li>Sunscreen</li>
                        <li>Night Cream</li>
                        <li>Day Cream</li>
                        <li>Under Eye Care</li>
                        <li>Face Bleach</li>
                        <li>Serums</li>
                    </ul>
                </div>

                <h1>Pro Hair Styling</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Pro Hair Dryers</li>
                        <li>Pro Straighteners</li>
                        <li>Pro Curling Irons/Stylers</li>
                        <li>Pro Multi Stylers</li>

                    </ul>
                </div>

            </div>

            <div>
                <h1>Skin</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Sheet Masks</li>
                        <li>Masks & Peels</li>
                        <li>Scrubs & Exfoliators</li>
                        <li>Face Tools</li>
                        <li>Face Gel</li>
                        <li>Lip Scrub</li>
                    </ul>
                </div>

                <h1>Body Care</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Shower Gels & Body Wash</li>
                        <li>Soaps</li>
                        <li>Body Lotions</li>
                        <li>Body Scrubs</li>
                        <li>Bath Salts & Bath Bombs</li>
                        <li>Hands & Feet Care</li>
                        <li>Bath Tools & Accessories</li>
                        <li>Oral Care</li>
                    </ul>
                </div>

            </div>

            <div>
                <h1>Hair</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Shampoo & Cleanser</li>
                        <li>Conditioner</li>
                        <li>Hair Masks</li>
                        <li>Hair Oil</li>
                        <li>Hair Serum</li>
                        <li>Hair Color</li>
                    </ul>
                </div>

                <h1>Tools & Accessories</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Aromatherapy</li>
                        <li>Massage Oils</li>
                        <li>Carrier Oils</li>
                        <li>Essential Oils</li>
                        <li>Candles</li>
                        <li>Diffuser</li>
                        <li>Incense Sticks</li>
                    </ul>
                </div>

            </div>

            <div>
                <h1>Makeup</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Lipstick</li>
                        <li>Kajal</li>
                        <li>Eyeliner</li>
                        <li>Mascara</li>
                        <li>Nail Polish</li>
                        <li>Lip Balm & Gloss</li>
                        <li>Foundation & Concealer</li>
                        <li>Blush & Highlighter</li>
                        <li>Makeup Remover</li>
                        <li>Tools & Brushes</li>
                    </ul>
                </div>

                <h1>Trending Search</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Tea Tree Oil</li>
                        <li>Eucalyptus Oil</li>
                        <li>Rosemary Oil</li>
                        <li>Jojoba Oil</li>
                        <li>Peppermint Oil</li>
                    </ul>
                </div>

            </div>

            <div>
                <h1> Top Brands</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Biotique</li>
                        <li>Lotus Herbals</li>
                        <li>The Body Shop</li>
                        <li>Nykaa Naturals</li>
                        <li>Kama Ayurveda</li>
                        <li>Forest Essentials</li>
                        <li>Khadi Natural</li>
                        <li>Himalaya</li>
                        <li>VLCC</li>
                    </ul>
                </div>

                <h1>Baby Care</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Types of Skin</li>
                        <li>Dry Skin</li>
                        <li>Normal Skin</li>
                        <li>Oily Skin</li>
                        <li>Combination Skin</li>
                    </ul>
                </div>

            </div>

            <div>
                <h1>Shop By Concern</h1>


                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Tan Removal</li>
                        <li>Pigmentation</li>
                        <li>Acne Treatment</li>
                        <li>Skin Lightening</li>
                        <li>Anti Aging</li>
                        <li>Dark Circles</li>
                        <li>Dry & Frizzy Hair</li>
                    </ul>
                </div>

                <h1>QUICK LINKS</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>New Launches</li>
                        <li>Combos @ Nykaa</li>
                        <li>Gifts @ Nykaan</li>
                        <li>The Safe (And Clean) Beauty Edit</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Natural