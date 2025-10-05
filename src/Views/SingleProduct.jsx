import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import '../App.css'


const SingleProduct = () => {
    const location = useLocation();
  const { item } = location.state;

  console.log('Yeh agaya',item);
  return (
    <Layout pageTitle={item.itemName ? item.itemName : 'Single Product Page'}>
        <div className='product-top'>
                 <div className='product-img'>
                     <img src={item.imageUrl} />
                 </div>
                 <div className='product-cont'>
                     <h1>{item.title}</h1>
                     <div className='product-price'>
                         <strong>${item.itemPrice}</strong>
                     </div>
                     <div className='product-rating'>
                         <strong>{item.restaurantName}</strong>
                     </div>
                     <p>{item.itemDescription}</p>
                     {/* <p className='product-cat'><span>Category: </span><strong>{item.category}</strong></p> */}
                 </div>
             </div>
    </Layout>
  )
}

export default SingleProduct;