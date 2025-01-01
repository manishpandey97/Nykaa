import React, { useEffect, useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Img1 from '../images/fragnaces.gif'
import Img2 from '../images/makeup.avif'
import Img3 from '../images/wonder.avif'
import E1 from '../images/ce1.avif'
import E2 from '../images/ce2.avif'
import E3 from '../images/ce3.avif'
import F1 from '../images/f1.avif'
import F2 from '../images/f2.avif'
import F3 from '../images/f3.avif'
import O1 from '../images/o1.avif'
import O2 from '../images/o2.avif'
import O3 from '../images/o3.avif'
import O4 from '../images/o4.avif'
import O5 from '../images/o5.avif'
import L1 from '../images/cl1.avif'
import L2 from '../images/cl2.avif'
import L3 from '../images/cl3.avif'
import S1 from '../images/s1.avif'
import S2 from '../images/s2.avif'
import G1 from '../images/g1.avif'
import G2 from '../images/g2.avif'
import G3 from '../images/g3.avif'
import G4 from '../images/g4.avif'
import G5 from '../images/g5.avif'
import './stylespages/Home.css'

function Home({ heading, setHeading }) {

  const token = localStorage.getItem('token')
  const [getShop, setGetShop] = useState([]);
  const [newArrival, setNewArrival] = useState([]);
  const [recommendProduct, setRecommendProduct] = useState([]);
  const navigate = useNavigate()



  const updateHeading = (textcontent) => {
    // console.log(textcontent)
    if (textcontent !== '') {
      setHeading(textcontent);
      localStorage.setItem('heading', JSON.stringify(heading));
      navigate('/sort');
    } else {
      navigate('/sort');
    }

  };

  const getShopby = async () => {
    try {
      const res =
        await fetch(`https://nykaa-7922.onrender.com/product?page=1&limit=3&sort=&order=&category=&brand_name=&minPrice=&maxPrice=`, {
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
        setGetShop(data.products);
      } else {
        console.error(res.status);
      }
    } catch (error) {
      console.log(`error`)
    }
  }

  const newArrivals = async () => {
    try {
      const res =
        await fetch(`https://nykaa-7922.onrender.com/product?page=1&limit=5&sort=createdAt&order=&category=&brand_name=&minPrice=&maxPrice=`, {
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
        setNewArrival(data.products);
      } else {
        console.error(res.status);
      }
    } catch (error) {
      console.log(`error`)
    }
  }

  const recommendProducts = async () => {
    try {
      const res =
        await fetch(`https://nykaa-7922.onrender.com/product?page=1&limit=5&sort=&order=&category=&brand_name=&minPrice=&maxPrice=`, {
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
        setRecommendProduct(data.products);
      } else {
        console.error(res.status);
      }
    } catch (error) {
      console.log(`error`)
    }
  }

  useEffect(() => {
    getShopby();
    newArrivals();
    recommendProducts();
  }, [])

  return (
    <div className='homepage'>

      <div className='product_offer' >
        <img src={Img1} alt='1' className="product-image"
          onClick={(e) => updateHeading("fragnaces")} />

        <img src={Img2} alt='2' className="product-image"
          onClick={(e) => updateHeading("makeup")}
        />

        <img src={Img3} alt='3' className="product-image"
          onClick={(e) => updateHeading("skin")}
        />


      </div>

      <div className='product_2' >
        <h2>Explore Our Top Brands</h2>
        <p>A-listers to obsess over</p>
        <div className='product_offer' >
          <div className="product-card">
            <img src={E1} alt='e1' onClick={(e) => updateHeading("Brands")} />
            <div className="product-title" style={{ textTransform: 'uppercase', fontWeight: '500' }}>
              <div>
                <h4>On ₹4000: 3 Gifts</h4>
                <p>Gift That Tilbury Feeling </p>
              </div>
              <div>
                <button>Shop Now <FaLongArrowAltRight /> </button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <img src={E2} alt='e2'
              onClick={(e) => updateHeading("brands")} />
            <div className="product-title" style={{ textTransform: 'uppercase', fontWeight: '500' }}>
              <div>
                <h4>Up To 35% Off</h4>
                <p>On Makeup Bestsellers!</p>
              </div>
              <div>
                <button>Shop Now <FaLongArrowAltRight /> </button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <img src={E3} alt='e3'
              onClick={(e) => updateHeading("Brands")} />
            <div className="product-title" style={{ textTransform: 'uppercase', fontWeight: '500' }}>
              <div>
                <h4>Upto 20% Off</h4>
                <p>Gift That Tilbury Feeling </p>
              </div>
              <div>
                <button>Shop Now <FaLongArrowAltRight /> </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='product_2'>
        <h2>Focus On:</h2>
        <p>Todays standout brands</p>

        <div className='product_offer' >
          <img src={F1} alt='1' className="product-image"
            onClick={(e) => updateHeading("skin")} />

          <img src={F2} alt='f2' className="product-image"
            onClick={(e) => updateHeading("skin")}
          />

          <img src={F3} alt='f3' className="product-image"
            onClick={(e) => updateHeading("skin")}
          />


        </div>
      </div>


      <div className='product_1'>
        <h2>On Our Radar</h2>
        <p>Best-in-show brands</p>

        <div className='product_offer1' >
          <img src={O1} alt='o1' className="product-image"
            onClick={(e) => updateHeading("natural")} />

          <img src={O2} alt='o2' className="product-image"
            onClick={(e) => updateHeading("natural")}
          />

          <img src={O3} alt='o3' className="product-image"
            onClick={(e) => updateHeading("natural")}
          />
          <img src={O4} alt='o4' className="product-image"
            onClick={(e) => updateHeading("natural")}
          />
          <img src={O5} alt='o5' className="product-image"
            onClick={(e) => updateHeading("natural")}
          />


        </div>
      </div>

      <div className='product_1'>
        <h2>Get Gifting</h2>
        <p>Pamper, delight & spoil your loved ones</p>
        <div className='product_offer3' >
          <img src={G1} alt='g1' className="product-image"
            onClick={(e) => updateHeading("fragnaces")} />

          <img src={G2} alt='g2' className="product-image"
            onClick={(e) => updateHeading("makeup")}
          />

          <img src={G3} alt='g2' className="product-image"
            onClick={(e) => updateHeading("makeup")}
          />
          <img src={G4} alt='g2' className="product-image"
            onClick={(e) => updateHeading("makeup")}
          />
          <img src={G5} alt='g2' className="product-image"
            onClick={(e) => updateHeading("makeup")}
          />


        </div>

      </div>

      <div className='product_1'>
        <h2>Steller Selections</h2>
        <p>Brands you absolutely  can't miss</p>
        <div className='product_offer' >
          <img src={S1} alt='s1' className="product-image"
            onClick={(e) => updateHeading("Mom & Baby")} />

          <img src={S2} alt='s2' className="product-image"
            onClick={(e) => updateHeading("Mom & Baby")}
          />


        </div>
      </div>

      <div className='product_1'>
        <h2>Lingerie & Accesories</h2>
        <p>Handpicked styles for you</p>

        <div className='product_offer' >
          <div className="product-card">
            <img src={L1} alt='l1' onClick={(e) => updateHeading("Lingerie Accesories")} />
            <div className="product-title" style={{ textTransform: 'uppercase', fontWeight: '500' }}>
              <div>
                <h4>Up to 70% Off</h4>
                <p>All Things Beyond Beauty</p>
              </div>
              <div>
                <button>Shop Now <FaLongArrowAltRight /> </button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <img src={L2} alt='cl2'
              onClick={(e) => updateHeading("Lingerie Accesories")} />
            <div className="product-title" style={{ textTransform: 'uppercase', fontWeight: '500' }}>
              <div>
                <h4>Up To 60% Off</h4>
              </div>
              <div>
                <button>Shop Now <FaLongArrowAltRight /> </button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <img src={L3} alt='cl3'
              onClick={(e) => updateHeading("Lingerie Accesories")} />
            <div className="product-title" style={{ textTransform: 'uppercase', fontWeight: '500' }}>
              <div>
                <h4>Upto 20% Off</h4>
                {/* <p>Gift That Tilbury Feeling </p> */}
              </div>
              <div>
                <button>Shop Now <FaLongArrowAltRight /> </button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home