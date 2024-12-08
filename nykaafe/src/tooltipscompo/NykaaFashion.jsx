import React from 'react'

function NykaaFashion() {
    const WhatNew = ["Recently Added "]
    const Women = ["Indianwear", "Westernwear", "Footwear", "Bags", "Lingerie", "Sportswear", "Sleep & Lounge", "Jewellery", "Watches"
        , "Accessories", "Global Store"]


    const Men = ["Topwear", "Bottomwear", "Ethnicwear", "Footwear", "Athleisure", "Innerwear & Sleepwear", "Watches", "Accessories"
        , "Bags"]
    const Kids = ["Westernwear", "Indianwear", "Footwear", "Toys & Games", "Feeding", "Sportswear", "Sleep & Lounge "]

    const Home = ["Kitchen & Dining", "Decor", "Bedding", "Bath", "Storage", "Floor Coverings", "Kitchen Appliances "]
    const HouseOfNykaa = ["Twenty Dresses By Nykaa Fashion", "RSVP By Nykaa Fashion", "Gajra Gang", "Nykd By Nykaa", "Pipa Bella",
        "IYKYK By Nykaa Fashion", "Kica", "Twig and Twine", "Likha by Nykaa Fashion", "Gloot"]

    const HouseOfNykaa1 = ["Nyri", "Azai By Nykaa Fashion", "MIXT", "Pariditi", "Lehan", "Gahan"]
    const TopBrands = ["Forever New"
        , "Cider", "Na-kd", "Vero Moda", "Autumnlane", "Puma", "Skechers", "FableStreet", "Biba", "W", "Shoetopia", "Levi's"]

    return (
        <div >

            <div>
                <h1>What's New</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            WhatNew.map((e) => {
                                return (
                                    <li>{e}</li>
                                )
                            })}
                    </ul>
                </div>

                <h1>Women</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            Women.map((e) => {
                                return (
                                    <li>{e}</li>
                                )
                            })}
                    </ul>
                </div>
            </div>

            <div>
                <h1>Men</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            Men.map((e) => {
                                return (
                                    <li>{e}</li>
                                )
                            })}
                    </ul>
                </div>

                <h1>Kids</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            Kids.map((e) => {
                                return (
                                    <li>{e}</li>
                                )
                            })}
                    </ul>
                </div>
            </div>


            <div>
                <h1>Home</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            Home.map((e) => {
                                return (
                                    <li>{e}</li>
                                )
                            })}
                    </ul>
                </div>

                <h1>House Of Nykaa</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            HouseOfNykaa.map((e) => {
                                return (
                                    <li>{e}</li>
                                )
                            })}
                    </ul>
                </div>
            </div>


            <div>
               
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            HouseOfNykaa1 .map((e) => {
                                return (
                                    <li>{e}</li>
                                )
                            })}
                    </ul>
                </div>
                <h1> Top Brands</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        {
                            HouseOfNykaa1 .map((e) => {
                                return (
                                    <li>{e}</li>
                                )
                            })}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default NykaaFashion