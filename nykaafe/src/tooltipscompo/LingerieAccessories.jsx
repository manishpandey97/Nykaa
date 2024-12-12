import React from 'react'
import { useNavigate } from 'react-router-dom';

function LingerieAccessories({ heading, setHeading }) {

  const navigate = useNavigate('')
  const updateHeading = (e) => {
    setHeading(e.target.textContent);
    localStorage.setItem('heading', JSON.stringify(heading));
    navigate('/sort');
  };

  const Lingerie = ["Bras", "Underwear", "Sleep & Lounge", "Shapewear", "Swimwear", "Maternity Wear", "Activewear"]
  const Watches = ["Smart Watches & Activity Tracker"]

  const Bags = ["Sling Bags", "Handbags", "Wallets & Card Cases", "Tote Bags", "Backpacks & Duffel Bags", "Satchels", "Clutches",
    "Laptop Bags", "Vanity Bags & Pouches", "Batuas & Potlis"]

  const Footwear = ["Sports shoes & Sneakers", "Sandals", "Heels", "Flats", "Flip Flops", "Wedges", "Boots", "Jutttis", "Kolhapuris"
    , "Stilletos", "Loafers"]

  const Jewellery = ["Earrings", "Necklaces", "Jewellery Sets", "Maang Tikka", "Bracelets & Bangles", "Rings", "Mangalsutra",
    "Anklets"]

  const Home = ["Decor", "Bedding", "Bath", "Storage", "Home Essentia"]

  const FeaturedBrands = ["NYKD by Nykaa", "Puma", "Jockey", "Zivame", "Pipa Bella by Nykaa Fashion", "Accessorize London",
    "Shoetopia", "Twenty Dresses", "NFI Essentials", "Enamor", "Titan"]

  return (
    <div>

      <div>
        <h1>Lingerie</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              Lingerie.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>

        <h1>Watches</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              Watches.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>

      </div>

      <div>
        <h1>Bags</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              Bags.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>

      </div>

      <div>
        <h1>Footwear</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              Footwear.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>

      </div>

      <div>
        <h1>Jewellery </h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              Jewellery.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>

      </div>

      <div>
        <h1>Home </h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              Home.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>

      </div>

      <div>
        <h1>FeaturedBrands</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              FeaturedBrands.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>

      </div>

    </div>
  )
}

export default LingerieAccessories