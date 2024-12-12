import React from 'react'
import { useNavigate } from 'react-router-dom';

function MomBaby({ heading, setHeading }) {
    const navigate = useNavigate('')
    const updateHeading = (e) => {
        setHeading(e.target.textContent);
        localStorage.setItem('heading', JSON.stringify(heading));
        navigate('/sort');
    };
    return (
        <div>

            <div>
                <h1>Baby Care</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Body Wash & Soaps</li>
                        <li>Baby Oil</li>
                        <li>Hair Oil</li>
                        <li>Baby Powder</li>
                        <li>Lotions & Creams</li>
                        <li>Shampoo & Conditioner</li>
                        <li>Sunscreen</li>
                        <li>Wipes & Buds</li>
                        <li>Sunscreen</li>
                        <li>Teeth & Dental Care</li>
                        <li>Rash Cream</li>
                        <li>Diapers</li>
                        <li>Diaper Accessories</li>
                        <li>Bath Accessories</li>
                        <li>Baby Grooming</li>
                        <li> Baby Bedding</li>
                    </ul>
                </div>
            </div>

            <div>
                <h1>Kids Care</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Nutritional Supplement</li>
                        <li>Body Wash & Soaps</li>
                        <li>Lotions & Creams</li>
                        <li>Hair Care</li>
                        <li>Sunscreen</li>
                        <li>Dental Care</li>
                        <li>Sunscreen</li>
                        <li>Kids Makeup</li>
                    </ul>
                </div>
            </div>

            <div>
                <h1>Maternity Care</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Stretch Mark Creams & Oils</li>
                        <li>Breast Firming Gels & Creams</li>
                        <li>Nipple Creams</li>
                        <li>Nutritional Suppl</li>
                    </ul>
                </div>

            </div>

            <div>
                <h1>Nursing & Feeding</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Feeding Bottle & Nipples</li>
                        <li>Teethers & Soothers</li>
                        <li>Breast Pumps</li>
                        <li>Breast Pads</li>
                        <li>Cleaning & Feeding Accessories</li>
                        <li>Bibs</li>
                        <li>Sippers & Cups</li>
                    </ul>
                </div>

            </div>

            <div>
                <h1>Nursing & Feeding</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Feeding Bottle & Nipples</li>
                        <li>Teethers & Soothers</li>
                        <li>Breast Pumps</li>
                        <li>Breast Pads</li>
                        <li>Cleaning & Feeding Accessories</li>
                        <li>Bibs</li>
                        <li>Sippers & Cups</li>
                    </ul>
                </div>

            </div>

            <div>
                <h1>Health & Safety</h1>

                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Nose & Ear Care</li>
                        <li>Gripe Water & Tummy Roll On</li>
                        <li>Detergents & Cleansers</li>
                        <li>Handwash & Sanitizer</li>
                        <li>Mosquito Repellent</li>
                    </ul>
                </div>

                <h1>Maternity Wear</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Maternity Bra</li>
                        <li>Maternity Dress</li>
                        <li>Maternity Tops</li>
                    </ul>
                </div>

            </div>

            <div>
                <h1>Baby Toys</h1>
                <h1>Gift Sets</h1>
                <h1>Shop by Concerns</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Baby Dry Skin</li>
                        <li>Cracked Nipple Cream</li>
                        <li>Scalp Treatment</li>
                        <li>Coconut Oil</li>
                        <li>Almond Oil</li>
                        <li>Heat Rash</li>
                        <li>Body Toning & Firming</li>
                        <li>Baby Skin Concerns</li>
                    </ul>
                </div>

                <h1>Combos @ Nykaa</h1>
            </div>


        </div>
    )
}

export default MomBaby