import React from 'react'
import { useNavigate } from 'react-router-dom';

function Fragrance({ heading, setHeading }) {
  const navigate = useNavigate('')
  const updateHeading = (e) => {
      setHeading(e.target.textContent);
      localStorage.setItem('heading', JSON.stringify(heading));
      navigate('/sort');
  };

  const WomensFragrance = ["Perfumes (EDT / EDP)", "Body Mists / Sprays"]
  const MensFragrance = ["Perfumes (EDT / EDP)"]
  const ShopbyFragranceFamily = ["Earthy & Woody", "Floral", "Fresh & Aquatic", "Spicy & Warm", "Oud Collection", "Fruity"]

  const Aromatherapy = ["Candles", "Diffuser", 'Incense Sticks']

  const TopBrands = ["Dior", "Gucci", "Yves Saint Laurent", "Bvlgari", "Davidoff", "Versace", "Giorgio Armani", "Bella Vita organic"
    , "Plum", "Victoria Secret", "Bath and Body Works", "Nykaa Perfumery", "Renee", "Carlton London perfume", "Engage "]

  const PremiumandDesignerBrands = ["explore all", "Dior", "Hermès", "Jo Malone London", "Guerlain", "BVLGARI", "Salvatore Ferragamo"
    , "Calvin Klein", "Giorgio Armani", "Davidoff", "Paco Rabanne", "Carolina Herrera", "Yves Saint Laurent", "Elie Saab"]

  const DolceGabbana = ["DolceGabbana", "Narciso Rodriguez", "Hugo Boss", "Montblanc"]
  const QuickLinks = ["New Launches", "The Gift Store"]

  return (
    <div>

      <div>
        <h1>Womens Fragrance</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              WomensFragrance.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>

        <h1>Mens Fragrance</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              MensFragrance.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>

        <h1>Shop by Fragrance Family</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              ShopbyFragranceFamily.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>

      </div>

      <div>
        <h1>Aromatherapy</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              Aromatherapy.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>

        <h1>Giftsets & Combo</h1>

      </div>

      <div>
        <h1>TopBrands</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              TopBrands.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>
      </div>

      <div>
        <h1>Premium and Designer Brands</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              PremiumandDesignerBrands.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>
      </div>

      <div>

        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              DolceGabbana.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>

        <h1>Quick Links</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              QuickLinks.map((e, index) => {
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

export default Fragrance