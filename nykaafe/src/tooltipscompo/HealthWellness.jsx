import React from 'react'

function HealthWellness() {

  const HealthSupplements = ["Multivitamins", 'Calcium & Vitamin D', 'Magnesium & Zinc', 'Omega 3 & Fish Oil', 'Immunity Boosters & Vitamin C',
    'Other Supplements', 'Melatonin (Sleep Care)', 'Brain Boost', 'Eye Care (Lutein)', 'Gut Health']
  const BeautySupplements = ["Collagen", 'Biotin', 'Vitamin E', 'Glutathione', 'Other Beauty Supplement']

  const SportsNutrition = ['Whey Protein', 'Plant Protein', "BCAA & Other Muscle Support", "Protein & Energy Bars", "Protein Snacks", "Creatine", "L Glutamine",
    "Mass Gainer"]
  const WeightManagement = ["Weight Gain", "Apple Cider Vinegar (Weight Loss)", "Green Tea - Beverage", "Green Coffee - Beverage", "Fat Burner",
    "Slimming Shakes & Juices", "Sugar Substitutes"]

  const Hydration = ['Health Drinks']
  const HealthDrinks = ["Health Foods", "Edible Honey", "Dry Fruits, Nuts & Berries", "Edible Seeds", "Oils & Ghee", "Black Tea & Coffee", "Herbal Teas",
    "Breakfast Cereals", "Peanut Butter", "Other Health Foods"]
  const SportsFitness = ["Cardio Equipment", "Strength Training", "Fitness Accessories"]

  const WellnessEquipment = ["Weighing Scales", "Fitness", "Supports & Braces"]
  const PainRelief = ["Muscular & Ortho", "Period Cramps", "Other Pain"]
  const HealthWellnessKitsCombos = ["Health & Wellness Kits", "Health & Wellness Combos", "Pregnancy Kits"]
  const Watches = ["Smart Wearables"]

  const AyurvedaHerbs=["Ashwagandha","Neem (Powder & Tablets)","Amla Juice","Aloe Vera (Tablets & Juice)","Milk Thistle (Liver)",
    "Wheatgrass (Powder & Juice)","Tulsi (Tablets & Juices)","Giloy & Guduchi (Tablets & Juice)","Turmeric (Tablets & Juice)",
    "Spirulina & Moringa (Tablets & Powder)","Chyavanprash","Shilajit","Other Herbal Supplements"]
  
  const ShopByConcern=[ "Diabetes","Digestion (Gut Health)","Organs - Liver, Heart, Kidney","Safety & First Aid","Weakness & Vitality",
  "Kids Nutrition","Mental Wellness","Blood Pressure","Hormonal Balance","Calm & Sleep " ]



  return (
    <div>

      <div>
        <h1>Health Supplements</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              HealthSupplements.map((e) => {
                return (
                  <li>{e}</li>
                )
              })}
          </ul>
        </div>

        <h1>Beauty Supplements</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              BeautySupplements.map((e) => {
                return (
                  <li>{e}</li>
                )
              })}
          </ul>
        </div>

      </div>

      <div>
        <h1>Sports Nutrition</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              SportsNutrition.map((e) => {
                return (
                  <li>{e}</li>
                )
              })}
          </ul>
        </div>

        <h1>Weight Management</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              WeightManagement.map((e) => {
                return (
                  <li>{e}</li>
                )
              })}
          </ul>
        </div>

      </div>

      <div>
        <h1> Hydration</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              Hydration.map((e) => {
                return (
                  <li>{e}</li>
                )
              })}
          </ul>
        </div>

        <h1>Health Drinks</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              HealthDrinks.map((e) => {
                return (
                  <li>{e}</li>
                )
              })}
          </ul>
        </div>

        <h1>Sports & Fitness</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              SportsFitness.map((e) => {
                return (
                  <li>{e}</li>
                )
              })}
          </ul>
        </div>

      </div>

      <div>
        <h1>Wellness Equipment</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              WellnessEquipment.map((e) => {
                return (
                  <li>{e}</li>
                )
              })}
          </ul>
        </div>

        <h1>Pain Relief</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              PainRelief.map((e) => {
                return (
                  <li>{e}</li>
                )
              })}
          </ul>
        </div>

        <h1>Health Wellness Kits Combos</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              HealthWellnessKitsCombos.map((e) => {
                return (
                  <li>{e}</li>
                )
              })}
          </ul>
        </div>

        <h1>Watches</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              Watches.map((e) => {
                return (
                  <li>{e}</li>
                )
              })}
          </ul>
        </div>

      </div>

      <div>
        <h1>AyurvedaHerbs</h1>
        <div>
          <ul onClick={(e) => updateHeading(e)}>
            {
              AyurvedaHerbs.map((e) => {
                return (
                  <li>{e}</li>
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
              ShopByConcern.map((e) => {
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

export default HealthWellness