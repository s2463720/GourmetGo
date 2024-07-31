 import React from 'react'
 import './ExploreMenu.css'
 import { menu_list } from '../../assets/assets'

 const ExploreMenu = ({category,setCategory}) => {
   return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'> Welcome to our exclusive menu, where culinary excellence meets unparalleled taste. 
        Our carefully curated selection features a variety of delectable dishes crafted by top chefs, ensuring each bite is a delight to your senses. 
        From mouth-watering appetizers to exquisite main courses and indulgent desserts, every dish is prepared with the finest ingredients and meticulous
        attention to detail. Whether you crave the rich flavors of gourmet cuisine or the comforting taste of home-cooked meals, our menu promises a 
        delightful experience that will leave you craving for more. Discover the true essence of fine dining with every dish. </p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name? "All" :item.menu_name)}key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name? "active" : ""} src={item.menu_image} alt=""/>  
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
   )
 }
   
 export default ExploreMenu
 