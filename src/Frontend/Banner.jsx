import React from 'react'
import car from '../Frontend/Assets/banner-car.jpg';
import billing from '../Frontend/Assets/billing.jpg';
import driver from '../Frontend/Assets/driver.webp';
import india from '../Frontend/Assets/india.jpg';
import '../Frontend/Style/Banner.css'
export const Banner = () => {
  return (
    <>
  <div className='headingbanner'>What Makes Us Unique?</div>
  <p className='servicepara'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo minus, numquam ut doloribus impedit at asperiores suscipit! Tempora perferendis iste sint sit vel eveniet itaque tempore. A sequi cupiditate labore?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore inventore natus, perspiciatis vero veniam pariatur, dolore cupiditate aliquam velit rem sed aperiam eveniet fugit! Quia corrupti reprehenderit minus fugiat ipsum?</p>
   <div className='bannerMain'>
   <div class="banner">
	<div class="shopping-image">
		<img src={car} alt="shopping" />
	</div>
	
	<div class="text">
		<h4>
			Clean and Hygienic Car
		</h4>
	</div>
</div>
<div class="banner">
	<div class="shopping-image">
		<img src={billing} alt="shopping" />
	</div>
	
	<div class="text">
		<h4>
			Transparent Billing
		</h4>
	</div>
</div>
<div class="banner">
	<div class="shopping-image">
		<img src={driver} alt="shopping" />
	</div>
	
	<div class="text">
		<h4>
			Export Chauffeurs
		</h4>
	</div>
</div>
<div class="banner">
	<div class="shopping-image">
		<img src={india} alt="shopping" />
	</div>
	
	<div class="text">
		<h4>
			2000+ cities
		</h4>
	</div>
</div>

   </div>
   </>
  )
}
