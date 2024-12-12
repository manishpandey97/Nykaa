import React, { useEffect, useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Img1 from '../images/fragnaces.gif'
import Img2 from '../images/makeup.avif'
import Img3 from '../images/wonder.avif'
import './stylespages/Home.css'

function Home({ heading, setHeading }) {

  const token = localStorage.getItem('token')
  const [getShop, setGetShop] = useState([]);
  const [newArrival, setNewArrival] = useState([]);
  const [recommendProduct, setRecommendProduct] = useState([]);
  const navigate = useNavigate()

  // console.log("getShop", getShop)
  // console.log("newArrival", newArrival)
  // console.log("recommendProduct", recommendProduct)

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
        <img src={Img1} alt='1' className="product-image" onClick={(e) => updateHeading("fragnaces")}
          style={{ cursor: "pointer", width: '30vw', objectFit: 'contain', borderRadius: '10px' }}
        />

        <img src={Img2} alt='2' className="product-image" onClick={(e) => updateHeading("makeup")}
          style={{ cursor: "pointer", width: '30vw', objectFit: 'contain', borderRadius: '10px' }}
        />

        <img src={Img3} alt='3' className="product-image" onClick={(e) => updateHeading("skin")}
          style={{ cursor: "pointer", width: '30vw', objectFit: 'contain', borderRadius: '10px' }}
        />


      </div>

      <div className='product_2' >
        <h2>Explore Our Top Brands</h2>
        <p>A-listers to obsess over</p>
        <div className='product'  >
          {
            getShop.length === 0 ? (<div className="loader"></div>) : (
              getShop?.map((productH) => {
                return (
                  <div className="product-card" key={productH._id}
                    onClick={(e) => updateHeading(productH.category)}>
                    <img src={productH.images} alt={productH.title}
                      className="product-image" />
                    <div className="product-title" style={{ textTransform: 'uppercase', fontWeight: '500' }}>
                      {productH.brand_name}
                      <button>Shop Now <FaLongArrowAltRight /> </button>
                    </div>
                  </div>
                )
              })
            )
          }
        </div>
      </div>

      <div className='product_2'>
        <h2>Focus On:</h2>
        <p>Todays standout brands</p>
        <div className='product1' >
          {
            newArrival.length === 0 ? (<div className="loader"></div>) : (
              newArrival?.map((productH) => {
                return (
                  <div className="product-card" key={productH._id}
                    onClick={(e) =>
                      updateHeading(productH.category)}
                  >
                    <img src={productH.images} alt={productH.title}
                      className="product-image"
                    />
                     <div className="product-title" style={{ textTransform: 'uppercase', fontWeight: '500' }}>
                      {productH.brand_name}
                      <button>Shop Now <FaLongArrowAltRight /> </button>
                    </div>
                  </div>
                )
              })
            )
          }
        </div>
      </div>

      <div className='product_3'>
        <h2>Focus On:</h2>
        <p>Todays standout brands</p>
        <div className='product1' >
          {
            newArrival.length === 0 ? (<div className="loader"></div>) : (
              newArrival?.map((productH) => {
                return (
                  <div className="product-card" key={productH._id}
                    onClick={(e) =>
                      updateHeading(productH.category)}
                  >
                    <img src={productH.images} alt={productH.title}
                      className="product-image"
                    // style={{ cursor: "pointer", width: '300px', height: '300px' }}
                    />
                     <div className="product-title" style={{ textTransform: 'uppercase', fontWeight: '500' }}>
                      {productH.brand_name}
                      <button>Shop Now <FaLongArrowAltRight /> </button>
                    </div>
                  </div>
                )
              })
            )
          }
        </div>
      </div>


      <div className='product_1'>
        <h2>On Our Radar</h2>
        <p>Best-in-show brands</p>
        <div className='product2'  >
          {
            recommendProduct.length === 0 ? (<div className="loader"></div>) : (
              recommendProduct?.map((productH) => {
                return (
                  <div className="product-card" key={productH._id}
                    onClick={(e) =>
                      updateHeading(productH.category)}
                  >
                    <img src={productH.images} alt={productH.title}
                      className="product-image"
                    // style={{ cursor: "pointer", width: '300px', height: '300px' }}
                    />
                     <div className="product-title" style={{ textTransform: 'uppercase', fontWeight: '500' }}>
                      {productH.brand_name}
                      <button>Shop Now <FaLongArrowAltRight /> </button>
                    </div>
                  </div>
                )
              })
            )
          }
        </div>
      </div>

      <div className='product_1'>
        <h2>Get Gifting</h2>
        <p>Pamper, delight & spoil your loved ones</p>
        <div className='product3'  >
          {
            recommendProduct.length === 0 ? (<div className="loader"></div>) : (
              recommendProduct?.map((productH) => {
                return (
                  <div className="product-card" key={productH._id}
                    onClick={(e) =>
                      updateHeading(productH.category)}
                  >
                    <img src={productH.images} alt={productH.title}
                      className="product-image"
                    // style={{ cursor: "pointer", width: '300px', height: '300px' }}
                    />
                    <div className="product-title" style={{ textTransform: 'uppercase', fontWeight: '500' }}>
                      {productH.brand_name}
                      <button>Shop Now <FaLongArrowAltRight /> </button>
                    </div>
                  </div>
                )
              })
            )
          }
        </div>
      </div>

      <div className='product_1'>
        <h2>Steller Selections</h2>
        <p>Brands you absolutely  can't miss</p>
        <div className='product2'  >
          {
            recommendProduct.length === 0 ? (<div className="loader"></div>) : (
              recommendProduct?.map((productH) => {
                return (
                  <div className="product-card" key={productH._id}
                    onClick={(e) =>
                      updateHeading(productH.category)}
                  >
                    <img src={productH.images} alt={productH.title}
                      className="product-image"
                    // style={{ cursor: "pointer", width: '300px', height: '300px' }}
                    />
                    <div className="product-title" style={{ textTransform: 'uppercase', fontWeight: '500' }}>
                      {productH.brand_name}
                      <button>Shop Now <FaLongArrowAltRight /> </button>
                    </div>
                  </div>
                )
              })
            )
          }
        </div>
      </div>

      <div className='product_1'>
        <h2>Lingerie & Accesories</h2>
        <p>Handpicked styles for you</p>
        <div className='product1'  >
          {
            recommendProduct.length === 0 ? (<div className="loader"></div>) : (
              recommendProduct?.map((productH) => {
                return (
                  <div className="product-card" key={productH._id}
                    onClick={(e) =>
                      updateHeading(productH.category)}
                  >
                    <img src={productH.images} alt={productH.title}
                      className="product-image"
                    // style={{ cursor: "pointer", width: '300px', height: '300px' }}
                    />
                    <div className="product-title" style={{ textTransform: 'uppercase', fontWeight: '500' }}>
                      {productH.brand_name}
                      <button>Shop Now <FaLongArrowAltRight /> </button>
                    </div>
                  </div>
                )
              })
            )
          }
        </div>
      </div>

    </div>
  )
}

export default Home