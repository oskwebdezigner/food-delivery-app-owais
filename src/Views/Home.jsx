import React ,{useEffect, useState} from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout/Layout';
import RestaurantList from '../Components/RestaurantList/RestaurantList';
import Loader from '../Components/Loader/Loader';
import '../App.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import ProductsList from '../Components/ProductsList/ProductsList';

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [restaurant, setRestaurant] = useState([])
  const [allProducts, setAllProducts] = useState([])
  
  useEffect(() => {
    const allProductsUrl = '/api/Restaurant/items'
  async function getAllIProducts() {
    try{
      const response = await fetch(allProductsUrl);
      const data = await response.json();
      console.log(data)
      setAllProducts(data)
    }catch(error){
      console.log('Products Error', error)
    }
  }
  getAllIProducts()
  }, [])
  const restaurantUrl = '/api/Restaurant';
  useEffect(() => {
    
    async function getRestaurants(){

    try{
      const response = await fetch(restaurantUrl);
      const data = await response.json();
      console.log(data);
      setRestaurant(data)
      setLoading(false)
    } catch(error){
      console.error('No Restaurants', error)
    }

  }

  getRestaurants()

  }, []);
  
  
  return (
    <Layout pageTitle={'Food Delivery App'}>
       
      <div className='products-list all-products'>
          <div className='all-products-head'>
            <h2>Most Popular Items</h2>
            <div className='slider-btns-allProducts'>
              <div className="prev-btn">
                <svg className="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"></path></svg>
              </div>
              <div className="next-btn">
                <svg className="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"></path></svg>
              </div>
            </div>
          </div>
          {loading ? <Loader loadingText={'Loading Products'} /> :
          <Swiper modules={[Navigation, Autoplay]} spaceBetween={20} slidesPerView={4} loop={true} autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
        // navigation={true}
        >
            {allProducts.map((item,index) => {
              return(
                <SwiperSlide>
                  <ProductsList item={item} key={index} />
                </SwiperSlide>
              )
            })}
            
          </Swiper>
}
        </div>


      {loading ? <Loader loadingText={'Loading Restaurants'} /> : 
      <>
        <div className='all-products-head restaurant-sec'>
          <h2>All Restaurants</h2>
        </div>
        <div className='restaurant-list'>
          {restaurant.map((item, index) => {
            return(
              <RestaurantList item={item} key={index} />
            )
          })}
        </div>
      </>
        }

        
    </Layout>
  )
}

export default Home;