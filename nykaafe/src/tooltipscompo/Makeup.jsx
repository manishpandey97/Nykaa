import React from 'react'
import { useNavigate } from 'react-router-dom';

function Makeup({ heading, setHeading }) {

    const navigate = useNavigate('')

    const updateHeading = (e) => {
        setHeading(e.target.textContent);
        localStorage.setItem('heading', JSON.stringify(heading));
        navigate('/sort');
    };

    return (
        <div >
            <div>
                <h1>Face</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Face Primer</li>
                        <li>Concealer</li>
                        <li>Foundation</li>
                        <li> Compact</li>
                        <li>Contour</li>
                        <li>Loose Powder</li>
                        <li>Tinted Moisturizer</li>
                        <li>Blush</li>
                        <li>Bronzer</li>
                        <li>BB & CC cream</li>
                        <li>Highlighters</li>
                        <li>Setting Spray</li>
                        <li>Makeup Remover</li>
                        <li>Sindoor</li>
                    </ul>
                </div>
            </div>

            <div>
                <h1> Eyes</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li> Kajal</li>
                        <li>Eyeliner</li>
                        <li>  Mascara</li>
                        <li> Eye Shadow</li>
                        <li>Eye Brow Enhancers</li>
                        <li> Eye Primer</li>
                        <li>False Eyelashes</li>
                        <li>Eye Makeup Remover</li>
                    </ul>
                </div>
                <h1> Makeup Kits & Combos</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li> Makeup Kits</li>
                        <li>Makeup Combos</li>
                    </ul>
                </div>
            </div>

            <div>
                <h1> Lips</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li> Lipstick</li>
                        <li>liquid Lipstick </li>
                        <li>  Lip Crayon</li>
                        <li> Lip Gloss</li>
                        <li>Lip Liner</li>
                        <li>Lip Plumper</li>
                        <li>Lip Tint</li>
                    </ul>
                </div>
                <h1> Nails</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li> Nail Polish</li>
                        <li>Nail Art Kits</li>
                        <li>Nail Care</li>
                        <li>Nail Polish Remover</li>
                    </ul>
                </div>
            </div>

            <div>
                <h1>Tools & Brushes</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li> Face Brush</li>
                        <li>Eye Brush</li>
                        <li>  Lip Brush</li>
                        <li> Brush Sets</li>
                        <li>Brush Cleaners</li>
                        <li>Sponges & Applicators</li>
                        <li>Eyelash Curlers</li>
                        <li>Tweezers</li>
                        <li>Sharpeners</li>
                        <li>Mirrors</li>
                        <li>Makeup Pouches</li>
                        <li></li>
                    </ul>
                </div>
                <h1> Multi-Functional Makeup Palettes</h1>
            </div>

            <div>
                <h1>Top Brands</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li> Kay Beauty</li>
                        <li>Huda Beauty</li>
                        <li>Charlotte Tilbury</li>
                        <li>M.A.C</li>
                        <li>Maybelline New York</li>
                        <li>L'Oreal Paris</li>
                        <li>Lakme</li>
                        <li>Nykaa Cosmetics</li>
                        <li>Nyx Pro.Makeup</li>
                    </ul>
                </div>
                <h1> Multi-Functional Makeup Palettes</h1>
            </div>

            <div>
                <h1>Quick Links</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li> Combos @ Nykaa</li>
                        <li>New Launches</li>
                        <li>Gifts @ Nykaa</li>
                        <li>The Gift Store</li>
                        
                    </ul>
                </div>
                <h1> Trending Searches</h1>
                        <li>Nude Lipstick</li>
                        <li> Matte Lipstick </li>
                        <li>Red Lipstick</li>
                        <li>Pink Lipstick</li>
            </div>

        </div>
    )
}

export default Makeup