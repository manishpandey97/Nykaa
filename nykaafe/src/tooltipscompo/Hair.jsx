import React from 'react'
import { useNavigate } from 'react-router-dom';

function Hair() {

    const navigate = useNavigate('')

    const updateHeading = (e) => {
        setHeading(e.target.textContent);
        localStorage.setItem('heading', JSON.stringify(heading));
        navigate('/sort');
    };

    return (
        <div >

            <div>
                <h1>hair care</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Shampoo</li>
                        <li>Dry Shampoo</li>
                        <li>Conditioner</li>
                        <li>Hair Oil</li>
                        <li>Hair Serum</li>
                        <li>Hair Creams & Masks</li>
                        <li>Hair Supplements</li>
                        <li>Leave-in Conditioner</li>
                    </ul>
                </div>
            </div>

            <div>
                <h1> Tools & Accessories</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Hair Brushes  </li>
                        <li>Hair Combs</li>
                        <li>Dryers & Stylers</li>
                        <li>Straighteners</li>
                        <li>Rollers & Curlers</li>
                        <li>Hair Extensions</li>
                        <li>Hair Accessories</li>
                        <li>Givenchy</li>
                        <li> Jimmy Choo</li>
                        <li>Manolo Blahnik</li>
                        <li>Mario Valentino</li>
                        <li>Mario Valentino</li>
                        <li> Moschino</li>

                    </ul>
                </div>
            </div>

            <div>
                <h1>Hair Styling</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Hair Color</li>
                        <li>Hair Spray</li>
                        <li>Gels & Waxes</li>
                    </ul>
                </div>

                <h1>Shop By Hair Type</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Straight</li>
                        <li>Curly & Wavy</li>
                    </ul>
                </div>

                <h1>Professional Brands</h1>

                <h1>Luxury Brand</h1>

            
            </div>

            <div>
                <h1> Shop By Concern</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Hairfall & Thinning</li>
                        <li>Dandruff</li>
                        <li>Dry & Frizzy Hair</li>
                        <li>Split Ends</li>
                        <li>Color Protection</li>
                        <li>Damaged Hair</li>
                        <li>Hair Growth</li>
                        <li>Curl Enhancing</li>
                        <li>Volume</li>
                        <li>Length & Shine</li>
                        <li>Bond Building</li>
                    </ul>
                </div>

                <h1>Hair Kits & Combos</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Hair Kits</li>
                        <li>Hair Combos </li>
                </ul>
                </div>
            
            </div>


            <div>
                <h1> Top Brands</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Nykaa Naturals</li>
                        <li>L'Oreal Paris</li>
                        <li>Wella Professionals</li>
                        <li>L'Oreal Professionnel</li>
                        <li>BBlunt</li>
                        <li>Herbal Essences</li>
                        <li>Schwarzkopf Professional</li>
                    </ul>
                </div>

                <h1>Trending Searches</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Hair Growth Oil</li>
                        <li>Dandruff Shampoo </li>
                        <li>Castor Oil For Hair</li>
                        <li>Sulphate Free Shampoo</li>
                        <li>Hair Straightener Brush</li>
                </ul>
                </div>
            
            </div>


            <div>
                <h1> Quick Links</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Hair Combos</li>
                        <li>New Launches</li>
                        <li>NFBA Nominees 2022</li>
                        <li>Herbal Hair Care</li>
                        <li>Routine Finder</li>
                        <li>The Beauty Ingredient Edit</li>
                        <li>The Safe Beauty Edit</li>
                        <li>The Gift Store</li>
                    </ul>
                </div>

    
            
            </div>

        </div>
    )
}

export default Hair