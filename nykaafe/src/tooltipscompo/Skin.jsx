import React from 'react'
import { useNavigate } from 'react-router-dom';

function Skin({ heading, setHeading }) {
    const navigate = useNavigate('')
    const updateHeading = (e) => {
        setHeading(e.target.textContent);
        localStorage.setItem('heading', JSON.stringify(heading));
        navigate('/sort');
    };
    return (
        <div>

            <div>
                <h1>   Moisturizers</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Face Moisturizer & Day Cream</li>
                        <li>Night Cream</li>
                        <li>Face Oils</li>
                        <li>All Purpose Gels/Cream</li>
                    </ul>
                </div>

                <h1> Cleansers</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Face Wash</li>
                        <li>Cleanser</li>
                        <li>Micellar Water</li>
                        <li>Face Wipes</li>
                        <li>Makeup Remover</li>
                        <li>Scrubs & Exfoliators</li>
                    </ul>
                </div>
            </div>

            <div>
                <h1> Trending Searches</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Toners Under 1000</li>
                        <li>Face wash for Oily Skin</li>
                        <li>Oil Free Face Moisturizers</li>
                        <li>Lip Balm Under 500</li>
                        <li>Christian Louboutin</li>
                        <li>Vitamin C Serum</li>
                    </ul>
                </div>

                <h1> Masks</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Sheet Masks</li>
                        <li>Sleeping Masks</li>
                        <li>Masks & Peels</li>
                        <li>Face Packs</li>
                        <li>Face Bleach</li>
                    </ul>
                </div>

                <h1>Toners</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Toners & Mists</li>
                        <li>Rose Water</li>
                    </ul>
                </div>

            </div>

            <div>
                <h1> Body Care</h1> 
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Lotions & Creams</li>
                        <li>Body Butter</li>
                        <li>Massage Oils</li>
                        <li>Shower Gels & Body Wash</li>
                        <li>Soaps</li>
                        <li>Scrubs & Loofahs</li>
                        <li>Bath Salts</li>
                    </ul>
                </div>

                <h1>Hands & Feet </h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Hand Creams</li>
                        <li>Foot Creams</li>
                        <li>Hand & Foot Masks</li>
                    </ul>
                </div>

                <h1>CSMS by Nykaa</h1>

            </div>

            <div>
                <h1>Specialised Skincare</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Acne Spot Correctors</li>
                        <li>Nose Strips </li>
                        <li>Facial Peels</li>
                    </ul>
                </div>

                <h1>Eye Care</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Under Eye Cream & Serums</li>
                        <li>Eye Masks </li>
                    </ul>
                </div>

                <h1>Lip Care</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Lip Balm</li>
                        <li>Lip Scrubs </li>
                        <li>Lip Masks</li>
                    </ul>
                </div>

                <h1>Sun Care</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Face Sunscreen</li>
                        <li>Body Sunscreen </li>
                    </ul>
                </div>


            </div>

            <div>
                <h1>Kits & Combos</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Facial Kits</li>
                        <li>Combos @ Nykaa </li>
                        <li>Gift Sets</li>
                    </ul>
                </div>

                <h1>Skin Tools</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Face Massagers</li>
                        <li>Cleansing Brushes </li>
                        <li>Blackhead Remover</li>
                        <li>Dermarollers</li>
                    </ul>
                </div>

                <h1>Skin Supplements</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Vitamins & Minerals</li>
                        <li>Ayurvedic Herbs </li>
                    </ul>
                </div>

                <h1>Neck Creams</h1>


            </div>

            <div>
                <h1>Shop By Concern</h1>  
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Acne</li>
                        <li>Dull Skin</li>
                        <li>Pigmentation</li>
                        <li>Wrinkles & Fine Lines</li>
                        <li>Pores</li>
                        <li>Dark Spots</li>
                        <li>Face Tan</li>
                        <li>Oil Control</li>
                    </ul>
                </div>

                <h1>New Launches</h1>  

                <h1> New Launches</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Quick Links</li>
                        <li>NFBA Nominees 2022</li>
                        <li>The Gift Store</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Skin