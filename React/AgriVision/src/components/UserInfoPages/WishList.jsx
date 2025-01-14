import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from '../../Axios';
import Home from '../Home'
import ViewWishlist from './ViewWishlist'

function WishList() {
    
  const [data, setData] = useState([]); // Store fetched data in state

  // Fetch the data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios().get('/user/ViewAllWishlist'); // Replace with your actual API endpoint
        setData(response.data); // Set the fetched data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div >
      <Home />
      <div className="h-full w-screen flex flex-wrap">
      {data.map((item,index)=> 
      <ViewWishlist data={item} key={index} ind={index} />
      )}
    </div>
    </div>
  )
}

export default WishList
