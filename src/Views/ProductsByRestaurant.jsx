import React, { useEffect, useState } from 'react'
import { Link,useLocation } from 'react-router-dom'
import ProductList from '../Components/ProductsList/ProductsList'
import Layout from '../Components/Layout/Layout'

const ProductsByRestaurant = (props) => {

    const location = useLocation();
  const { item } = location.state;

  const [products, setProducts] = useState([])

  useEffect(() => {
      async function getProductsByRestaurant(){
          const url = `food-delivery-app-owais/api/Restaurant/${item.restaurantID}/menu`;
          try{
              const response = await fetch(url);
              const data = await response.json();
              console.log(data)
              setProducts(data)
            } catch(error){
                console.error('Error Aya', error)
            }
            
        }
        getProductsByRestaurant()
    }, [])

//   console.log('Yeh agaya',item);
  return (
    <Layout pageTitle={item.restaurantName ? item.restaurantName : 'Restaurant Name'}>
        <div className='products-list'>
        {products.map((item,index) => {
            return (
                <ProductList item={item} key={index} />
            )
        })}
        </div>
    </Layout>
  )
}

export default ProductsByRestaurant