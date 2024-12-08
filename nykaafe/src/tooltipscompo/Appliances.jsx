import React from 'react'
import { useNavigate } from 'react-router-dom';

function Appliances({ heading, setHeading }) {

    const navigate = useNavigate('')
    const updateHeading = (e) => {
        setHeading(e.target.textContent);
        localStorage.setItem('heading', JSON.stringify(heading));
        navigate('/sort');
    };

    return (
        <div >

            <div>

                <h1>Hair Styling Tools</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Hair Dryers</li>
                        <li>Straighteners</li>
                        <li>Straightening Brushes</li>
                        <li>Curling Iron/Stylers</li>
                        <li>Multi Stylers</li>
                        <li>Blow Brushes</li>
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
                <h1>Hair Removal Tools</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Epilators</li>
                        <li>Body Groomers</li>
                        <li>Bikini Trimmers</li>
                    </ul>
                </div>
            </div>

            <div>
                <div>
                    <h1> Shaving Tools</h1>
                    <div>
                        <ul onClick={(e) => updateHeading(e)}>
                            <li>Shavers for Men</li>
                            <li>Trimmers for Men</li>
                        </ul>
                    </div>
                </div>
                <h1>Oral Care</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Electric Toothbrushes</li>
                        <li>Electric Flossers</li>
                    </ul>
                </div>
            </div>


            <div>
                <div>
                    <h1>Face/Skin Tools</h1>
                    <div>
                        <ul onClick={(e) => updateHeading(e)}>
                            <li>Face Epilator</li>
                            <li>Dermarollers</li>
                            <li>Cleansing Brushes</li>
                            <li>Acne Removal</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1>Massage Tools</h1>
                    <div>
                        <ul onClick={(e) => updateHeading(e)}>
                            <li>Massagers</li>
                        </ul>
                    </div>
                </div>
                <div>  <h1>Foot Care</h1></div>

            </div>


            <div>
                <div>
                    <h1>Top Brands</h1>
                    <div>
                        <ul onClick={(e) => updateHeading(e)}>
                            <li>FOREO</li>
                            <li>Philips</li>
                            <li>Dyson</li>
                            <li>VEGA</li>
                            <li>Braun</li>
                            <li>Ikonic Professional</li>
                            <li>Nova</li>
                            <li>Flawless</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div>
                <div>
                    <h1>Quick Links</h1>
                    <div>
                        <ul onClick={(e) => updateHeading(e)}>
                            <li>Combos @ Nykaa</li>
                            <li>New Launches</li>
                            <li>NFBA Nominees 2022</li>
                            <li>Gifts @ Nykaa</li>
                            <li>Herbal Hair Care</li>
                            <li>Routine Finder</li>
                        </ul>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Appliances