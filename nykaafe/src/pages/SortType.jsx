import React, { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import PaginationComponent from '../components/PaginationComponent';
import { useNavigate } from 'react-router-dom';

function SortType() {
    const token = localStorage.getItem('token')
    const heading = JSON.parse(localStorage.getItem('heading'))
    const [productData, setProductData] = useState([]);
    const [expandedBrands, setExpandedBrands] = useState({});
    const [expandedCategory, setExpandedCategory] = useState({});
    const [expandedSubCategory, setExpandedSubCategory] = useState({});
    const [expandedColor, setExpandedColor] = useState({});
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    // const [color, setColor] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [sort, setSort] = useState('price');
    const [order, setOrder] = useState('desc');
    const [category, setCategory] = useState('');
    const [brandName, setBrandName] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500);
    const [totalPage, setTotalPage] = useState(0);
    const navigate = useNavigate()

    // console.log(productData)
    // console.log(token)


    const getAllProduct = async (page, limit, sort, order, category, brandName, minPrice, maxPrice) => {
        try {
            const res = await fetch(`https://nykaa-7922.onrender.com/product?page=${page}&
                limit=10&sort=${sort}&order=${order}&category=${category}&
                brand_name=${brandName}&minPrice=${minPrice}&maxPrice=${maxPrice}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                credentials: "include"

            })
            // console.log(res)
            if (res.ok) {
                const data = await res.json();
                // console.log("data", data);
                setProductData(data.products);
                setTotalPage(data.totalPages);
            } else {
                console.error(res.status);
            }
        } catch (error) {
            console.log(`error`)
        }
    }

    const handlePageClick = (page) => {
        if (page !== '') {
            setPage(page);
        }
    }

    const sortOrderFunc = (e) => {
        if (e.target.value !== '') {
            setOrder(e.target.value.split(" ")[0]);
            setSort(e.target.value.split(" ")[1]);
        }
    }

    const toggleBrand = (brand) => {

        if (brand !== '') {
            setExpandedBrands((prevState) => ({
                ...prevState,
                [brand]: !prevState[brand],
            }));
            setBrandName(brand);
        }
    };


    const toggleCategory = (brand) => {

        if (brand !== '') {
            setExpandedCategory((prevState) => ({
                ...prevState,
                [brand]: !prevState[brand],
            }));
            setCategory(brand);

        }
    };

    const toggleSubCategory = (brand) => {

        if (brand !== '') {
            setExpandedSubCategory((prevState) => ({
                ...prevState,
                [brand]: !prevState[brand],
            }));
            setSubcategory(brand);

        }
    };

    const toggleColor = (brand) => {

        if (brand !== '') {
            setExpandedColor((prevState) => ({
                ...prevState,
                [brand]: !prevState[brand],
            }));
            setColor(brand);

        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };



    useEffect(() => {
        getAllProduct(page, limit, sort, order, category, brandName, minPrice, maxPrice);
    }, [page, limit, sort, order, category, brandName, minPrice, maxPrice])


    const brands = ["A Big Indian Story", "A Clutch Story", "A Fragrance Story", "A'kin", "Aadita", "AANCHAL SAYAL", "AAPNO RAJASTHAN", "Aaranyaa", "Aaruvi Ruchi Verma"
        , "Aastey", "Aatmana", "Abdesigns", "ABELARDO DE MODA", "Abelino", "Abena", "Absorbia", "Accessher", "Accessorize London", "Ace Nutrimony", "ACE THE SPACE", "Acne Squad"];

    const categories = ["makeup", "skin", "hair", "appliances", "bathbody", "Natural", "Mom & Baby", "Health & Wellness",
        "Men", "Fragrance", "lingerieaccessories"]

    const subCategories = ["Face Primer", "Concealer", "Foundation", "Compact", "Contour", "Loose Powder", "Tinted Moisturizer", "Blush", "Bronzer", "BB & CC cream", "Highlighters",
        "Setting Spray", "Makeup Remover", "Sindoor", "Kajal", "Eyeliner", "Mascara", "Eye Shadow", "Eye Brow Enhancers", "Eye Primer", "False Eyelashes", "Eye Makeup Remover",
        "Under Eye Concealer", "Contact Lenses", "Makeup Kits", "Makeup Combos", "Lipstick", "liquid Lipstick", "Lip Crayon", "Lip Gloss", "Lip Liner", "Lip Plumper", "Lip Tint",
        "Nail Polish", "Nail Art Kits", "Nail Care", "Nail Polish Remover", "Face Brush", "Eye Brush", "Lip Brush", "Brush Sets", "Brush Cleaners", "Sponges & Applicators",
        "Eyelash Curlers", "Tweezers", "Sharpeners", "Mirrors", "Makeup Pouches", "Multi-Functional Makeup Palettes", "Kay Beauty", "Huda Beauty", "Charlotte Tilbury", "M.A.C",
        "Maybelline New York", "Lakme", "Nykaa Cosmetics", "Nyx Pro.Makeup", "Nude Lipstick", "Matte Lipstick", "Red Lipstick", "Pink Lipstick",
        
        "Face Moisturizer & Day Cream", "Night Cream", "Face Oils", "Serums & Essence", "All Purpose Gels/Creams", "Cleansers", "Face Wash", "Micellar Water", "Face Wipes",
        "Makeup Remover", "Scrubs & Exfoliators", "Toners Under 1000", "Face wash for Oily Skin", "Oil Free Face Moisturizers", "Lip Balm Under 500", "Vitamin C Serum", "Sheet Masks",
        "Sleeping Masks", "Masks & Peels", "Face Packs", "Face Bleach", "Toners & Mists", "Rose Water", "Lotions & Creams", "Body Butter", "Massage Oils", "Shower Gels & Body Wash",
        "Soaps", "Scrubs & Loofahs", "Bath Salts", "Hand Creams", "Foot Creams", "Hand & Foot Masks", "Acne Spot Correctors", "Nose Strips", "Facial Peels", "Under Eye Cream & Serums",
        "Eye Masks", "Lip Balm", "Lip Scrubs", "Lip Masks", "Face Sunscreen",
        "Body Sunscreen", "Facial Kits", "Face Massagers", "Cleansing Brushes", "Blackhead Remover",
        "Vitamins & Minerals", "Ayurvedic Herbs", "Neck Creams", "Acne", "Dull Skin", "Pigmentation", "Wrinkles & Fine Lines", "Pores", "Dark Spots",
        "Face Tan", "Oil Control", "Quick Links", "The Gift Store",

    "Shampoo", "Dry Shampoo", "Conditioner", "Hair Oil", "Hair Serum", "Hair Creams & Masks", "Hair Supplements",
        "Leave-in Conditioner", "Hair Brushes", "Hair Combs", "Dryers & Stylers", "Straighteners", "Rollers & Curlers", "Hair Extensions", "Hair Accessories",
        "Hair Color", "Hair Spray", "Gels & Waxes", "Straight", "Curly & Wavy", "Hairfall & Thinning", "Dandruff", "Dry & Frizzy Hair", "Split Ends", "Color Protection",
        "Damaged Hair", "Hair Growth", "Curl Enhancing", "Volume", "Length & Shine", "Bond Building", "Hair Kits", "Hair Combos", "Nykaa Naturals", "L'Oreal Paris",
        "Wella Professionals", "L'Oreal Professionnel", "BBlunt", "Herbal Essences", "Schwarzkopf Professional", "Hair Growth Oil", "Dandruff Shampoo",
        "Castor Oil For Hair", "Sulphate Free Shampoo", "Hair Straightener Brush", "The Beauty Ingredient Edit", "The Safe Beauty Edit",

    "Hair Dryers", "Straightening Brushes", "Curling Iron / Stylers", "Multi Stylers", "Blow Brushes", "Pro Hair Dryers", "Pro Straighteners",
        "Pro Curling Irons / Stylers", "Pro Multi Stylers", "Epilators", "Body Groomers", "Bikini Trimmers", "Shavers for Men", "Trimmers for Men", "Electric Toothbrushes"
        , "Electric Flossers", "Face Epilator", "Dermarollers", "Acne Removal", "FOREO", "Philips", "Alan Truman", "Dyson", "VEGA", "Braun", "Ikonic Professional", "Nova", "Flawless",
        "Combos @Nykaa", "Herbal Hair Care", "Routine Finder",

    "Body Scrubs & Exfoliants", "Soaps", "Body Lotions & Moisturizers", "Body Butters", "Talcum Powder", "Essential Oils", "Hand Wash", "Hand Creams & Masks"
        , "Foot Care", "Sanitary Napkins", "Menstrual Cups", "Tampons", "Pantyliners", "Period Panties", "Cotton Buds & Balls", "Other Period Essentials", "Body Razors & Cartridges",
        "Face & Eyebrow Razors", "Wax & Wax Strips", "Hair Removal Creams", "Epilators & Bikini Trimmers", "Pre & Post Wax Essentials", "Razors & Catridges", "Shaving Cream", "Foams & Gels",
        , "Pre & Post Shaves", "Shaving Brush", "Shavers & Trimmers", "Beard & Moustache Care", "Intimate Care", "Deodorants / Roll - ons", "Body Mist / Spray", "Colognes", "Toothpaste", "Manual Toothbrush"
        , "Mouthwash", "Floss & Tongue Cleaners", "Manicure Pedicure Kits", "Loofahs", "Bath Accessories", "Bath & Body Kits", "Bath & Body Combos", "Bath & Body Works", "mCaffeine", "NIVEA", "The Body Shop",
        "Vaseline", "Dove", "Wanderlust", "Gillette Venus", "Be Bodywise", "Plum BodyLovin", "Chemist at Play", "Lux", "Carmesi",
        "Daily Essentials", "Body Wash", "Body Lotions", "Face Razors for women", "Body Scrubs", "Deodorants",

    "Face Wash", "Cleanser", "Moisturizer", "Face Cream", "Face Mist", "Toner", "Face Oils", "Sunscreen", "Day Cream", "Under Eye Care", "Face Bleach", "Serums",
        "Sheet Masks", "Masks & Peels", "Scrubs & Exfoliators", "Face Tools", "Face Gel", "Bath Salts & Bath Bombs", "Hands & Feet Care", "Bath Tools & Accessories", "Oral Care",
        "Shampoo & Cleanser", "Hair Masks", "Tools & Accessories", "Massage Oils", "Carrier Oils", "Candles", "Diffuser", "Incense Sticks", "Lipstick", "Kajal",
        "Eyeliner", "Mascara", "Nail Polish", "Lip Balm & Gloss", "Foundation & Concealer", "Blush & Highlighter", "Tools & Brushes", "Tea Tree Oil",
        "Eucalyptus Oil", "Rosemary Oil", "Jojoba Oil", "Peppermint Oil", "Biotique", "Lotus Herbals", "The Body Shop", "Kama Ayurveda", "Forest Essentials",
        "Khadi Natural", "Himalaya", "VLCC", "Dry Skin", "Normal Skin", "Oily Skin", "Combination Skin", "Tan Removal", "Pigmentation",
        "Acne Treatment", "Skin Lightening", "Anti Aging", "Dark Circles", "Hairfall",

    "Body Wash & Soaps", "Baby Oil", "Hair Oil", "Baby Powder", "Shampoo & Conditioner", "Wipes & Buds", "Teeth & Dental Care", "Rash Cream", "Diapers", "Diaper Accessories",
        "Baby Grooming", "Baby Bedding", "Hair Care", "Dental Care", "Kids Makeup", "Stretch Mark Creams & Oils", "Breast Firming Gels & Creams", "Nipple Creams", "Nutritional Supplements",
        "Feeding Bottle & Nipples", "Teethers & Soothers", "Breast Pumps", "Breast Pads", "Cleaning & Feeding Accessories", "Bibs", "Sippers & Cups", "Nose & Ear Care", "Gripe Water & Tummy Roll On",
        "Detergents & Cleansers", "Handwash & Sanitizer", "Mosquito Repellent", "Maternity Bra", "Maternity Dress", "Maternity Tops", "Baby Dry Skin", "Cracked Nipple Cream", "Scalp Treatment",
        "Coconut Oil", "Almond Oil", "Heat Rash", "Body Toning & Firming", "Baby Skin Concerns",

    "Multivitamins", "Calcium & Vitamin D", "Magnesium & Zinc", "Omega 3 & Fish Oil", "Immunity Boosters & Vitamin C", "Melatonin (Sleep Care)", "Brain Boost", "Eye Care (Lutein)",
        "Gut Health", "Collagen", "Biotin", "Vitamin E", "Glutathione", "Other Beauty Supplements", "Whey Protein", "Plant Protein", "BCAA & Other Muscle Support", "Protein & Energy Bars", "Protein Snacks",
        "Creatine", "L Glutamine", "Mass Gainer", "Weight Gain", "Apple Cider Vinegar (Weight Loss)", "Green Tea - Beverage", "Green Coffee - Beverage", "Fat Burner", "Slimming Shakes & Juices",
        "Sugar Substitutes", "Health Drinks", "Edible Honey", "Dry Fruits, Nuts & Berries", "Edible Seeds", "Oils & Ghee", "Black Tea & Coffee", "Herbal Teas", "Breakfast Cereals", "Peanut Butter", "Other Health Foods",
        "Cardio Equipment", "Strength Training", "Fitness Accessories", "Weighing Scales", "Fitness", "Supports & Braces", "Muscular & Ortho", "Period Cramps", "Other Pain", "Health & Wellness Kits",
        "Health & Wellness Combos", "Pregnancy Kits", "Smart Wearables", "Ashwagandha", "Neem (Powder & Tablets)", "Amla Juice", "Aloe Vera (Tablets & Juice)", "Milk Thistle (Liver)", "Wheatgrass (Powder & Juice)",
        "Tulsi (Tablets & Juices)", "Giloy & Guduchi (Tablets & Juice)", "Turmeric (Tablets & Juice)", "Spirulina & Moringa (Tablets & Powder)", "Chyavanprash", "Shilajit", "Other Herbal Supplements",
        "Diabetes", "Digestion (Gut Health)", "Organs - Liver, Heart, Kidney", "Safety & First Aid", "Weakness & Vitality", "Kids Nutrition", "Mental Wellness", "Blood Pressure",
        "Hormonal Balance", "Calm & Sleep",

    "Razors & cartridges", "Shavers", "Trimmers", "Shaving Creams", "Shaving Foams", "Shaving Gels", "Pre & Post Shaves", "Aftershave Lotion", "Shaving Brushes", "Beard Oil",
        "Beard Butter", "Beard Softener", "Beard Wash", "Beard Wax", "Moustache Oil", "Beard Comb", "Moustache Wax", "Beard Kits", "Beard Gel", "Beard Balm", "Beard Cream", "Beard Serum", "Beard Mist",
        "Beard Colour", "Beard Shampoo", "Shampoo", "Conditioner", "Hair Styling", "Hair Color", "Hair Oils", "Professional Products", "Face Wash", "Moisturizers", "Sunscreen", "Masks & Peels",
        "Scrubs & Exfoliators", "Fairness", "Bath/Shower Gels", "Soaps", "Body Scrubs", "Talc", "Dental Care", "Body Lotions", "Intimate Care", "Deodorants/Roll Ons", "Colognes & Perfumes (EDT & EDP)",
        "Luxe Fragrances", "Anti Dandruff", "Anti Hairfall", "Scalp Treatment", "Anti Acne", "Anti Ageing", "Sexual Wellness", "Health Supplements", "Weight Management", "Sports Nutrition",
        "Beardo", "Gilette", "Livon", "Nivea", "Park Avenue", "Routine Finder", "The Gift Store",

    "Perfumes (EDT / EDP)", "Body Mists / Sprays", "Perfumes (EDT / EDP)", "Earthy & Woody", "Floral", "Fresh & Aquatic", "Spicy & Warm", "Oud Collection", "Fruity",
        "Aromatherapy", "Candles", "Diffuser", "Incense Sticks", "Dior", "Gucci", "Yves Saint Laurent", "Bvlgari", "Davidoff", "Versace", "Giorgio Armani", "Bella Vita organic", "Plum",
        "Victoria Secret", "Bath and Body Works", "Nykaa Perfumery", "Renee", "Carlton London perfume", "Engage", "explore all", "Dior", "Hermès", "Jo Malone London", "Guerlain", "BVLGARI",
        "Salvatore Ferragamo", "Calvin Klein", "Giorgio Armani", "Davidoff", "Paco Rabanne", "Carolina Herrera", "Yves Saint Laurent", "Elie Saab", "Dolce&Gabbana", "Narciso Rodriguez", "Hugo Boss",
        "Montblanc",

    "Bras", "Underwear", "Sleep & Lounge", "Shapewear", "Swimwear", "Maternity Wear", "Activewear", "Smart Watches & Activity Tracker", "Sling Bags", "Handbags", "Wallets & Card Cases", "Tote Bags",
        "Backpacks & Duffel Bags", "Satchels", "Clutches", "Laptop Bags", "Vanity Bags & Pouches", "Batuas & Potlis", "Sports shoes & Sneakers", "Sandals", "Heels", "Flats", "Flip Flops", "Wedges", "Boots", "Jutttis",
        "Kolhapuris", "Stilletos", "Loafers", "Earrings", "Necklaces", "Jewellery Sets", "Maang Tikka", "Bracelets & Bangles", "Rings", "Mangalsutra", "Anklets", "Decor", "Bedding", "Storage", "Home Essentials",
        "NYKD by Nykaa", "Puma", "Jockey", "Zivame", "Pipa Bella by Nykaa Fashion", "Accessorize London", "Shoetopia", "Twenty Dresses", "NFI Essentials", "Enamor", "Titan",
]
    const colors = ['Black', "White", "Blue", "Pink", "Brown", "Green", "Red"];
    const percentOff = ['80', '60', '40', '20', '10'];
    const price = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000']

    return (
        <>
            {
                productData.length === 0 ? (<div className="loader"></div>) : (
                    <div className='sort'>
                        <h1>{heading}</h1>
                        <div className='sort-content'>
                            <div className='sort-left'>
                                <h1>FILTER BY</h1>

                                <div className="brand-container">
                                    <div className="brand-header" onClick={toggleDropdown}>
                                        Brand {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </div>
                                    {isDropdownOpen && brands.map((brand) => (
                                        <div
                                            key={brand}
                                            className={`brand ${expandedBrands[brand] ? 'expanded' : ''}`}
                                            onClick={() => toggleBrand(brand)}>
                                            <input type="radio" id={brand} name="brand" value={brand} />
                                            <label htmlFor={brand}>{brand}</label>
                                        </div>
                                    ))}
                                </div>


                                <div className="brand-container">
                                    <div className="brand-header" onClick={toggleDropdown}>
                                        Category {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </div>
                                    {isDropdownOpen && categories.map((brand) => (
                                        <div
                                            key={brand}
                                            className={`brand ${expandedCategory[brand] ? 'expanded' : ''}`}
                                            onClick={() => toggleCategory(brand)}
                                        >
                                            <input type="radio" id={brand} name="brand" value={brand} />
                                            <label htmlFor={brand}>{brand}</label>
                                        </div>
                                    ))}
                                </div>

                                <div className="brand-container">
                                    <div className="brand-header" onClick={toggleDropdown}>
                                        Sub Category {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </div>
                                    {isDropdownOpen && subCategories.map((brand) => (
                                        <div
                                            key={brand}
                                            className={`brand ${expandedSubCategory[brand] ? 'expanded' : ''}`}
                                            onClick={() => toggleSubCategory(brand)}
                                        >
                                            <input type="radio" id={brand} name="brand" value={brand} />
                                            <label htmlFor={brand}>{brand}</label>
                                        </div>
                                    ))}
                                </div>

                                <div className="brand-container">
                                    <div className="brand-header" onClick={toggleDropdown}>
                                        Color{isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </div>
                                    {isDropdownOpen && colors.map((brand) => (
                                        <div
                                            key={brand}
                                            className={`brand ${expandedBrands[brand] ? 'expanded' : ''}`}
                                            onClick={() => toggleColor(brand)}
                                        >
                                            <input type="radio" id={brand} name="brand" value={brand} />
                                            <label htmlFor={brand}>{brand}</label>
                                        </div>
                                    ))}
                                </div>

                                {/* <div className="brand-container">
                            <div className="brand-header" onClick={toggleDropdown}>
                                Price{isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>
                            {isDropdownOpen && price.map((brand) => (
                                <div
                                    key={brand}
                                    className={`brand ${expandedBrands[brand] ? 'expanded' : ''}`}
                                    onClick={() => toggleBrand(brand)}
                                >
                                    <input type="checkbox" id={brand} name="brand" value={brand} />
                                    <label htmlFor={brand}>{`less than ${brand}`}</label>
                                </div>
                            ))}
                        </div> */}

                                {/* <div className="brand-container">
                            <div className="brand-header" onClick={toggleDropdown}>
                                Percent Off{isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>
                            {isDropdownOpen && percentOff.map((brand) => (
                                <div
                                    key={brand}
                                    className={`brand ${expandedBrands[brand] ? 'expanded' : ''}`}
                                    onClick={() => toggleBrand(brand)}
                                >
                                    <input type="checkbox" id={brand} name="brand" value={brand} />
                                    <label htmlFor={brand}>{`More than ${brand}%`}</label>
                                </div>
                            ))}
                        </div> */}

                            </div>

                            <div className='sort-right'>
                                <p style={{ float: 'left', width: "fitContent" }} >  SORT BY:
                                    <select name="" id="" onChange={(e) => sortOrderFunc(e)}>
                                        <option value="">Sort</option>
                                        <option value="asc price">PRICE LOW TO HIGH</option>
                                        <option value="desc price">PRICE HIGH TO LOW</option>
                                        <option value="asc createdAt">DATE OLD TO NEW</option>
                                        <option value="desc createdAt">DATE NEW TO OLD</option>
                                        <option value="asc discount">DISCOUNT LOW TO HIGH</option>
                                        <option value="desc discount">DISCOUNT HIGH TO LOW</option>
                                    </select>
                                </p>


                                <div className='sort-right-product'>
                                    <div className='product'  >
                                        {
                                            productData?.map((productH) => {
                                                return (
                                                    <div className="product-card" key={productH._id}
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() => navigate('/productdetail', { state: { productH } })}>
                                                        <img src={productH.image} alt={productH.title} className="product-image" />
                                                        <h3 className="product-title">{productH.title}</h3>
                                                        <p className="product-price">${productH.price}</p>
                                                        <button className="product-button">Add to Cart</button>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                </div>

                                <div className='pagination' >
                                    <PaginationComponent
                                        totalPages={totalPage}
                                        currentPage={page}
                                        onPageChange={handlePageClick}
                                    />
                                </div>

                            </div>

                        </div>
                    </div>
                )
            }
        </>
    )
}

export default SortType