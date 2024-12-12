import React from 'react'
import { useNavigate } from 'react-router-dom';

function Men({ heading, setHeading }) {
  const navigate = useNavigate('')
  const updateHeading = (e) => {
      setHeading(e.target.textContent);
      localStorage.setItem('heading', JSON.stringify(heading));
      navigate('/sort');
  };
  const Shaving = ["Razors & cartridges", "Shavers", "Trimmers", "Shaving Creams", "Shaving Foams", "Shaving Gels", "Pre & Post Shaves",
    "Aftershave Lotion", "Shaving Brus"]

  const BeardCare = ["Beard Oil", "Beard Butter", "Beard Softener", "Beard Wash", "Beard Wax", "Moustache Oil", "Beard Comb", "Moustache Wax",
    'Beard Kits', "Beard Gel", "Beard Balm", "Beard Cream", "Beard Serum", "Beard Mist", "Beard Colour", "Beard Shampoo"]

  const HairCare = ["Shampoo", "Conditioner", "Hair Styling", "Hair Color", "Hair Oils", "Professional Products"]
  const Skincare = ["Face Wash", "Moisturizers", "Sunscreen", "Masks & Peels", "Scrubs & Exfoliators", 'Fairness']

  const BathBody = ['Bath/Shower Gels', "Soaps", "Body Scrubs", "Talc", "Dental Care", "Body Lotions", "Intimate Care"]
  const Fragrance = ["Deodorants/Roll Ons", "Colognes & Perfumes (EDT & EDP)", "Luxe Fragrances"]

  const ShopByConcern = ["Anti Dandruff", "Anti Hairfall", "Scalp Treatment", "Anti Acne", "Anti Ageing"]
  const Wellness = ["Sexual Wellness", "Health Supplements", "Weight Management", "Sports Nutrition "]

  return (
    <div>

      <div>
        <h1>Shaving</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              Shaving.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>
      </div>

      <div>
        <h1>Beard Care</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              BeardCare.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>
      </div>

      <div>
        <h1>Hair Care</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              HairCare.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>

        <h1>Skin Care</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              Skincare.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>
      </div>

      <div>
        <h1>BathBody</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              BathBody.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>

        <h1>Grooming Kits</h1>
        <h1>Fragrance</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              Skincare.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>
      </div>

      <div>
        <h1>Shop By Concern</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              ShopByConcern.map((e, index) => {
                return (
                  <li key={index}>{e}</li>
                )
              })}
          </ul>
        </div>

        <h1>Wellness</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              Wellness.map((e, index) => {
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

export default Men